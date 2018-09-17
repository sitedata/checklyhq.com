---
date: 2018-08-16T09:00:00+00:00
title: "How we got a 100% Lighthouse performance score for our Vue.js app"
author: "Tim Nolet"
avatar: "tnolet.jpg"
tags: ["dev", "javascript", "chrome", "vue", "performance"]
publishdate: 2018-08-23
featured_image: "https://checklyhq.com/blog/tunnel1.jpg"
---

![tunnel](/blog/tunnel1.jpg)
<small> "High Speed Tunnel" by Sekino Junichiro (late 20th century) - [Ukiyo.org](https://ukiyo-e.org/image/artelino/15177g1)</small>

Since launch, we didn't pay too much attention to the front end performance of the main Checkly web app. Shame on us. 
What better reason to dive into this than the publishing of the excellent [The Cost of Javascript in 2018](https://medium.com/@addyosmani/the-cost-of-javascript-in-2018-7d8950fbb5d4)
by Google's Addy Osmani?
 
TL;DR: it took about half a day to go from **an abysmal 34 to a 100 Lighthouse score** on our Vue.js app.

<!--more-->

## Very short primer on web app performance

The article by Osmani goes into why web/mobile performance is important, what Javascript has to do with it
and what concerns there are regarding mobile, device type, render cycles, loading etc. Read it if you are not familiar with 
these topics. The gist is:

1. Javascript is the most expensive part of your site performance wise. Not images, not CSS.
2. Faster sites increase revenue.
3. Optimizing javascript for performance is a multi-step, audience and device specific process. 
 
If you're hungry for more, hop over to [high performance browser networking](https://hpbn.co/) by Ilya Grigorik (also at Google) 
for some more in depth knowledge around this topic.

## Running Lighthouse

To get a handle on the current performance of the Checkly app, I ran [Lighthouse](https://developers.google.com/web/tools/lighthouse/) 
on the login screen. Lighthouse is a performance auditing tool embedded in every Chrome browser.

Admittedly, the login page is not where most users spend most of their time, but it is definitely the page everyone will
always have to deal with at least once.

Lighthouse ran with the following settings to optimize for the intended audience:

- **Device: desktop.** Mobile or tablet usage is not really a factor (yet?) for Checkly's current audience.
- **Audits: performance.** Other options are SEO, Accessibility etc. We are only interested in performance here.
- **Throttling: no throttling.** Checkly is a B2B, DevOps app. 99% of users will be using it in an office. 3G and 4G performance
is not really that important.

Note that the Device and Throttling settings *do* matter for the site and blog post you are reading right now. At least
25% of checklyhq.com visitors are on mobile.

We ran the test and the results speak for themselves. A score of 34. Lots of red letters and warning signs. Pretty terrible. 😞

![lighthouse score 1](/blog/cost1.png)

Some "highlights":

- The first meaningful paint takes over 6 seconds.
- The CPU is busy for a full second longer.

## First stop: bundle size

I had a nagging feeling that the amount of Javascript we were shipping was "sub optimal". Webpack has the great [Bundle Analyze](https://www.npmjs.com/package/webpack-bundle-analyzer) 
plugin that tells you exactly what you are packing (and shipping). A quick NPM install and a couple of lines in your Webpack
config and you're running:

```bash
npm i -D  webpack-bundle-analyzer
```

```javascript
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
...
  plugins: [
    new BundleAnalyzerPlugin()
    ]
...    
```

This will start up a browser after each build and show you something similar to this:

![webpack bundle size](/blog/cost2.png)

Yes. That is a total of 2.01MB of (uncompressed) javascript Checkly was shipping. A far cry from the 170KB compressed / 0.7MB uncompressed
that is adviced as a ball park figure in the Cost of Javascript article. 

Our Webpack setup is based on the settings introduced by Vue-CLI and splits code into **vendor**, **app** and **manifest** files as 
you can see in the screenshot above. This is a common practice and really helps with caching the vendor dependencies for a 
long time, while still enabling you to update your app on a regular basis.

We attacked the **vendor.js** file first.

###  Gutting moment.js: 1.75MB -> 1.58MB 

Moment.js is a great date and time handling library. It just ships with a full range of locale files. We use none in our app.
Sadly there is no way to optionally install them and it turns out [we are not the only ones slightly annoyed by this](https://github.com/moment/moment/issues/2416). 
We got rid of the locales using the built in Webpack Ignore plugin:

```javascript
  plugins: [
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
  ]
```  
### Gutting Codemirror: 1.58MB -> 1.05MB (!)
 
Codemirror is used on the browser check edit screen in the Checkly app. As with Moment.js, it ships with a whole bunch
of code styles and themes we we're not using. Lucky us, there was already a thin Vue.js wrapper for a slimmed down
Codemirror install called [VueCodeMirrorLite](https://github.com/cnu4/vue-codemirror-lite). After some minor code tweaks and
a separate install of the Monokai theme and Javascript code style we saved almost 0.5MB! 


### Removing full lodash: 1.05Mb -> 1019.82KB

A quick code scan showed we only used four methods of Lodash (`clonedeep` is gold). We ditched the full install and just
installed the methods we actually used. Kudos to the Lodash people for supporting this.

### Selective import of bootstrap-vue: 1019.82KB -> 934.75KB

Parts of the UI are using a Vue.js-ified version of Bootstrap called [Bootstrap Vue](https://bootstrap-vue.js.org/). By just 
importing the modules from the library we are using (modals, tooltips, navs etc.) we got the vendor.js bundle under 1MB 🎉 

## Second stop: Code Splitting

To attack the **app.js** file, we looked at code splitting. The idea of code splitting is that you serve the right amount
of javascript at the right moment using XHR calls. This means there is no big initial, up front cost to load the full application.
This should result in a quicker time to first paint and subsequent interaction.

[This great article](https://vuejsdevelopers.com/2017/07/03/vue-js-code-splitting-webpack/)
on code splitting in Vue.js describes the nitty gritty. The gist is:

1. You want to use components, "Single File" or not. (at Checkly we use separate `.pug` and `.scss` files)
2. You want to use Webpack. Read the mentioned article on how to set this up. If you use Vue-CLI for starting a Vue app, you
are already good.
3. You want to split by route. There are other options, but this is by far the most straightforward one and nicely mimics
traditional (non SPA) sites by requesting resources on page navigation.

I was happily surprised that literally the only changes need in our app were a list of import statements in our `router.js`
file. This might not work for everyone, but in the Checkly app, each route neatly maps to one master/container component

This:

```javascript
import Login from './components/authentication/login'
import Signup from './components/authentication/signup'
...
``` 
Becomes this:

```javascript
const Login = () => import('./components/authentication/login')
const Signup = () => import('./components/authentication/signup')
...
```

You are now effectively changing the standard `import from` statements into Webpack specific `import()` statements enabling the splitting
and asynchronous loading of your components. Your route assignment code doesn't even change:

```javascript
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    }
...
```

After rebuilding and reloading the app, it will seem as if nothing has changed. However, opening the Network tab in the Dev Tools
shows the nicely numbered javascript chunks flying over the network when navigating routes.

![flying js chunks](/blog/cost3.png)

## Running Lighthouse again

We were pretty happy with the bundle size reduction and how easy it was to implement code splitting. We were not prepared
for the huge impact it had. Running Lighthouse again — same settings as mentioned above — painted a totally different picture: 
A score of 100 and green text everywhere! Wow!

![lighthouse second run](/blog/cost4.png)


As mentioned, the login page is not the most exciting thing going on in the app. We ran the test on the home dashboard and check results
pages, which both contain a fair amount of XHR calls, data parsing and graph drawing.

**home dashboard**

![dash](/blog/cost5.png)

**check results**

![dash](/blog/cost6.png)

For both screens you can see that the "First CPU Idle" and "Time To Interactive" are roughly double that of the simple log
in screen, but still pretty OK according to Lighthouse.

## Conclusion

The optimizations above took about 4 to 6 hours to implement, test and roll out. Most of that time was spent on minor code
tweaks to optimize the modules and libraries used. Time well spent!

Just remember to work in iterations where you

1. Target an area.
2. Optimize.
3. Measure the results. 
4. GOTO 1.
