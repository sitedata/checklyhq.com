---
title: Webhooks
weight: 5
menu:
  docs:
    parent: "Alerting"
---

Webhooks allows you to POST custom payloads to any endpoint in your own infrastructure or a third party provider. In a
nutshell, you can:

- Create a **custom URL** by adding in authentication tokens or other secret.
- Create a **custom payload body** using any environment variables and specific instance variables per event.
- **Debug and test the webhook** in the editor by sending test messages.

![webhook editor](/docs/images/alerting/webhook_editor.png)

The example above shows a webhook configured to create a Jira ticket on each event. Notice the following:

- We use the variables **JIRA_USER** and **JIRA_TOKEN** in the URL. We previously stored these variables in the environment variables section.
- We use the variables **RESULT_LINK** and **ALERT_TITLE** in the payload. These are event based variables and will change with each call.

In both cases we use the familiar Handlebars templating braces, i.e. `{{ }}` to insert the variable.

You can use the following event related variables in both URL and payload.

| Variable            | Description                                                  |
|---------------------|--------------------------------------------------------------|
| **CHECK_NAME**      | Full name of the check                                       |
| **CHECK_ID**        | The UUID of the check                                        |
| **CHECK_TYPE**      | The check type, i.e. API or BROWSER.                         |
| **ALERT_TITLE**     | Human readable title, e.g. 'Check "My API check" has failed' |
| **ALERT_TYPE**      | Type of alert, either "ALERT_FAIL" or "ALERT_RECOVERY"       |
| **CHECK_RESULT_ID** | The UUID of the result that triggered this message           |
| **RESPONSE_TIME**   | The reported response time for this result                   |
| **RUN_LOCATION**    | The location where the check ran, i.e. "N. California"       |
| **RESULT_LINK**     | The full link to the check result                            |
| **STARTED_AT**      | The ISO timestamp from when this check run started           |


## Webhook examples

### Trello

You can create a Trello card using just the URL and no payload by 

```
https://api.trello.com/1/cards?idList=5b28c04aed47522097be8bc4&key={{TRELLO_KEY}}&token={{TRELLO_TOKEN}}&name={{CHECK_NAME}}
```
