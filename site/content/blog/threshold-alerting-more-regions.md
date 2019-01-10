---
date: 2019-01-10T09:00:00+00:00
title: "Announcing: Threshold Alerting and Expanded Locations"
author: "Tim Nolet"
avatar: "tnolet.jpg"
tags: ["news", "alerting"]
publishdate: 2019-01-10
featured_image: "https://checklyhq.com/blog/announce-alerting-banner.png"
description: "Announcing new threshold based alerting and the expansion of geographic data center locations."
---
![announcing threshold alerting](/blog/announce-alerting-banner.png)

We're super happy to announce some big upgrades to Checkly's alerting features for 2019 🎉. We listened to what our customers were
missing alerting wise and what parts we could polish and upgrade. Two things popped up again and again:

1. Checkly should give you more control over when and how often you are alerted.
2. Data center locations were not covering all customer areas (Korea, France, Nordics etc.)

This update should go a long way in addressing these needs.

<!--more-->

## 1. Take control with threshold alerting and reminders

The internet can be flaky. Good services or apps sometimes do weird things just once. You might not want to be alerted 
*all the time*. On the other hand, some services are extremely critical, so you welcome some reminders when things are looking
bad.

With Checkly's new threshold based alerting you can now:

- Get an alert of on the second or third failure.
- Get an alert after 5 minutes of failures.
- Get one or more reminders after a failure is triggered.

![alert settings](/blog/alert-settings.png)

You can tweak these settings at the global account level, or per check. [Learn more about alerting](/docs/alerting/)

## 2. More locations!

We recently re-architected a part of infrastructure, enabling us to hook up all of the AWS regions where the Lambda service
is available: Stockholm 🇸🇪, Seoul 🇰🇷 and Paris 🇫🇷 here we come! 

![data center locations](/blog/datacenter-locations.png)


As of today you can select up to eight data center locations for API checks and four for Browser checks from the total of
sixteen locations. Moreover, we commit to adding new regions as AWS makes them available like Milan (Italy), Cape Town (South Africa) 
and Bahrain.

-- Tim from Checkly
