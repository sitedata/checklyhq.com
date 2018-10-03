---
title: Quickstart
weight: 1
aliases:
- "/docs/browser-checks/"
menu:
  docs:
    parent: "Browser Checks"
    identifier: quickstart-browser
---

This quick start should give you all the info to create your first browser check with Checkly. You should have some prior
knowledge working with Javascript and/or Node.js.

## What is a browser check?

The five lines of code below are already a valid browser check. Its usefulness might be not that great, but still...
 ```js
const puppeteer = require('puppeteer')
const browser = await puppeteer.launch()
const page = await browser.newPage()
await page.goto('https://checklyhq.com/')
await browser.close()
 ```
 
In essence, a browser check is a Node.js script that starts up a Chrome browser, loads a web page and interacts with that web page.
The script validates assumptions you have about that web page, for instance:

- Is my shopping cart visible?
- Can users add products to the shopping cart?
- Can users log in to my app?

Checkly uses the **[Google Chrome Puppeteer](https://github.com/GoogleChrome/puppeteer)** framework to drive these actions. 
Puppeteer is a Javascript framework that "talks" to a  Google Chrome browser. You use the Puppeteer framework to control the 
interactions you want to happen on a web page.

## Breaking down a browser check step-by-step

Let's look at a more real life example and break down each step. The code below logs into Checkly, waits for the dashboard
to fully load and then snaps a screenshot.

```js
const puppeteer = require('puppeteer') // 1
const browser = await puppeteer.launch()
const page = await browser.newPage()

await page.goto('https://app.checklyhq.com/login') // 2

await page.type('input[type="email"]', 'john@example.com') // 3
await page.type('input[type="password"]','mypassword')
await page.click('.btn.btn-success.btn-block')

await page.waitForSelector('.status-table') // 4
await page.screenshot({ path: 'checkly_dashboard.png' })
await browser.close()
```

**1. Initial declarations:** We first import the Puppeteer framework. We also declare a “browser” and a “page” variable.

**2. Initial navigation:** We use the `page.goto()` method to load the first page.

**3. Fill out input fields and submit:** Using the `page.type()` and `page.click()` methods we enter our email address and
password and click the login button. You would normally use environment variables here to keep sensitive data
out of your scripts. See [Login scenarios and secrets](/docs/browser-checks/login-and-secrets/) for more info.

**4. Wait for dashboard and close:** The expected behaviour is that the dashboard loads. In our case we can recognise this
by the correct loading of the `.status-table` element in the page. For a visual reference, we also take a screenshot.
We then close the browser. Our check is done.

## How do I create a browser check?

Every valid **[Puppeteer](https://github.com/GoogleChrome/puppeteer)** script is a valid browser check. You can create these scripts in two ways:

1. By using [Puppeteer Recorder](/puppeteer-recorder/) (our Chrome browser extension) to record a set of actions and generate the Puppeteer script automatically.
2. By writing the Node.js by hand. 

A combination of both is also very common, i.e. you record the basic interactions with Puppeteer Recorder and then tweak
the generated code with extra things like passwords, extra wait conditions and content checks.

In both cases, you can always **run and debug the script on your local machine** and tweak it to perfection before uploading it
to Checkly.


{{< info >}}  Every valid Puppeteer script is a valid browser check. If the script passes, your check passes. If the script fails, your check fails. {{< /info >}}


## How do I assert assumptions?

Navigating around your app or site can already give you a lot of confidence your critical business processes are working correctly.
However, many times you want to assert specific values on a page.

- After login, you want the user name to be displayed.
- On a dashboard, you want certain panels to be visible and filled with data.
- Submitting a form should return a specific value.

To do this, you can:

1. Use [Node's built in `assert`](https://nodejs.org/api/assert.html) function.
2. Use the popular [Chai.js](https://www.chaijs.com/) library of TDD and BDD assertions.

You can use as many assertions in your code as you want. For example, in the code below we scrape the text from the 
large button on the Checkly homepage and assert it in two ways.
 ```js
const puppeteer = require('puppeteer')
const assert = require('assert')
const expect = require('chai').expect

const browser = await puppeteer.launch()
const page = await browser.newPage()
await page.goto('https://checklyhq.com/')

// get the text of the button
const buttonText = await page.$eval('a.btn-lg', el => el.innerText)

// assert using built-in assert function
assert.equal(buttonText, 'Start your free trial') 
// assert using Chai's expect function
expect(buttonText).to.equal('Start your free trial') 

await browser.close()
 ```
Note the following:

- We use the `page.$eval()` method to grab the button element and get its innerText property.
- We use a basic `assert` and a Chai.js `expect` statement to verify the text is correct.

When an assertion fails, your check fails. Your check's result will show the log output for the error. Any configured 
alerting channels will be triggered, notifying your team that something is up.

![](/docs/images/browser-checks/failed_assertion.png)


## Next Steps

- Learn how to deal with [login scenarios and private data](/docs/browser-checks/login-and-secrets/).
- Install and use [Puppeteer Recorder](docs/puppeteer-recorder/overview/) to record scripts without coding.
- Learn more about [taking screenshots](/docs/browser-checks/screenshots/).

## More Puppeteer resources

- [checkly/puppeteer-examples](https://github.com/checkly/puppeteer-examples) is our Github repo with a ton of real life examples on how to use Puppeteer.
- [pptr.dev](https://pptr.dev/) is the official API documentation site for the Puppeteer framework.
- [awesome-puppeteer](https://github.com/transitive-bullshit/awesome-puppeteer) is a great Github repo full of Puppeteer related libraries, tips and resources.

{{< info >}} You can find a ton more Puppeteer and Mocha examples in the dedicated Github repo [checkly/puppeteer-examples](https://github.com/checkly/puppeteer-examples){{< /info >}}
