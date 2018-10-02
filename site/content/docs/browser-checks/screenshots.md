---
title: Taking screenshots
weight: 2
menu:
  docs:
    parent: "Browser Checks"
---

You can take up to three screenshots per browser check. This is really handy when debugging a failure situation or just
in general to get a comfy feeling everything is OK.  

Ad a screenshot anywhere by using the following syntax in your script
 
```js
await page.screenshot({ path: "my_screenshot.png" })
```
Screenshots will show up while editing your browser check in the editor on the "screenshots" tab and as part of the 
check results on every check run. You can download the full size screenshot by clicking on the thumbnail.

Screenshots need to stick to the following specs:

- Either `.png`, `jpeg` or `jpg` suffix
- Allowed characters are `a-z A-Z 0-9 - _ @` So no whitespaces in the filename.

![](/docs/images/browser-checks/screenshots.png)


Read more about the options for `page.screenshot()` like transparency, clipping and quality settings in 
[the official Puppeteer docs](https://pptr.dev/#?product=Puppeteer&show=api-pagescreenshotoptions)

## Full page screenshots

Puppeteer allows you to screen shot a full page, including the content below the fold. This is very handy for snap shotting
a long landing page or blog site. Just add the `fullPage: true`. Puppeteer will scroll and stitch the images together.

```js
await page.screenshot({ path: "my_screenshot.png", { fullPage: true } })
```

## Screenshots of specific elements

You can target any specific page element and generate a screenshot just of that part of the screen. You first need to 
grab the element with the `$` selector and then call the `screenshot` method on that element. 
```js
await page.goto('https://checklyhq.com/')
const element = await page.$('a.btn-lg')
await element.screenshot({ path: 'button.png' })
```
The code above snaps a picture of just the big call to action button on the Checkly homepage.

![](/docs/images/browser-checks/element_screenshot.png)
