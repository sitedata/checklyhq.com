---
date: 2018-12-10T09:00:00+00:00
title: "Node.js API and Web Frameworks for 2019"
author: "Tim Nolet"
avatar: "tnolet.jpg"
tags: ["dev", "javascript", "Node", "frameworks"]
publishdate: 2018-12-10
featured_image: "https://checklyhq.com/blog/newyear1.jpg"
description: "We list the popular & trending Node.js API and web frameworks for 2019 based on **Github stars**, dependencies, language features, security and sponsorship status."
---

![newyear](/blog/newyear1.jpg)
<small> "Sunrise on New Year’s Day at Susaki" by Utagawa Hiroshigw (1853) - [Museum of Fine Arts Boston](https://www.mfa.org/collections/object/sunrise-on-new-years-day-at-susaki-susaki-hatsu-hinode-from-the-series-famous-places-in-edo-edo-meisho-202200)</small>

2018 was an interesting year for Node.js frameworks and open source software in general. Developer communities discussed
the role of corporate sponsorship and how to maintain a project used by millions but not supported financially.

Similarly, security concerns were top of mind with some popular Node / JS packages [being hijacked](https://github.com/bitpay/copay/issues/9346) and
[Github launching their security alerts feature](https://blog.github.com/2017-11-16-introducing-security-alerts-on-github/) for projects hosted
on their site.

That is why in this Node.js framework roundup we have categories on **sponsorship**, **donations** and **NPM audit vulnerabilities**
to give better insight into how each of the frameworks listed tackles these issues. Frameworks are evaluated alphabetically.

<!--more-->

{{< page-toc >}}


## Charts & graphs

### Github stars

Sails, Koa and Express are clearly head and shoulders above the rest with regard to Github stars. But the total amount of
stars is maybe not the clearest indicator of relevancy in 2019. For that we need to look at the growth.

<svg width="730" height="300" xmlns="http://www.w3.org/2000/svg"><g transform="translate(40,0)"><text x="-40" y="-7" style="font-size: 10px; font-family: Arial, Helvetica;">undefined</text><g class="y axis" transform="translate(0,0)" fill="none" font-size="10" font-family="sans-serif" text-anchor="end" style="font-size: 10px; font-family: Arial, Helvetica;"><path class="domain" stroke="#000" d="M-6,250.5H0.5V0.5H-6" style="shape-rendering: crispedges; fill: none; stroke: rgb(204, 204, 204);"></path><g class="tick" opacity="1" transform="translate(0,250.5)"><line stroke="#000" x2="-6" style="shape-rendering: crispedges; fill: none; stroke: rgb(204, 204, 204);"></line><text fill="#000" x="-9" dy="0.32em">0</text></g><g class="tick" opacity="1" transform="translate(0,238.4276625540237)"><line stroke="#000" x2="-6" style="shape-rendering: crispedges; fill: none; stroke: rgb(204, 204, 204);"></line><text fill="#000" x="-9" dy="0.32em">2,000</text></g><g class="tick" opacity="1" transform="translate(0,226.35532510804742)"><line stroke="#000" x2="-6" style="shape-rendering: crispedges; fill: none; stroke: rgb(204, 204, 204);"></line><text fill="#000" x="-9" dy="0.32em">4,000</text></g><g class="tick" opacity="1" transform="translate(0,214.28298766207112)"><line stroke="#000" x2="-6" style="shape-rendering: crispedges; fill: none; stroke: rgb(204, 204, 204);"></line><text fill="#000" x="-9" dy="0.32em">6,000</text></g><g class="tick" opacity="1" transform="translate(0,202.21065021609485)"><line stroke="#000" x2="-6" style="shape-rendering: crispedges; fill: none; stroke: rgb(204, 204, 204);"></line><text fill="#000" x="-9" dy="0.32em">8,000</text></g><g class="tick" opacity="1" transform="translate(0,190.13831277011855)"><line stroke="#000" x2="-6" style="shape-rendering: crispedges; fill: none; stroke: rgb(204, 204, 204);"></line><text fill="#000" x="-9" dy="0.32em">10,000</text></g><g class="tick" opacity="1" transform="translate(0,178.06597532414224)"><line stroke="#000" x2="-6" style="shape-rendering: crispedges; fill: none; stroke: rgb(204, 204, 204);"></line><text fill="#000" x="-9" dy="0.32em">12,000</text></g><g class="tick" opacity="1" transform="translate(0,165.99363787816597)"><line stroke="#000" x2="-6" style="shape-rendering: crispedges; fill: none; stroke: rgb(204, 204, 204);"></line><text fill="#000" x="-9" dy="0.32em">14,000</text></g><g class="tick" opacity="1" transform="translate(0,153.9213004321897)"><line stroke="#000" x2="-6" style="shape-rendering: crispedges; fill: none; stroke: rgb(204, 204, 204);"></line><text fill="#000" x="-9" dy="0.32em">16,000</text></g><g class="tick" opacity="1" transform="translate(0,141.8489629862134)"><line stroke="#000" x2="-6" style="shape-rendering: crispedges; fill: none; stroke: rgb(204, 204, 204);"></line><text fill="#000" x="-9" dy="0.32em">18,000</text></g><g class="tick" opacity="1" transform="translate(0,129.7766255402371)"><line stroke="#000" x2="-6" style="shape-rendering: crispedges; fill: none; stroke: rgb(204, 204, 204);"></line><text fill="#000" x="-9" dy="0.32em">20,000</text></g><g class="tick" opacity="1" transform="translate(0,117.70428809426082)"><line stroke="#000" x2="-6" style="shape-rendering: crispedges; fill: none; stroke: rgb(204, 204, 204);"></line><text fill="#000" x="-9" dy="0.32em">22,000</text></g><g class="tick" opacity="1" transform="translate(0,105.63195064828452)"><line stroke="#000" x2="-6" style="shape-rendering: crispedges; fill: none; stroke: rgb(204, 204, 204);"></line><text fill="#000" x="-9" dy="0.32em">24,000</text></g><g class="tick" opacity="1" transform="translate(0,93.55961320230824)"><line stroke="#000" x2="-6" style="shape-rendering: crispedges; fill: none; stroke: rgb(204, 204, 204);"></line><text fill="#000" x="-9" dy="0.32em">26,000</text></g><g class="tick" opacity="1" transform="translate(0,81.48727575633194)"><line stroke="#000" x2="-6" style="shape-rendering: crispedges; fill: none; stroke: rgb(204, 204, 204);"></line><text fill="#000" x="-9" dy="0.32em">28,000</text></g><g class="tick" opacity="1" transform="translate(0,69.41493831035564)"><line stroke="#000" x2="-6" style="shape-rendering: crispedges; fill: none; stroke: rgb(204, 204, 204);"></line><text fill="#000" x="-9" dy="0.32em">30,000</text></g><g class="tick" opacity="1" transform="translate(0,57.342600864379364)"><line stroke="#000" x2="-6" style="shape-rendering: crispedges; fill: none; stroke: rgb(204, 204, 204);"></line><text fill="#000" x="-9" dy="0.32em">32,000</text></g><g class="tick" opacity="1" transform="translate(0,45.27026341840306)"><line stroke="#000" x2="-6" style="shape-rendering: crispedges; fill: none; stroke: rgb(204, 204, 204);"></line><text fill="#000" x="-9" dy="0.32em">34,000</text></g><g class="tick" opacity="1" transform="translate(0,33.19792597242679)"><line stroke="#000" x2="-6" style="shape-rendering: crispedges; fill: none; stroke: rgb(204, 204, 204);"></line><text fill="#000" x="-9" dy="0.32em">36,000</text></g><g class="tick" opacity="1" transform="translate(0,21.125588526450485)"><line stroke="#000" x2="-6" style="shape-rendering: crispedges; fill: none; stroke: rgb(204, 204, 204);"></line><text fill="#000" x="-9" dy="0.32em">38,000</text></g><g class="tick" opacity="1" transform="translate(0,9.053251080474183)"><line stroke="#000" x2="-6" style="shape-rendering: crispedges; fill: none; stroke: rgb(204, 204, 204);"></line><text fill="#000" x="-9" dy="0.32em">40,000</text></g></g><rect transform="translate(0,0)" class="bar" x="11" width="68" y="218.64210348407659" height="31.357896515923414" style="fill: rgb(191, 105, 105);"></rect><rect transform="translate(0,0)" class="bar" x="86" width="68" y="0" height="250" style="fill: rgb(191, 162, 105);"></rect><rect transform="translate(0,0)" class="bar" x="161" width="68" y="196.27206219668253" height="53.727937803317474" style="fill: rgb(162, 191, 105);"></rect><rect transform="translate(0,0)" class="bar" x="236" width="68" y="186.7107709394693" height="63.28922906053069" style="fill: rgb(105, 191, 105);"></rect><rect transform="translate(0,0)" class="bar" x="311" width="68" y="104.10580196537651" height="145.89419803462349" style="fill: rgb(105, 191, 162);"></rect><rect transform="translate(0,0)" class="bar" x="386" width="68" y="185.21983726489123" height="64.78016273510877" style="fill: rgb(105, 162, 191);"></rect><rect transform="translate(0,0)" class="bar" x="461" width="68" y="196.537653620494" height="53.46234637950599" style="fill: rgb(105, 105, 191);"></rect><rect transform="translate(0,0)" class="bar" x="536" width="68" y="129.4214935895888" height="120.5785064104112" style="fill: rgb(162, 105, 191);"></rect><rect transform="translate(0,0)" class="bar" x="611" width="68" y="230.5092111934713" height="19.490788806528712" style="fill: rgb(191, 105, 162);"></rect></g><g class="x axis" transform="translate(40,250)" fill="none" font-size="10" font-family="sans-serif" text-anchor="middle" style="font-size: 10px; font-family: Arial, Helvetica;"><path class="domain" stroke="#000" d="M0.5,6V0.5H690.5V6" style="shape-rendering: crispedges; fill: none; stroke: rgb(204, 204, 204);"></path><g class="tick" opacity="1" transform="translate(45.5,0)"><line stroke="#000" y2="6" style="shape-rendering: crispedges; fill: none; stroke: rgb(204, 204, 204);"></line><text fill="#000" y="9" dy="0.71em">Adonis.js</text></g><g class="tick" opacity="1" transform="translate(120.5,0)"><line stroke="#000" y2="6" style="shape-rendering: crispedges; fill: none; stroke: rgb(204, 204, 204);"></line><text fill="#000" y="9" dy="0.71em">Express.js</text></g><g class="tick" opacity="1" transform="translate(195.5,0)"><line stroke="#000" y2="6" style="shape-rendering: crispedges; fill: none; stroke: rgb(204, 204, 204);"></line><text fill="#000" y="9" dy="0.71em">Fastify</text></g><g class="tick" opacity="1" transform="translate(270.5,0)"><line stroke="#000" y2="6" style="shape-rendering: crispedges; fill: none; stroke: rgb(204, 204, 204);"></line><text fill="#000" y="9" dy="0.71em">Hapi.js</text></g><g class="tick" opacity="1" transform="translate(345.5,0)"><line stroke="#000" y2="6" style="shape-rendering: crispedges; fill: none; stroke: rgb(204, 204, 204);"></line><text fill="#000" y="9" dy="0.71em">Koa.js</text></g><g class="tick" opacity="1" transform="translate(420.5,0)"><line stroke="#000" y2="6" style="shape-rendering: crispedges; fill: none; stroke: rgb(204, 204, 204);"></line><text fill="#000" y="9" dy="0.71em">Nest.js</text></g><g class="tick" opacity="1" transform="translate(495.5,0)"><line stroke="#000" y2="6" style="shape-rendering: crispedges; fill: none; stroke: rgb(204, 204, 204);"></line><text fill="#000" y="9" dy="0.71em">Restify.js</text></g><g class="tick" opacity="1" transform="translate(570.5,0)"><line stroke="#000" y2="6" style="shape-rendering: crispedges; fill: none; stroke: rgb(204, 204, 204);"></line><text fill="#000" y="9" dy="0.71em">Sails.js</text></g><g class="tick" opacity="1" transform="translate(645.5,0)"><line stroke="#000" y2="6" style="shape-rendering: crispedges; fill: none; stroke: rgb(204, 204, 204);"></line><text fill="#000" y="9" dy="0.71em">Server.js</text></g></g></svg>

### Github stars growth in 2018

The explosive growth of Nest becomes very clear when we track the growth of Github stars over 2018. The y-axis is the percentage
of growth from roughly the start of January 2018 up till mid-December 2018. The number is a fairly good approximation, but
the raw data is a bit hard to come by. Interestingly Sails and Express have almost flat lined in comparison, but that could
also be due to market saturation: only so many people out there interested in giving Github stars to Node.js frameworks. 

<svg width="730" height="300" xmlns="http://www.w3.org/2000/svg" version="1.1"><g transform="translate(30,0)"><text x="-30" y="-7" style="font-size: 10px; font-family: Arial, Helvetica;">undefined</text><g class="y axis" transform="translate(0,0)" fill="none" font-size="10" font-family="sans-serif" text-anchor="end" style="font-size: 10px; font-family: Arial, Helvetica;"><path class="domain" stroke="#000" d="M-6,250.5H0.5V0.5H-6" style="shape-rendering: crispedges; fill: none; stroke: rgb(204, 204, 204);"></path><g class="tick" opacity="1" transform="translate(0,250.5)"><line stroke="#000" x2="-6" style="shape-rendering: crispedges; fill: none; stroke: rgb(204, 204, 204);"></line><text fill="#000" x="-9" dy="0.32em">0</text></g><g class="tick" opacity="1" transform="translate(0,232.64285714285714)"><line stroke="#000" x2="-6" style="shape-rendering: crispedges; fill: none; stroke: rgb(204, 204, 204);"></line><text fill="#000" x="-9" dy="0.32em">20</text></g><g class="tick" opacity="1" transform="translate(0,214.78571428571428)"><line stroke="#000" x2="-6" style="shape-rendering: crispedges; fill: none; stroke: rgb(204, 204, 204);"></line><text fill="#000" x="-9" dy="0.32em">40</text></g><g class="tick" opacity="1" transform="translate(0,196.92857142857144)"><line stroke="#000" x2="-6" style="shape-rendering: crispedges; fill: none; stroke: rgb(204, 204, 204);"></line><text fill="#000" x="-9" dy="0.32em">60</text></g><g class="tick" opacity="1" transform="translate(0,179.07142857142856)"><line stroke="#000" x2="-6" style="shape-rendering: crispedges; fill: none; stroke: rgb(204, 204, 204);"></line><text fill="#000" x="-9" dy="0.32em">80</text></g><g class="tick" opacity="1" transform="translate(0,161.21428571428572)"><line stroke="#000" x2="-6" style="shape-rendering: crispedges; fill: none; stroke: rgb(204, 204, 204);"></line><text fill="#000" x="-9" dy="0.32em">100</text></g><g class="tick" opacity="1" transform="translate(0,143.35714285714286)"><line stroke="#000" x2="-6" style="shape-rendering: crispedges; fill: none; stroke: rgb(204, 204, 204);"></line><text fill="#000" x="-9" dy="0.32em">120</text></g><g class="tick" opacity="1" transform="translate(0,125.5)"><line stroke="#000" x2="-6" style="shape-rendering: crispedges; fill: none; stroke: rgb(204, 204, 204);"></line><text fill="#000" x="-9" dy="0.32em">140</text></g><g class="tick" opacity="1" transform="translate(0,107.64285714285714)"><line stroke="#000" x2="-6" style="shape-rendering: crispedges; fill: none; stroke: rgb(204, 204, 204);"></line><text fill="#000" x="-9" dy="0.32em">160</text></g><g class="tick" opacity="1" transform="translate(0,89.78571428571428)"><line stroke="#000" x2="-6" style="shape-rendering: crispedges; fill: none; stroke: rgb(204, 204, 204);"></line><text fill="#000" x="-9" dy="0.32em">180</text></g><g class="tick" opacity="1" transform="translate(0,71.92857142857142)"><line stroke="#000" x2="-6" style="shape-rendering: crispedges; fill: none; stroke: rgb(204, 204, 204);"></line><text fill="#000" x="-9" dy="0.32em">200</text></g><g class="tick" opacity="1" transform="translate(0,54.071428571428584)"><line stroke="#000" x2="-6" style="shape-rendering: crispedges; fill: none; stroke: rgb(204, 204, 204);"></line><text fill="#000" x="-9" dy="0.32em">220</text></g><g class="tick" opacity="1" transform="translate(0,36.21428571428572)"><line stroke="#000" x2="-6" style="shape-rendering: crispedges; fill: none; stroke: rgb(204, 204, 204);"></line><text fill="#000" x="-9" dy="0.32em">240</text></g><g class="tick" opacity="1" transform="translate(0,18.35714285714286)"><line stroke="#000" x2="-6" style="shape-rendering: crispedges; fill: none; stroke: rgb(204, 204, 204);"></line><text fill="#000" x="-9" dy="0.32em">260</text></g><g class="tick" opacity="1" transform="translate(0,0.5)"><line stroke="#000" x2="-6" style="shape-rendering: crispedges; fill: none; stroke: rgb(204, 204, 204);"></line><text fill="#000" x="-9" dy="0.32em">280</text></g></g><rect transform="translate(0,0)" class="bar" x="12" width="68" y="196.42857142857144" height="53.571428571428555" style="fill: rgb(191, 105, 105);"></rect><rect transform="translate(0,0)" class="bar" x="88" width="68" y="233.92857142857144" height="16.071428571428555" style="fill: rgb(191, 162, 105);"></rect><rect transform="translate(0,0)" class="bar" x="164" width="68" y="196.42857142857144" height="53.571428571428555" style="fill: rgb(162, 191, 105);"></rect><rect transform="translate(0,0)" class="bar" x="240" width="68" y="233.03571428571428" height="16.964285714285722" style="fill: rgb(105, 191, 105);"></rect><rect transform="translate(0,0)" class="bar" x="316" width="68" y="225.89285714285714" height="24.10714285714286" style="fill: rgb(105, 191, 162);"></rect><rect transform="translate(0,0)" class="bar" x="392" width="68" y="0" height="250" style="fill: rgb(105, 162, 191);"></rect><rect transform="translate(0,0)" class="bar" x="468" width="68" y="228.57142857142858" height="21.428571428571416" style="fill: rgb(105, 105, 191);"></rect><rect transform="translate(0,0)" class="bar" x="544" width="68" y="237.5" height="12.5" style="fill: rgb(162, 105, 191);"></rect><rect transform="translate(0,0)" class="bar" x="620" width="68" y="236.60714285714286" height="13.392857142857139" style="fill: rgb(191, 105, 162);"></rect></g><g class="x axis" transform="translate(30,250)" fill="none" font-size="10" font-family="sans-serif" text-anchor="middle" style="font-size: 10px; font-family: Arial, Helvetica;"><path class="domain" stroke="#000" d="M0.5,6V0.5H700.5V6" style="shape-rendering: crispedges; fill: none; stroke: rgb(204, 204, 204);"></path><g class="tick" opacity="1" transform="translate(46.5,0)"><line stroke="#000" y2="6" style="shape-rendering: crispedges; fill: none; stroke: rgb(204, 204, 204);"></line><text fill="#000" y="9" dy="0.71em">Adonis.js</text></g><g class="tick" opacity="1" transform="translate(122.5,0)"><line stroke="#000" y2="6" style="shape-rendering: crispedges; fill: none; stroke: rgb(204, 204, 204);"></line><text fill="#000" y="9" dy="0.71em">Express.js</text></g><g class="tick" opacity="1" transform="translate(198.5,0)"><line stroke="#000" y2="6" style="shape-rendering: crispedges; fill: none; stroke: rgb(204, 204, 204);"></line><text fill="#000" y="9" dy="0.71em">Fastify</text></g><g class="tick" opacity="1" transform="translate(274.5,0)"><line stroke="#000" y2="6" style="shape-rendering: crispedges; fill: none; stroke: rgb(204, 204, 204);"></line><text fill="#000" y="9" dy="0.71em">Hapi.js</text></g><g class="tick" opacity="1" transform="translate(350.5,0)"><line stroke="#000" y2="6" style="shape-rendering: crispedges; fill: none; stroke: rgb(204, 204, 204);"></line><text fill="#000" y="9" dy="0.71em">Koa.js</text></g><g class="tick" opacity="1" transform="translate(426.5,0)"><line stroke="#000" y2="6" style="shape-rendering: crispedges; fill: none; stroke: rgb(204, 204, 204);"></line><text fill="#000" y="9" dy="0.71em">Nest.js</text></g><g class="tick" opacity="1" transform="translate(502.5,0)"><line stroke="#000" y2="6" style="shape-rendering: crispedges; fill: none; stroke: rgb(204, 204, 204);"></line><text fill="#000" y="9" dy="0.71em">Restify.js</text></g><g class="tick" opacity="1" transform="translate(578.5,0)"><line stroke="#000" y2="6" style="shape-rendering: crispedges; fill: none; stroke: rgb(204, 204, 204);"></line><text fill="#000" y="9" dy="0.71em">Sails.js</text></g><g class="tick" opacity="1" transform="translate(654.5,0)"><line stroke="#000" y2="6" style="shape-rendering: crispedges; fill: none; stroke: rgb(204, 204, 204);"></line><text fill="#000" y="9" dy="0.71em">Server.js</text></g></g></svg>

### Dependencies

Node and its NPM package management solution gets a bad wrap for pulling in (transitive) dependencies. In this light,
Nest seems fairly lean where Sails has almost four times the direct dependencies.  

<svg width="730" height="300" xmlns="http://www.w3.org/2000/svg" version="1.1"><g transform="translate(40,0)"><text x="-40" y="-7" style="font-size: 10px; font-family: Arial, Helvetica;">undefined</text><g class="y axis" transform="translate(0,0)" fill="none" font-size="10" font-family="sans-serif" text-anchor="end" style="font-size: 10px; font-family: Arial, Helvetica;"><path class="domain" stroke="#000" d="M-6,250.5H0.5V0.5H-6" style="shape-rendering: crispedges; fill: none; stroke: rgb(204, 204, 204);"></path><g class="tick" opacity="1" transform="translate(0,250.5)"><line stroke="#000" x2="-6" style="shape-rendering: crispedges; fill: none; stroke: rgb(204, 204, 204);"></line><text fill="#000" x="-9" dy="0.32em">0</text></g><g class="tick" opacity="1" transform="translate(0,239.13636363636363)"><line stroke="#000" x2="-6" style="shape-rendering: crispedges; fill: none; stroke: rgb(204, 204, 204);"></line><text fill="#000" x="-9" dy="0.32em">2</text></g><g class="tick" opacity="1" transform="translate(0,227.77272727272728)"><line stroke="#000" x2="-6" style="shape-rendering: crispedges; fill: none; stroke: rgb(204, 204, 204);"></line><text fill="#000" x="-9" dy="0.32em">4</text></g><g class="tick" opacity="1" transform="translate(0,216.4090909090909)"><line stroke="#000" x2="-6" style="shape-rendering: crispedges; fill: none; stroke: rgb(204, 204, 204);"></line><text fill="#000" x="-9" dy="0.32em">6</text></g><g class="tick" opacity="1" transform="translate(0,205.04545454545456)"><line stroke="#000" x2="-6" style="shape-rendering: crispedges; fill: none; stroke: rgb(204, 204, 204);"></line><text fill="#000" x="-9" dy="0.32em">8</text></g><g class="tick" opacity="1" transform="translate(0,193.6818181818182)"><line stroke="#000" x2="-6" style="shape-rendering: crispedges; fill: none; stroke: rgb(204, 204, 204);"></line><text fill="#000" x="-9" dy="0.32em">10</text></g><g class="tick" opacity="1" transform="translate(0,182.3181818181818)"><line stroke="#000" x2="-6" style="shape-rendering: crispedges; fill: none; stroke: rgb(204, 204, 204);"></line><text fill="#000" x="-9" dy="0.32em">12</text></g><g class="tick" opacity="1" transform="translate(0,170.95454545454544)"><line stroke="#000" x2="-6" style="shape-rendering: crispedges; fill: none; stroke: rgb(204, 204, 204);"></line><text fill="#000" x="-9" dy="0.32em">14</text></g><g class="tick" opacity="1" transform="translate(0,159.5909090909091)"><line stroke="#000" x2="-6" style="shape-rendering: crispedges; fill: none; stroke: rgb(204, 204, 204);"></line><text fill="#000" x="-9" dy="0.32em">16</text></g><g class="tick" opacity="1" transform="translate(0,148.22727272727272)"><line stroke="#000" x2="-6" style="shape-rendering: crispedges; fill: none; stroke: rgb(204, 204, 204);"></line><text fill="#000" x="-9" dy="0.32em">18</text></g><g class="tick" opacity="1" transform="translate(0,136.86363636363637)"><line stroke="#000" x2="-6" style="shape-rendering: crispedges; fill: none; stroke: rgb(204, 204, 204);"></line><text fill="#000" x="-9" dy="0.32em">20</text></g><g class="tick" opacity="1" transform="translate(0,125.5)"><line stroke="#000" x2="-6" style="shape-rendering: crispedges; fill: none; stroke: rgb(204, 204, 204);"></line><text fill="#000" x="-9" dy="0.32em">22</text></g><g class="tick" opacity="1" transform="translate(0,114.13636363636365)"><line stroke="#000" x2="-6" style="shape-rendering: crispedges; fill: none; stroke: rgb(204, 204, 204);"></line><text fill="#000" x="-9" dy="0.32em">24</text></g><g class="tick" opacity="1" transform="translate(0,102.77272727272725)"><line stroke="#000" x2="-6" style="shape-rendering: crispedges; fill: none; stroke: rgb(204, 204, 204);"></line><text fill="#000" x="-9" dy="0.32em">26</text></g><g class="tick" opacity="1" transform="translate(0,91.4090909090909)"><line stroke="#000" x2="-6" style="shape-rendering: crispedges; fill: none; stroke: rgb(204, 204, 204);"></line><text fill="#000" x="-9" dy="0.32em">28</text></g><g class="tick" opacity="1" transform="translate(0,80.04545454545456)"><line stroke="#000" x2="-6" style="shape-rendering: crispedges; fill: none; stroke: rgb(204, 204, 204);"></line><text fill="#000" x="-9" dy="0.32em">30</text></g><g class="tick" opacity="1" transform="translate(0,68.68181818181819)"><line stroke="#000" x2="-6" style="shape-rendering: crispedges; fill: none; stroke: rgb(204, 204, 204);"></line><text fill="#000" x="-9" dy="0.32em">32</text></g><g class="tick" opacity="1" transform="translate(0,57.31818181818181)"><line stroke="#000" x2="-6" style="shape-rendering: crispedges; fill: none; stroke: rgb(204, 204, 204);"></line><text fill="#000" x="-9" dy="0.32em">34</text></g><g class="tick" opacity="1" transform="translate(0,45.95454545454544)"><line stroke="#000" x2="-6" style="shape-rendering: crispedges; fill: none; stroke: rgb(204, 204, 204);"></line><text fill="#000" x="-9" dy="0.32em">36</text></g><g class="tick" opacity="1" transform="translate(0,34.59090909090909)"><line stroke="#000" x2="-6" style="shape-rendering: crispedges; fill: none; stroke: rgb(204, 204, 204);"></line><text fill="#000" x="-9" dy="0.32em">38</text></g><g class="tick" opacity="1" transform="translate(0,23.227272727272748)"><line stroke="#000" x2="-6" style="shape-rendering: crispedges; fill: none; stroke: rgb(204, 204, 204);"></line><text fill="#000" x="-9" dy="0.32em">40</text></g><g class="tick" opacity="1" transform="translate(0,11.863636363636346)"><line stroke="#000" x2="-6" style="shape-rendering: crispedges; fill: none; stroke: rgb(204, 204, 204);"></line><text fill="#000" x="-9" dy="0.32em">42</text></g><g class="tick" opacity="1" transform="translate(0,0.5)"><line stroke="#000" x2="-6" style="shape-rendering: crispedges; fill: none; stroke: rgb(204, 204, 204);"></line><text fill="#000" x="-9" dy="0.32em">44</text></g></g><rect transform="translate(0,0)" class="bar" x="11" width="68" y="113.63636363636365" height="136.36363636363635" style="fill: rgb(191, 105, 105);"></rect><rect transform="translate(0,0)" class="bar" x="86" width="68" y="79.54545454545456" height="170.45454545454544" style="fill: rgb(191, 162, 105);"></rect><rect transform="translate(0,0)" class="bar" x="161" width="68" y="176.13636363636363" height="73.86363636363637" style="fill: rgb(162, 191, 105);"></rect><rect transform="translate(0,0)" class="bar" x="236" width="68" y="147.72727272727272" height="102.27272727272728" style="fill: rgb(105, 191, 105);"></rect><rect transform="translate(0,0)" class="bar" x="311" width="68" y="113.63636363636365" height="136.36363636363635" style="fill: rgb(105, 191, 162);"></rect><rect transform="translate(0,0)" class="bar" x="386" width="68" y="193.1818181818182" height="56.81818181818181" style="fill: rgb(105, 162, 191);"></rect><rect transform="translate(0,0)" class="bar" x="461" width="68" y="125" height="125" style="fill: rgb(105, 105, 191);"></rect><rect transform="translate(0,0)" class="bar" x="536" width="68" y="0" height="250" style="fill: rgb(162, 105, 191);"></rect><rect transform="translate(0,0)" class="bar" x="611" width="68" y="125" height="125" style="fill: rgb(191, 105, 162);"></rect></g><g class="x axis" transform="translate(40,250)" fill="none" font-size="10" font-family="sans-serif" text-anchor="middle" style="font-size: 10px; font-family: Arial, Helvetica;"><path class="domain" stroke="#000" d="M0.5,6V0.5H690.5V6" style="shape-rendering: crispedges; fill: none; stroke: rgb(204, 204, 204);"></path><g class="tick" opacity="1" transform="translate(45.5,0)"><line stroke="#000" y2="6" style="shape-rendering: crispedges; fill: none; stroke: rgb(204, 204, 204);"></line><text fill="#000" y="9" dy="0.71em">Adonis.js</text></g><g class="tick" opacity="1" transform="translate(120.5,0)"><line stroke="#000" y2="6" style="shape-rendering: crispedges; fill: none; stroke: rgb(204, 204, 204);"></line><text fill="#000" y="9" dy="0.71em">Express.js</text></g><g class="tick" opacity="1" transform="translate(195.5,0)"><line stroke="#000" y2="6" style="shape-rendering: crispedges; fill: none; stroke: rgb(204, 204, 204);"></line><text fill="#000" y="9" dy="0.71em">Fastify</text></g><g class="tick" opacity="1" transform="translate(270.5,0)"><line stroke="#000" y2="6" style="shape-rendering: crispedges; fill: none; stroke: rgb(204, 204, 204);"></line><text fill="#000" y="9" dy="0.71em">Hapi.js</text></g><g class="tick" opacity="1" transform="translate(345.5,0)"><line stroke="#000" y2="6" style="shape-rendering: crispedges; fill: none; stroke: rgb(204, 204, 204);"></line><text fill="#000" y="9" dy="0.71em">Koa.js</text></g><g class="tick" opacity="1" transform="translate(420.5,0)"><line stroke="#000" y2="6" style="shape-rendering: crispedges; fill: none; stroke: rgb(204, 204, 204);"></line><text fill="#000" y="9" dy="0.71em">Nest.js</text></g><g class="tick" opacity="1" transform="translate(495.5,0)"><line stroke="#000" y2="6" style="shape-rendering: crispedges; fill: none; stroke: rgb(204, 204, 204);"></line><text fill="#000" y="9" dy="0.71em">Restify.js</text></g><g class="tick" opacity="1" transform="translate(570.5,0)"><line stroke="#000" y2="6" style="shape-rendering: crispedges; fill: none; stroke: rgb(204, 204, 204);"></line><text fill="#000" y="9" dy="0.71em">Sails.js</text></g><g class="tick" opacity="1" transform="translate(645.5,0)"><line stroke="#000" y2="6" style="shape-rendering: crispedges; fill: none; stroke: rgb(204, 204, 204);"></line><text fill="#000" y="9" dy="0.71em">Server.js</text></g></g></svg>

### Weekly NPM downloads

I had to re-check the data on the NPM site for this. Express completely dwarves the amount of downloads of any of its 
competitors. Only Koa and Hapi register on this graph as tiny slivers of color. Of course, some frameworks use Express 
under the hood, i.e. Sails and Nest.

<svg width="730" height="300" xmlns="http://www.w3.org/2000/svg"><g transform="translate(58,0)"><text x="-58" y="-7" style="font-size: 10px; font-family: Arial, Helvetica;">undefined</text><g class="y axis" transform="translate(0,0)" fill="none" font-size="10" font-family="sans-serif" text-anchor="end" style="font-size: 10px; font-family: Arial, Helvetica;"><path class="domain" stroke="#000" d="M-6,250.5H0.5V0.5H-6" style="shape-rendering: crispedges; fill: none; stroke: rgb(204, 204, 204);"></path><g class="tick" opacity="1" transform="translate(0,250.5)"><line stroke="#000" x2="-6" style="shape-rendering: crispedges; fill: none; stroke: rgb(204, 204, 204);"></line><text fill="#000" x="-9" dy="0.32em">0</text></g><g class="tick" opacity="1" transform="translate(0,233.0682540014573)"><line stroke="#000" x2="-6" style="shape-rendering: crispedges; fill: none; stroke: rgb(204, 204, 204);"></line><text fill="#000" x="-9" dy="0.32em">500,000</text></g><g class="tick" opacity="1" transform="translate(0,215.63650800291458)"><line stroke="#000" x2="-6" style="shape-rendering: crispedges; fill: none; stroke: rgb(204, 204, 204);"></line><text fill="#000" x="-9" dy="0.32em">1,000,000</text></g><g class="tick" opacity="1" transform="translate(0,198.2047620043719)"><line stroke="#000" x2="-6" style="shape-rendering: crispedges; fill: none; stroke: rgb(204, 204, 204);"></line><text fill="#000" x="-9" dy="0.32em">1,500,000</text></g><g class="tick" opacity="1" transform="translate(0,180.77301600582916)"><line stroke="#000" x2="-6" style="shape-rendering: crispedges; fill: none; stroke: rgb(204, 204, 204);"></line><text fill="#000" x="-9" dy="0.32em">2,000,000</text></g><g class="tick" opacity="1" transform="translate(0,163.34127000728648)"><line stroke="#000" x2="-6" style="shape-rendering: crispedges; fill: none; stroke: rgb(204, 204, 204);"></line><text fill="#000" x="-9" dy="0.32em">2,500,000</text></g><g class="tick" opacity="1" transform="translate(0,145.90952400874377)"><line stroke="#000" x2="-6" style="shape-rendering: crispedges; fill: none; stroke: rgb(204, 204, 204);"></line><text fill="#000" x="-9" dy="0.32em">3,000,000</text></g><g class="tick" opacity="1" transform="translate(0,128.47777801020106)"><line stroke="#000" x2="-6" style="shape-rendering: crispedges; fill: none; stroke: rgb(204, 204, 204);"></line><text fill="#000" x="-9" dy="0.32em">3,500,000</text></g><g class="tick" opacity="1" transform="translate(0,111.04603201165835)"><line stroke="#000" x2="-6" style="shape-rendering: crispedges; fill: none; stroke: rgb(204, 204, 204);"></line><text fill="#000" x="-9" dy="0.32em">4,000,000</text></g><g class="tick" opacity="1" transform="translate(0,93.61428601311565)"><line stroke="#000" x2="-6" style="shape-rendering: crispedges; fill: none; stroke: rgb(204, 204, 204);"></line><text fill="#000" x="-9" dy="0.32em">4,500,000</text></g><g class="tick" opacity="1" transform="translate(0,76.18254001457294)"><line stroke="#000" x2="-6" style="shape-rendering: crispedges; fill: none; stroke: rgb(204, 204, 204);"></line><text fill="#000" x="-9" dy="0.32em">5,000,000</text></g><g class="tick" opacity="1" transform="translate(0,58.75079401603023)"><line stroke="#000" x2="-6" style="shape-rendering: crispedges; fill: none; stroke: rgb(204, 204, 204);"></line><text fill="#000" x="-9" dy="0.32em">5,500,000</text></g><g class="tick" opacity="1" transform="translate(0,41.319048017487546)"><line stroke="#000" x2="-6" style="shape-rendering: crispedges; fill: none; stroke: rgb(204, 204, 204);"></line><text fill="#000" x="-9" dy="0.32em">6,000,000</text></g><g class="tick" opacity="1" transform="translate(0,23.88730201894481)"><line stroke="#000" x2="-6" style="shape-rendering: crispedges; fill: none; stroke: rgb(204, 204, 204);"></line><text fill="#000" x="-9" dy="0.32em">6,500,000</text></g><g class="tick" opacity="1" transform="translate(0,6.455556020402128)"><line stroke="#000" x2="-6" style="shape-rendering: crispedges; fill: none; stroke: rgb(204, 204, 204);"></line><text fill="#000" x="-9" dy="0.32em">7,000,000</text></g></g><rect transform="translate(0,0)" class="bar" x="11" width="66" y="249.79444485118518" height="0.20555514881482395" style="fill: rgb(191, 105, 105);"></rect><rect transform="translate(0,0)" class="bar" x="84" width="66" y="0" height="250" style="fill: rgb(191, 162, 105);"></rect><rect transform="translate(0,0)" class="bar" x="157" width="66" y="249.4653683502247" height="0.5346316497752923" style="fill: rgb(162, 191, 105);"></rect><rect transform="translate(0,0)" class="bar" x="230" width="66" y="242.36329153200643" height="7.6367084679935715" style="fill: rgb(105, 191, 105);"></rect><rect transform="translate(0,0)" class="bar" x="303" width="66" y="240.39967507225458" height="9.600324927745419" style="fill: rgb(105, 191, 162);"></rect><rect transform="translate(0,0)" class="bar" x="376" width="66" y="247.84170580093644" height="2.158294199063562" style="fill: rgb(105, 162, 191);"></rect><rect transform="translate(0,0)" class="bar" x="449" width="66" y="246.47143111148299" height="3.5285688885170146" style="fill: rgb(105, 105, 191);"></rect><rect transform="translate(0,0)" class="bar" x="522" width="66" y="249.1722709730052" height="0.8277290269948026" style="fill: rgb(162, 105, 191);"></rect><rect transform="translate(0,0)" class="bar" x="595" width="66" y="249.94564781597654" height="0.05435218402345754" style="fill: rgb(191, 105, 162);"></rect></g><g class="x axis" transform="translate(58,250)" fill="none" font-size="10" font-family="sans-serif" text-anchor="middle" style="font-size: 10px; font-family: Arial, Helvetica;"><path class="domain" stroke="#000" d="M0.5,6V0.5H672.5V6" style="shape-rendering: crispedges; fill: none; stroke: rgb(204, 204, 204);"></path><g class="tick" opacity="1" transform="translate(44.5,0)"><line stroke="#000" y2="6" style="shape-rendering: crispedges; fill: none; stroke: rgb(204, 204, 204);"></line><text fill="#000" y="9" dy="0.71em">Adonis.js</text></g><g class="tick" opacity="1" transform="translate(117.5,0)"><line stroke="#000" y2="6" style="shape-rendering: crispedges; fill: none; stroke: rgb(204, 204, 204);"></line><text fill="#000" y="9" dy="0.71em">Express.js</text></g><g class="tick" opacity="1" transform="translate(190.5,0)"><line stroke="#000" y2="6" style="shape-rendering: crispedges; fill: none; stroke: rgb(204, 204, 204);"></line><text fill="#000" y="9" dy="0.71em">Fastify</text></g><g class="tick" opacity="1" transform="translate(263.5,0)"><line stroke="#000" y2="6" style="shape-rendering: crispedges; fill: none; stroke: rgb(204, 204, 204);"></line><text fill="#000" y="9" dy="0.71em">Hapi.js</text></g><g class="tick" opacity="1" transform="translate(336.5,0)"><line stroke="#000" y2="6" style="shape-rendering: crispedges; fill: none; stroke: rgb(204, 204, 204);"></line><text fill="#000" y="9" dy="0.71em">Koa.js</text></g><g class="tick" opacity="1" transform="translate(409.5,0)"><line stroke="#000" y2="6" style="shape-rendering: crispedges; fill: none; stroke: rgb(204, 204, 204);"></line><text fill="#000" y="9" dy="0.71em">Nest.js</text></g><g class="tick" opacity="1" transform="translate(482.5,0)"><line stroke="#000" y2="6" style="shape-rendering: crispedges; fill: none; stroke: rgb(204, 204, 204);"></line><text fill="#000" y="9" dy="0.71em">Restify.js</text></g><g class="tick" opacity="1" transform="translate(555.5,0)"><line stroke="#000" y2="6" style="shape-rendering: crispedges; fill: none; stroke: rgb(204, 204, 204);"></line><text fill="#000" y="9" dy="0.71em">Sails.js</text></g><g class="tick" opacity="1" transform="translate(628.5,0)"><line stroke="#000" y2="6" style="shape-rendering: crispedges; fill: none; stroke: rgb(204, 204, 204);"></line><text fill="#000" y="9" dy="0.71em">Server.js</text></g></g></svg>

## Choosing a Node.js framework

Each framework has its goals, design decisions and peculiarities. You should carefully consider how these map to your own
use case currently and as far as you can tell in the future.

Sometimes, this is very clear: 

> "We need a full web app, with HTML templating, database models, authentication, API integrations,
mailing etc." 

We mark these as **Full Stack** in this article. A completely different use case would be: 

> "We need a back end API endpoint that ingests IOT data as small JSON messages." 

We mark these as **API**.  Of course, your use case might be somewhere in between. In this case you need a framework 
that can start small, but can grow in complexity and functionality with either plugins or middlewares. We mark
these as **Minimal** as in the core is small, but the eco-system provides modules to grow the range of features.

It speaks for many of the frameworks listed here that all of them can be coaxed into any of the roles on the spectrum.
Some come with supported, first party modules to extent the core, others rely more on community supplied extensions.  

## AdonisJs

![AdonisJs logo](https://avatars2.githubusercontent.com/u/13810373?s=100&v=4)

[AdonisJs](https://adonisjs.com/) takes a page from the Hapi manual by explicitly choosing to write its own dependencies from scratch. This means
the AdonisJS eco system comes with a set of specific modules that neatly slot into the core framework. This also means
that for instance the test runner or template engines are probably new to most users, although you can still use other runners
or templating engines of course.

AdonisJs was started in 2016 and is aimed at full stack usage: HTTP request routing, templating, authentication and database ORM
are all available out of the box.

In the community, AdonisJs is often compared to PHP's Laravel although this can be said of any framework using implementing
MVC patterns.

|[https://adonisjs.com/](https://adonisjs.com/)                       |                                                  |
|-----------------------|--------------------------------------------------|
| **Version**               | 5.0.12                                           |
| **Github stars**          | 5195 / up ~60% in 2018                           |
| **Dependencies**          | 24                                               |
| **Weekly downloads**  | 5896                                             |
| **ORM**                   | Lucid,  Knex.js based                           |
| **Async/Await**        | Yes                                              |
| **License**               | MIT                                              |
| **Corporate sponsorship** | [Scotch.io](https://scotch.io), [KeyCDN](https://www.keycdn.com/)                                |
| **Donations**             | https://www.patreon.com/adonisframework |
| **NPM audit**             | 0                                                |
| **File under**            | {{% badge "Full stack" %}} {{% badge "Laravel" %}} |


## Express

![Express logo](https://avatars1.githubusercontent.com/u/5658226?s=100&v=4)

[The grandaddy](http://expressjs.com/) of Node.JS API frameworks. It is still a very minimal framework that, on install, gives you a
bare bones API server. Extra functionality is added using one of the many middleware projects available. Some of which, like
[Passportjs](http://www.passportjs.org/), have come to be standards in themselves.

Due to its minimal footprint, frameworks like Sails.js and Nest use Express as a base application layer and extend it with extra, opinionated features.


| [http://expressjs.com/](http://expressjs.com/)                      |                     |
|-----------------------|---------------------|
| **Version**               | 4.16.4              |
| **Github stars**          | 41.417 / up ~18% in 2018              |
| **Dependencies**          | 30                  |
| **Weekly downloads**  | 7.170.825           |
| **ORM**                   | BYO / plugins       |
| **Async/Await**        | No                  |
| **License**               | MIT                 |
| **Corporate sponsorship** | [Strongloop / IBM](https://strongloop.com/)    |
| **Donations**             | -                   |
| **NPM audit**             | 0                   |
| **File under**            | {{% badge "Minimal" %}}             |

## Fastify
![Fastify logo](https://avatars2.githubusercontent.com/u/24939410?s=100&v=4)

[Fastify](https://www.fastify.io/) is an API framework 100% aimed at performance. Claiming to be inspired by Hapi and Express, the maintainers have chosen
to focus on balancing developer experience with raw speed and performance.

Although Fastify is again a very minimal framework, the middleware architecture is compatible with Express and Restify
middlewares, greatly expanding possible use cases.

Fastify comes with experimental HTTP 2.0 support and ships with TypeScript typings.

|[https://www.fastify.io/](https://www.fastify.io/)                       |                      |
|-----------------------|----------------------|
| **Version**               | 1.13.1               |
| **Github stars**          | 8.901 / up ~60% in 2018    |
| **Dependencies**          | 13                   |
| **Weekly downloads**  | 15.335               |
| **ORM**                   | BYO / plugins        |
| **Async/Await**        | Yes                  |
| **License**               | MIT                  |
| **Corporate sponsorship** | [Nearform](https://www.nearform.com/)             |
| **Donations**             | -                    |
| **NPM audit**             | 0                    |
| **File under**            | {{% badge "Minimal" %}} {{% badge "Performance" %}} |

## Hapi
![Hapi logo](https://avatars1.githubusercontent.com/u/3774533?s=100&v=4)

[Hapi](https://hapijs.com/) was developed at Walmart to provide a rock solid foundation for their e-commerce business. Now
spun out as open source framework with no ties to its originating company, Hapi remains popular for larger.

Hapi comes with a large set of separate, but tightly integrated and supported plugins for features like logging, templating,
caching, error handling etc. It's object validation plugin [Joi](https://github.com/hapijs/joi) is almost as popular
as the framework itself.

In the community, Hapi is praised for its API, its robustness and reliability. Also, Hapi does not have any external code
dependencies making security issues much more controllable.

Version 17.x is a ground up rewrite leveraging ES6 and ES7 features throughout the whole stack.

|[https://hapijs.com/](https://hapijs.com/)                       |                                                      |
|-----------------------|------------------------------------------------------|
| **Version**               | 17.8.1                                               |
| **Github stars**          | 10.485 / up ~19% in 2018                             |
| **Dependencies**          | 18                                                   |
| **Weekly downloads**  | 219.046                                              |
| **ORM**                   | BYO / Plugins.                                       |
| **Async/Await**        | Yes                                                  |
| **License**               | Custom                                               |
| **Corporate sponsorship** | Auth0                                                |
| **Donations**             | https://www.patreon.com/eranhammer/overview |
| **NPM audit**             | 0                                                    |
| **File under**            | {{% badge "Minimal" %}} {{% badge "API" %}} {{% badge "Resilience" %}}                                  |

## Koa
![Koa logo](https://avatars2.githubusercontent.com/u/5055057?s=100&v=4)

[Koa](https://koajs.com/) comes from the same people as Express, but was explicitly written to leverage new Javascript
language features such as `async/await`. The Koa framework is even more minimal than Express; even routing is not included
in the base install.

Koa was one of the first API frameworks to leverage ES6 and ES7 features explicitly. This shows as the documentation mentions
using Babel for older Node.js versions.

Koa comes with a list of third party middlewares almost as long as Express although a lot of them seem to be abandoned or
just not maintained on a regular basis.


|[https://koajs.com/](https://koajs.com/)                       |                                  |
|-----------------------|----------------------------------|
| **Version**               | 2.6.2                            |
| **Github stars**          | 24.170 / up ~27% in 2018                          |
| **Dependencies**          | 24                               |
| **Weekly downloads**  | 275.369                          |
| **ORM**                   | BYO / plugins                    |
| **Async/Await**        | Yes                              |
| **License**               | MIT                              |
| **Corporate sponsorship** | duohui.cn                        |
| **Donations**             | https://opencollective.com/koajs |
| **NPM audit**             | 0                                |
| **File under**            | {{% badge "Minimal" %}} {{% badge "ES7" %}}                     |

## Nest
![Nest logo](https://avatars1.githubusercontent.com/u/28507035?s=100&v=4)

[Nest](https://nestjs.com/) burst onto the scene in 2017 and made a huge leap in popularity in 2018 (at least according
to Github stars). Nest is a bit different than all the others as it is based on TypeScript and uses Express under the hood.
Nest does work with "normal" Javascript, but the maintainers actively encourage using TypeScript.

Another twist is that Nest comes with a built-in GraphQL adapter that leverages the popular Apollo framework, although there
are recipes available for more traditional ORMs and databases such Mongo using Mongoose or MySQL/Postgres using TypeORM.

2018 was a good year for Nest and we're excited to see what 2019 brings.

|[https://nestjs.com/](https://nestjs.com/)                       |                                                        |
|-----------------------|--------------------------------------------------------|
| **Version**               | 5.5.0                                                  |
| **Github stars**          | 10.732 / up 280% in 2018                                                |
| **Dependencies**          | 10                                                     |
| **Weekly downloads**  | 61.907                                                 |
| **ORM**                   | TypeORM                                                |
| **Async/Await**        | Yes                                                    |
| **License**               | MIT                                                    |
| **Corporate sponsorship** | Valor                                                  |
| **Donations**             | https://opencollective.com/nest/donate                 |
| **NPM audit**             | 0                                                      |
| **Notes**                  | @nest/core shows donations balance on NPM install |
| **File under**            | {{% badge "Express-based" %}} {{% badge "TypeScript" %}} {{% badge "GraphQL" %}} {{% badge "ES7" %}}           |

## Restify
![Restify logo](https://avatars1.githubusercontent.com/u/6948699?s=100&v=4)

[Restify](http://restify.com/) is squarely aimed at providing a framework for building RESTful APIs, where other frameworks
tend to solve API, static content and template parsing problems. It is used in production by NPM, Netflix, Joyent and Pinterest.

This focus translates into its documentation and guides. They are simple and to the point. Extensions are build using the
plugin API, although the third party plugins are spread very thin.

Stressing debuggability as one of its main pilllars, it is cool to see that Restify includes automatic generation of Dtrace probes,
a feature not commonly found in any of the other frameworks.

|[http://restify.com/](http://restify.com/)                       |                       |
|-----------------------|-----------------------|
| **Version**               | 7.3.0                 |
| **Github stars**          | 8.857 / up ~24% in 2018                 |
| **Dependencies**          | 22                    |
| **Weekly downloads**  | 101.211               |
| **ORM**                   | BYO / plugins         |
| **Async/Await**        | No                    |
| **License**               | MIT                   |
| **Corporate sponsorship** | -                     |
| **Donations**             | -                     |
| **NPM audit**             | 0                     |
| **File under**            | {{% badge "Minimal" %}} {{% badge "API" %}}          |

## Sails

![Sails logo](/blog/sailsjs.png)

[Sails](https://sailsjs.com/) was arguably the first Node.js web framework to provide a "full stack" experience similar
to Rails on the Ruby platform; hence the name. It provides an opinionated MVC framework and matching stack of technologies
to tackle most business-type scenarios.

This means you can set up a CRUD app very quickly due the configuration-over-code principle and the sane defaults chosen
by the developer. Similar to Rails, Sails has scaffold generators to create API endpoints based on objects / entities.
Sails comes with its own Waterline ORM which can front multiple database types like Postgres, MongoDB and even Redis.

Originated at the Balderdashy company, they have now renamed to "the Sails Company" and provide enterprise support.

|[https://sailsjs.com/](https://sailsjs.com/)                       |                                  |
|-----------------------|----------------------------------|
| **Version**               | 1.1.0                            |
| **Github stars**          | 19.976 / up ~14% in 2018                           |
| **Dependencies**          | 44                               |
| **Weekly downloads**  | 23.742                           |
| **ORM**                   | Waterline.                       |
| **Async/Await**        | Yes                              |
| **License**               | MIT                              |
| **Corporate sponsorship** | Sails company                    |
| **Donations**             |                                  |
| **NPM audit**             | 23 low / 2 critical              |
| **Notes**                  | Has enterprise support           |
| **File under**            | {{% badge "Full stack" %}} {{% badge "Rails" %}} {{% badge "Express-based" %}} |

## Server.js

![Server.js logo](https://serverjs.io/img/logo.svg)

[Server.js](https://serverjs.io/) started in 2017 and has seen steady, but not explosive growth over 2018. Being this new,
Server.js uses modern ES2016 and ES2017 language features throughout. Every install comes with batteries included: file serving,
websockets, CSRF, SSL etc. Even storing sessions in a Redis store is available by default.

Because Server.js is also based on Express, you can use Express middlewares to extend its functionality.

Next to having a great NPM package name, Server.js looks very promising as light weight but stilly pretty full stack
API and web framework.

|[https://serverjs.io/](https://serverjs.io/)                       |                                           |
|-----------------------|-------------------------------------------|
| **Version**               | 1.0.8                                     |
| **Github stars**          | 3.229 / up ~15% in 2018                                    |
| **Dependencies**          | 22                                        |
| **Weekly downloads**  | 1.559                                     |
| **ORM**                   | BYO / plugins                             |
| **Async/Await**        | Yes                                       |
| **License**               | MIT                                       |
| **Corporate sponsorship** | Auth0                                     |
| **Donations**             | https://www.paypal.me/franciscopresencia/ |
| **NPM audit**             | 0                                         |
| **File under**            | {{% badge "Full stack" %}} {{% badge "ES7" %}} {{% badge "Express-based" %}}                              |


## On the metrics used

|                       |                                           |
|-----------------------|-------------------------------------------|
| **Version**               | The version used for checking vulnerabilities & dependencies                                |
| **Github stars**          | Stars as of 10-12-2018 compared to roughly 01-01-2018                               |
| **Dependencies**          | Number of direct dependencies listed on NPM                                        |
| **Weekly downloads**       | umber of weekly downloads listed on NPM                                     |
| **ORM**                   | Does the framework have a directly supported / native ORM                        |
| **Async/Await**        | Does the framework natively support async/await                                       |
| **License**               | The License as shown on Github                                       |
| **Corporate sponsorship** | Companies listed as current sponsor                                     |
| **Donations**             | Donations page|
| **NPM audit**             | Number vulnerabilities listed by the `npm audit` command                                         |
| **Notes**                  | Any extra notes                                          |
| **File under**            | Free form tags that try to categories the framework                          |

Disclosure: Checkly sponsors Hapi.js and its lead developer [Eran Hammer](https://www.patreon.com/eranhammer/overview)
