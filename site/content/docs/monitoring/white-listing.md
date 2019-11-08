---
title: White listing & filtering traffic
weight: 5
menu:
  docs:
    parent: "Monitoring"
---

White listing Checkly traffic in your firewall or loadbalancer by IP address is not possible at this moment as Checkly uses 
a non-static set of IP addresses in the cloud to run its checks.

This is a feature we want to implement so expect changes on this topic in the future.

You can however fetch a list of the dynamic IP addresses in use at AWS, our cloud provider. Reference this documentation

[https://docs.aws.amazon.com/general/latest/gr/aws-ip-ranges.html](https://docs.aws.amazon.com/general/latest/gr/aws-ip-ranges.html)

# Filtering Google Analytics

If you want to filter Checkly traffic in Google Analytics (and possible) because Checkly browser checks are skewing your 
numbers, here is one way how to do it:

1. Ad a UTM source tag to the URL's your requesting, i.e.

```javascript
await page.goto('https://app.checklyhq.com/login?utm_source=monitoring')
```

2. In Google Analytics, filter on campaign source.

![filter google analytics traffic on campaign source](/docs/images/monitoring/analytics.png)


For detailed instructions, see [the Google Analytics docs on custom filters](https://support.google.com/analytics/answer/1033162#CustomFilters)

 > Note, it will take some hours for this to take effect.


