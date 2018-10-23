---
title: Login scenarios
weight: 4
aliases:
- login-and-secrets
menu:
  docs:
    parent: "Browser Checks"
---

Scenarios where a user provides credentials to get access to a web app are extremely common. They are also
a great candidate for a browser check as these site transactions tend to be very crucial. 

## Username / password login

The code snippet below shows how you can log into Github.

```js
const browser = await puppeteer.launch()
const page = await browser.newPage()
await page.goto('https://github.com/login')
await page.type('#login_field', 'johndoe@example.com')
await page.type('#password', 'mypasswd')
await page.click('[name="commit"]')
browser.close()
```

However, notice we are hard coding the username and password into our script. That's never a good idea...
Better to replace them with some environment variables. Read more about [how to use environment variables in your browser checks.](/docs/browser-checks/variables/)

```js
const browser = await puppeteer.launch()
const page = await browser.newPage()
await page.goto('https://github.com/login')
await page.type('#login_field', process.env.GITHUB_USER)
await page.type('#password', process.env.GITHUB_PWD)
await page.click('[name="commit"]')
browser.close()
``` 

## Social Login

Authenticating via social login providers like Facebook, Google and Github can be a bit tricky to script because of the 
redirects involved. Also, many providers make their login pages "bot resistant" which makes scripting harder. The example 
below uses the Google social login option on the Checkly login page.

```js
const browser = await puppeteer.launch({ headless: false })
const page = await browser.newPage()

await page.setViewport({ width: 1280, height: 800 })
await page.goto('https://checklyhq.com/login')

const navigationPromise = page.waitForNavigation()

// Click Google login and wait for redirect
await page.waitForSelector('div > .social > .text-center > .login-google-button > span')
await page.click('div > .social > .text-center > .login-google-button > span')
await navigationPromise

// provide email address and click next
await page.waitForSelector('input[type="email"]')
await page.type('input[type="email"]', process.env.GOOGLE_USER)
await page.click('#identifierNext')

// provide password, click next and wait for redirect back to Checkly
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
