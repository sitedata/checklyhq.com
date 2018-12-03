---
title: Triggers
weight: 7
menu:
  docs:
    parent: "API Checks"
    identifier: triggers-api
---

Triggers enable you to call a check from a CI/CD pipeline, a bash shell or programmatically in your code.
Create a trigger URL in the **triggers** tab of your check.

The trigger URL can be called with a simple HTTP `GET` request.
Triggers for browser checks work *almost* exactly the same, read more about them [in the browser checks section](/docs/browser-checks/triggers/)
![](/docs/images/api-checks/triggers.png)

Calling the trigger (with cURL for example) executes a **synchronous** check, e.g. the cURL request will "hang" until
the checks is finished. For most API checks this should be fine and resolve with a second or so.

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
