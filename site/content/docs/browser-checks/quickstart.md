---
title: Quickstart
weight: 1
aliases:
- "/docs/browser-checks/"
menu:
  docs:
    parent: "Browser Checks"
---

This quick start should give you all the info to create your first browser check with Checkly. You should have some prior
knowledge worker with Javascript and/or Node.js.

## What is a browser check?

A browser check is a Node.js script that starts up a Chrome browser, loads a web page and interacts with that web page.
The script validates assumptions you have about that web page, for instance:

- Is my shopping cart visible?
- Can users add products to the shopping cart?
- Can users log in to my app?

## How do I create a browser check?

You create these scripts by writing Node.js / Javascript code, leveraging three widely used libraries that each have a
specific function:

1. **[Mocha](https://mochajs.org/)**: Mocha is a widely used Javascript test runner. Mocha allows you to order and execute
 tests and collect the results of those tests.
3. **[Assert](https://nodejs.org/api/assert.html)**: The Assert library is built into Node.js and helps you assert (hey!) 
if things are true, false, more than, less than etc. You use assert in combination with Mocha to validate the actual 
values in your test.
2. **[Puppeteer](https://github.com/GoogleChrome/puppeteer)**: Puppeteer is a Javascript framework that "talks" to a 
Google Chrome browser. You use the Puppeteer framework to control the interactions you want to happen on a web page. 


## Run a script on your local machine

We've created a Github repo you can clone run from you local machine to get a feel for writing browser checks.
Clone the [checkly/browser-checks-starter](https://github.com/checkly/browser-checks-starter.git) repo and run the provided example. 

```bash
git clone https://github.com/checkly/browser-checks-starter.git
cd browser-checks-starter
npm install
mocha check_duckduckgo.js
```

The result should look something like this, if you are working on a Mac or on Linux.

{{< asciinema f3F570OMM20PnEFvSbttfFbTu >}}

## Analysing the browser check

The piece of code you just ran is a fully featured browser check. You can copy and paste it into Checkly and it would 
check the search results of Duck Duck Go search every x minutes.
Let's step through the code step by step

**1. Initial declarations:** We first import Assert and Puppeteer libraries. We also declare a "browser" and "page" variable
using "let".

```js
const assert = require('assert')
const puppeteer = require('puppeteer')

let browser
let page
```

**2. Before hook:** Inside the Mocha `before` hook, we launch a browser and a new browser page, which is like a normal browser
tab. We do this inside the `before` hook because we always want this initialization to happen before any checks are done.
Also notice the use of the async/await syntax.  

Almost everything in the Puppeteer framework is asynchronous: using this syntax saves us from using callbacks or promise chains.

```js
before(async () => {
  browser = await puppeteer.launch()
  page = await browser.newPage()
})
```
**3. Create a test suite and test case:** We create a Mocha test suite and test case using the `describe` and `it` syntax.
The `describe` is strictly speaking not necessary, but it helps us organise test cases if multiple tests belong together.

```js
describe('Duck Duck Go Search', () => {
  it('returns Chrome Puppeteer Github repo as first search result', async () => {
```
**4. Search for a term:** There's a lot going on here:

- We request the Duck Duck Go site and wait till the page is loaded and most network activity has died down. This is the 
extra `waitUntil` option.
- We type the sentence "chrome puppeteer" into the input box that has the HTML id attribute `search_form_input_homepage`
- Then we click on the button with the id `search_button_homepage`. This kicks of the search!
- Lastly, we wait until the results page has loaded and the element with id `r1-0` has loaded.

```js
    await page.goto('https://duckduckgo.com/', { waitUntil: 'networkidle2' })
    await page.type('input#search_form_input_homepage', 'chrome puppeteer', { delay: 50 })
    await page.click('input#search_button_homepage')
    await page.waitForSelector('.results--main #r1-0')
```

**5. Validate the results:** We now have a page with search results. To check if the results are as expected, we do two
things:

1. We parse the link from the first result using the `page.evaluate` function. This executes a piece of code in the context
of the results page. In this case we grab the first anchor tag `a` with CSS class `result__a`. We're interest in the contents
of that element. For good measure we trim off any leading or trailing spaces.
2. Using the assert function, we check if the link is what we expect it to be. If this fails, our check fails.

For good measure, we also take a screen shot of the current page. This always helps when debugging. 

```js
    const githubLink = await page.evaluate(() => document.querySelector('a.result__a').textContent.trim())
    assert(githubLink, 'https://github.com/GoogleChrome/puppeteer')
    await page.screenshot({ path: 'duckduckgo.png' })
  }).timeout(10000)
})
```
**6. After hook:** We clean up the browser in the Mocha `after` hook. This makes sure our checks ends the instant all test
cases are done.

```js
after(async () => {
  await browser.close()
})
```


{{< info >}} You can find a ton more Puppeteer and Mocha examples in the dedicated Github repo [checkly/puppeteer-examples](https://github.com/checkly/puppeteer-examples){{< /info >}}
