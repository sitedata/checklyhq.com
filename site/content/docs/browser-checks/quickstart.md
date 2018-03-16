---
title: Quickstart
weight: 1
lastmod: 2018-03-12
menu:
  docs:
    parent: "Browser Checks"
---

This quick start should give you all the info to create your first browser check with Checkly. You should have some prior
knowledge worker with Javascript and/or Node.js.

## What is a browser check?

A browser check is a Node.js script that starts up a Chrome browser, loads a web page and interacts with that web page.
The script validates assumptions you have about that web page, for instance:

- Is my shopping cart visible?
- Can users add products to the shopping cart?
- Can users log in to my app?

## How do I create a browser check?

You create these scripts by writing Node.js / Javascript code, leveraging three widely used libraries that each have a
specific function:

1. **[Mocha](https://mochajs.org/)**: Mocha is a widely used Javascript test runner. Mocha allows you to order and execute tests and collect 
the results of those tests.
3. **[Assert](https://nodejs.org/api/assert.html)**: The Assert library is built into Node.js and helps you assert (hey!) if things are true, false, more than, less
than etc. You use assert in combination with Mocha to validate the actual values in your test.
2. **[Puppeteer](https://github.com/GoogleChrome/puppeteer)**: Puppeteer is a Javascript framework that "talks" to a Google Chrome browser. You use the Puppeteer framework
to control the interactions you want to happen on a web page. 


