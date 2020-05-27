---
title: Webhooks
weight: 6
menu:
  docs:
    parent: "Alerting"
---

Webhooks allows you to POST custom payloads to any endpoint in your own infrastructure or a third party provider. In a
nutshell, you can:

- Create a **custom URL** by adding in authentication tokens or other secret.
- Create a **custom payload body** using any environment variables and specific instance variables per event. Note: that means that if you are attaching the webhook to a Group, you will be able to access Group-level variables, too.
- **Debug and test the webhook** in the editor by sending test messages.

![webhook editor](/docs/images/alerting/webhook_editor.png)

The example above shows a webhook configured to create a Jira ticket on each event. Notice the following:

- We use the variables `JIRA_USER` and `JIRA_TOKEN` in the URL. We previously stored these variables in the environment variables section.
- We use the variables `RESULT_LINK` and`ALERT_TITLE` in the payload. These are event based variables and will change with each call.

In both cases we use the familiar Handlebars templating braces, i.e. `{{ }}` to insert the variable.

You can use the following event related variables in both URL and payload.

| Variable            | Description                                                  |
|---------------------|--------------------------------------------------------------|
| `CHECK_NAME`        | Full name of the check                                       |
| `CHECK_ID`          | The UUID of the check                                        |
| `CHECK_TYPE`        | The check type, i.e. API or BROWSER.                         |
| `ALERT_TITLE`       | Human readable title, e.g. 'Check "My API check" has failed' |
| `ALERT_TYPE`        | Type of alert, either "ALERT_FAIL", "ALERT_RECOVERY", "ALERT_DEGRADED" or  "ALERT_DEGRADED_RECOVERY" |
| `CHECK_RESULT_ID`   | The UUID of the result that triggered this message           |
| `RESPONSE_TIME`     | The reported response time for this result                   |
| `RUN_LOCATION`      | The location where the check ran, i.e. "N. California"       |
| `RESULT_LINK`       | The full link to the check result                            |
| `STARTED_AT`        | The ISO timestamp from when this check run started           |

## Using Handlebars helpers

We've extended the [Handlebars](https://handlebarsjs.com/) templating system with some handy helpers to make our webhooks
even more powerful.

- You can use `{{$UUID}}` to generate a random UUID/v4, i.e. `9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d`.
- You can use `{{RANDOM_NUMBER}}` to generate a random decimal number between 0 and 1000, i.e. `345`.

You can also use conditional helpers like `{{#eq}}` statements. Here is an example:
 
```json
{
  "message": "Check is {{#eq ALERT_TYPE 'ALERT_FAILURE'}}DOWN{{/eq}} {{#eq ALERT_TYPE 'ALERT_RECOVERY'}}UP{{/eq}}"
}
```

The above webhook body uses the `{{#eq}}` helper to execute the logic 

*If the ALERT_TYPE variable equals 'ALERT_FAILURE', print 'DOWN', if it equals 'ALERT_RECOVERY' print 'UP'*

So in the case of a failure event, the body would render to:

```json
{
  "message": "Check is DOWN"
}
```

Two clear benefits here:
- You only need to create one webhook to inform a 3rd party system.
- You can translate Checkly terms to your 3rd party tool's term for the same concept, i.e. the "up status" of a check.

You can find the [full list of helpers in the README.md file](https://github.com/checkly/handlebars) of the underlying library we are using.

## Webhook examples

The following examples give an idea how to integrate Checkly with 3rd party alerting and issue tracking systems.

## OpsGenie

You can create an [OpsGenie](https://opsgenie.com) alert by POST-ing the following body

```json
{
  "message": "{{ALERT_TITLE}}",
  "description": "{{ALERT_TYPE}} <br>{{STARTED_AT}} ({{RESPONSE_TIME}}ms) <br>{{RESULT_LINK}}"
}
```

to the OpsGenie `alerts` API endpoint

```
https://{{OPSGENIE_API_KEY}}@api.opsgenie.com/v2/alerts
```

Or you can add the OpsGenie API key in the headers, e.g.

```
Authorization: GenieKey {{OPSGENIE_API_KEY}}
```

This is an example of a full alert body:

```json
{
  "message": "{{ALERT_TITLE}}",
  "description": "{{ALERT_TYPE}}: {{CHECK_NAME}} <br>{{STARTED_AT}} ({{RESPONSE_TIME}}ms) <br>{{RESULT_LINK}}",
  "responders": [
        {
            "id":"4513b7ea-3b91-438f-b7e4-e3e54af9147c",
            "type":"team"
        }
  ],
  "tags": ["Critical", "Production"],
  "priority":"P1",
  "note": "Location: {{RUN_LOCATION}}"
}
```

In case you would like different teams to be responsible for different Check Groups, you could add a `CHECK_GROUP_TEAM` variable with a different value for each Group, then modify the above snippet with the following:

```json
"responders": [
      {
          "id":"{{CHECK_GROUP_TEAM}}",
          "type":"team"
      }
]
```

## Pushover

Send a message using [Pushover](https://pushover.net/) by posting this body:

```json
{
  "token":"FILL_IN_YOUR_SECRET_TOKEN_FROM_PUSHOVER",
  "user":"FILL_IN_YOUR_USER_FROM_PUSHOVER",
  "title":"{{ALERT_TITLE}}",
  "html":1,
  "priority":2,
  "retry":30,
  "expire":10800,
  "message":"{{ALERT_TYPE}} <br>{{STARTED_AT}} ({{RESPONSE_TIME}}ms) <br>{{RESULT_LINK}}"
}
```


## Trello

You can create a [Trello](https://trello.com) card using just the URL and no payload:

```
https://api.trello.com/1/cards?idList=5b28c04aed47522097be8bc4&key={{TRELLO_KEY}}&token={{TRELLO_TOKEN}}&name={{CHECK_NAME}}
```
