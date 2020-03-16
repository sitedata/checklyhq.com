---
title: Runner specification
weight: 9999
menu:
  docs:
    parent: "Browser checks"
---

All browser checks run in a sandboxed runtime environment on our cloud backend. You do not have full access to the Node.js
standard library or to arbitrary NPM modules. Currently every runner is equipped with the following libraries:

- **[node](https://nodejs.org/en/blog/release/v12.16.1/)** 12.16.1: The general Node.js execution environment.
- **[puppeteer](https://github.com/GoogleChrome/puppeteer)** 2.1.1: Framework for controlling browsers from Node.js.
- **[chromium](https://github.com/chromium/chromium/releases/tag/80.0.3987.0)** 80.0.3987.0 (r722234): Chrome browser used with puppeteer.
- **[chai](https://www.chaijs.com/)** 4.2.0: Popular assertion library.
- **[mocha](https://mochajs.org/)** 5.0.0: Popular test runner library.
- **[assert](https://nodejs.org/docs/latest-v8.x/api/assert.html)** 8.x: Built-in assertion function.
- **[moment](https://momentjs.com)** 2.22.2: Popular library for all things time related.
- **[axios](https://github.com/axios/axios)**  0.18.0: A modern HTTP library. Support async/await.
- **[crypto-js](https://github.com/brix/crypto-js)** 3.1.9: Cryptographic function library.
- **[lodash](https://lodash.com)** 4.14.11: Javascript toolkit for many object, array and other functions.
- **[aws4](https://github.com/mhart/aws4)** 1.8.0: Third-party library for easily signing AWS API requests.
