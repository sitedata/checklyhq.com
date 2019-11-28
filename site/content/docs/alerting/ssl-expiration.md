---
title: SSL certificate expiration
weight: 4
menu:
  docs:
    parent: "Alerting"
---

An expired SSL certificate can cause havoc to sites and APIs. Checkly alerts you 30 days, 14 days, 3 days and at day zero when
your SSL certificate is about to expire. We will alert you on all the alerting channels you have configured.

Because API checks and Browser checks are a bit different, SSL checking for each is a bit different:

- **API checks**: we check the domain automatically as we can parse it from the `URL` in the HTTP request settings.
- **Browser checks**: We give you a separate input field to add the domain you want checked.

![SSL checks for browser checks](/docs/images/alerting/browser_ssl_check.png)
