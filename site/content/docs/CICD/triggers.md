---
title: Command Line triggers
weight: 3
aliases:
    - /api-checks/triggers
    - /browser-checks/triggers
menu:
  docs:
    parent: "CI/CD integration"
---

Triggers enable you to call a check from a CI/CD pipeline, a bash shell or programmatically in your code.
Create a trigger URL in the **CI/CD** tab of your check.

![trigger monitoring checks from CI/CD](/docs/images/cicd/triggers.png)

## Calling triggers

The trigger URL can be called with a simple HTTP `GET` request.

Calling the trigger (with cURL for example) executes a **synchronous** check, e.g. the cURL request will "hang" until
the checks is finished. 

For most **API checks** this should be fine and resolve with a second or so.

For **browser checks**, this could take a substantial amount of time, e.g. 10 to 30 seconds for
typical checks. Be sure to take this into account when configuring timeout setting when calling the trigger URL.

A trigger returns two possible **status codes**:

-   `200 OK` means your checks and all its assertions passed successfully.
-   `503 Service Unavailable` means your check failed, either on the request or the assertions.

In addition to the status code, the trigger returns a JSON response. Because the trigger URL allows direct
access to running the check with further authentication, Checkly limits the amount of information in the response
for API check triggers to a `hasFailures` boolean and the `responseTime` in milliseconds.

```
http https://api.checklyhq.com/checks/3355b7c2-c563-8884-a88b-0e1313300033/trigger/Ew2hAXAlhXXk
HTTP/1.1 200 OK
Cache-Control: no-cache
Connection: keep-alive
Content-Encoding: gzip
Content-Type: application/json; charset=utf-8
Date: Fri, 29 Jun 2018 12:05:17 GMT

{
    "hasFailures": false,
    "responseTime": 238.5946100000292
}
```

> Note: triggers are rate limited to **10 requests per minute per trigger** and are only run from the **Frankfurt region**

## Optional deployment parameters

You can add the following query parameters to any trigger request. This enables you to record deployments in the Checkly 
event timeline, in turn enabling you to track application performance across deploys.


| parameter    | type    | required |                                                                               |
|--------------|---------|----------|-------------------------------------------------------------------------------|
| `deployment` | Boolean | false    | Set to true to record each trigger invocation as a deployment event.          |
| `repository` | String  | true     | Repository name, i.e. "checkly/backend-api"                                   |
| `sha`        | String  | true     | Git hash, tag, version "v1.0.1" or other identifier making this deploy unique |

For example, this curl request 

```bash
curl -X GET "http://api.checklyhq.com/checks/<uuid>/trigger/c0hYw?deployment=true&repository=acme/customer-api&sha=v1.0.2-beta"
```
Would record the following deployment on your events tab.

![deployment parameters from CI/CD](/docs/images/cicd/trigger_parameters.png)

> Note: if you want to run multiple triggers for one deployment, just provide the same `repository` and `sha` parameter on each request. We will only record one deployment.
