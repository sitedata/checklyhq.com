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


![](/docs/images/browser-checks/screenshots.png)
