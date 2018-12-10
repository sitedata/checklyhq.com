---
date: 2018-12-10T09:00:00+00:00
title: "Node.js API and Web Frameworks for 2019"
author: "Tim Nolet"
avatar: "tnolet.jpg"
tags: ["dev", "javascript", "Node", "frameworks"]
publishdate: 2018-12-10
featured_image: "https://checklyhq.com/blog/tunnel1.jpg"
description: "We list the popular & trending Node.js API and web frameworks for 2019 based on **Github stars**, dependencies, language features, security and sponsorship status."
---

![newyear](/blog/newyear1.jpg)
<small> "Sunrise on New Year’s Day at Susaki" by Utagawa Hiroshigw (1853) - [Museom of Fine Arts Boston](https://www.mfa.org/collections/object/sunrise-on-new-years-day-at-susaki-susaki-hatsu-hinode-from-the-series-famous-places-in-edo-edo-meisho-202200)</small>

Last year was an interesting one for Node.js API / Web frameworks, and open source software in general. Discussions raged
about corporate sponsorship and how to maintain a project used by millions but not supported financially*.

Similarly, security concerns were top of mind with some popular Node / JS packages [being hijacked](https://github.com/bitpay/copay/issues/9346) and
[Github launching their security alerts feature](https://blog.github.com/2017-11-16-introducing-security-alerts-on-github/) for projects hosted
on their site.

That is why in this 2019 Node.js framework roundup we have categories on **sponsorship**, **donations** and **NPM audit vulnerabilities**
to give better insight into how each of the frameworks listed tackles these issues. Frameworks are evaluated alphabetically.

<!--more-->

{{< page-toc >}}

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

|                       |                                                  |
|-----------------------|--------------------------------------------------|
| **Version**               | 5.0.12                                           |
| **Github stars**          | 5195 / up ~60% in 2018                           |
| **Dependencies**          | 24                                               |
| **Weekly downloads**  | 5896                                             |
| **ORM**                   | Lucid,  Knex.js based                            |
| **Async/Await**        | Yes                                              |
| **License**               | MIT                                              |
| **Corporate sponsorship** | [Scotch.io](https://scotch.io), [KeyCDN](https://www.keycdn.com/)                                |
| **Donations**             | https://www.patreon.com/adonisframework |
| **NPM audit**             | 0                                                |
| **File under**            | Full stack, Laravel                              |


## Express

![Express logo](https://avatars1.githubusercontent.com/u/5658226?s=100&v=4)

[The grandaddy](http://expressjs.com/) of Node.JS API frameworks. It is still a very minimal framework that, on install, gives you a
bare bones API server. Extra functionality is added using one of the many middleware projects available. Some of which, like
[Passportjs](http://www.passportjs.org/), have come to be standards in themselves.

Due to its minimal footprint, frameworks like Sails.js and Nest use Express as a base application layer and extend it with extra, opinionated features.


|                       |                     |
|-----------------------|---------------------|
| Version               | 4.16.4              |
| **Github stars**          | 41.417 / up ~18% in 2018              |
| **Dependencies**          | 30                  |
| **Weekly downloads**  | 7.170.825           |
| **ORM**                   | BYO / plugins       |
| **Async/Await**        | No                  |
| **License**               | MIT                 |
| **Corporate sponsorship** | [Strongloop / IBM](https://strongloop.com/)    |
| **Donations**             | -                   |
| **NPM audit**             | 0                   |
| **File under**            | Minimal             |

## Fastify
![Fastify logo](https://avatars2.githubusercontent.com/u/24939410?s=100&v=4)

[Fastify](https://www.fastify.io/) is an API framework 100% aimed at performance. Claiming to be inspired by Hapi and Express, the maintainers have chosen
to focus on balancing developer experience with raw speed and performance.

Although Fastify is again a very minimal framework, the middleware architecture is compatible with Express and Restify
middlewares, greatly expanding possible use cases.

Fastify comes with experimental HTTP 2.0 support and ships with TypeScript typings.

|                       |                      |
|-----------------------|----------------------|
| Version               | 1.13.1               |
| **Github stars**          | 8.901 / up ~60% in 2018    |
| **Dependencies**          | 13                   |
| **Weekly downloads**  | 15.335               |
| **ORM**                   | BYO / plugins        |
| **Async/Await**        | Yes                  |
| **License**               | MIT                  |
| **Corporate sponsorship** | [Nearform](https://www.nearform.com/)             |
| **Donations**             | -                    |
| **NPM audit**             | 0                    |
| **File under**            | Minimal, Performance |

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

|                       |                                                      |
|-----------------------|------------------------------------------------------|
| Version               | 17.8.1                                               |
| **Github stars**          | 10.485 / up ~19% in 2018                             |
| **Dependencies**          | 18                                                   |
| **Weekly downloads**  | 219.046                                              |
| **ORM**                   | BYO / Plugins.                                       |
| **Async/Await**        | Yes                                                  |
| **License**               | Custom                                               |
| **Corporate sponsorship** | Auth0                                                |
| **Donations**             | https://www.patreon.com/eranhammer/overview |
| **NPM audit**             | 0                                                    |
| **File under**            | Minimal, Resilience                                  |

## Koa
![Koa logo](https://avatars2.githubusercontent.com/u/5055057?s=100&v=4)

[Koa](https://koajs.com/) comes from the same people as Express, but was explicitly written to leverage new Javascript
language features such as `async/await`. The Koa framework is even more minimal than Express; even routing is not included
in the base install.

Koa was one of the first API frameworks to leverage ES6 and ES7 features explicitly. This shows as the documentation mentions
using Babel for older Node.js versions.

Koa comes with a list of third party middlewares almost as long as Express although a lot of them seem to be abandoned or
just not maintained on a regular basis.


|                       |                                  |
|-----------------------|----------------------------------|
| Version               | 2.6.2                            |
| **Github stars**          | 24.170 / up ~27% in 2018                          |
| **Dependencies**          | 24                               |
| **Weekly downloads**  | 275.369                          |
| **ORM**                   | BYO / plugins                    |
| **Async/Await**        | Yes                              |
| **License**               | MIT                              |
| **Corporate sponsorship** | duohui.cn                        |
| **Donations**             | https://opencollective.com/koajs |
| **NPM audit**             | 0                                |
| **File under**            | Minimal, ES7                     |

## Nest
![Nest logo](https://avatars1.githubusercontent.com/u/28507035?s=100&v=4)

[Nest](https://nestjs.com/) burst onto the scene in 2017 and made a huge leap in popularity in 2018 (at least according
to Github stars). Nest is a bit different than all the others as it is based on TypeScript and uses Express under the hood.
Nest does work with "normal" Javascript, but the maintainers actively encourage using TypeScript.

Another twist is that Nest comes with a built-in GraphQL adapter that leverages the popular Apollo framework, although there
are recipes available for more traditional ORMs and databases such Mongo using Mongoose or MySQL/Postgres using TypeORM.

2018 was a good year for Nest and we're excited to see what 2019 brings.

|                       |                                                        |
|-----------------------|--------------------------------------------------------|
| Version               | 5.5.0                                                  |
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
| **File under**            | Express-based, Typescript, GraphQL, ES7           |

## Restify
![Restify logo](https://avatars1.githubusercontent.com/u/6948699?s=100&v=4)

[Restify](http://restify.com/) is squarely aimed at providing a framework for building RESTful APIs, where other frameworks
tend to solve API, static content and template parsing problems. It is used in production by NPM, Netflix, Joyent and Pinterest.

This focus translates into its documentation and guides. They are simple and to the point. Extensions are build using the
plugin API, although the third party plugins are spread very thin.

Stressing debuggability as one of its main pilllars, it is cool to see that Restify includes automatic generation of Dtrace probes,
a feature not commonly found in any of the other frameworks.

|                       |                       |
|-----------------------|-----------------------|
| Version               | 7.3.0                 |
| **Github stars**          | 8.857 / up ~24% in 2018                 |
| **Dependencies**          | 22                    |
| **Weekly downloads**  | 101.211               |
| **ORM**                   | BYO / plugins         |
| **Async/Await**        | No                    |
| **License**               | MIT                   |
| **Corporate sponsorship** | -                     |
| **Donations**             | -                     |
| **NPM audit**             | 0                     |
| **File under**            | Minimal, API          |

## Sails

![Sails logo](/blog/sailsjs.png)

[Sails](https://sailsjs.com/) was arguably the first Node.js web framework to provide a "full stack" experience similar
to Rails on the Ruby platform; hence the name. It provides an opinionated MVC framework and matching stack of technologies
to tackle most business-type scenarios.

This means you can set up a CRUD app very quickly due the configuration-over-code principle and the sane defaults chosen
by the developer. Similar to Rails, Sails has scaffold generators to create API endpoints based on objects / entities.
Sails comes with its own Waterline ORM which can front multiple database types like Postgres, MongoDB and even Redis.

Originated at the Balderdashy company, they have now renamed to "the Sails Company" and provide enterprise support.

|                       |                                  |
|-----------------------|----------------------------------|
| Version               | 1.1.0                            |
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
| **File under**            | Rails, Full stack, Express-based |

## Server.js

![Server.js logo](https://serverjs.io/img/logo.svg)

[Server.js](https://serverjs.io/) started in 2017 and has seen steady, but not explosive growth over 2018. Being this new,
Server.js uses modern ES2016 and ES2017 language features throughout. Every install comes with batteries included: file serving,
websockets, CSRF, SSL etc. Even storing sessions in a Redis store is available by default.

Because Server.js is also based on Express, you can use Express middlewares to extend its functionality.

Next to having a great NPM package name, Server.js looks very promising as light weight but stilly pretty full stack
API and web framework.

|                       |                                           |
|-----------------------|-------------------------------------------|
| Version               | 1.0.8                                     |
| **Github stars**          | 3.229 / up ~15% in 2018                                    |
| **Dependencies**          | 22                                        |
| **Weekly downloads**  | 1.559                                     |
| **ORM**                   | BYO / plugins                             |
| **Async/Await**        | Yes                                       |
| **License**               | MIT                                       |
| **Corporate sponsorship** | Auth0                                     |
| **Donations**             | https://www.paypal.me/franciscopresencia/ |
| **NPM audit**             | 0                                         |
| **File under**            | Full stack, ES7, Express-based                              |


## On the metrics used

|                       |                                           |
|-----------------------|-------------------------------------------|
| Version               | The version used for checking vulnerabilities & dependencies                                |
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

**Disclosure: Checkly sponsors Hapi.js and its lead developer [Eran Hammer](https://www.patreon.com/eranhammer/overview)*
