---
title: Timeouts
weight: 6
menu:
  docs:
    parent: "Browser Checks"
---
## Dealing with timeouts

Setting correct timeout values can mean the difference between a good night's sleep or alerts bugging
you because your site or apps performance dropped by 500 milliseconds.

You can deal with timeouts at two levels and we recommend you study them in the order below:

1. Use the timeout options in Puppeteer.
2. Set global timeouts on the Mocha suite and test level.

> Tip: Good use of the Puppteer `page.waitForSelector()` can save you a lot of headaches.

## Timeouts in Puppeteer

In your Puppeteer code, you have a range of options to set timeouts for different actions. The default for most actions
is 30 seconds. There are two very important ones that you should use in almost every browser check:

### page.waitForSelector()

This method waits for an element to appear in the page. This is your bread and butter and should be used whenever something
needs to be loaded after clicking, hovering, navigating etc. You can pass it an options object with a timeout attribute
to override the default 30 seconds.

In the example below, we type 'fluffy kittens' into an input field on a search page and click "submit". We then use the
`page.waitForSelector()` method and pass in a timeout of 5 seconds because we want this check to fail if it takes any longer.
You can also see we assign a 10 second timeout to the surrounding Mocha test.

```javascript
  it('First search result is my link', async () => {
    await page.type('input[name=q]', 'fluffy kittens')
    await page.click('input[type="submit"]')
    await page.waitForSelector('h3 a', { timeout: 5000 })
    const links = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('h3 a'))
        .map(a => { return a.textContent })
    })
    assert.equal('my link', links[0])
  }).timeout(10000)
```

This works exactly the same for the `page.waitForXpath()` function is you are using Xpath selectors instead of CSS selectors.

[Read more in the Puppeteer API docs](https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#framewaitforselectorselector-options)

### page.waitForNavigation()

In your Puppeteer script you can click on a link that triggers a navigation to a new page. Use Puppeteer's `page.waitForNavigation()`
method, although it is slightly unintuitive to use as the associated promise has to be initialized before waiting for it.
This means the following **will not work**

```javascript
await page.click('a.some-link')
await page.waitForNavigation() // does not works as expected
```

but this will work

```javascript
const navigationPromise =  page.waitForNavigation()
await page.click('a.some-link')
await navigationPromise
```


But this will work

[Reed more in the Puppeteer API docs](https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#pagewaitfornavigationoptions)

### page.setDefaultNavigationTimeout(timeout)

You can tweak the navigation timeout with `page.setDefaultNavigationTimeout()`. This impact the timeout limits of the
initial load of your page or app and all subsequent navigation.

[Read more in the Puppeteer API docs](https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#pagesetdefaultnavigationtimeouttimeout)

### page.waitFor(timeout)

Some pages can be finicky because of animations or some non-linear behaviour or dynamic content. This method allows you
to "just wait" for a set amount of time. The example below passes in a number. The result is the test will wait for five
seconds.

```javascript
await page.waitFor(5000)
```

## Timeouts in Mocha

> Default: 2 sec

At the highest level, you can set timeout values in your Mocha code. These timeouts are enforced regardless of what
happens in the Chromium browser started by Puppeteer. For Checkly checks, we recommend using timeout values
on each test. In the example below, we added a `.timeout(10000)` to the `it` function. The default timeout of 2 seconds
is almost always too short to run any meaningful check.

```javascript
describe('Check Google Homepage', () => {
  it('has title "Google"', async () => {
    await page.goto('https://google.com', { waitUntil: 'networkidle2' })
    const title = await page.title()
    assert.equal(title, 'Google')
  }).timeout(10000)
})
```

This means this test will fail if it does not resolve within 10 seconds. You can also add a timeout at the suite level,
however the syntax is a bit different if you want to use arrow functions: you have to pass in the `suite` and then set
the timeout on that object.

```javascript
describe('Check Google Homepage', (suite) => {
  suite.timeout(10000)
  it('has title "Google"', async () => {
    await page.goto('https://google.com', { waitUntil: 'networkidle2' })
    const title = await page.title()
    assert.equal(title, 'Google')
  })
})
```

[Read more on the Mocha site](https://mochajs.org/#timeouts) and in this [enlightening Github issue](https://github.com/mochajs/mocha/issues/2018)
