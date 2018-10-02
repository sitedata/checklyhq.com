---
title: Puppeteer Recorder
weight: 6
aliases:
- "/puppeteer-recorder/"
menu:
  docs:
    parent: "Browser Checks"
---

Puppeteer recorder is a Chrome extension that records your browser interactions and generates a Puppeteer script. 
Use it to create Checkly browser checks without writing any code! Puppeteer recorder has the following functions:

- Records clicks and type events.
- Records form entries like dropdowns, radio buttons, checkboxes etc.
- Adds `waitForNavigation`, `setViewPort` and other useful clauses.
- Generates a Puppeteer script, ready for copy & pasting. 
- Shows which events are being recorded.
- Offers configuration options to tweak the generated code.

{{< youtube CDzwbm_b7Co >}}

## Installation

Click this button {{< webstore >}} to install Puppeteer Recorder.  

If that fails, just go to the [Chrome Webstore](https://chrome.google.com/webstore/detail/puppeteer-recorder/djeegiggegleadkkbgopoonhjimgehda)
and install it by hand as follows:

![](/docs/images/browser-checks/chrome-webstore.png)

1. Navigate to the [Chrome Webstore](https://chrome.google.com/webstore/detail/puppeteer-recorder/djeegiggegleadkkbgopoonhjimgehda) with your Chrome browser.
2. Click the "Add to Chrome" button. You will see a camera icon appear in your toolbar.
3. Clicking the camera icon will pop open Puppeteer Recorder.

![](/docs/images/browser-checks/puppeteer-recorder-installed.png)
 
## Basic usage

- Click the icon and hit Record.
- Hit <kbd>tab</kbd> after you finish typing in an `input` element.
- Click links, inputs and other elements.
- Wait for full page load on each navigation. The icon will switch from **rec** to **wait**.
- Click Pause when you want to navigate without recording anything. Hit Resume to continue recording. 


## Navigation


## Filling out forms

{{< youtube d_9HEmtv52E >}}

## Options



## Recorded elements & events
