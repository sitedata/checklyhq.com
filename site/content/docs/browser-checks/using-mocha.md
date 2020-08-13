---
title: Using Mocha with Puppeteer
weight: 8
menu:
  docs:
    parent: "Browser checks"
---

To add more structure to your browser check, you can use the **[Mocha](https://mochajs.org/)** testing framework in combination
with Puppeteer. Mocha is a widely used Javascript test runner. Mocha allows you to order and execute tests and collect the results of those tests.
 
## Run an example script on your local machine
 
 We've created a GitHub repository with example Puppeteer scripts including a few using Mocha that you can directly run from your local machine to get a better feel for writing browser checks. 

 Clone the [checkly/puppeteer-examples](https://github.com/checkly/puppeteer-examples) repository and run the provided examples. In this guide, we are going to explain how to search on DuckDuckGo and take screenshot. You can find other Mocha examples [here](https://github.com/checkly/puppeteer-examples#a-mocha-tests).
 
 ```bash
 git clone https://github.com/checkly/puppeteer-examples.git
 cd puppeteer-examples
 npm install
 cd "a. mocha-tests/"
 npx mocha duck_duck_go.js
 ```
 
 The result should look something like this, if you are working on a Mac or on Linux.
 
 {{< asciinema 352938 >}}
 
## Breaking down the Mocha browser check step-by-step
 
 The piece of code you just ran is a fully featured browser check. You can copy and paste it into Checkly and it would 
 check the search results of Duck Duck Go search every x minutes.
 Let's step through the code step by step
 
 **1. Initial declarations:** We first import Assert and Puppeteer libraries. We also create a Mocha test suite and test suite using the `describe` method.
 
 ```js
 const assert = require('assert')
 const puppeteer = require('puppeteer')
 
 describe('Duck Duck Go Search', () => {
 ```
 
 **2. Before hook:** Inside the Mocha `describe` method, we use the `before` hook to launch a browser and a new browser page, which is like a normal browser tab. We do this inside the `before` hook because we always want this initialization to happen before any checks are done.
 Also notice the use of the async/await syntax and the way we declare a "browser" and "page" variable
 using "let" just before the hook.
 
 Almost everything in the Puppeteer framework is asynchronous: using this syntax saves us from using callbacks or promise chains.
 
 ```js
 let browser
 let page

 before(async () => {
   browser = await puppeteer.launch()
   page = await browser.newPage()
 })
 ```
 **3. Create a test case:** We create a Mocha test case using the `describe` and `it` syntax.
 
 ```js
 describe('Duck Duck Go Search', () => {
   ...
   before(async () => {
     ...
   })

   it('returns Chrome Puppeteer GitHub repo as first search result', async () => {
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
