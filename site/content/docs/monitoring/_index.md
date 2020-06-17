---
title: How we run checks
weight: 1
aliases:
- /docs/monitoring
menu:
  docs:
    parent: "Monitoring"
---

Checkly runs your API & browser checks every x minutes, based on an interval you select. 
We have different minimum intervals for each check type:

- API checks can be scheduled to run **every 1 minute**.
- Browser checks can be scheduled to run **every 10 minutes**.

You can select one or more data center locations to run your check from. We advise to **always select at least 2 locations**.
There are two reason for this:

1. Redundancy: we might have an issue in one location, but not the other. 
2. Double checking: if your check fails and you have "double check" enabled we will retry the check from the other location.

A picture is a thousand words:

![monitoring and alerting pipeline](/docs/images/monitoring/pipeline.png)

1. A cron process picks up a check based on its schedule, say every 5 minutes.
2. The script is put into a queue to be run from the next configured data center location. If the check is an API check and has a [setup script](docs/api-checks/setup-teardown-scripts/), the setup script is executed. 
3. If the check fails and "double check" is enabled, the check is retried once in the same location *and* in a different location.
The other location is picked, at random, from all the configured locations.
4. If the check is an API check and has a [teardown script](docs/api-checks/setup-teardown-scripts/), the teardown script is executed.
Teardown scripts are run *before* any assertions are validated.
5. The result is stored in our central database and any alerts are sent where applicable.

 

## SSL Checks

SSL monitoring occurs in three steps:

1. When configuring API checks or browser checks, we automatically determine what domains can/should be checked for SSL certificate
expiry. 

2. Once a day, we check all your configured domains.

3. If the expiry date hits a threshold in your [alert settings](/docs/alerting/), we send an alert. 




> If you have multiple checks on the same domain (e.g. `api.example.com/products` and `api.example.com/customers`) we deduplicate them just for
SSL checking.
