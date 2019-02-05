---
title: Url and Custom Domain
weight: 1
menu:
  docs:
    parent: "TV-mode dashboards"
---

TV-mode dashboards are public dashboards are available on every Checkly plan. Use them on your wall mounted TV's or shared
monitors around the office or as a status page on your site.

Edit your TV-mode dashboard by clicking on the **TV-mode** button on the Checkly default dashboard page.

## Custom URL

Every public dashboard comes with a configurable custom sub domain on the checkly.com domain. By default, we generate
a random ID. You can change this sub domain to anything you like as long as it is unique among all Checkly users.
Typically a company name works best.

![custom url for public dashboard](/docs/images/dashboards/custom_url.png)

> public dashboards on the .checkly.com domain have the benefit of running under **https**


## Custom Domain

You can host your public dashboard under your own domain. To make this work, you need to do two things:

1. Add a valid custom domain to your dashboard setting.

![custom domain for public dashboard](/docs/images/dashboards/custom_domain.png)

2. Create a CNAME record in your DNS that points to **dashboards.checklyhq.com**

Any DNS provider will have the option to easily add CNAME records. For example, on AWS Route 53 this looks like this.

![add cname to DNS provider](/docs/images/dashboards/aws_cname.png)
