---
title: Triggers
weight: 9
menu:
  docs:
    parent: "Browser Checks"
    identifier: triggers-browser
---

Triggers enable you to call a check from a CI/CD pipeline, a bash shell or programmatically in your code.
Create a trigger URL in the **triggers** tab of your check. The trigger URL can be called with a simple HTTP `GET` request.

![trigger browser checks from CI/CD](/docs/images/browser-checks/triggers.png)

Calling the trigger (with cURL for example) executes a **synchronous** check, e.g. the cURL request will "hang" until
the checks is finished. For browser checks, this could take a substantial amount of time, e.g. 10 to 30 seconds for
typical checks. Be sure to take this into account when configuring timeout setting when calling the trigger URL.

A trigger returns two possible **status codes**:

-   `200 OK` means your checks and all its assertions passed successfully.
-   `503 Service Unavailable` means your check failed, either on the request or the assertions.

In addition to the status code, the trigger returns a JSON response. Because the trigger URL allows direct
access to running the check with further authentication, Checkly limits the amount of information in the response
for browser check triggers to a `hasFailures` boolean.

```
http https://api.checklyhq.com/checks/00844ae2-0fce-374g-b712-d99b9e79d6f8/trigger/1nyhvjLPLo9j
HTTP/1.1 200 OK
Cache-Control: no-cache
Connection: keep-alive
Content-Encoding: gzip
Content-Type: application/json; charset=utf-8
Date: Fri, 29 Jun 2018 12:05:17 GMT

{
    "hasFailures": false
}
```

> Note: triggers are rate limited to **10 requests per minute per trigger** and are only run from the **Frankfurt region**
