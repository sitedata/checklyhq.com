---
title: General settings
menu:
  docs:
    parent: "Alerting"
---

##  Global & per check alert channels

Checkly allows you to manage your alert channels on two different levels:

- Global account level
- Per check level

Use the account level to make sure everyone is always updated for all failing and recovered checks. This where you would
put your team's email address or add a hook for your Ops team's Slack channel.

If you want to alert one specific person or team for one specific check, you can set the alerts on the check level.
You are free to mix and match both levels.

{{< info >}} Alerts are de-doubled before alerting, so you will never get two alerts because they were set at both levels.{{< /info >}}


## Muting alerts

Toggling the "mute" checkbox on a check stops the sending of all alerts but keeps the check running. This is useful when
your check might be flapping or showing other unpredictable behavior. Just mute the alerts but keep the check going while
you troubleshoot.

## Double checking

Checkly runs on cloud infrastructure in data centers around the world. As nothing is perfect, this infrastructure
occasionally experiences glitches and slow downs. Enabling the  **double check** option makes sure we rerun your check
to catch false positives.

- API checks are retried after 5 seconds
- Browser checks are retried after 30 seconds.

This feature is switched on by default for all checks.

![](/docs/images/alerting/double_check.png)
