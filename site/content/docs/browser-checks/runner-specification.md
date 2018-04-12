---
title: Runner specification
weight: 9999
menu:
  docs:
    parent: "Browser Checks"
---

All browser checks are ran in a Docker container on our cloud backend. You do not have full access to the Node.js
standard library or to arbitrary NPM modules. Currently every runner is equipped with the following libraries:

- **Node** 8.x
- **Mocha** 5.0.0
- **Puppeteer** 1.2.0


