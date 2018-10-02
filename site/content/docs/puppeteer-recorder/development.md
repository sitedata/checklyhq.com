---
title: Development
weight: 4
menu:
  docs:
    parent: "Puppeteer Recorder"
---

Puppeteer recorder is a fairly recent addition to the Checkly arsenal of tools. 
It is under active development and new features are added on a monthly basis. You can [check the project on Github](https://github.com/checkly/puppeteer-recorder)
However, this means that not all DOM elements, browser interactions and events are all recorded at this stage.

## Bugs & Feature requests

- **Bugs:** If you find obvious bugs please file and issue on the [Github issue tracker](https://github.com/checkly/puppeteer-recorder/issues).  
- **Feature requests**: Similarly, if you have suggestion for a great feature, also file a request at the [Github issue tracker](https://github.com/checkly/puppeteer-recorder/issues).

## Recorded elements & events

If some events are not recorded, please check the source files for which elements and which events are now supported.


- [events](https://github.com/checkly/puppeteer-recorder/blob/master/src/code-generator/dom-events-to-record.js)
- [elements](https://github.com/checkly/puppeteer-recorder/blob/master/src/code-generator/elements-to-bind-to.js)
