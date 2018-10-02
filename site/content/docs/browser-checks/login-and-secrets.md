---
title: Login scenarios and secrets
weight: 3
menu:
  docs:
    parent: "Browser Checks"
---

Login scenarios, where a user provides credentials to get access to a web app are extremely common. They are also
a great candidate for a browser check as they these site transactions tend to be very crucial. 

## Using Environment Variables

The code snippet below show how you can log into Github.

```js
const browser = await puppeteer.launch()
const page = await browser.newPage()
await page.goto('https://github.com/login')
await page.type('#login_field', 'johndoe@example.com')
await page.type('#password', 'mypasswd')
await page.click('[name="commit"]')
browser.close()
```

However, when creating browser checks, you probably run some code locally, store it in a Git repo or copy and paste it around
a bit. This means the credentials in the script are at risk of being exposed.

You should therefore **replace any confidential data in your browser check scripts with environment variables.**
For example, in the Github example the username and password are replaced with  `process.env.GITHUB_USER` and 
`process.env.GITHUB_PWD`. This uses the default Node.js syntax for exposing variables.

```js
const browser = await puppeteer.launch()
const page = await browser.newPage()
await page.goto('https://github.com/login')
await page.type('#login_field', process.env.GITHUB_USER)
await page.type('#password', process.env.GITHUB_PWD)
await page.click('[name="commit"]')
browser.close()
``` 

To run the browser check, add the environment variables to the check and save them. Any data you "lock" is store
encrypted at rest and in flight on our back end and is only decrypted when used.

![](/docs/images/browser-checks/environment_variables.png)

## Social Login

Authenticating via social login providers like Facebook, Google and Github can be a bit tricky to script because of the 
redirects involved. Also, many provider make their login pages "bot resistant" which makes scripting harder. The example 
below uses the Google social login option on the Checkly login page.

```js
const browser = await puppeteer.launch({ headless: false })
const page = await browser.newPage()

await page.setViewport({ width: 1280, height: 800 })
await page.goto('https://checklyhq.com/login')

const navigationPromise = page.waitForNavigation()

await page.waitForSelector('div > .social > .text-center > .login-google-button > span')
await page.click('div > .social > .text-center > .login-google-button > span')
await navigationPromise

await page.waitForSelector('input[type="email"]')
await page.type('input[type="email"]', process.env.GOOGLE_USER)
await page.click('#identifierNext')

await page.waitForSelector('input[type="password"]', { visible: true })
await page.type('input[type="password"]',process.env.GOOGLE_PWD)  

await page.waitForSelector('#passwordNext', { visible: true })
await page.click('#passwordNext')
await navigationPromise

await browser.close()
```

Note the following:

- We create a `navigationPromise` ahead of time and wait for this promise to resolve as we navigate from domain to domain.
- We of course store our credentials in environment variables.
- We use the `visible: true` option when waiting for the buttons and input fields to appear. The script fails otherwise.
