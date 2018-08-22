---
date: 2018-08-16T09:00:00+00:00
title: "Working on my State of Javascript"
author: "Tim Nolet"
avatar: "tnolet.jpg"
draft: true
tags: ["dev", "javascript", "chrome", "vue", "performance"]
publishdate: 2018-08-23
---


## My Lighthouse score

device: desktop
Audits: performance
Throttling: no throttling


## Bundle Size

- moment: ignore locales, 1.75MB -> 1.58MB (using Webpack ignore plugin)
- codemirror: move to VueCodeMirrorLite and include only the necessary modes & themes. 1.58MB -> 1.05MB 😮 
- lodash: replace the full library with the used functions: cloneDeep, find etc. 1.05Mb -> 1019.82KB
- bootstrap-vue: import only the modules needed: 1019.82KB -> 934.75KB

## Code Splitting

- Vue.js + Webpack
not just SFC, also components split in .js, css and html (or pug)

