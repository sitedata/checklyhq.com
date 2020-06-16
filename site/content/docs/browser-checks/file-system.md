---
title: Using the file system
weight: 3
menu:
  docs:
    parent: "Browser checks"
---

Checkly creates a sandboxed directory for each check. During the check you can use this directory to save or upload artifacts. This directory is destroyed after a check is finished.

Due to this sandbox, certain nodejs variables are adapted to our platform and have values we set for them:
* `__dirname` will have the value of `/`
* `__filename` will have the value of `/script.js`

The values these variables correspond to might change in the future. Therefore, we recommend using `__dirname`, like `path.join(__dirname, 'example.png')` or relative paths, like `./example.png` or just `example.png`, while using the FS related operation. You can find an example code snipped below:

```javascript
const path = require('path');
const fs = require('fs');
const puppeteer = require("puppeteer");

const browser = await puppeteer.launch();
const page = await browser.newPage();
const image = await page.goto('https://picsum.photos/200/300');
const imagePath = path.join(__dirname, 'example.jpg')
const buffer = await image.buffer()
fs.writeFileSync(imagePath, buffer)
const readFileFromDisk = await fs.readFileSync(imagePath)
await browser.close();
```