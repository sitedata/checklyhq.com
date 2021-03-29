---
title: API Monitoring for the Jamstack
description: >-
  Application Programming Interfaces (APIs) are used throughout software to define interactions between different software applications. In this article we focus on web APIs specifically, taking a look at how they fit in the JAMStack architecture and how they should be monitored in order to ensure that they function reliably.
---

## APIs and the JAMStack

APIs were born as a way to expose the functionality of an application while hiding the underlying implementation. This concept proved immensely popular, and now APIs permeate the world of software. 

With the rise of the [JAMStack](https://jamstack.org/), the already broadly used web APIs have been brought further into the spotlight and explicitly named as cornerstone of a new way of building web applications. In the JAMStack paradigm, applications rely on APIs (the _A_ in _JAM_) returning structured data (JSON or XML) when queried via the HTML and Javascript-based frontend. The API calls might be aimed at internal services or at third-parties handling complex flows such as content management, authentication, merchant services and more. An example of third-party API could be [Stripe](https://stripe.com/), which acts as payment infrastructure for a multitude of businesses.

Given their importance in this new kind of web application, APIs need to be tightly monitored, as failures and performance degradations will immediately be felt by the end-user.

## API failures

API endpoints can break in a variety of ways. The most obvious examples are:

1. The endpoint is unresponsive/unreachable
2. The response is incorrect
3. The response time is too high

All of the above can result in the application becoming broken for the end-user. This applies to internal APIs and, especially in the case of JAMStack applications, to third parties as well. API checks allow us to monitor both, as we will be mimicking the end-user's own behaviour.

## API checks

Given it is single endpoints that can exhibit breaking issues, instead of whole servers for which simple ping/uptime monitoring would be sufficient, we need to be granular in how we monitor them. API checks do exactly that, and they are composed of the following:

1. An HTTP request
2. One or more assertions, used to specify exactly what the response should look like, and fail the check if the criteria are not met
3. A threshold indicating the maximum acceptable response time

The more customisable the HTTP request is, the more cases can be covered, for example with authentication, headers and payloads. 

> It is worth noting that in real-world scenarios, requests do not happen in a vacuum: they are often handling data retrieved previously, possibly by earlier API calls. Therefore, some mechanism to gather this data and inject it into the request is often needed.

Let's dive in deeper into each point.

### Configurable HTTP request

There is a large variety of valid requests that a user might make to a given endpoint. Being able to customise all aspects of our test request is therefore fundamental. Key aspects are:

1. Method, like `GET`, `PUT`, `POST`, `DELETE`, etc
2. Headers, like `Accept`, `Authorization`, `Content-Type`, `Cookie`, `User-Agent`, etc
3. [Query parameters](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Identifying_resources_on_the_Web#query)

![TODO](/guides/images/guides-checkly-swagger.png)

Essentially, we are trying to craft a complete request for exact endpoint. Not only that, but we might want to have multiple requests set up to cover specific options or negative cases, too.

One such case can be where user-specified parameters such as pagination and timeframes might largely change the response. This is exemplified by the `List Customers` method in [Stripe's Customer API](https://stripe.com/docs/api/customers/list?lang=curl), which we can use to query elements in very different ways, such as by just specifying a limit of results or asking for all results linked to a specific creation date. In this case, both of the following cases are worth monitoring:

```sh
curl https://api.stripe.com/v1/customers \
  -u sk_test_4eC39HqLyjWDarjtT1zdp7dc: \
  -d limit=3 \
  -G
```

```sh
curl https://api.stripe.com/v1/customers \
  -u sk_test_4eC39HqLyjWDarjtT1zdp7dc: \
  -d created=1616519668 \
  -G
```

If we chose to set up a call using Javascript, for example, we could achieve the same call as in the first case above using [axios](https://github.com/axios/axios):

```js
const { default: axios } = require("axios");
const AUTH_TOKEN = Buffer.from(process.env.API_KEY).toString('base64')

axios({
    method: 'get',
    url: 'https://api.stripe.com/v1/customers',
    headers: { 
        'Authorization': `Basic ${AUTH_TOKEN}`,
        'content-type': 'application/x-www-form-urlencoded'
    },
    data: 'limit=3'
}).then((response)=> {
    console.log(response.data)
})
```

### Assertions

To validate the API response, we should be able to check against

1. Status code
2. Headers
3. Body

Let's look at an example: creating a customer via the [Stripe Customer API](https://stripe.com/docs/api/customers/create?lang=curl). Since we are not the API's developers, we are assuming the result we get running call right now is correct and can be used to model our assertions. Let's run the following curl command in verbose mode:

```sh
curl https://api.stripe.com/v1/customers \
  -u sk_test_4eC39HqLyjWDarjtT1zdp7dc: \
  -d description="My First Test Customer (created for API docs)"
```

Within the lengthy output we find the respose (in curl denoted by the '<' symbol), and in it all the important details we need for our assertions.

First, we notice the successful status code:

```
< HTTP/2 200
```

After that, we can see the headers, which we might want to check for:

```
< content-type: application/json
< content-length: 1190
< access-control-allow-credentials: true
< access-control-allow-methods: GET, POST, HEAD, OPTIONS, DELETE
< access-control-allow-origin: *
< access-control-expose-headers: Request-Id, Stripe-Manage-Version, X-Stripe-External-Auth-Required, X-Stripe-Privileged-Session-Required
< access-control-max-age: 300
< cache-control: no-cache, no-store
< request-id: req_S9P5NqvZXzvvS0
< stripe-version: 2019-02-19
< x-stripe-c-cost: 0
< strict-transport-security: max-age=31556926; includeSubDomains; preload
```

And finally the response body, which we might want to inspect to ensure the right data is being sent back:

```
{ 
  "id": "cus_JAp37QquOLWbRs",
  "object": "customer",
  "account_balance": 0,
  "address": null,
  "balance": 0,
  "created": 1616579618,
  [clipped]
```

We could expand on our previous code example by add adding an assertion library, such as [chai's](https://www.chaijs.com/api/assert/) or [Jest expect](https://jestjs.io/docs/expect):

```js
const { default: axios } = require("axios");
const expect = require('expect')

const AUTH_TOKEN = Buffer.from(process.env.API_KEY).toString('base64')

axios({
    method: 'get',
    url: 'https://api.stripe.com/v1/customers',
    headers: { 
        'Authorization': `Basic ${AUTH_TOKEN}`,
        'content-type': 'application/x-www-form-urlencoded'
    },
    data: 'limit=3'
}).then((response)=> {
    console.log(response.data)
    expect(response.status).toBe(200) // 1) assert again status code 
    expect(response.headers['content-type']).toBe('application/json') // 2) assert against header
    expect(response.data['has_more']).toBe(true) // 3) assert against body
})
```

We are now asserting against all three point mentioned above. Nothing would prevent you from adding additional assertions against both headers and body conditions.

### Response time thresholds

Having an endpoint return the correct result is only half the battle. It is imperative that the response reaches the user quickly enough not to disrupt any dependent workflow. In the worst case, where the response time exceeds what the end user is prepared to wait, a performance failure is undistinguishable from a functional one.

The easiest way to handle this requirement would be to assert that the specific response time be lower than a certain value, or even just set a timeout for our axios request by adding the `timeout: 7500` property in the previously shown request config.

Instead of simply asserting against a specific response, we might want to set different thresholds: based on the nature of our service, a 2x slowdown might still leave it in what we define as an operational state, while a 10x one might not.

## Scheduled API checks on Checkly

![TODO](/guides/images/guides-checkly-dashboard-short.png)

Checkly specialises in API monitoring and allows users to run API checks automatically on a schedule. An API check is comprised of the following components.

### The main HTTP request

The most basic building block of our API check is the main HTTP request. This can be fully configured in its method, url, parameters and body to fully reproduce a real-world web API call.

![TODO](/guides/images/guides-checkly-stripe-check.png)

### Assertions

Assertions allow us to check for every key aspect of the response. A check with one or more failing assertions will enter failing state and trigger any connected alert channel.

![TODO](/guides/images/guides-checkly-assertions.png)

In this example, we are checking against:

1. The status code, expected to be `200`.
2. The id of one of the customers returned as part of the response's JSON body. Here we could assert a specific value, but in this case we are happy with just verifying that the field is not empty.
3. The value of the `Content-Encoding` header, expected to equal `gzip`.

### Response time limits

Response time limits enable us to set different thresholds to decide exactly which response time maps to a hard failure, a pass or a degradation. We can use transitions between these states to trigger different kinds of alerts using our preferred channels.

![TODO](/guides/images/guides-checkly-response-limits.png)

### Setup and teardown methods

TODO Setup scripts give you access to properties like the URL, headers and query parameters of the HTTP request as well as all environment variables. Popular use cases are signing HMAC requests, requesting tokens and setting up test data.
Teardown scripts give you access to all the same data as the setup scripts plus the response object, allowing you to read and modify the response. Use cases are cleaning up test data and scrubbing sensitive response data for regulatory reasons.

TODO redo example with stripe API?

TODO API checks can be defined as code -> check MaC

TODO re-read docs for non obvious tidbits

THIS works outside the jamstack too
GRAPHQL too