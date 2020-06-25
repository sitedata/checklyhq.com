---
title: Checkly API
language_tabs:
  - shell: curl
toc_footers: []
includes: []
search: true
highlight_theme: darkula
headingLevel: 2

---

<h1 id="checkly-api">Checkly API V1 (beta)</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Checkly public API

Base URLs:

* <a href="https://api.checklyhq.com/">https://api.checklyhq.com/</a>

# Authentication

The Checkly API uses API keys to authenticate requests. You can manage your API keys in the
[Checkly account settings](https://app.checklyhq.com/account/api-keys). Your API key is like a password: keep it secure!

Authentication to the API is performed using the bearer auth method in the Authorization header.

For example, use `-H "Authorization: Bearer <API_KEY>"` when using cURL.

All API requests must be made over HTTPS. Calls made over plain HTTP will fail.
API requests without authentication will also fail.

<h1 id="checkly-api-alert-channels">Alert channels</h1>

## List all alert channels

<a id="opIdgetV1Alertchannels"></a>

> Code samples

```shell
curl -X GET https://api.checklyhq.com/v1/alert-channels \
 -H 'Accept: application/json' \
 -H 'Authorization: Bearer API_KEY'

```

`GET /v1/alert-channels`

Lists all configured alert channels and their subscribed checks.

<h3 id="list-all-alert-channels-parameters">Parameters</h3>

|Name|In|Type|Description|
|---|---|---|---|---|
|limit|query|number|none|
|page|query|number|none|

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "type": "string",
    "config": {},
    "subscriptions": [
      {
        "id": 0,
        "checkId": "string",
        "activated": true
      }
    ],
    "created_at": "2020-06-23",
    "updated_at": "2020-06-23"
  }
]
```

<h3 id="list-all-alert-channels-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful|[AlertChannelsList](#schemaalertchannelslist)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|[Model_1](#schemamodel_1)|

## Retrieve an alert channel

<a id="opIdgetV1AlertchannelsId"></a>

> Code samples

```shell
curl -X GET https://api.checklyhq.com/v1/alert-channels/{id} \
 -H 'Accept: application/json' \
 -H 'Authorization: Bearer API_KEY'

```

`GET /v1/alert-channels/{id}`

Show details of a specific alert channel.

<h3 id="retrieve-an-alert-channel-parameters">Parameters</h3>

|Name|In|Type|Description|
|---|---|---|---|---|
|id<br><div class="requiredParam">(required)</div>|path|number|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "type": "string",
  "config": {},
  "subscriptions": [
    {
      "id": 0,
      "checkId": "string",
      "activated": true
    }
  ],
  "created_at": "2020-06-23",
  "updated_at": "2020-06-23"
}
```

<h3 id="retrieve-an-alert-channel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful|[AlertChannel](#schemaalertchannel)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|[Model_1](#schemamodel_1)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|[Model_1](#schemamodel_1)|

## Update the subscriptions of an alert channel

<a id="opIdputV1AlertchannelsIdSubscriptions"></a>

> Code samples

```shell
curl -X PUT https://api.checklyhq.com/v1/alert-channels/{id}/subscriptions \
 -H 'Content-Type: application/json' \
 -H 'Accept: application/json' \
 -H 'Authorization: Bearer API_KEY'

```

`PUT /v1/alert-channels/{id}/subscriptions`

Update the subscriptions of an alert channel. Use this to add a check to an alert channel so failure and recovery alerts are send out for that check.

> Body parameter

```json
{
  "id": 0,
  "checkId": "string",
  "activated": true
}
```

<h3 id="update-the-subscriptions-of-an-alert-channel-parameters">Parameters</h3>

|Name|In|Type|Description|
|---|---|---|---|---|
|id<br><div class="requiredParam">(required)</div>|path|number|none|
|body|body|[SubscriptionSchema](#schemasubscriptionschema)|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "checkId": "string",
  "activated": true
}
```

<h3 id="update-the-subscriptions-of-an-alert-channel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful|[SubscriptionSchema](#schemasubscriptionschema)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|[Model_1](#schemamodel_1)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|[Model_1](#schemamodel_1)|

<h1 id="checkly-api-check-groups">Check groups</h1>

## List all check groups

<a id="opIdgetV1Checkgroups"></a>

> Code samples

```shell
curl -X GET https://api.checklyhq.com/v1/check-groups \
 -H 'Accept: application/json' \
 -H 'Authorization: Bearer API_KEY'

```

`GET /v1/check-groups`

Lists all current check groups in your account. The "checks" property is an array of check UUID's for convenient referencing. It is read only and you cannot use it to add checks to a group.

<h3 id="list-all-check-groups-parameters">Parameters</h3>

|Name|In|Type|Description|
|---|---|---|---|---|
|limit|query|number|none|
|page|query|number|none|

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "name": "string",
    "activated": true,
    "muted": true,
    "tags": [
      "string"
    ],
    "locations": [
      "string"
    ],
    "concurrency": 3,
    "apiCheckDefaults": {
      "url": "",
      "headers": [],
      "queryParameters": [],
      "assertions": [],
      "basicAuth": {
        "username": "",
        "password": ""
      }
    },
    "browserCheckDefaults": {},
    "environmentVariables": [
      {
        "key": "string",
        "value": "",
        "locked": false
      }
    ],
    "doubleCheck": true,
    "useGlobalAlertSettings": true,
    "alertSettings": {
      "escalationType": "RUN_BASED",
      "runBasedEscalation": {
        "failedRunThreshold": 1
      },
      "timeBasedEscalation": {
        "minutesFailingThreshold": 5
      },
      "reminders": {
        "amount": 0,
        "interval": 5
      },
      "sslCertificates": {
        "enabled": true,
        "alertThreshold": 30
      }
    },
    "alertChannelSubscriptions": [
      {
        "alertChannelId": 0,
        "activated": true
      }
    ],
    "setupSnippetId": 0,
    "tearDownSnippetId": 0,
    "localSetupScript": "string",
    "localTearDownScript": "string",
    "created_at": "2020-06-23",
    "updated_at": "2020-06-23"
  }
]
```

<h3 id="list-all-check-groups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful|[CheckGroupList](#schemacheckgrouplist)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|[Model_1](#schemamodel_1)|

## Create a check group

<a id="opIdpostV1Checkgroups"></a>

> Code samples

```shell
curl -X POST https://api.checklyhq.com/v1/check-groups \
 -H 'Content-Type: application/json' \
 -H 'Accept: application/json' \
 -H 'Authorization: Bearer API_KEY'

```

`POST /v1/check-groups`

Creates a new check group. You can add checks to the group by setting the "groupId" property of individual checks.

> Body parameter

```json
{
  "name": "string",
  "activated": true,
  "muted": false,
  "tags": [
    "string"
  ],
  "locations": [
    "us-east-1"
  ],
  "concurrency": 3,
  "apiCheckDefaults": {},
  "browserCheckDefaults": {},
  "environmentVariables": [
    {
      "key": "string",
      "value": "",
      "locked": false
    }
  ],
  "doubleCheck": true,
  "useGlobalAlertSettings": true,
  "alertSettings": {
    "escalationType": "RUN_BASED",
    "runBasedEscalation": {
      "failedRunThreshold": 1
    },
    "timeBasedEscalation": {
      "minutesFailingThreshold": 5
    },
    "reminders": {
      "amount": 0,
      "interval": 5
    },
    "sslCertificates": {
      "enabled": true,
      "alertThreshold": 30
    }
  },
  "alertChannelSubscriptions": [
    {
      "alertChannelId": 0,
      "activated": true
    }
  ],
  "setupSnippetId": 0,
  "tearDownSnippetId": 0,
  "localSetupScript": "string",
  "localTearDownScript": "string"
}
```

<h3 id="create-a-check-group-parameters">Parameters</h3>

|Name|In|Type|Description|
|---|---|---|---|---|
|body|body|[Model_5](#schemamodel_5)|none|

> Example responses

> 201 Response

```json
{
  "id": 0,
  "name": "string",
  "activated": true,
  "muted": true,
  "tags": [
    "string"
  ],
  "locations": [
    "string"
  ],
  "concurrency": 3,
  "apiCheckDefaults": {
    "url": "",
    "headers": [],
    "queryParameters": [],
    "assertions": [],
    "basicAuth": {
      "username": "",
      "password": ""
    }
  },
  "browserCheckDefaults": {},
  "environmentVariables": [
    {
      "key": "string",
      "value": "",
      "locked": false
    }
  ],
  "doubleCheck": true,
  "useGlobalAlertSettings": true,
  "alertSettings": {
    "escalationType": "RUN_BASED",
    "runBasedEscalation": {
      "failedRunThreshold": 1
    },
    "timeBasedEscalation": {
      "minutesFailingThreshold": 5
    },
    "reminders": {
      "amount": 0,
      "interval": 5
    },
    "sslCertificates": {
      "enabled": true,
      "alertThreshold": 30
    }
  },
  "alertChannelSubscriptions": [
    {
      "alertChannelId": 0,
      "activated": true
    }
  ],
  "setupSnippetId": 0,
  "tearDownSnippetId": 0,
  "localSetupScript": "string",
  "localTearDownScript": "string",
  "created_at": "2020-06-23",
  "updated_at": "2020-06-23"
}
```

<h3 id="create-a-check-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Created|[Model_2](#schemamodel_2)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|[Model_1](#schemamodel_1)|
|402|[Payment Required](https://tools.ietf.org/html/rfc7231#section-6.5.2)|Payment Required|[Model_1](#schemamodel_1)|

## Retrieve one check in a specific group with group settings applied

<a id="opIdgetV1CheckgroupsGroupidChecksCheckid"></a>

> Code samples

```shell
curl -X GET https://api.checklyhq.com/v1/check-groups/{groupId}/checks/{checkId} \
 -H 'Accept: application/json' \
 -H 'Authorization: Bearer API_KEY'

```

`GET /v1/check-groups/{groupId}/checks/{checkId}`

Show details of one check in a specific check group with the group settings applied.

<h3 id="retrieve-one-check-in-a-specific-group-with-group-settings-applied-parameters">Parameters</h3>

|Name|In|Type|Description|
|---|---|---|---|---|
|groupId<br><div class="requiredParam">(required)</div>|path|number|none|
|checkId<br><div class="requiredParam">(required)</div>|path|string|none|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "name": "string",
  "checkType": "BROWSER",
  "frequency": 5,
  "activated": true,
  "muted": false,
  "doubleCheck": true,
  "sslCheck": true,
  "shouldFail": true,
  "locations": [
    "us-east-1"
  ],
  "request": {
    "method": "GET",
    "url": "localhost",
    "followRedirects": true,
    "body": "",
    "bodyType": "NONE",
    "headers": [],
    "queryParameters": [],
    "assertions": [],
    "basicAuth": {
      "username": "",
      "password": ""
    }
  },
  "script": "string",
  "environmentVariables": [
    {
      "key": "string",
      "value": "",
      "locked": false
    }
  ],
  "tags": [
    "string"
  ],
  "setupSnippetId": 0,
  "tearDownSnippetId": 0,
  "localSetupScript": "string",
  "localTearDownScript": "string",
  "alertSettings": {
    "escalationType": "RUN_BASED",
    "runBasedEscalation": {
      "failedRunThreshold": 1
    },
    "timeBasedEscalation": {
      "minutesFailingThreshold": 5
    },
    "reminders": {
      "amount": 0,
      "interval": 5
    },
    "sslCertificates": {
      "enabled": true,
      "alertThreshold": 30
    }
  },
  "useGlobalAlertSettings": true,
  "degradedResponseTime": 10000,
  "maxResponseTime": 20000,
  "groupId": 0,
  "groupOrder": 0,
  "alertChannelSubscriptions": [
    {
      "alertChannelId": 0,
      "activated": true
    }
  ],
  "alertChannels": {
    "email": [
      {
        "address": ""
      }
    ],
    "webhook": [
      {
        "name": "",
        "url": "",
        "method": "POST",
        "headers": [],
        "queryParameters": []
      }
    ],
    "slack": [
      {
        "url": ""
      }
    ],
    "sms": [
      {
        "number": "",
        "name": "string"
      }
    ]
  },
  "created_at": "2020-06-23",
  "updated_at": "2020-06-23"
}
```

<h3 id="retrieve-one-check-in-a-specific-group-with-group-settings-applied-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful|[CheckGroupCheck](#schemacheckgroupcheck)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|[Model_1](#schemamodel_1)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|[Model_1](#schemamodel_1)|

## Delete a check group.

<a id="opIddeleteV1CheckgroupsId"></a>

> Code samples

```shell
curl -X DELETE https://api.checklyhq.com/v1/check-groups/{id} \
 -H 'Accept: application/json' \
 -H 'Authorization: Bearer API_KEY'

```

`DELETE /v1/check-groups/{id}`

Permanently removes a check group. You cannot delete a check group if it still contains checks.

<h3 id="delete-a-check-group.-parameters">Parameters</h3>

|Name|In|Type|Description|
|---|---|---|---|---|
|id<br><div class="requiredParam">(required)</div>|path|number|none|

> Example responses

> 204 Response

```json
"string"
```

<h3 id="delete-a-check-group.-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|No Content|string|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|[Model_1](#schemamodel_1)|
|409|[Conflict](https://tools.ietf.org/html/rfc7231#section-6.5.8)|Conflict|[Model_1](#schemamodel_1)|

## Retrieve a check group

<a id="opIdgetV1CheckgroupsId"></a>

> Code samples

```shell
curl -X GET https://api.checklyhq.com/v1/check-groups/{id} \
 -H 'Accept: application/json' \
 -H 'Authorization: Bearer API_KEY'

```

`GET /v1/check-groups/{id}`

Show details of a specific check group

<h3 id="retrieve-a-check-group-parameters">Parameters</h3>

|Name|In|Type|Description|
|---|---|---|---|---|
|id<br><div class="requiredParam">(required)</div>|path|number|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "name": "string",
  "activated": true,
  "muted": true,
  "tags": [
    "string"
  ],
  "locations": [
    "string"
  ],
  "concurrency": 3,
  "apiCheckDefaults": {
    "url": "",
    "headers": [],
    "queryParameters": [],
    "assertions": [],
    "basicAuth": {
      "username": "",
      "password": ""
    }
  },
  "browserCheckDefaults": {},
  "environmentVariables": [
    {
      "key": "string",
      "value": "",
      "locked": false
    }
  ],
  "doubleCheck": true,
  "useGlobalAlertSettings": true,
  "alertSettings": {
    "escalationType": "RUN_BASED",
    "runBasedEscalation": {
      "failedRunThreshold": 1
    },
    "timeBasedEscalation": {
      "minutesFailingThreshold": 5
    },
    "reminders": {
      "amount": 0,
      "interval": 5
    },
    "sslCertificates": {
      "enabled": true,
      "alertThreshold": 30
    }
  },
  "alertChannelSubscriptions": [
    {
      "alertChannelId": 0,
      "activated": true
    }
  ],
  "setupSnippetId": 0,
  "tearDownSnippetId": 0,
  "localSetupScript": "string",
  "localTearDownScript": "string",
  "created_at": "2020-06-23",
  "updated_at": "2020-06-23"
}
```

<h3 id="retrieve-a-check-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful|[Model_2](#schemamodel_2)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|[Model_1](#schemamodel_1)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|[Model_1](#schemamodel_1)|

## Update a check group

<a id="opIdputV1CheckgroupsId"></a>

> Code samples

```shell
curl -X PUT https://api.checklyhq.com/v1/check-groups/{id} \
 -H 'Content-Type: application/json' \
 -H 'Accept: application/json' \
 -H 'Authorization: Bearer API_KEY'

```

`PUT /v1/check-groups/{id}`

Updates a check group.

> Body parameter

```json
{
  "name": "string",
  "activated": true,
  "muted": false,
  "tags": [
    "string"
  ],
  "locations": [
    "us-east-1"
  ],
  "concurrency": 3,
  "apiCheckDefaults": {},
  "browserCheckDefaults": {},
  "environmentVariables": [
    {
      "key": "string",
      "value": "",
      "locked": false
    }
  ],
  "doubleCheck": true,
  "useGlobalAlertSettings": true,
  "alertSettings": {
    "escalationType": "RUN_BASED",
    "runBasedEscalation": {
      "failedRunThreshold": 1
    },
    "timeBasedEscalation": {
      "minutesFailingThreshold": 5
    },
    "reminders": {
      "amount": 0,
      "interval": 5
    },
    "sslCertificates": {
      "enabled": true,
      "alertThreshold": 30
    }
  },
  "alertChannelSubscriptions": [
    {
      "alertChannelId": 0,
      "activated": true
    }
  ],
  "setupSnippetId": 0,
  "tearDownSnippetId": 0,
  "localSetupScript": "string",
  "localTearDownScript": "string"
}
```

<h3 id="update-a-check-group-parameters">Parameters</h3>

|Name|In|Type|Description|
|---|---|---|---|---|
|id<br><div class="requiredParam">(required)</div>|path|number|none|
|body|body|[Model_10](#schemamodel_10)|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "name": "string",
  "activated": true,
  "muted": true,
  "tags": [
    "string"
  ],
  "locations": [
    "string"
  ],
  "concurrency": 3,
  "apiCheckDefaults": {
    "url": "",
    "headers": [],
    "queryParameters": [],
    "assertions": [],
    "basicAuth": {
      "username": "",
      "password": ""
    }
  },
  "browserCheckDefaults": {},
  "environmentVariables": [
    {
      "key": "string",
      "value": "",
      "locked": false
    }
  ],
  "doubleCheck": true,
  "useGlobalAlertSettings": true,
  "alertSettings": {
    "escalationType": "RUN_BASED",
    "runBasedEscalation": {
      "failedRunThreshold": 1
    },
    "timeBasedEscalation": {
      "minutesFailingThreshold": 5
    },
    "reminders": {
      "amount": 0,
      "interval": 5
    },
    "sslCertificates": {
      "enabled": true,
      "alertThreshold": 30
    }
  },
  "alertChannelSubscriptions": [
    {
      "alertChannelId": 0,
      "activated": true
    }
  ],
  "setupSnippetId": 0,
  "tearDownSnippetId": 0,
  "localSetupScript": "string",
  "localTearDownScript": "string",
  "created_at": "2020-06-23",
  "updated_at": "2020-06-23"
}
```

<h3 id="update-a-check-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful|[Model_2](#schemamodel_2)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|[Model_1](#schemamodel_1)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|[Model_1](#schemamodel_1)|

## Retrieve all checks in a specific group with group settings applied

<a id="opIdgetV1CheckgroupsIdChecks"></a>

> Code samples

```shell
curl -X GET https://api.checklyhq.com/v1/check-groups/{id}/checks \
 -H 'Accept: application/json' \
 -H 'Authorization: Bearer API_KEY'

```

`GET /v1/check-groups/{id}/checks`

Lists all checks in a specific check group with the group settings applied.

<h3 id="retrieve-all-checks-in-a-specific-group-with-group-settings-applied-parameters">Parameters</h3>

|Name|In|Type|Description|
|---|---|---|---|---|
|id<br><div class="requiredParam">(required)</div>|path|number|none|
|limit|query|number|none|
|page|query|number|none|

> Example responses

> 200 Response

```json
[
  {
    "id": "string",
    "name": "string",
    "checkType": "BROWSER",
    "frequency": 5,
    "activated": true,
    "muted": false,
    "doubleCheck": true,
    "sslCheck": true,
    "shouldFail": true,
    "locations": [
      "us-east-1"
    ],
    "request": {
      "method": "GET",
      "url": "localhost",
      "followRedirects": true,
      "body": "",
      "bodyType": "NONE",
      "headers": [],
      "queryParameters": [],
      "assertions": [],
      "basicAuth": {
        "username": "",
        "password": ""
      }
    },
    "script": "string",
    "environmentVariables": [
      {
        "key": "string",
        "value": "",
        "locked": false
      }
    ],
    "tags": [
      "string"
    ],
    "setupSnippetId": 0,
    "tearDownSnippetId": 0,
    "localSetupScript": "string",
    "localTearDownScript": "string",
    "alertSettings": {
      "escalationType": "RUN_BASED",
      "runBasedEscalation": {
        "failedRunThreshold": 1
      },
      "timeBasedEscalation": {
        "minutesFailingThreshold": 5
      },
      "reminders": {
        "amount": 0,
        "interval": 5
      },
      "sslCertificates": {
        "enabled": true,
        "alertThreshold": 30
      }
    },
    "useGlobalAlertSettings": true,
    "degradedResponseTime": 10000,
    "maxResponseTime": 20000,
    "groupId": 0,
    "groupOrder": 0,
    "alertChannelSubscriptions": [
      {
        "alertChannelId": 0,
        "activated": true
      }
    ],
    "alertChannels": {
      "email": [
        {
          "address": ""
        }
      ],
      "webhook": [
        {
          "name": "",
          "url": "",
          "method": "POST",
          "headers": [],
          "queryParameters": []
        }
      ],
      "slack": [
        {
          "url": ""
        }
      ],
      "sms": [
        {
          "number": "",
          "name": "string"
        }
      ]
    },
    "created_at": "2020-06-23",
    "updated_at": "2020-06-23"
  }
]
```

<h3 id="retrieve-all-checks-in-a-specific-group-with-group-settings-applied-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful|[CheckGroupChecksList](#schemacheckgroupcheckslist)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|[Model_1](#schemamodel_1)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|[Model_1](#schemamodel_1)|

<h1 id="checkly-api-check-results-rolled-up-">Check results (rolled up)</h1>

## Lists all rolled up check results

<a id="opIdgetV1CheckresultsrolledupCheckid"></a>

> Code samples

```shell
curl -X GET https://api.checklyhq.com/v1/check-results-rolled-up/{checkId} \
 -H 'Accept: application/json' \
 -H 'Authorization: Bearer API_KEY'

```

`GET /v1/check-results-rolled-up/{checkId}`

Lists the rolled up check results *per hour* for a specific check. <br><br>This means that one hour after a raw result for a check is recorded, it is also available in the rolled up results. <br><br>The result contains all discrete response times and aggregated counters for failing and successful check. Using this data you can reconstruct averages, percentiles and ratios, approximating the individual raw check results very closely. <br><br>You can filter by check type and result type to narrow down the list. Use the `to` and `from` parameters to specify a date range. Depending on the check type, some fields might be null.<br><br>Note that results from this endpoint start at roughly *2019-4-11*, earlier results are not available.

<h3 id="lists-all-rolled-up-check-results-parameters">Parameters</h3>

|Name|In|Type|Description|
|---|---|---|---|---|
|checkId<br><div class="requiredParam">(required)</div>|path|string|none|
|limit|query|number|none|
|page|query|number|none|
|location|query|string|Provide a data center location, e.g. "eu-west-1" to filter by location|
|to|query|number|Select results up to this UNIX timestamp date, i.e. < date|
|from|query|number|Select results from this UNIX timestamp date, i.e. >= date|

> Example responses

> 200 Response

```json
[
  {
    "checkId": "string",
    "runLocation": "string",
    "errorCount": 0,
    "failureCount": 0,
    "resultsCount": 0,
    "hour": "2020-06-23",
    "responseTimes": [
      "string"
    ]
  }
]
```

<h3 id="lists-all-rolled-up-check-results-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful|[RolledUpCheckResultsList](#schemarolledupcheckresultslist)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|[Model_1](#schemamodel_1)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|[Model_1](#schemamodel_1)|

<h1 id="checkly-api-check-results">Check results</h1>

## Lists all check results

<a id="opIdgetV1CheckresultsCheckid"></a>

> Code samples

```shell
curl -X GET https://api.checklyhq.com/v1/check-results/{checkId} \
 -H 'Accept: application/json' \
 -H 'Authorization: Bearer API_KEY'

```

`GET /v1/check-results/{checkId}`

Lists the full, raw check results for a specific check. We keep raw results for 30 days. After 30 days they are erased. However we keep the rolled up results for an indefinite period. <br><br> You can filter by check type and result type to narrow down the list. Use the `to` and `from` parameters to specify a date range (UNIX timestamp in seconds). Depending on the check type, some fields might be null.

<h3 id="lists-all-check-results-parameters">Parameters</h3>

|Name|In|Type|Description|
|---|---|---|---|---|
|checkId<br><div class="requiredParam">(required)</div>|path|string|none|
|limit|query|number|none|
|page|query|number|none|
|location|query|string|Provide a data center location, e.g. "eu-west-1" to filter by location|
|to|query|number|Select results up to this UNIX timestamp date in seconds, i.e. < date|
|from|query|number|Select results from this UNIX timestamp date in seconds, i.e. >= date|
|checkType|query|string|The type of the check|
|hasFailures|query|boolean|Check result has one or more failures|

#### Enumerated Values

|Parameter|Value|
|---|---|
|checkType|BROWSER|
|checkType|API|

> Example responses

> 200 Response

```json
[
  {
    "id": "string",
    "name": "string",
    "checkId": "string",
    "hasFailures": true,
    "hasErrors": true,
    "isDegraded": true,
    "overMaxResponseTime": true,
    "runLocation": "string",
    "startedAt": "2020-06-23",
    "stoppedAt": "2020-06-23",
    "created_at": "2020-06-23",
    "responseTime": 0,
    "apiCheckResult": {},
    "browserCheckResult": {},
    "checkRunId": 0,
    "attempts": 0
  }
]
```

<h3 id="lists-all-check-results-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful|[CheckResultsList](#schemacheckresultslist)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|[Model_1](#schemamodel_1)|

## Retrieve a check result

<a id="opIdgetV1CheckresultsCheckidCheckresultid"></a>

> Code samples

```shell
curl -X GET https://api.checklyhq.com/v1/check-results/{checkId}/{checkResultId} \
 -H 'Accept: application/json' \
 -H 'Authorization: Bearer API_KEY'

```

`GET /v1/check-results/{checkId}/{checkResultId}`

Show details of a specific check result.

<h3 id="retrieve-a-check-result-parameters">Parameters</h3>

|Name|In|Type|Description|
|---|---|---|---|---|
|checkId<br><div class="requiredParam">(required)</div>|path|string|none|
|checkResultId<br><div class="requiredParam">(required)</div>|path|string|none|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "name": "string",
  "checkId": "string",
  "hasFailures": true,
  "hasErrors": true,
  "isDegraded": true,
  "overMaxResponseTime": true,
  "runLocation": "string",
  "startedAt": "2020-06-23",
  "stoppedAt": "2020-06-23",
  "created_at": "2020-06-23",
  "responseTime": 0,
  "apiCheckResult": {},
  "browserCheckResult": {},
  "checkRunId": 0,
  "attempts": 0
}
```

<h3 id="retrieve-a-check-result-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful|[CheckResult](#schemacheckresult)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|[Model_1](#schemamodel_1)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|[Model_1](#schemamodel_1)|

<h1 id="checkly-api-check-status">Check status</h1>

## List all check statuses

<a id="opIdgetV1Checkstatuses"></a>

> Code samples

```shell
curl -X GET https://api.checklyhq.com/v1/check-statuses \
 -H 'Accept: application/json' \
 -H 'Authorization: Bearer API_KEY'

```

`GET /v1/check-statuses`

Shows the current status information for all checks in your account. The check status records are continuously updatedas new check results come in.

> Example responses

> 200 Response

```json
[
  {
    "checkId": "string",
    "hasFailures": true,
    "hasErrors": true,
    "isDegraded": true,
    "longestRun": 0,
    "shortestRun": 0,
    "lastRunLocation": "string",
    "lastCheckRunId": "string",
    "sslDaysRemaining": 0,
    "created_at": "2020-06-23",
    "updated_at": "2020-06-23"
  }
]
```

<h3 id="list-all-check-statuses-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful|[CheckStatusList](#schemacheckstatuslist)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|[Model_1](#schemamodel_1)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|[Model_1](#schemamodel_1)|

## Retrieve check status details

<a id="opIdgetV1CheckstatusesCheckid"></a>

> Code samples

```shell
curl -X GET https://api.checklyhq.com/v1/check-statuses/{checkId} \
 -H 'Accept: application/json' \
 -H 'Authorization: Bearer API_KEY'

```

`GET /v1/check-statuses/{checkId}`

Show the current status information for a specific check.

<h3 id="retrieve-check-status-details-parameters">Parameters</h3>

|Name|In|Type|Description|
|---|---|---|---|---|
|checkId<br><div class="requiredParam">(required)</div>|path|string|none|

> Example responses

> 200 Response

```json
{
  "checkId": "string",
  "hasFailures": true,
  "hasErrors": true,
  "isDegraded": true,
  "longestRun": 0,
  "shortestRun": 0,
  "lastRunLocation": "string",
  "lastCheckRunId": "string",
  "sslDaysRemaining": 0,
  "created_at": "2020-06-23",
  "updated_at": "2020-06-23"
}
```

<h3 id="retrieve-check-status-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful|[CheckStatus](#schemacheckstatus)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|[Model_1](#schemamodel_1)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|[Model_1](#schemamodel_1)|

<h1 id="checkly-api-checks">Checks</h1>

## List all checks

<a id="opIdgetV1Checks"></a>

> Code samples

```shell
curl -X GET https://api.checklyhq.com/v1/checks \
 -H 'Accept: application/json' \
 -H 'Authorization: Bearer API_KEY'

```

`GET /v1/checks`

Lists all current checks in your account.

<h3 id="list-all-checks-parameters">Parameters</h3>

|Name|In|Type|Description|
|---|---|---|---|---|
|limit|query|number|none|
|page|query|number|none|

> Example responses

> 200 Response

```json
[
  {
    "id": "string",
    "name": "string",
    "checkType": "BROWSER",
    "frequency": 5,
    "activated": true,
    "muted": false,
    "doubleCheck": true,
    "sslCheck": true,
    "shouldFail": true,
    "locations": [
      "us-east-1"
    ],
    "request": {
      "method": "GET",
      "url": "localhost",
      "followRedirects": true,
      "body": "",
      "bodyType": "NONE",
      "headers": [],
      "queryParameters": [],
      "assertions": [],
      "basicAuth": {
        "username": "",
        "password": ""
      }
    },
    "script": "string",
    "environmentVariables": [
      {
        "key": "string",
        "value": "",
        "locked": false
      }
    ],
    "tags": [
      "string"
    ],
    "setupSnippetId": 0,
    "tearDownSnippetId": 0,
    "localSetupScript": "string",
    "localTearDownScript": "string",
    "alertSettings": {
      "escalationType": "RUN_BASED",
      "runBasedEscalation": {
        "failedRunThreshold": 1
      },
      "timeBasedEscalation": {
        "minutesFailingThreshold": 5
      },
      "reminders": {
        "amount": 0,
        "interval": 5
      },
      "sslCertificates": {
        "enabled": true,
        "alertThreshold": 30
      }
    },
    "useGlobalAlertSettings": true,
    "degradedResponseTime": 10000,
    "maxResponseTime": 20000,
    "groupId": 0,
    "groupOrder": 0,
    "alertChannelSubscriptions": [
      {
        "alertChannelId": 0,
        "activated": true
      }
    ],
    "alertChannels": {
      "email": [
        {
          "address": ""
        }
      ],
      "webhook": [
        {
          "name": "",
          "url": "",
          "method": "POST",
          "headers": [],
          "queryParameters": []
        }
      ],
      "slack": [
        {
          "url": ""
        }
      ],
      "sms": [
        {
          "number": "",
          "name": "string"
        }
      ]
    },
    "created_at": "2020-06-23",
    "updated_at": "2020-06-23"
  }
]
```

<h3 id="list-all-checks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful|[CheckList](#schemachecklist)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|[Model_1](#schemamodel_1)|

## Create a check

<a id="opIdpostV1Checks"></a>

> Code samples

```shell
curl -X POST https://api.checklyhq.com/v1/checks \
 -H 'Content-Type: application/json' \
 -H 'Accept: application/json' \
 -H 'Authorization: Bearer API_KEY'

```

`POST /v1/checks`

Creates a new API or browser check. Will return a `402` when you are over the limit of your plan.
    When using the `globalAlertSetting`, the `alertSetting` can be `null`

> Body parameter

```json
{
  "name": "string",
  "checkType": "BROWSER",
  "frequency": 5,
  "activated": true,
  "muted": false,
  "doubleCheck": true,
  "sslCheck": true,
  "shouldFail": true,
  "locations": [
    "us-east-1"
  ],
  "request": {
    "method": "GET",
    "url": "localhost",
    "followRedirects": true,
    "body": "",
    "bodyType": "NONE",
    "headers": [],
    "queryParameters": [],
    "assertions": [],
    "basicAuth": {
      "username": "",
      "password": ""
    }
  },
  "script": "string",
  "environmentVariables": [
    {
      "key": "string",
      "value": "",
      "locked": false
    }
  ],
  "tags": [
    "string"
  ],
  "setupSnippetId": 0,
  "tearDownSnippetId": 0,
  "localSetupScript": "string",
  "localTearDownScript": "string",
  "alertSettings": {
    "escalationType": "RUN_BASED",
    "runBasedEscalation": {
      "failedRunThreshold": 1
    },
    "timeBasedEscalation": {
      "minutesFailingThreshold": 5
    },
    "reminders": {
      "amount": 0,
      "interval": 5
    },
    "sslCertificates": {
      "enabled": true,
      "alertThreshold": 30
    }
  },
  "useGlobalAlertSettings": true,
  "degradedResponseTime": 10000,
  "maxResponseTime": 20000,
  "groupId": 0,
  "groupOrder": 0
}
```

<h3 id="create-a-check-parameters">Parameters</h3>

|Name|In|Type|Description|
|---|---|---|---|---|
|body|body|[CheckCreate](#schemacheckcreate)|none|

> Example responses

> 201 Response

```json
{
  "id": "string",
  "name": "string",
  "checkType": "BROWSER",
  "frequency": 5,
  "activated": true,
  "muted": false,
  "doubleCheck": true,
  "sslCheck": true,
  "shouldFail": true,
  "locations": [
    "us-east-1"
  ],
  "request": {
    "method": "GET",
    "url": "localhost",
    "followRedirects": true,
    "body": "",
    "bodyType": "NONE",
    "headers": [],
    "queryParameters": [],
    "assertions": [],
    "basicAuth": {
      "username": "",
      "password": ""
    }
  },
  "script": "string",
  "environmentVariables": [
    {
      "key": "string",
      "value": "",
      "locked": false
    }
  ],
  "tags": [
    "string"
  ],
  "setupSnippetId": 0,
  "tearDownSnippetId": 0,
  "localSetupScript": "string",
  "localTearDownScript": "string",
  "alertSettings": {
    "escalationType": "RUN_BASED",
    "runBasedEscalation": {
      "failedRunThreshold": 1
    },
    "timeBasedEscalation": {
      "minutesFailingThreshold": 5
    },
    "reminders": {
      "amount": 0,
      "interval": 5
    },
    "sslCertificates": {
      "enabled": true,
      "alertThreshold": 30
    }
  },
  "useGlobalAlertSettings": true,
  "degradedResponseTime": 10000,
  "maxResponseTime": 20000,
  "groupId": 0,
  "groupOrder": 0,
  "alertChannelSubscriptions": [
    {
      "alertChannelId": 0,
      "activated": true
    }
  ],
  "alertChannels": {
    "email": [
      {
        "address": ""
      }
    ],
    "webhook": [
      {
        "name": "",
        "url": "",
        "method": "POST",
        "headers": [],
        "queryParameters": []
      }
    ],
    "slack": [
      {
        "url": ""
      }
    ],
    "sms": [
      {
        "number": "",
        "name": "string"
      }
    ]
  },
  "created_at": "2020-06-23",
  "updated_at": "2020-06-23"
}
```

<h3 id="create-a-check-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Created|[Check](#schemacheck)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|[Model_1](#schemamodel_1)|
|402|[Payment Required](https://tools.ietf.org/html/rfc7231#section-6.5.2)|Payment Required|[Model_1](#schemamodel_1)|

## Delete a check

<a id="opIddeleteV1ChecksId"></a>

> Code samples

```shell
curl -X DELETE https://api.checklyhq.com/v1/checks/{id} \
 -H 'Accept: application/json' \
 -H 'Authorization: Bearer API_KEY'

```

`DELETE /v1/checks/{id}`

Permanently removes a API or browser check and all its related status and results data.

<h3 id="delete-a-check-parameters">Parameters</h3>

|Name|In|Type|Description|
|---|---|---|---|---|
|id<br><div class="requiredParam">(required)</div>|path|string|none|

> Example responses

> 204 Response

```json
"string"
```

<h3 id="delete-a-check-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|No Content|string|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|[Model_1](#schemamodel_1)|

## Retrieve a check

<a id="opIdgetV1ChecksId"></a>

> Code samples

```shell
curl -X GET https://api.checklyhq.com/v1/checks/{id} \
 -H 'Accept: application/json' \
 -H 'Authorization: Bearer API_KEY'

```

`GET /v1/checks/{id}`

Show details of a specific API or browser check

<h3 id="retrieve-a-check-parameters">Parameters</h3>

|Name|In|Type|Description|
|---|---|---|---|---|
|id<br><div class="requiredParam">(required)</div>|path|string|none|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "name": "string",
  "checkType": "BROWSER",
  "frequency": 5,
  "activated": true,
  "muted": false,
  "doubleCheck": true,
  "sslCheck": true,
  "shouldFail": true,
  "locations": [
    "us-east-1"
  ],
  "request": {
    "method": "GET",
    "url": "localhost",
    "followRedirects": true,
    "body": "",
    "bodyType": "NONE",
    "headers": [],
    "queryParameters": [],
    "assertions": [],
    "basicAuth": {
      "username": "",
      "password": ""
    }
  },
  "script": "string",
  "environmentVariables": [
    {
      "key": "string",
      "value": "",
      "locked": false
    }
  ],
  "tags": [
    "string"
  ],
  "setupSnippetId": 0,
  "tearDownSnippetId": 0,
  "localSetupScript": "string",
  "localTearDownScript": "string",
  "alertSettings": {
    "escalationType": "RUN_BASED",
    "runBasedEscalation": {
      "failedRunThreshold": 1
    },
    "timeBasedEscalation": {
      "minutesFailingThreshold": 5
    },
    "reminders": {
      "amount": 0,
      "interval": 5
    },
    "sslCertificates": {
      "enabled": true,
      "alertThreshold": 30
    }
  },
  "useGlobalAlertSettings": true,
  "degradedResponseTime": 10000,
  "maxResponseTime": 20000,
  "groupId": 0,
  "groupOrder": 0,
  "alertChannelSubscriptions": [
    {
      "alertChannelId": 0,
      "activated": true
    }
  ],
  "alertChannels": {
    "email": [
      {
        "address": ""
      }
    ],
    "webhook": [
      {
        "name": "",
        "url": "",
        "method": "POST",
        "headers": [],
        "queryParameters": []
      }
    ],
    "slack": [
      {
        "url": ""
      }
    ],
    "sms": [
      {
        "number": "",
        "name": "string"
      }
    ]
  },
  "created_at": "2020-06-23",
  "updated_at": "2020-06-23"
}
```

<h3 id="retrieve-a-check-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful|[Check](#schemacheck)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|[Model_1](#schemamodel_1)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|[Model_1](#schemamodel_1)|

## Update a check

<a id="opIdputV1ChecksId"></a>

> Code samples

```shell
curl -X PUT https://api.checklyhq.com/v1/checks/{id} \
 -H 'Content-Type: application/json' \
 -H 'Accept: application/json' \
 -H 'Authorization: Bearer API_KEY'

```

`PUT /v1/checks/{id}`

Updates a new API or browser check.

> Body parameter

```json
{
  "name": "string",
  "checkType": "BROWSER",
  "frequency": 5,
  "activated": true,
  "muted": false,
  "doubleCheck": true,
  "sslCheck": true,
  "shouldFail": true,
  "locations": [
    "us-east-1"
  ],
  "request": {
    "method": "GET",
    "url": "localhost",
    "followRedirects": true,
    "body": "",
    "bodyType": "NONE",
    "headers": [],
    "queryParameters": [],
    "assertions": [],
    "basicAuth": {
      "username": "",
      "password": ""
    }
  },
  "script": "string",
  "environmentVariables": [
    {
      "key": "string",
      "value": "",
      "locked": false
    }
  ],
  "tags": [
    "string"
  ],
  "setupSnippetId": 0,
  "tearDownSnippetId": 0,
  "localSetupScript": "string",
  "localTearDownScript": "string",
  "alertSettings": {
    "escalationType": "RUN_BASED",
    "runBasedEscalation": {
      "failedRunThreshold": 1
    },
    "timeBasedEscalation": {
      "minutesFailingThreshold": 5
    },
    "reminders": {
      "amount": 0,
      "interval": 5
    },
    "sslCertificates": {
      "enabled": true,
      "alertThreshold": 30
    }
  },
  "useGlobalAlertSettings": true,
  "degradedResponseTime": 10000,
  "maxResponseTime": 20000,
  "groupId": 0,
  "groupOrder": 0
}
```

<h3 id="update-a-check-parameters">Parameters</h3>

|Name|In|Type|Description|
|---|---|---|---|---|
|id<br><div class="requiredParam">(required)</div>|path|string|none|
|body|body|[Model_15](#schemamodel_15)|none|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "name": "string",
  "checkType": "BROWSER",
  "frequency": 5,
  "activated": true,
  "muted": false,
  "doubleCheck": true,
  "sslCheck": true,
  "shouldFail": true,
  "locations": [
    "us-east-1"
  ],
  "request": {
    "method": "GET",
    "url": "localhost",
    "followRedirects": true,
    "body": "",
    "bodyType": "NONE",
    "headers": [],
    "queryParameters": [],
    "assertions": [],
    "basicAuth": {
      "username": "",
      "password": ""
    }
  },
  "script": "string",
  "environmentVariables": [
    {
      "key": "string",
      "value": "",
      "locked": false
    }
  ],
  "tags": [
    "string"
  ],
  "setupSnippetId": 0,
  "tearDownSnippetId": 0,
  "localSetupScript": "string",
  "localTearDownScript": "string",
  "alertSettings": {
    "escalationType": "RUN_BASED",
    "runBasedEscalation": {
      "failedRunThreshold": 1
    },
    "timeBasedEscalation": {
      "minutesFailingThreshold": 5
    },
    "reminders": {
      "amount": 0,
      "interval": 5
    },
    "sslCertificates": {
      "enabled": true,
      "alertThreshold": 30
    }
  },
  "useGlobalAlertSettings": true,
  "degradedResponseTime": 10000,
  "maxResponseTime": 20000,
  "groupId": 0,
  "groupOrder": 0,
  "alertChannelSubscriptions": [
    {
      "alertChannelId": 0,
      "activated": true
    }
  ],
  "alertChannels": {
    "email": [
      {
        "address": ""
      }
    ],
    "webhook": [
      {
        "name": "",
        "url": "",
        "method": "POST",
        "headers": [],
        "queryParameters": []
      }
    ],
    "slack": [
      {
        "url": ""
      }
    ],
    "sms": [
      {
        "number": "",
        "name": "string"
      }
    ]
  },
  "created_at": "2020-06-23",
  "updated_at": "2020-06-23"
}
```

<h3 id="update-a-check-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful|[Check](#schemacheck)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|[Model_1](#schemamodel_1)|

<h1 id="checkly-api-dashboards">Dashboards</h1>

## List all dashboards

<a id="opIdgetV1Dashboards"></a>

> Code samples

```shell
curl -X GET https://api.checklyhq.com/v1/dashboards \
 -H 'Accept: application/json' \
 -H 'Authorization: Bearer API_KEY'

```

`GET /v1/dashboards`

Lists all current dashboards in your account.

<h3 id="list-all-dashboards-parameters">Parameters</h3>

|Name|In|Type|Description|
|---|---|---|---|---|
|limit|query|number|none|
|page|query|number|none|

> Example responses

> 200 Response

```json
[
  {
    "customUrl": "string",
    "customDomain": "string",
    "logo": "string",
    "header": "string",
    "width": "FULL",
    "refreshRate": 60,
    "paginate": true,
    "paginationRate": 30,
    "tags": [
      "string"
    ],
    "hideTags": false,
    "dashboardId": "string"
  }
]
```

<h3 id="list-all-dashboards-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful|[DashboardsList](#schemadashboardslist)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|[Model_1](#schemamodel_1)|

## Create a dashboard

<a id="opIdpostV1Dashboards"></a>

> Code samples

```shell
curl -X POST https://api.checklyhq.com/v1/dashboards \
 -H 'Content-Type: application/json' \
 -H 'Accept: application/json' \
 -H 'Authorization: Bearer API_KEY'

```

`POST /v1/dashboards`

Creates a new dashboard. Will return a 409 when attempting to create a dashboard with a custom URL or custom domain that is already taken.

> Body parameter

```json
{
  "customUrl": "string",
  "customDomain": "string",
  "logo": "string",
  "header": "string",
  "width": "FULL",
  "refreshRate": 60,
  "paginate": true,
  "paginationRate": 30,
  "tags": [
    "string"
  ],
  "hideTags": false
}
```

<h3 id="create-a-dashboard-parameters">Parameters</h3>

|Name|In|Type|Description|
|---|---|---|---|---|
|body|body|[DashboardSchema](#schemadashboardschema)|none|

> Example responses

> 201 Response

```json
{
  "customUrl": "string",
  "customDomain": "string",
  "logo": "string",
  "header": "string",
  "width": "FULL",
  "refreshRate": 60,
  "paginate": true,
  "paginationRate": 30,
  "tags": [
    "string"
  ],
  "hideTags": false,
  "dashboardId": "string"
}
```

<h3 id="create-a-dashboard-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Created|[DashboardResponse](#schemadashboardresponse)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|[Model_1](#schemamodel_1)|
|409|[Conflict](https://tools.ietf.org/html/rfc7231#section-6.5.8)|Conflict|[Model_1](#schemamodel_1)|

## Delete a dashboard

<a id="opIddeleteV1DashboardsId"></a>

> Code samples

```shell
curl -X DELETE https://api.checklyhq.com/v1/dashboards/{id} \
 -H 'Accept: application/json' \
 -H 'Authorization: Bearer API_KEY'

```

`DELETE /v1/dashboards/{id}`

Permanently removes a dashboard.

<h3 id="delete-a-dashboard-parameters">Parameters</h3>

|Name|In|Type|Description|
|---|---|---|---|---|
|id<br><div class="requiredParam">(required)</div>|path|string|none|

> Example responses

> 204 Response

```json
"string"
```

<h3 id="delete-a-dashboard-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|No Content|string|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|[Model_1](#schemamodel_1)|

## Retrieve a dashboard

<a id="opIdgetV1DashboardsId"></a>

> Code samples

```shell
curl -X GET https://api.checklyhq.com/v1/dashboards/{id} \
 -H 'Accept: application/json' \
 -H 'Authorization: Bearer API_KEY'

```

`GET /v1/dashboards/{id}`

Show details of a specific dashboard.

<h3 id="retrieve-a-dashboard-parameters">Parameters</h3>

|Name|In|Type|Description|
|---|---|---|---|---|
|id<br><div class="requiredParam">(required)</div>|path|string|none|

> Example responses

> 200 Response

```json
{
  "customUrl": "string",
  "customDomain": "string",
  "logo": "string",
  "header": "string",
  "width": "FULL",
  "refreshRate": 60,
  "paginate": true,
  "paginationRate": 30,
  "tags": [
    "string"
  ],
  "hideTags": false,
  "dashboardId": "string"
}
```

<h3 id="retrieve-a-dashboard-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful|[DashboardResponse](#schemadashboardresponse)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|[Model_1](#schemamodel_1)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|[Model_1](#schemamodel_1)|

## Update a dashboard

<a id="opIdputV1DashboardsId"></a>

> Code samples

```shell
curl -X PUT https://api.checklyhq.com/v1/dashboards/{id} \
 -H 'Content-Type: application/json' \
 -H 'Accept: application/json' \
 -H 'Authorization: Bearer API_KEY'

```

`PUT /v1/dashboards/{id}`

Updates a dashboard. Will return a 409 when attempting to create a dashboard with a custom URL or custom domain that is already taken.

> Body parameter

```json
{
  "customUrl": "string",
  "customDomain": "string",
  "logo": "string",
  "header": "string",
  "width": "FULL",
  "refreshRate": 60,
  "paginate": true,
  "paginationRate": 30,
  "tags": [
    "string"
  ],
  "hideTags": false
}
```

<h3 id="update-a-dashboard-parameters">Parameters</h3>

|Name|In|Type|Description|
|---|---|---|---|---|
|id<br><div class="requiredParam">(required)</div>|path|string|none|
|body|body|[DashboardSchema](#schemadashboardschema)|none|

> Example responses

> 200 Response

```json
{
  "customUrl": "string",
  "customDomain": "string",
  "logo": "string",
  "header": "string",
  "width": "FULL",
  "refreshRate": 60,
  "paginate": true,
  "paginationRate": 30,
  "tags": [
    "string"
  ],
  "hideTags": false,
  "dashboardId": "string"
}
```

<h3 id="update-a-dashboard-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful|[DashboardResponse](#schemadashboardresponse)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|[Model_1](#schemamodel_1)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|[Model_1](#schemamodel_1)|
|409|[Conflict](https://tools.ietf.org/html/rfc7231#section-6.5.8)|Conflict|[Model_1](#schemamodel_1)|

<h1 id="checkly-api-snippets">Snippets</h1>

## List all snippets

<a id="opIdgetV1Snippets"></a>

> Code samples

```shell
curl -X GET https://api.checklyhq.com/v1/snippets \
 -H 'Accept: application/json' \
 -H 'Authorization: Bearer API_KEY'

```

`GET /v1/snippets`

Lists all current snippets in your account.

<h3 id="list-all-snippets-parameters">Parameters</h3>

|Name|In|Type|Description|
|---|---|---|---|---|
|limit|query|number|none|
|page|query|number|none|

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "name": "string",
    "script": "string",
    "created_at": "2020-06-23",
    "updated_at": "2020-06-23"
  }
]
```

<h3 id="list-all-snippets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful|[SnippetsList](#schemasnippetslist)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|[Model_1](#schemamodel_1)|

## Create a snippet

<a id="opIdpostV1Snippets"></a>

> Code samples

```shell
curl -X POST https://api.checklyhq.com/v1/snippets \
 -H 'Content-Type: application/json' \
 -H 'Accept: application/json' \
 -H 'Authorization: Bearer API_KEY'

```

`POST /v1/snippets`

Creates a new snippet.

> Body parameter

```json
{
  "name": "string",
  "script": "string"
}
```

<h3 id="create-a-snippet-parameters">Parameters</h3>

|Name|In|Type|Description|
|---|---|---|---|---|
|body|body|[SnippetCreate](#schemasnippetcreate)|none|

> Example responses

> 201 Response

```json
{
  "id": 0,
  "name": "string",
  "script": "string",
  "created_at": "2020-06-23",
  "updated_at": "2020-06-23"
}
```

<h3 id="create-a-snippet-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Created|[Snippet](#schemasnippet)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|[Model_1](#schemamodel_1)|

## Delete a snippet

<a id="opIddeleteV1SnippetsId"></a>

> Code samples

```shell
curl -X DELETE https://api.checklyhq.com/v1/snippets/{id} \
 -H 'Accept: application/json' \
 -H 'Authorization: Bearer API_KEY'

```

`DELETE /v1/snippets/{id}`

Permanently removes a snippet.

<h3 id="delete-a-snippet-parameters">Parameters</h3>

|Name|In|Type|Description|
|---|---|---|---|---|
|id<br><div class="requiredParam">(required)</div>|path|number|none|

> Example responses

> 204 Response

```json
"string"
```

<h3 id="delete-a-snippet-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|No Content|string|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|[Model_1](#schemamodel_1)|

## Retrieve a snippet

<a id="opIdgetV1SnippetsId"></a>

> Code samples

```shell
curl -X GET https://api.checklyhq.com/v1/snippets/{id} \
 -H 'Accept: application/json' \
 -H 'Authorization: Bearer API_KEY'

```

`GET /v1/snippets/{id}`

Show details of a specific snippet.

<h3 id="retrieve-a-snippet-parameters">Parameters</h3>

|Name|In|Type|Description|
|---|---|---|---|---|
|id<br><div class="requiredParam">(required)</div>|path|number|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "name": "string",
  "script": "string",
  "created_at": "2020-06-23",
  "updated_at": "2020-06-23"
}
```

<h3 id="retrieve-a-snippet-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful|[Snippet](#schemasnippet)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|[Model_1](#schemamodel_1)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|[Model_1](#schemamodel_1)|

## Update a snippet

<a id="opIdputV1SnippetsId"></a>

> Code samples

```shell
curl -X PUT https://api.checklyhq.com/v1/snippets/{id} \
 -H 'Content-Type: application/json' \
 -H 'Accept: application/json' \
 -H 'Authorization: Bearer API_KEY'

```

`PUT /v1/snippets/{id}`

Updates a snippet.

> Body parameter

```json
{
  "name": "string",
  "script": "string"
}
```

<h3 id="update-a-snippet-parameters">Parameters</h3>

|Name|In|Type|Description|
|---|---|---|---|---|
|id<br><div class="requiredParam">(required)</div>|path|number|none|
|body|body|[SnippetCreate](#schemasnippetcreate)|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "name": "string",
  "script": "string",
  "created_at": "2020-06-23",
  "updated_at": "2020-06-23"
}
```

<h3 id="update-a-snippet-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful|[Snippet](#schemasnippet)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|[Model_1](#schemamodel_1)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|[Model_1](#schemamodel_1)|

<h1 id="checkly-api-environment-variables">Environment variables</h1>

## List all environment variables

<a id="opIdgetV1Variables"></a>

> Code samples

```shell
curl -X GET https://api.checklyhq.com/v1/variables \
 -H 'Accept: application/json' \
 -H 'Authorization: Bearer API_KEY'

```

`GET /v1/variables`

Lists all current environment variables in your account.

<h3 id="list-all-environment-variables-parameters">Parameters</h3>

|Name|In|Type|Description|
|---|---|---|---|---|
|limit|query|number|none|
|page|query|number|none|

> Example responses

> 200 Response

```json
[
  {
    "key": "string",
    "value": "",
    "locked": false
  }
]
```

<h3 id="list-all-environment-variables-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful|[EnvironmentVariablesList](#schemaenvironmentvariableslist)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|[Model_1](#schemamodel_1)|

## Create a environment variable

<a id="opIdpostV1Variables"></a>

> Code samples

```shell
curl -X POST https://api.checklyhq.com/v1/variables \
 -H 'Content-Type: application/json' \
 -H 'Accept: application/json' \
 -H 'Authorization: Bearer API_KEY'

```

`POST /v1/variables`

Creates a new environment variable.

> Body parameter

```json
{
  "key": "string",
  "value": "",
  "locked": false
}
```

<h3 id="create-a-environment-variable-parameters">Parameters</h3>

|Name|In|Type|Description|
|---|---|---|---|---|
|body|body|[EnvironmentVariable](#schemaenvironmentvariable)|none|

> Example responses

> 201 Response

```json
{
  "key": "string",
  "value": "",
  "locked": false
}
```

<h3 id="create-a-environment-variable-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Created|[EnvironmentVariable](#schemaenvironmentvariable)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|[Model_1](#schemamodel_1)|

## Delete an environment variable

<a id="opIddeleteV1VariablesKey"></a>

> Code samples

```shell
curl -X DELETE https://api.checklyhq.com/v1/variables/{key} \
 -H 'Accept: application/json' \
 -H 'Authorization: Bearer API_KEY'

```

`DELETE /v1/variables/{key}`

Permanently removes an environment variable. Uses the "key" field as the ID for deletion.

<h3 id="delete-an-environment-variable-parameters">Parameters</h3>

|Name|In|Type|Description|
|---|---|---|---|---|
|key<br><div class="requiredParam">(required)</div>|path|string|none|

> Example responses

> 204 Response

```json
"string"
```

<h3 id="delete-an-environment-variable-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|No Content|string|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|[Model_1](#schemamodel_1)|

## Retrieve an environment variable

<a id="opIdgetV1VariablesKey"></a>

> Code samples

```shell
curl -X GET https://api.checklyhq.com/v1/variables/{key} \
 -H 'Accept: application/json' \
 -H 'Authorization: Bearer API_KEY'

```

`GET /v1/variables/{key}`

Show details of a specific environment variable. Uses the "key" field for selection.

<h3 id="retrieve-an-environment-variable-parameters">Parameters</h3>

|Name|In|Type|Description|
|---|---|---|---|---|
|key<br><div class="requiredParam">(required)</div>|path|string|none|

> Example responses

> 200 Response

```json
{
  "key": "string",
  "value": "",
  "locked": false
}
```

<h3 id="retrieve-an-environment-variable-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful|[EnvironmentVariable](#schemaenvironmentvariable)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|[Model_1](#schemamodel_1)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|[Model_1](#schemamodel_1)|

## Update a environment variable

<a id="opIdputV1VariablesKey"></a>

> Code samples

```shell
curl -X PUT https://api.checklyhq.com/v1/variables/{key} \
 -H 'Content-Type: application/json' \
 -H 'Accept: application/json' \
 -H 'Authorization: Bearer API_KEY'

```

`PUT /v1/variables/{key}`

Updates an environment variable. Uses the "key" field as the ID for updating. Only updates the value.

> Body parameter

```json
{
  "key": "string",
  "value": "",
  "locked": false
}
```

<h3 id="update-a-environment-variable-parameters">Parameters</h3>

|Name|In|Type|Description|
|---|---|---|---|---|
|key<br><div class="requiredParam">(required)</div>|path|string|none|
|body|body|[EnvironmentVariable](#schemaenvironmentvariable)|none|

> Example responses

> 200 Response

```json
{
  "key": "string",
  "value": "",
  "locked": false
}
```

<h3 id="update-a-environment-variable-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful|[EnvironmentVariable](#schemaenvironmentvariable)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|[Model_1](#schemamodel_1)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|[Model_1](#schemamodel_1)|

# Schemas

<h2 id="tocSconfig">config</h2>

<a id="schemaconfig"></a>

```json
{}

```

### Properties

*None*

<h2 id="tocSsubscriptionschema">SubscriptionSchema</h2>

<a id="schemasubscriptionschema"></a>

```json
{
  "id": 0,
  "checkId": "string",
  "activated": true
}

```

### Properties

|Name|Type|Description|
|---|---|---|---|---|
|id|number|none|
|checkId<div class="requiredParam">(required)</div>|string|none|
|activated<div class="requiredParam">(required)</div>|boolean|none|

<h2 id="tocSsubscriptions">subscriptions</h2>

<a id="schemasubscriptions"></a>

```json
[
  {
    "id": 0,
    "checkId": "string",
    "activated": true
  }
]

```

*All checks subscribed to this channel.*

### Properties

|Name|Type|Description|
|---|---|---|---|---|
|*anonymous*|[[SubscriptionSchema](#schemasubscriptionschema)]|All checks subscribed to this channel.|

<h2 id="tocSalertchannel">AlertChannel</h2>

<a id="schemaalertchannel"></a>

```json
{
  "id": 0,
  "type": "string",
  "config": {},
  "subscriptions": [
    {
      "id": 0,
      "checkId": "string",
      "activated": true
    }
  ],
  "created_at": "2020-06-23",
  "updated_at": "2020-06-23"
}

```

### Properties

|Name|Type|Description|
|---|---|---|---|---|
|id|number|none|
|type|string|The type of alert channel, i.e. EMAIL or SLACK.|
|config|[config](#schemaconfig)|none|
|subscriptions|[subscriptions](#schemasubscriptions)|All checks subscribed to this channel.|
|created_at|string(date)|none|
|updated_at|string(date)|none|

<h2 id="tocSalertchannelslist">AlertChannelsList</h2>

<a id="schemaalertchannelslist"></a>

```json
[
  {
    "id": 0,
    "type": "string",
    "config": {},
    "subscriptions": [
      {
        "id": 0,
        "checkId": "string",
        "activated": true
      }
    ],
    "created_at": "2020-06-23",
    "updated_at": "2020-06-23"
  }
]

```

### Properties

|Name|Type|Description|
|---|---|---|---|---|
|*anonymous*|[[AlertChannel](#schemaalertchannel)]|none|

<h2 id="tocStags">tags</h2>

<a id="schematags"></a>

```json
[
  "string"
]

```

### Properties

*None*

<h2 id="tocSlocations">locations</h2>

<a id="schemalocations"></a>

```json
[
  "string"
]

```

### Properties

*None*

<h2 id="tocSkeyvalue">KeyValue</h2>

<a id="schemakeyvalue"></a>

```json
{
  "key": "string",
  "value": "",
  "locked": false
}

```

### Properties

|Name|Type|Description|
|---|---|---|---|---|
|key<div class="requiredParam">(required)</div>|string|none|
|value<div class="requiredParam">(required)</div>|string|none|
|locked|boolean|none|

<h2 id="tocSheaders">Headers</h2>

<a id="schemaheaders"></a>

```json
[]

```

### Properties

|Name|Type|Description|
|---|---|---|---|---|
|*anonymous*|[[KeyValue](#schemakeyvalue)]|none|

<h2 id="tocSqueryparameters">QueryParameters</h2>

<a id="schemaqueryparameters"></a>

```json
[]

```

### Properties

|Name|Type|Description|
|---|---|---|---|---|
|*anonymous*|[[KeyValue](#schemakeyvalue)]|none|

<h2 id="tocSassertions">Assertions</h2>

<a id="schemaassertions"></a>

```json
{
  "source": "STATUS_CODE",
  "property": "",
  "comparison": "EQUALS",
  "target": ""
}

```

### Properties

|Name|Type|Description|
|---|---|---|---|---|
|source|string|none|
|property|string|none|
|comparison|string|none|
|target|string|none|

#### Enumerated Values

|Property|Value|
|---|---|
|source|STATUS_CODE|
|source|JSON_BODY|
|source|HEADERS|
|source|TEXT_BODY|
|source|RESPONSE_TIME|
|comparison|EQUALS|
|comparison|NOT_EQUALS|
|comparison|HAS_KEY|
|comparison|NOT_HAS_KEY|
|comparison|HAS_VALUE|
|comparison|NOT_HAS_VALUE|
|comparison|IS_EMPTY|
|comparison|NOT_EMPTY|
|comparison|GREATER_THAN|
|comparison|LESS_THAN|
|comparison|CONTAINS|
|comparison|NOT_CONTAINS|
|comparison|IS_NULL|
|comparison|NOT_NULL|

<h2 id="tocSassertions">assertions</h2>

<a id="schemaassertions"></a>

```json
[]

```

*Check the main Checkly documentation on assertions for specific values like regular expressions and JSON path descriptors you can use in the "property" field.*

### Properties

|Name|Type|Description|
|---|---|---|---|---|
|*anonymous*|[[Assertions](#schemaassertions)]|Check the main Checkly documentation on assertions for specific values like regular expressions and JSON path descriptors you can use in the "property" field.|

<h2 id="tocSbasicauth">basicAuth</h2>

<a id="schemabasicauth"></a>

```json
{
  "username": "",
  "password": ""
}

```

### Properties

|Name|Type|Description|
|---|---|---|---|---|
|username|string|none|
|password|string|none|

<h2 id="tocSapicheckdefaults">apiCheckDefaults</h2>

<a id="schemaapicheckdefaults"></a>

```json
{
  "url": "",
  "headers": [],
  "queryParameters": [],
  "assertions": [],
  "basicAuth": {
    "username": "",
    "password": ""
  }
}

```

### Properties

|Name|Type|Description|
|---|---|---|---|---|
|url|string|The base url for this group which you can reference with the {{GROUP_BASE_URL}} variable in all group checks.|
|headers|[Headers](#schemaheaders)|none|
|queryParameters|[QueryParameters](#schemaqueryparameters)|none|
|assertions|[assertions](#schemaassertions)|Check the main Checkly documentation on assertions for specific values like regular expressions and JSON path descriptors you can use in the "property" field.|
|basicAuth|[basicAuth](#schemabasicauth)|none|

<h2 id="tocSbrowsercheckdefaults">browserCheckDefaults</h2>

<a id="schemabrowsercheckdefaults"></a>

```json
{}

```

### Properties

*None*

<h2 id="tocSenvironmentvariable">EnvironmentVariable</h2>

<a id="schemaenvironmentvariable"></a>

```json
{
  "key": "string",
  "value": "",
  "locked": false
}

```

### Properties

|Name|Type|Description|
|---|---|---|---|---|
|key<div class="requiredParam">(required)</div>|string|none|
|value<div class="requiredParam">(required)</div>|string|none|
|locked|boolean|Used only in the UI to hide the value like a password|

<h2 id="tocSenvironmentvariables">environmentVariables</h2>

<a id="schemaenvironmentvariables"></a>

```json
[
  {
    "key": "string",
    "value": "",
    "locked": false
  }
]

```

### Properties

|Name|Type|Description|
|---|---|---|---|---|
|*anonymous*|[[EnvironmentVariable](#schemaenvironmentvariable)]|none|

<h2 id="tocSrunbasedescalation">runBasedEscalation</h2>

<a id="schemarunbasedescalation"></a>

```json
{
  "failedRunThreshold": 1
}

```

### Properties

|Name|Type|Description|
|---|---|---|---|---|
|failedRunThreshold|number|After how many failed consecutive check runs an alert notification should be send|

#### Enumerated Values

|Property|Value|
|---|---|
|failedRunThreshold|1|
|failedRunThreshold|2|
|failedRunThreshold|3|
|failedRunThreshold|4|
|failedRunThreshold|5|

<h2 id="tocStimebasedescalation">timeBasedEscalation</h2>

<a id="schematimebasedescalation"></a>

```json
{
  "minutesFailingThreshold": 5
}

```

### Properties

|Name|Type|Description|
|---|---|---|---|---|
|minutesFailingThreshold|number|After how many minutes after a check starts failing an alert should be send|

#### Enumerated Values

|Property|Value|
|---|---|
|minutesFailingThreshold|5|
|minutesFailingThreshold|10|
|minutesFailingThreshold|15|
|minutesFailingThreshold|30|

<h2 id="tocSreminders">reminders</h2>

<a id="schemareminders"></a>

```json
{
  "amount": 0,
  "interval": 5
}

```

### Properties

|Name|Type|Description|
|---|---|---|---|---|
|amount|number|How many reminders to send out after the initial alert notification|
|interval|number|At what interval the reminders should be send|

#### Enumerated Values

|Property|Value|
|---|---|
|amount|0|
|amount|1|
|amount|2|
|amount|3|
|amount|4|
|amount|5|
|interval|5|
|interval|10|
|interval|15|
|interval|30|

<h2 id="tocSsslcertificates">sslCertificates</h2>

<a id="schemasslcertificates"></a>

```json
{
  "enabled": true,
  "alertThreshold": 30
}

```

### Properties

|Name|Type|Description|
|---|---|---|---|---|
|enabled|boolean|Determines if alert notifications should be send for expiring SSL certificates|
|alertThreshold|number|At what moment in time to start alerting on SSL certificates|

#### Enumerated Values

|Property|Value|
|---|---|
|alertThreshold|3|
|alertThreshold|7|
|alertThreshold|14|
|alertThreshold|30|

<h2 id="tocSalertsettingsschema">AlertSettingsSchema</h2>

<a id="schemaalertsettingsschema"></a>

```json
{
  "escalationType": "RUN_BASED",
  "runBasedEscalation": {
    "failedRunThreshold": 1
  },
  "timeBasedEscalation": {
    "minutesFailingThreshold": 5
  },
  "reminders": {
    "amount": 0,
    "interval": 5
  },
  "sslCertificates": {
    "enabled": true,
    "alertThreshold": 30
  }
}

```

### Properties

|Name|Type|Description|
|---|---|---|---|---|
|escalationType|string|Determines what type of escalation to use|
|runBasedEscalation|[runBasedEscalation](#schemarunbasedescalation)|none|
|timeBasedEscalation|[timeBasedEscalation](#schematimebasedescalation)|none|
|reminders|[reminders](#schemareminders)|none|
|sslCertificates|[sslCertificates](#schemasslcertificates)|none|

#### Enumerated Values

|Property|Value|
|---|---|
|escalationType|RUN_BASED|
|escalationType|TIME_BASED|

<h2 id="tocSalertchannelsubscription">AlertChannelSubscription</h2>

<a id="schemaalertchannelsubscription"></a>

```json
{
  "alertChannelId": 0,
  "activated": true
}

```

### Properties

|Name|Type|Description|
|---|---|---|---|---|
|alertChannelId<div class="requiredParam">(required)</div>|number|none|
|activated<div class="requiredParam">(required)</div>|boolean|none|

<h2 id="tocSalertchannelsubscriptions">alertChannelSubscriptions</h2>

<a id="schemaalertchannelsubscriptions"></a>

```json
[
  {
    "alertChannelId": 0,
    "activated": true
  }
]

```

### Properties

|Name|Type|Description|
|---|---|---|---|---|
|*anonymous*|[[AlertChannelSubscription](#schemaalertchannelsubscription)]|none|

<h2 id="tocScheckgrouplist">CheckGroupList</h2>

<a id="schemacheckgrouplist"></a>

```json
[
  {
    "id": 0,
    "name": "string",
    "activated": true,
    "muted": true,
    "tags": [
      "string"
    ],
    "locations": [
      "string"
    ],
    "concurrency": 3,
    "apiCheckDefaults": {
      "url": "",
      "headers": [],
      "queryParameters": [],
      "assertions": [],
      "basicAuth": {
        "username": "",
        "password": ""
      }
    },
    "browserCheckDefaults": {},
    "environmentVariables": [
      {
        "key": "string",
        "value": "",
        "locked": false
      }
    ],
    "doubleCheck": true,
    "useGlobalAlertSettings": true,
    "alertSettings": {
      "escalationType": "RUN_BASED",
      "runBasedEscalation": {
        "failedRunThreshold": 1
      },
      "timeBasedEscalation": {
        "minutesFailingThreshold": 5
      },
      "reminders": {
        "amount": 0,
        "interval": 5
      },
      "sslCertificates": {
        "enabled": true,
        "alertThreshold": 30
      }
    },
    "alertChannelSubscriptions": [
      {
        "alertChannelId": 0,
        "activated": true
      }
    ],
    "setupSnippetId": 0,
    "tearDownSnippetId": 0,
    "localSetupScript": "string",
    "localTearDownScript": "string",
    "created_at": "2020-06-23",
    "updated_at": "2020-06-23"
  }
]

```

### Properties

|Name|Type|Description|
|---|---|---|---|---|
|*anonymous*|[[Model_2](#schemamodel_2)]|none|

<h2 id="tocStags">Tags</h2>

<a id="schematags"></a>

```json
[
  "string"
]

```

*Tags for organizing and filtering checks*

### Properties

*None*

<h2 id="tocSlocations">Locations</h2>

<a id="schemalocations"></a>

```json
[
  "us-east-1"
]

```

*An array of one or more data center locations where to run the checks*

### Properties

*None*

<h2 id="tocSrequest">request</h2>

<a id="schemarequest"></a>

```json
{
  "method": "GET",
  "url": "localhost",
  "followRedirects": true,
  "body": "",
  "bodyType": "NONE",
  "headers": [],
  "queryParameters": [],
  "assertions": [],
  "basicAuth": {
    "username": "",
    "password": ""
  }
}

```

### Properties

|Name|Type|Description|
|---|---|---|---|---|
|method<div class="requiredParam">(required)</div>|string|none|
|url<div class="requiredParam">(required)</div>|string|none|
|followRedirects|boolean|none|
|body|string|none|
|bodyType|string|none|
|headers|[Headers](#schemaheaders)|none|
|queryParameters|[QueryParameters](#schemaqueryparameters)|none|
|assertions|[assertions](#schemaassertions)|Check the main Checkly documentation on assertions for specific values like regular expressions and JSON path descriptors you can use in the "property" field.|
|basicAuth<div class="requiredParam">(required)</div>|[Model_7](#schemamodel_7)|none|

#### Enumerated Values

|Property|Value|
|---|---|
|method|GET|
|method|POST|
|method|PUT|
|method|HEAD|
|method|DELETE|
|method|PATCH|
|bodyType|NONE|
|bodyType|JSON|
|bodyType|FORM|
|bodyType|RAW|
|bodyType|GRAPHQL|

<h2 id="tocSenvironmentvariables">EnvironmentVariables</h2>

<a id="schemaenvironmentvariables"></a>

```json
[
  {
    "key": "string",
    "value": "",
    "locked": false
  }
]

```

*Key/value pairs for setting environment variables during check execution. These are only relevant for Browser checks. Use global environment variables whenever possible.*

### Properties

|Name|Type|Description|
|---|---|---|---|---|
|*anonymous*|[[EnvironmentVariable](#schemaenvironmentvariable)]|Key/value pairs for setting environment variables during check execution. These are only relevant for Browser checks. Use global environment variables whenever possible.|

<h2 id="tocSalertemail">AlertEmail</h2>

<a id="schemaalertemail"></a>

```json
{
  "address": ""
}

```

### Properties

|Name|Type|Description|
|---|---|---|---|---|
|address<div class="requiredParam">(required)</div>|string|none|

<h2 id="tocSemail">email</h2>

<a id="schemaemail"></a>

```json
[
  {
    "address": ""
  }
]

```

### Properties

|Name|Type|Description|
|---|---|---|---|---|
|*anonymous*|[[AlertEmail](#schemaalertemail)]|none|

<h2 id="tocSalertwebhook">AlertWebhook</h2>

<a id="schemaalertwebhook"></a>

```json
{
  "name": "",
  "url": "",
  "method": "POST",
  "headers": [],
  "queryParameters": []
}

```

### Properties

|Name|Type|Description|
|---|---|---|---|---|
|name|string|none|
|url<div class="requiredParam">(required)</div>|string|none|
|method|string|none|
|headers|[Headers](#schemaheaders)|none|
|queryParameters|[QueryParameters](#schemaqueryparameters)|none|

#### Enumerated Values

|Property|Value|
|---|---|
|method|GET|
|method|POST|
|method|PUT|
|method|HEAD|
|method|DELETE|
|method|PATCH|

<h2 id="tocSwebhook">webhook</h2>

<a id="schemawebhook"></a>

```json
[
  {
    "name": "",
    "url": "",
    "method": "POST",
    "headers": [],
    "queryParameters": []
  }
]

```

### Properties

|Name|Type|Description|
|---|---|---|---|---|
|*anonymous*|[[AlertWebhook](#schemaalertwebhook)]|none|

<h2 id="tocSalertslack">AlertSlack</h2>

<a id="schemaalertslack"></a>

```json
{
  "url": ""
}

```

### Properties

|Name|Type|Description|
|---|---|---|---|---|
|url<div class="requiredParam">(required)</div>|string|none|

<h2 id="tocSslack">slack</h2>

<a id="schemaslack"></a>

```json
[
  {
    "url": ""
  }
]

```

### Properties

|Name|Type|Description|
|---|---|---|---|---|
|*anonymous*|[[AlertSlack](#schemaalertslack)]|none|

<h2 id="tocSalertsms">AlertSms</h2>

<a id="schemaalertsms"></a>

```json
{
  "number": "",
  "name": "string"
}

```

### Properties

|Name|Type|Description|
|---|---|---|---|---|
|number<div class="requiredParam">(required)</div>|string|none|
|name<div class="requiredParam">(required)</div>|string|none|

<h2 id="tocSsms">sms</h2>

<a id="schemasms"></a>

```json
[
  {
    "number": "",
    "name": "string"
  }
]

```

### Properties

|Name|Type|Description|
|---|---|---|---|---|
|*anonymous*|[[AlertSms](#schemaalertsms)]|none|

<h2 id="tocSalertchannels">AlertChannels</h2>

<a id="schemaalertchannels"></a>

```json
{
  "email": [
    {
      "address": ""
    }
  ],
  "webhook": [
    {
      "name": "",
      "url": "",
      "method": "POST",
      "headers": [],
      "queryParameters": []
    }
  ],
  "slack": [
    {
      "url": ""
    }
  ],
  "sms": [
    {
      "number": "",
      "name": "string"
    }
  ]
}

```

### Properties

|Name|Type|Description|
|---|---|---|---|---|
|email|[email](#schemaemail)|none|
|webhook|[webhook](#schemawebhook)|none|
|slack|[slack](#schemaslack)|none|
|sms|[sms](#schemasms)|none|

<h2 id="tocScheckgroupcheck">CheckGroupCheck</h2>

<a id="schemacheckgroupcheck"></a>

```json
{
  "id": "string",
  "name": "string",
  "checkType": "BROWSER",
  "frequency": 5,
  "activated": true,
  "muted": false,
  "doubleCheck": true,
  "sslCheck": true,
  "shouldFail": true,
  "locations": [
    "us-east-1"
  ],
  "request": {
    "method": "GET",
    "url": "localhost",
    "followRedirects": true,
    "body": "",
    "bodyType": "NONE",
    "headers": [],
    "queryParameters": [],
    "assertions": [],
    "basicAuth": {
      "username": "",
      "password": ""
    }
  },
  "script": "string",
  "environmentVariables": [
    {
      "key": "string",
      "value": "",
      "locked": false
    }
  ],
  "tags": [
    "string"
  ],
  "setupSnippetId": 0,
  "tearDownSnippetId": 0,
  "localSetupScript": "string",
  "localTearDownScript": "string",
  "alertSettings": {
    "escalationType": "RUN_BASED",
    "runBasedEscalation": {
      "failedRunThreshold": 1
    },
    "timeBasedEscalation": {
      "minutesFailingThreshold": 5
    },
    "reminders": {
      "amount": 0,
      "interval": 5
    },
    "sslCertificates": {
      "enabled": true,
      "alertThreshold": 30
    }
  },
  "useGlobalAlertSettings": true,
  "degradedResponseTime": 10000,
  "maxResponseTime": 20000,
  "groupId": 0,
  "groupOrder": 0,
  "alertChannelSubscriptions": [
    {
      "alertChannelId": 0,
      "activated": true
    }
  ],
  "alertChannels": {
    "email": [
      {
        "address": ""
      }
    ],
    "webhook": [
      {
        "name": "",
        "url": "",
        "method": "POST",
        "headers": [],
        "queryParameters": []
      }
    ],
    "slack": [
      {
        "url": ""
      }
    ],
    "sms": [
      {
        "number": "",
        "name": "string"
      }
    ]
  },
  "created_at": "2020-06-23",
  "updated_at": "2020-06-23"
}

```

### Properties

|Name|Type|Description|
|---|---|---|---|---|
|id|string|none|
|name<div class="requiredParam">(required)</div>|string|The name of the check|
|checkType<div class="requiredParam">(required)</div>|string|The type of the check|
|frequency|number|none|
|activated<div class="requiredParam">(required)</div>|boolean|Determines if the check is running or not|
|muted|boolean|Determines if any notifications will be send out when a check fails and/or recovers|
|doubleCheck|boolean|Setting this to "true" will trigger a retry when a check fails from the failing region and another, randomly selected region before marking the check as failed|
|sslCheck|boolean|Determines if the SSL certificate should be validated for expiry|
|shouldFail|boolean|Allows to invert the behaviour of when a check is considered to fail. Allows for validating error status like 404|
|locations|[Model_6](#schemamodel_6)|An array of one or more data center locations where to run the this check|
|request|[request](#schemarequest)|none|
|script|string|A valid piece of Node.js javascript code describing a browser interaction with the Puppeteer framework.|
|environmentVariables|[EnvironmentVariables](#schemaenvironmentvariables)|Key/value pairs for setting environment variables during check execution. These are only relevant for Browser checks. Use global environment variables whenever possible.|
|tags|[Tags](#schematags)|Tags for organizing and filtering checks|
|setupSnippetId|number|An ID reference to a snippet to use in the setup phase of an API check|
|tearDownSnippetId|number|An ID reference to a snippet to use in the teardown phase of an API check|
|localSetupScript|string|A valid piece of Node.js code to run in the setup phase|
|localTearDownScript|string|A valid piece of Node.js code to run in the teardown phase|
|alertSettings|[Model_8](#schemamodel_8)|none|
|useGlobalAlertSettings|boolean|When true, the account level alert setting will be used, not the alert setting defined on this check|
|degradedResponseTime|number|The response time in milliseconds where a check should be considered degraded|
|maxResponseTime|number|The response time in milliseconds where a check should be considered failing|
|groupId|number|The id of the check group this check is part of|
|groupOrder|number|The position of this check in a check group. It determines in what order checks are run when a group is triggered from the API or from CI/CD|
|alertChannelSubscriptions|[alertChannelSubscriptions](#schemaalertchannelsubscriptions)|none|
|alertChannels|[AlertChannels](#schemaalertchannels)|none|
|created_at|string(date)|none|
|updated_at|string(date)|none|

#### Enumerated Values

|Property|Value|
|---|---|
|checkType|BROWSER|
|checkType|API|
|frequency|5|
|frequency|10|
|frequency|15|
|frequency|30|
|frequency|60|
|frequency|720|
|frequency|1440|

<h2 id="tocScheck">Check</h2>

<a id="schemacheck"></a>

```json
{
  "id": "string",
  "name": "string",
  "checkType": "BROWSER",
  "frequency": 5,
  "activated": true,
  "muted": false,
  "doubleCheck": true,
  "sslCheck": true,
  "shouldFail": true,
  "locations": [
    "us-east-1"
  ],
  "request": {
    "method": "GET",
    "url": "localhost",
    "followRedirects": true,
    "body": "",
    "bodyType": "NONE",
    "headers": [],
    "queryParameters": [],
    "assertions": [],
    "basicAuth": {
      "username": "",
      "password": ""
    }
  },
  "script": "string",
  "environmentVariables": [
    {
      "key": "string",
      "value": "",
      "locked": false
    }
  ],
  "tags": [
    "string"
  ],
  "setupSnippetId": 0,
  "tearDownSnippetId": 0,
  "localSetupScript": "string",
  "localTearDownScript": "string",
  "alertSettings": {
    "escalationType": "RUN_BASED",
    "runBasedEscalation": {
      "failedRunThreshold": 1
    },
    "timeBasedEscalation": {
      "minutesFailingThreshold": 5
    },
    "reminders": {
      "amount": 0,
      "interval": 5
    },
    "sslCertificates": {
      "enabled": true,
      "alertThreshold": 30
    }
  },
  "useGlobalAlertSettings": true,
  "degradedResponseTime": 10000,
  "maxResponseTime": 20000,
  "groupId": 0,
  "groupOrder": 0,
  "alertChannelSubscriptions": [
    {
      "alertChannelId": 0,
      "activated": true
    }
  ],
  "alertChannels": {
    "email": [
      {
        "address": ""
      }
    ],
    "webhook": [
      {
        "name": "",
        "url": "",
        "method": "POST",
        "headers": [],
        "queryParameters": []
      }
    ],
    "slack": [
      {
        "url": ""
      }
    ],
    "sms": [
      {
        "number": "",
        "name": "string"
      }
    ]
  },
  "created_at": "2020-06-23",
  "updated_at": "2020-06-23"
}

```

### Properties

|Name|Type|Description|
|---|---|---|---|---|
|id|string|none|
|name<div class="requiredParam">(required)</div>|string|The name of the check|
|checkType<div class="requiredParam">(required)</div>|string|The type of the check|
|frequency|number|none|
|activated<div class="requiredParam">(required)</div>|boolean|Determines if the check is running or not|
|muted|boolean|Determines if any notifications will be send out when a check fails and/or recovers|
|doubleCheck|boolean|Setting this to "true" will trigger a retry when a check fails from the failing region and another, randomly selected region before marking the check as failed|
|sslCheck|boolean|Determines if the SSL certificate should be validated for expiry|
|shouldFail|boolean|Allows to invert the behaviour of when a check is considered to fail. Allows for validating error status like 404|
|locations|[Model_11](#schemamodel_11)|An array of one or more data center locations where to run the this check|
|request|[request](#schemarequest)|none|
|script|string|A valid piece of Node.js javascript code describing a browser interaction with the Puppeteer framework.|
|environmentVariables|[EnvironmentVariables](#schemaenvironmentvariables)|Key/value pairs for setting environment variables during check execution. These are only relevant for Browser checks. Use global environment variables whenever possible.|
|tags|[Tags](#schematags)|Tags for organizing and filtering checks|
|setupSnippetId|number|An ID reference to a snippet to use in the setup phase of an API check|
|tearDownSnippetId|number|An ID reference to a snippet to use in the teardown phase of an API check|
|localSetupScript|string|A valid piece of Node.js code to run in the setup phase|
|localTearDownScript|string|A valid piece of Node.js code to run in the teardown phase|
|alertSettings|[Model_8](#schemamodel_8)|none|
|useGlobalAlertSettings|boolean|When true, the account level alert setting will be used, not the alert setting defined on this check|
|degradedResponseTime|number|The response time in milliseconds where a check should be considered degraded|
|maxResponseTime|number|The response time in milliseconds where a check should be considered failing|
|groupId|number|The id of the check group this check is part of|
|groupOrder|number|The position of this check in a check group. It determines in what order checks are run when a group is triggered from the API or from CI/CD|
|alertChannelSubscriptions|[alertChannelSubscriptions](#schemaalertchannelsubscriptions)|none|
|alertChannels|[AlertChannels](#schemaalertchannels)|none|
|created_at|string(date)|none|
|updated_at|string(date)|none|

#### Enumerated Values

|Property|Value|
|---|---|
|checkType|BROWSER|
|checkType|API|
|frequency|5|
|frequency|10|
|frequency|15|
|frequency|30|
|frequency|60|
|frequency|720|
|frequency|1440|

<h2 id="tocScheckgroupcheckslist">CheckGroupChecksList</h2>

<a id="schemacheckgroupcheckslist"></a>

```json
[
  {
    "id": "string",
    "name": "string",
    "checkType": "BROWSER",
    "frequency": 5,
    "activated": true,
    "muted": false,
    "doubleCheck": true,
    "sslCheck": true,
    "shouldFail": true,
    "locations": [
      "us-east-1"
    ],
    "request": {
      "method": "GET",
      "url": "localhost",
      "followRedirects": true,
      "body": "",
      "bodyType": "NONE",
      "headers": [],
      "queryParameters": [],
      "assertions": [],
      "basicAuth": {
        "username": "",
        "password": ""
      }
    },
    "script": "string",
    "environmentVariables": [
      {
        "key": "string",
        "value": "",
        "locked": false
      }
    ],
    "tags": [
      "string"
    ],
    "setupSnippetId": 0,
    "tearDownSnippetId": 0,
    "localSetupScript": "string",
    "localTearDownScript": "string",
    "alertSettings": {
      "escalationType": "RUN_BASED",
      "runBasedEscalation": {
        "failedRunThreshold": 1
      },
      "timeBasedEscalation": {
        "minutesFailingThreshold": 5
      },
      "reminders": {
        "amount": 0,
        "interval": 5
      },
      "sslCertificates": {
        "enabled": true,
        "alertThreshold": 30
      }
    },
    "useGlobalAlertSettings": true,
    "degradedResponseTime": 10000,
    "maxResponseTime": 20000,
    "groupId": 0,
    "groupOrder": 0,
    "alertChannelSubscriptions": [
      {
        "alertChannelId": 0,
        "activated": true
      }
    ],
    "alertChannels": {
      "email": [
        {
          "address": ""
        }
      ],
      "webhook": [
        {
          "name": "",
          "url": "",
          "method": "POST",
          "headers": [],
          "queryParameters": []
        }
      ],
      "slack": [
        {
          "url": ""
        }
      ],
      "sms": [
        {
          "number": "",
          "name": "string"
        }
      ]
    },
    "created_at": "2020-06-23",
    "updated_at": "2020-06-23"
  }
]

```

### Properties

|Name|Type|Description|
|---|---|---|---|---|
|*anonymous*|[[Check](#schemacheck)]|none|

<h2 id="tocSresponsetimes">responseTimes</h2>

<a id="schemaresponsetimes"></a>

```json
[
  "string"
]

```

### Properties

*None*

<h2 id="tocSrolledupcheckresult">RolledUpCheckResult</h2>

<a id="schemarolledupcheckresult"></a>

```json
{
  "checkId": "string",
  "runLocation": "string",
  "errorCount": 0,
  "failureCount": 0,
  "resultsCount": 0,
  "hour": "2020-06-23",
  "responseTimes": [
    "string"
  ]
}

```

### Properties

|Name|Type|Description|
|---|---|---|---|---|
|checkId|string|none|
|runLocation|string|What data center location this set of check results originated from|
|errorCount|number|The total amount of errored out check results for this hour. This value should be 0 in almost all cases as it records failures in the Checkly backend.|
|failureCount|number|The total amount of failed check results for this hour.|
|resultsCount|number|The total amount of results recorded for this hour. Depends on how often this check is scheduled to run.|
|hour|string(date)|All results per time unit / per location are rolled up to a specific hour|
|responseTimes|[responseTimes](#schemaresponsetimes)|none|

<h2 id="tocSrolledupcheckresultslist">RolledUpCheckResultsList</h2>

<a id="schemarolledupcheckresultslist"></a>

```json
[
  {
    "checkId": "string",
    "runLocation": "string",
    "errorCount": 0,
    "failureCount": 0,
    "resultsCount": 0,
    "hour": "2020-06-23",
    "responseTimes": [
      "string"
    ]
  }
]

```

### Properties

|Name|Type|Description|
|---|---|---|---|---|
|*anonymous*|[[RolledUpCheckResult](#schemarolledupcheckresult)]|none|

<h2 id="tocSapicheckresult">apiCheckResult</h2>

<a id="schemaapicheckresult"></a>

```json
{}

```

### Properties

*None*

<h2 id="tocSbrowsercheckresult">browserCheckResult</h2>

<a id="schemabrowsercheckresult"></a>

```json
{}

```

### Properties

*None*

<h2 id="tocScheckresult">CheckResult</h2>

<a id="schemacheckresult"></a>

```json
{
  "id": "string",
  "name": "string",
  "checkId": "string",
  "hasFailures": true,
  "hasErrors": true,
  "isDegraded": true,
  "overMaxResponseTime": true,
  "runLocation": "string",
  "startedAt": "2020-06-23",
  "stoppedAt": "2020-06-23",
  "created_at": "2020-06-23",
  "responseTime": 0,
  "apiCheckResult": {},
  "browserCheckResult": {},
  "checkRunId": 0,
  "attempts": 0
}

```

### Properties

|Name|Type|Description|
|---|---|---|---|---|
|id|string|The unique ID of this result|
|name|string|The name of the check|
|checkId|string|The ID of the check|
|hasFailures|boolean|Describes if any failure has occurred during this check run. This is should be your mainmain focus for assessing API or browser check behaviour. Assertions that fail, timeouts or failing scripts all resolve tothis value being true|
|hasErrors|boolean|Describes if an internal error has occured in Checkly's backend. This should be false in almost all cases.|
|isDegraded|boolean|A check is degraded if it is over the degradation limit set by the "degradedResponseTime" field on the check. Applies only to API checks.|
|overMaxResponseTime|boolean|Set to true if the response time is over the limit set by the "maxResponseTime" field on the check. Applies only to API checks.|
|runLocation|string|What data center location this check result originated from|
|startedAt|string(date)|none|
|stoppedAt|string(date)|none|
|created_at|string(date)|none|
|responseTime|number|Describes the time it took to execute relevant parts of this check. Any setup timeor system time needed to start executing this check in the Checkly backend is not part of this.|
|apiCheckResult|[apiCheckResult](#schemaapicheckresult)|none|
|browserCheckResult|[browserCheckResult](#schemabrowsercheckresult)|none|
|checkRunId|number|The id of the specific check run that created this check result|
|attempts|number|How often this check was retried. This will be larger than 0 when double checking is enabled|

<h2 id="tocScheckresultslist">CheckResultsList</h2>

<a id="schemacheckresultslist"></a>

```json
[
  {
    "id": "string",
    "name": "string",
    "checkId": "string",
    "hasFailures": true,
    "hasErrors": true,
    "isDegraded": true,
    "overMaxResponseTime": true,
    "runLocation": "string",
    "startedAt": "2020-06-23",
    "stoppedAt": "2020-06-23",
    "created_at": "2020-06-23",
    "responseTime": 0,
    "apiCheckResult": {},
    "browserCheckResult": {},
    "checkRunId": 0,
    "attempts": 0
  }
]

```

### Properties

|Name|Type|Description|
|---|---|---|---|---|
|*anonymous*|[[CheckResult](#schemacheckresult)]|none|

<h2 id="tocScheckstatus">CheckStatus</h2>

<a id="schemacheckstatus"></a>

```json
{
  "checkId": "string",
  "hasFailures": true,
  "hasErrors": true,
  "isDegraded": true,
  "longestRun": 0,
  "shortestRun": 0,
  "lastRunLocation": "string",
  "lastCheckRunId": "string",
  "sslDaysRemaining": 0,
  "created_at": "2020-06-23",
  "updated_at": "2020-06-23"
}

```

### Properties

|Name|Type|Description|
|---|---|---|---|---|
|checkId|string|The ID of check this status belongs to|
|hasFailures|boolean|Describes if this check is currently failing. If any of the assertions for an API checkfail this value is true. If a browser check fails for whatever reason, this is true|
|hasErrors|boolean|Describes if due to some error outside of normal operation this check is failing. This should be extremely rare and only when there is an error in the Checkly backend|
|isDegraded|boolean|A check is degraded if it is over the degradation limit set by the "degradedResponseTime" field on the check. Applies only to API checks.|
|longestRun|number|The longest ever recorded response time for this check|
|shortestRun|number|The shortest ever recorded response time for this check|
|lastRunLocation|string|What location this check was last run at|
|lastCheckRunId|string|The unique incrementing ID for each check run|
|sslDaysRemaining|number|How many days remain till the current SSL certifacte expires|
|created_at|string(date)|none|
|updated_at|string(date)|none|

<h2 id="tocScheckstatuslist">CheckStatusList</h2>

<a id="schemacheckstatuslist"></a>

```json
[
  {
    "checkId": "string",
    "hasFailures": true,
    "hasErrors": true,
    "isDegraded": true,
    "longestRun": 0,
    "shortestRun": 0,
    "lastRunLocation": "string",
    "lastCheckRunId": "string",
    "sslDaysRemaining": 0,
    "created_at": "2020-06-23",
    "updated_at": "2020-06-23"
  }
]

```

### Properties

|Name|Type|Description|
|---|---|---|---|---|
|*anonymous*|[[CheckStatus](#schemacheckstatus)]|none|

<h2 id="tocSchecklist">CheckList</h2>

<a id="schemachecklist"></a>

```json
[
  {
    "id": "string",
    "name": "string",
    "checkType": "BROWSER",
    "frequency": 5,
    "activated": true,
    "muted": false,
    "doubleCheck": true,
    "sslCheck": true,
    "shouldFail": true,
    "locations": [
      "us-east-1"
    ],
    "request": {
      "method": "GET",
      "url": "localhost",
      "followRedirects": true,
      "body": "",
      "bodyType": "NONE",
      "headers": [],
      "queryParameters": [],
      "assertions": [],
      "basicAuth": {
        "username": "",
        "password": ""
      }
    },
    "script": "string",
    "environmentVariables": [
      {
        "key": "string",
        "value": "",
        "locked": false
      }
    ],
    "tags": [
      "string"
    ],
    "setupSnippetId": 0,
    "tearDownSnippetId": 0,
    "localSetupScript": "string",
    "localTearDownScript": "string",
    "alertSettings": {
      "escalationType": "RUN_BASED",
      "runBasedEscalation": {
        "failedRunThreshold": 1
      },
      "timeBasedEscalation": {
        "minutesFailingThreshold": 5
      },
      "reminders": {
        "amount": 0,
        "interval": 5
      },
      "sslCertificates": {
        "enabled": true,
        "alertThreshold": 30
      }
    },
    "useGlobalAlertSettings": true,
    "degradedResponseTime": 10000,
    "maxResponseTime": 20000,
    "groupId": 0,
    "groupOrder": 0,
    "alertChannelSubscriptions": [
      {
        "alertChannelId": 0,
        "activated": true
      }
    ],
    "alertChannels": {
      "email": [
        {
          "address": ""
        }
      ],
      "webhook": [
        {
          "name": "",
          "url": "",
          "method": "POST",
          "headers": [],
          "queryParameters": []
        }
      ],
      "slack": [
        {
          "url": ""
        }
      ],
      "sms": [
        {
          "number": "",
          "name": "string"
        }
      ]
    },
    "created_at": "2020-06-23",
    "updated_at": "2020-06-23"
  }
]

```

### Properties

|Name|Type|Description|
|---|---|---|---|---|
|*anonymous*|[[Check](#schemacheck)]|none|

<h2 id="tocScheckcreate">CheckCreate</h2>

<a id="schemacheckcreate"></a>

```json
{
  "name": "string",
  "checkType": "BROWSER",
  "frequency": 5,
  "activated": true,
  "muted": false,
  "doubleCheck": true,
  "sslCheck": true,
  "shouldFail": true,
  "locations": [
    "us-east-1"
  ],
  "request": {
    "method": "GET",
    "url": "localhost",
    "followRedirects": true,
    "body": "",
    "bodyType": "NONE",
    "headers": [],
    "queryParameters": [],
    "assertions": [],
    "basicAuth": {
      "username": "",
      "password": ""
    }
  },
  "script": "string",
  "environmentVariables": [
    {
      "key": "string",
      "value": "",
      "locked": false
    }
  ],
  "tags": [
    "string"
  ],
  "setupSnippetId": 0,
  "tearDownSnippetId": 0,
  "localSetupScript": "string",
  "localTearDownScript": "string",
  "alertSettings": {
    "escalationType": "RUN_BASED",
    "runBasedEscalation": {
      "failedRunThreshold": 1
    },
    "timeBasedEscalation": {
      "minutesFailingThreshold": 5
    },
    "reminders": {
      "amount": 0,
      "interval": 5
    },
    "sslCertificates": {
      "enabled": true,
      "alertThreshold": 30
    }
  },
  "useGlobalAlertSettings": true,
  "degradedResponseTime": 10000,
  "maxResponseTime": 20000,
  "groupId": 0,
  "groupOrder": 0
}

```

### Properties

|Name|Type|Description|
|---|---|---|---|---|
|name<div class="requiredParam">(required)</div>|string|The name of the check|
|checkType<div class="requiredParam">(required)</div>|string|The type of the check|
|frequency|number|none|
|activated<div class="requiredParam">(required)</div>|boolean|Determines if the check is running or not|
|muted|boolean|Determines if any notifications will be send out when a check fails and/or recovers|
|doubleCheck|boolean|Setting this to "true" will trigger a retry when a check fails from the failing region and another, randomly selected region before marking the check as failed|
|sslCheck|boolean|Determines if the SSL certificate should be validated for expiry|
|shouldFail|boolean|Allows to invert the behaviour of when a check is considered to fail. Allows for validating error status like 404|
|locations|[Model_12](#schemamodel_12)|An array of one or more data center locations where to run the this check|
|request|[request](#schemarequest)|none|
|script|string|A valid piece of Node.js javascript code describing a browser interaction with the Puppeteer framework.|
|environmentVariables|[EnvironmentVariables](#schemaenvironmentvariables)|Key/value pairs for setting environment variables during check execution. These are only relevant for Browser checks. Use global environment variables whenever possible.|
|tags|[Tags](#schematags)|Tags for organizing and filtering checks|
|setupSnippetId|number|An ID reference to a snippet to use in the setup phase of an API check|
|tearDownSnippetId|number|An ID reference to a snippet to use in the teardown phase of an API check|
|localSetupScript|string|A valid piece of Node.js code to run in the setup phase|
|localTearDownScript|string|A valid piece of Node.js code to run in the teardown phase|
|alertSettings|[Model_8](#schemamodel_8)|none|
|useGlobalAlertSettings|boolean|When true, the account level alert setting will be used, not the alert setting defined on this check|
|degradedResponseTime|number|The response time in milliseconds where a check should be considered degraded|
|maxResponseTime|number|The response time in milliseconds where a check should be considered failing|
|groupId|number|The id of the check group this check is part of|
|groupOrder|number|The position of this check in a check group. It determines in what order checks are run when a group is triggered from the API or from CI/CD|

#### Enumerated Values

|Property|Value|
|---|---|
|checkType|BROWSER|
|checkType|API|
|frequency|5|
|frequency|10|
|frequency|15|
|frequency|30|
|frequency|60|
|frequency|720|
|frequency|1440|

<h2 id="tocSdashboardresponse">DashboardResponse</h2>

<a id="schemadashboardresponse"></a>

```json
{
  "customUrl": "string",
  "customDomain": "string",
  "logo": "string",
  "header": "string",
  "width": "FULL",
  "refreshRate": 60,
  "paginate": true,
  "paginationRate": 30,
  "tags": [
    "string"
  ],
  "hideTags": false,
  "dashboardId": "string"
}

```

### Properties

|Name|Type|Description|
|---|---|---|---|---|
|customUrl<div class="requiredParam">(required)</div>|string|A subdomain name under "checklyhq.com". Needs to be unique across all users.|
|customDomain<div class="requiredParam">(required)</div>|string|A custom user domain, e.g. "status.example.com". See the docs on updating your DNS and SSL usage.|
|logo<div class="requiredParam">(required)</div>|string|A URL pointing to an image file.|
|header<div class="requiredParam">(required)</div>|string|A piece of text displayed at the top of your dashboard.|
|width|string|Determines whether to use the full screen or focus in the center.|
|refreshRate<div class="requiredParam">(required)</div>|number|How often to refresh the dashboard in seconds.|
|paginate<div class="requiredParam">(required)</div>|boolean|Determines of pagination is on or off.|
|paginationRate<div class="requiredParam">(required)</div>|number|How often to trigger pagination in seconds.|
|tags|[Model_16](#schemamodel_16)|A list of one or more tags that filter which checks to display on the dashboard.|
|hideTags<div class="requiredParam">(required)</div>|boolean|Show or hide the tags on the dashboard.|
|dashboardId<div class="requiredParam">(required)</div>|string|none|

#### Enumerated Values

|Property|Value|
|---|---|
|width|FULL|
|width|960PX|
|refreshRate|60|
|refreshRate|300|
|refreshRate|600|
|paginationRate|30|
|paginationRate|60|
|paginationRate|300|

<h2 id="tocSdashboardslist">DashboardsList</h2>

<a id="schemadashboardslist"></a>

```json
[
  {
    "customUrl": "string",
    "customDomain": "string",
    "logo": "string",
    "header": "string",
    "width": "FULL",
    "refreshRate": 60,
    "paginate": true,
    "paginationRate": 30,
    "tags": [
      "string"
    ],
    "hideTags": false,
    "dashboardId": "string"
  }
]

```

### Properties

|Name|Type|Description|
|---|---|---|---|---|
|*anonymous*|[[DashboardResponse](#schemadashboardresponse)]|none|

<h2 id="tocSdashboardschema">DashboardSchema</h2>

<a id="schemadashboardschema"></a>

```json
{
  "customUrl": "string",
  "customDomain": "string",
  "logo": "string",
  "header": "string",
  "width": "FULL",
  "refreshRate": 60,
  "paginate": true,
  "paginationRate": 30,
  "tags": [
    "string"
  ],
  "hideTags": false
}

```

### Properties

|Name|Type|Description|
|---|---|---|---|---|
|customUrl<div class="requiredParam">(required)</div>|string|A subdomain name under "checklyhq.com". Needs to be unique across all users.|
|customDomain<div class="requiredParam">(required)</div>|string|A custom user domain, e.g. "status.example.com". See the docs on updating your DNS and SSL usage.|
|logo<div class="requiredParam">(required)</div>|string|A URL pointing to an image file.|
|header<div class="requiredParam">(required)</div>|string|A piece of text displayed at the top of your dashboard.|
|width|string|Determines whether to use the full screen or focus in the center.|
|refreshRate<div class="requiredParam">(required)</div>|number|How often to refresh the dashboard in seconds.|
|paginate<div class="requiredParam">(required)</div>|boolean|Determines of pagination is on or off.|
|paginationRate<div class="requiredParam">(required)</div>|number|How often to trigger pagination in seconds.|
|tags|[Model_17](#schemamodel_17)|A list of one or more tags that filter which checks to display on the dashboard.|
|hideTags<div class="requiredParam">(required)</div>|boolean|Show or hide the tags on the dashboard.|

#### Enumerated Values

|Property|Value|
|---|---|
|width|FULL|
|width|960PX|
|refreshRate|60|
|refreshRate|300|
|refreshRate|600|
|paginationRate|30|
|paginationRate|60|
|paginationRate|300|

<h2 id="tocSsnippet">Snippet</h2>

<a id="schemasnippet"></a>

```json
{
  "id": 0,
  "name": "string",
  "script": "string",
  "created_at": "2020-06-23",
  "updated_at": "2020-06-23"
}

```

### Properties

|Name|Type|Description|
|---|---|---|---|---|
|id|number|none|
|name|string|The snippet name|
|script|string|Your Node.js code that interacts with the API check lifecycle, or functions as a partial for browser checks.|
|created_at|string(date)|none|
|updated_at|string(date)|none|

<h2 id="tocSsnippetslist">SnippetsList</h2>

<a id="schemasnippetslist"></a>

```json
[
  {
    "id": 0,
    "name": "string",
    "script": "string",
    "created_at": "2020-06-23",
    "updated_at": "2020-06-23"
  }
]

```

### Properties

|Name|Type|Description|
|---|---|---|---|---|
|*anonymous*|[[Snippet](#schemasnippet)]|none|

<h2 id="tocSsnippetcreate">SnippetCreate</h2>

<a id="schemasnippetcreate"></a>

```json
{
  "name": "string",
  "script": "string"
}

```

### Properties

|Name|Type|Description|
|---|---|---|---|---|
|name<div class="requiredParam">(required)</div>|string|The snippet name|
|script<div class="requiredParam">(required)</div>|string|Your Node.js code that interacts with the API check lifecycle, or functions as a partial for browser checks.|

<h2 id="tocSenvironmentvariableslist">EnvironmentVariablesList</h2>

<a id="schemaenvironmentvariableslist"></a>

```json
[
  {
    "key": "string",
    "value": "",
    "locked": false
  }
]

```

### Properties

|Name|Type|Description|
|---|---|---|---|---|
|*anonymous*|[[EnvironmentVariable](#schemaenvironmentvariable)]|none|

<h2 id="tocSmodel_1">Model_1</h2>

<a id="schemamodel_1"></a>

```json
{}

```

### Properties

*None*

<h2 id="tocSmodel_2">Model_2</h2>

<a id="schemamodel_2"></a>

```json
{
  "id": 0,
  "name": "string",
  "activated": true,
  "muted": true,
  "tags": [
    "string"
  ],
  "locations": [
    "string"
  ],
  "concurrency": 3,
  "apiCheckDefaults": {
    "url": "",
    "headers": [],
    "queryParameters": [],
    "assertions": [],
    "basicAuth": {
      "username": "",
      "password": ""
    }
  },
  "browserCheckDefaults": {},
  "environmentVariables": [
    {
      "key": "string",
      "value": "",
      "locked": false
    }
  ],
  "doubleCheck": true,
  "useGlobalAlertSettings": true,
  "alertSettings": {
    "escalationType": "RUN_BASED",
    "runBasedEscalation": {
      "failedRunThreshold": 1
    },
    "timeBasedEscalation": {
      "minutesFailingThreshold": 5
    },
    "reminders": {
      "amount": 0,
      "interval": 5
    },
    "sslCertificates": {
      "enabled": true,
      "alertThreshold": 30
    }
  },
  "alertChannelSubscriptions": [
    {
      "alertChannelId": 0,
      "activated": true
    }
  ],
  "setupSnippetId": 0,
  "tearDownSnippetId": 0,
  "localSetupScript": "string",
  "localTearDownScript": "string",
  "created_at": "2020-06-23",
  "updated_at": "2020-06-23"
}

```

### Properties

|Name|Type|Description|
|---|---|---|---|---|
|id|number|none|
|name<div class="requiredParam">(required)</div>|string|none|
|activated<div class="requiredParam">(required)</div>|boolean|none|
|muted|boolean|none|
|tags|[tags](#schematags)|none|
|locations|[locations](#schemalocations)|none|
|concurrency<div class="requiredParam">(required)</div>|number|none|
|apiCheckDefaults<div class="requiredParam">(required)</div>|[apiCheckDefaults](#schemaapicheckdefaults)|none|
|browserCheckDefaults<div class="requiredParam">(required)</div>|[browserCheckDefaults](#schemabrowsercheckdefaults)|none|
|environmentVariables|[environmentVariables](#schemaenvironmentvariables)|none|
|doubleCheck|boolean|none|
|useGlobalAlertSettings|boolean|none|
|alertSettings|[AlertSettingsSchema](#schemaalertsettingsschema)|none|
|alertChannelSubscriptions|[alertChannelSubscriptions](#schemaalertchannelsubscriptions)|none|
|setupSnippetId|number|none|
|tearDownSnippetId|number|none|
|localSetupScript|string|none|
|localTearDownScript|string|none|
|created_at|string(date)|none|
|updated_at|string(date)|none|

<h2 id="tocSmodel_3">Model_3</h2>

<a id="schemamodel_3"></a>

```json
{}

```

### Properties

|Name|Type|Description|
|---|---|---|---|---|
|url|string|The base url for this group which you can reference with the {{GROUP_BASE_URL}} variable in all group checks.|
|headers|[Headers](#schemaheaders)|none|
|queryParameters|[QueryParameters](#schemaqueryparameters)|none|
|assertions|[assertions](#schemaassertions)|Check the main Checkly documentation on assertions for specific values like regular expressions and JSON path descriptors you can use in the "property" field.|
|basicAuth|[basicAuth](#schemabasicauth)|none|

<h2 id="tocSmodel_4">Model_4</h2>

<a id="schemamodel_4"></a>

```json
{}

```

### Properties

*None*

<h2 id="tocSmodel_5">Model_5</h2>

<a id="schemamodel_5"></a>

```json
{
  "name": "string",
  "activated": true,
  "muted": false,
  "tags": [
    "string"
  ],
  "locations": [
    "us-east-1"
  ],
  "concurrency": 3,
  "apiCheckDefaults": {},
  "browserCheckDefaults": {},
  "environmentVariables": [
    {
      "key": "string",
      "value": "",
      "locked": false
    }
  ],
  "doubleCheck": true,
  "useGlobalAlertSettings": true,
  "alertSettings": {
    "escalationType": "RUN_BASED",
    "runBasedEscalation": {
      "failedRunThreshold": 1
    },
    "timeBasedEscalation": {
      "minutesFailingThreshold": 5
    },
    "reminders": {
      "amount": 0,
      "interval": 5
    },
    "sslCertificates": {
      "enabled": true,
      "alertThreshold": 30
    }
  },
  "alertChannelSubscriptions": [
    {
      "alertChannelId": 0,
      "activated": true
    }
  ],
  "setupSnippetId": 0,
  "tearDownSnippetId": 0,
  "localSetupScript": "string",
  "localTearDownScript": "string"
}

```

### Properties

|Name|Type|Description|
|---|---|---|---|---|
|name<div class="requiredParam">(required)</div>|string|The name of the check group|
|activated|boolean|Determines if the checks in the  group are running or not|
|muted|boolean|Determines if any notifications will be send out when a check in this group fails and/or recovers|
|tags|[Tags](#schematags)|Tags for organizing and filtering checks|
|locations<div class="requiredParam">(required)</div>|[Locations](#schemalocations)|An array of one or more data center locations where to run the checks|
|concurrency|number|Determines how many checks are invoked concurrently when triggering a check group from CI/CD or through the API.|
|apiCheckDefaults|[Model_3](#schemamodel_3)|none|
|browserCheckDefaults|[Model_4](#schemamodel_4)|none|
|environmentVariables|[environmentVariables](#schemaenvironmentvariables)|none|
|doubleCheck|boolean|Setting this to "true" will trigger a retry when a check fails from the failing region and another, randomly selected region before marking the check as failed|
|useGlobalAlertSettings|boolean|When true, the account level alert setting will be used, not the alert setting defined on this check group|
|alertSettings|[AlertSettingsSchema](#schemaalertsettingsschema)|none|
|alertChannelSubscriptions|[alertChannelSubscriptions](#schemaalertchannelsubscriptions)|none|
|setupSnippetId|number|An ID reference to a snippet to use in the setup phase of an API check in this group|
|tearDownSnippetId|number|An ID reference to a snippet to use in the teardown phase of an API check in this group|
|localSetupScript|string|A valid piece of Node.js code to run in the setup phase of an API check in this group|
|localTearDownScript|string|A valid piece of Node.js code to run in the teardown phase of an API check in this group|

<h2 id="tocSmodel_6">Model_6</h2>

<a id="schemamodel_6"></a>

```json
[
  "us-east-1"
]

```

*An array of one or more data center locations where to run the this check*

### Properties

*None*

<h2 id="tocSmodel_7">Model_7</h2>

<a id="schemamodel_7"></a>

```json
{
  "username": "",
  "password": ""
}

```

### Properties

|Name|Type|Description|
|---|---|---|---|---|
|username<div class="requiredParam">(required)</div>|string|none|
|password<div class="requiredParam">(required)</div>|string|none|

<h2 id="tocSmodel_8">Model_8</h2>

<a id="schemamodel_8"></a>

```json
{
  "escalationType": "RUN_BASED",
  "runBasedEscalation": {
    "failedRunThreshold": 1
  },
  "timeBasedEscalation": {
    "minutesFailingThreshold": 5
  },
  "reminders": {
    "amount": 0,
    "interval": 5
  },
  "sslCertificates": {
    "enabled": true,
    "alertThreshold": 30
  }
}

```

### Properties

|Name|Type|Description|
|---|---|---|---|---|
|escalationType|string|Determines what type of escalation to use|
|runBasedEscalation|[runBasedEscalation](#schemarunbasedescalation)|none|
|timeBasedEscalation|[timeBasedEscalation](#schematimebasedescalation)|none|
|reminders|[reminders](#schemareminders)|none|
|sslCertificates|[sslCertificates](#schemasslcertificates)|none|

#### Enumerated Values

|Property|Value|
|---|---|
|escalationType|RUN_BASED|
|escalationType|TIME_BASED|

<h2 id="tocSmodel_9">Model_9</h2>

<a id="schemamodel_9"></a>

```json
{}

```

### Properties

|Name|Type|Description|
|---|---|---|---|---|
|url|string|The base url for this group which you can reference with the {{GROUP_BASE_URL}} variable in all group checks.|
|headers|[Headers](#schemaheaders)|none|
|queryParameters|[QueryParameters](#schemaqueryparameters)|none|
|assertions|[assertions](#schemaassertions)|Check the main Checkly documentation on assertions for specific values like regular expressions and JSON path descriptors you can use in the "property" field.|
|basicAuth|[basicAuth](#schemabasicauth)|none|

<h2 id="tocSmodel_10">Model_10</h2>

<a id="schemamodel_10"></a>

```json
{
  "name": "string",
  "activated": true,
  "muted": false,
  "tags": [
    "string"
  ],
  "locations": [
    "us-east-1"
  ],
  "concurrency": 3,
  "apiCheckDefaults": {},
  "browserCheckDefaults": {},
  "environmentVariables": [
    {
      "key": "string",
      "value": "",
      "locked": false
    }
  ],
  "doubleCheck": true,
  "useGlobalAlertSettings": true,
  "alertSettings": {
    "escalationType": "RUN_BASED",
    "runBasedEscalation": {
      "failedRunThreshold": 1
    },
    "timeBasedEscalation": {
      "minutesFailingThreshold": 5
    },
    "reminders": {
      "amount": 0,
      "interval": 5
    },
    "sslCertificates": {
      "enabled": true,
      "alertThreshold": 30
    }
  },
  "alertChannelSubscriptions": [
    {
      "alertChannelId": 0,
      "activated": true
    }
  ],
  "setupSnippetId": 0,
  "tearDownSnippetId": 0,
  "localSetupScript": "string",
  "localTearDownScript": "string"
}

```

### Properties

|Name|Type|Description|
|---|---|---|---|---|
|name|string|The name of the check group|
|activated|boolean|Determines if the checks in the  group are running or not|
|muted|boolean|Determines if any notifications will be send out when a check in this group fails and/or recovers|
|tags|[Tags](#schematags)|Tags for organizing and filtering checks|
|locations|[Locations](#schemalocations)|An array of one or more data center locations where to run the checks|
|concurrency|number|Determines how many checks are invoked concurrently when triggering a check group from CI/CD or through the API.|
|apiCheckDefaults|[Model_9](#schemamodel_9)|none|
|browserCheckDefaults|[Model_4](#schemamodel_4)|none|
|environmentVariables|[environmentVariables](#schemaenvironmentvariables)|none|
|doubleCheck|boolean|Setting this to "true" will trigger a retry when a check fails from the failing region and another, randomly selected region before marking the check as failed|
|useGlobalAlertSettings|boolean|When true, the account level alert setting will be used, not the alert setting defined on this check group|
|alertSettings|[AlertSettingsSchema](#schemaalertsettingsschema)|none|
|alertChannelSubscriptions|[alertChannelSubscriptions](#schemaalertchannelsubscriptions)|none|
|setupSnippetId|number|An ID reference to a snippet to use in the setup phase of an API check in this group|
|tearDownSnippetId|number|An ID reference to a snippet to use in the teardown phase of an API check in this group|
|localSetupScript|string|A valid piece of Node.js code to run in the setup phase of an API check in this group|
|localTearDownScript|string|A valid piece of Node.js code to run in the teardown phase of an API check in this group|

<h2 id="tocSmodel_11">Model_11</h2>

<a id="schemamodel_11"></a>

```json
[
  "us-east-1"
]

```

*An array of one or more data center locations where to run the this check*

### Properties

*None*

<h2 id="tocSmodel_12">Model_12</h2>

<a id="schemamodel_12"></a>

```json
[
  "us-east-1"
]

```

*An array of one or more data center locations where to run the this check*

### Properties

*None*

<h2 id="tocSmodel_13">Model_13</h2>

<a id="schemamodel_13"></a>

```json
[
  "us-east-1"
]

```

*An array of one or more data center locations where to run the this check*

### Properties

*None*

<h2 id="tocSmodel_14">Model_14</h2>

<a id="schemamodel_14"></a>

```json
{
  "escalationType": "RUN_BASED",
  "runBasedEscalation": {
    "failedRunThreshold": 1
  },
  "timeBasedEscalation": {
    "minutesFailingThreshold": 5
  },
  "reminders": {
    "amount": 0,
    "interval": 5
  },
  "sslCertificates": {
    "enabled": true,
    "alertThreshold": 30
  }
}

```

### Properties

|Name|Type|Description|
|---|---|---|---|---|
|escalationType|string|Determines what type of escalation to use|
|runBasedEscalation|[runBasedEscalation](#schemarunbasedescalation)|none|
|timeBasedEscalation|[timeBasedEscalation](#schematimebasedescalation)|none|
|reminders|[reminders](#schemareminders)|none|
|sslCertificates|[sslCertificates](#schemasslcertificates)|none|

#### Enumerated Values

|Property|Value|
|---|---|
|escalationType|RUN_BASED|
|escalationType|TIME_BASED|

<h2 id="tocSmodel_15">Model_15</h2>

<a id="schemamodel_15"></a>

```json
{
  "name": "string",
  "checkType": "BROWSER",
  "frequency": 5,
  "activated": true,
  "muted": false,
  "doubleCheck": true,
  "sslCheck": true,
  "shouldFail": true,
  "locations": [
    "us-east-1"
  ],
  "request": {
    "method": "GET",
    "url": "localhost",
    "followRedirects": true,
    "body": "",
    "bodyType": "NONE",
    "headers": [],
    "queryParameters": [],
    "assertions": [],
    "basicAuth": {
      "username": "",
      "password": ""
    }
  },
  "script": "string",
  "environmentVariables": [
    {
      "key": "string",
      "value": "",
      "locked": false
    }
  ],
  "tags": [
    "string"
  ],
  "setupSnippetId": 0,
  "tearDownSnippetId": 0,
  "localSetupScript": "string",
  "localTearDownScript": "string",
  "alertSettings": {
    "escalationType": "RUN_BASED",
    "runBasedEscalation": {
      "failedRunThreshold": 1
    },
    "timeBasedEscalation": {
      "minutesFailingThreshold": 5
    },
    "reminders": {
      "amount": 0,
      "interval": 5
    },
    "sslCertificates": {
      "enabled": true,
      "alertThreshold": 30
    }
  },
  "useGlobalAlertSettings": true,
  "degradedResponseTime": 10000,
  "maxResponseTime": 20000,
  "groupId": 0,
  "groupOrder": 0
}

```

### Properties

|Name|Type|Description|
|---|---|---|---|---|
|name|string|The name of the check|
|checkType|string|The type of the check|
|frequency|number|none|
|activated|boolean|Determines if the check is running or not|
|muted|boolean|Determines if any notifications will be send out when a check fails and/or recovers|
|doubleCheck|boolean|Setting this to "true" will trigger a retry when a check fails from the failing region and another, randomly selected region before marking the check as failed|
|sslCheck|boolean|Determines if the SSL certificate should be validated for expiry|
|shouldFail|boolean|Allows to invert the behaviour of when a check is considered to fail. Allows for validating error status like 404|
|locations|[Model_13](#schemamodel_13)|An array of one or more data center locations where to run the this check|
|request|[request](#schemarequest)|none|
|script|string|A valid piece of Node.js javascript code describing a browser interaction with the Puppeteer framework.|
|environmentVariables|[EnvironmentVariables](#schemaenvironmentvariables)|Key/value pairs for setting environment variables during check execution. These are only relevant for Browser checks. Use global environment variables whenever possible.|
|tags|[Tags](#schematags)|Tags for organizing and filtering checks|
|setupSnippetId|number|An ID reference to a snippet to use in the setup phase of an API check|
|tearDownSnippetId|number|An ID reference to a snippet to use in the teardown phase of an API check|
|localSetupScript|string|A valid piece of Node.js code to run in the setup phase|
|localTearDownScript|string|A valid piece of Node.js code to run in the teardown phase|
|alertSettings|[Model_14](#schemamodel_14)|none|
|useGlobalAlertSettings|boolean|When true, the account level alert setting will be used, not the alert setting defined on this check|
|degradedResponseTime|number|The response time in milliseconds where a check should be considered degraded|
|maxResponseTime|number|The response time in milliseconds where a check should be considered failing|
|groupId|number|The id of the check group this check is part of|
|groupOrder|number|The position of this check in a check group. It determines in what order checks are run when a group is triggered from the API or from CI/CD|

#### Enumerated Values

|Property|Value|
|---|---|
|checkType|BROWSER|
|checkType|API|
|frequency|5|
|frequency|10|
|frequency|15|
|frequency|30|
|frequency|60|
|frequency|720|
|frequency|1440|

<h2 id="tocSmodel_16">Model_16</h2>

<a id="schemamodel_16"></a>

```json
[
  "string"
]

```

*A list of one or more tags that filter which checks to display on the dashboard.*

### Properties

*None*

<h2 id="tocSmodel_17">Model_17</h2>

<a id="schemamodel_17"></a>

```json
[
  "string"
]

```

*A list of one or more tags that filter which checks to display on the dashboard.*

### Properties

*None*

<h2 id="tocSschema1">schema1</h2>

<a id="schemaschema1"></a>

```json
{
  "key": "string",
  "value": "",
  "locked": false
}

```

### Properties

|Name|Type|Description|
|---|---|---|---|---|
|key<div class="requiredParam">(required)</div>|string|none|
|value<div class="requiredParam">(required)</div>|string|none|
|locked|boolean|none|

<h2 id="tocSschema2">schema2</h2>

<a id="schemaschema2"></a>

```json
{
  "source": "STATUS_CODE",
  "property": "",
  "comparison": "EQUALS",
  "target": ""
}

```

### Properties

|Name|Type|Description|
|---|---|---|---|---|
|source|string|none|
|property|string|none|
|comparison|string|none|
|target|string|none|

#### Enumerated Values

|Property|Value|
|---|---|
|source|STATUS_CODE|
|source|JSON_BODY|
|source|HEADERS|
|source|TEXT_BODY|
|source|RESPONSE_TIME|
|comparison|EQUALS|
|comparison|NOT_EQUALS|
|comparison|HAS_KEY|
|comparison|NOT_HAS_KEY|
|comparison|HAS_VALUE|
|comparison|NOT_HAS_VALUE|
|comparison|IS_EMPTY|
|comparison|NOT_EMPTY|
|comparison|GREATER_THAN|
|comparison|LESS_THAN|
|comparison|CONTAINS|
|comparison|NOT_CONTAINS|
|comparison|IS_NULL|
|comparison|NOT_NULL|

<h2 id="tocSschema3">schema3</h2>

<a id="schemaschema3"></a>

```json
[]

```

### Properties

|Name|Type|Description|
|---|---|---|---|---|
|*anonymous*|[[schema1](#schemaschema1)]|none|

<h2 id="tocSschema4">schema4</h2>

<a id="schemaschema4"></a>

```json
[]

```

### Properties

|Name|Type|Description|
|---|---|---|---|---|
|*anonymous*|[[schema1](#schemaschema1)]|none|

<h2 id="tocSschema5">schema5</h2>

<a id="schemaschema5"></a>

```json
[]

```

*Check the main Checkly documentation on assertions for specific values like regular expressions and JSON path descriptors you can use in the "property" field.*

### Properties

|Name|Type|Description|
|---|---|---|---|---|
|*anonymous*|[[schema2](#schemaschema2)]|Check the main Checkly documentation on assertions for specific values like regular expressions and JSON path descriptors you can use in the "property" field.|

<h2 id="tocSschema6">schema6</h2>

<a id="schemaschema6"></a>

```json
{
  "username": "",
  "password": ""
}

```

### Properties

|Name|Type|Description|
|---|---|---|---|---|
|username<div class="requiredParam">(required)</div>|string|none|
|password<div class="requiredParam">(required)</div>|string|none|

<h2 id="tocSschema7">schema7</h2>

<a id="schemaschema7"></a>

```json
{
  "method": "GET",
  "url": "localhost",
  "followRedirects": true,
  "body": "",
  "bodyType": "NONE",
  "headers": [],
  "queryParameters": [],
  "assertions": [],
  "basicAuth": {
    "username": "",
    "password": ""
  }
}

```

### Properties

|Name|Type|Description|
|---|---|---|---|---|
|method<div class="requiredParam">(required)</div>|string|none|
|url<div class="requiredParam">(required)</div>|string|none|
|followRedirects|boolean|none|
|body|string|none|
|bodyType|string|none|
|headers|[schema3](#schemaschema3)|none|
|queryParameters|[schema4](#schemaschema4)|none|
|assertions|[schema5](#schemaschema5)|Check the main Checkly documentation on assertions for specific values like regular expressions and JSON path descriptors you can use in the "property" field.|
|basicAuth<div class="requiredParam">(required)</div>|[schema6](#schemaschema6)|none|

#### Enumerated Values

|Property|Value|
|---|---|
|method|GET|
|method|POST|
|method|PUT|
|method|HEAD|
|method|DELETE|
|method|PATCH|
|bodyType|NONE|
|bodyType|JSON|
|bodyType|FORM|
|bodyType|RAW|
|bodyType|GRAPHQL|

<h2 id="tocSschema8">schema8</h2>

<a id="schemaschema8"></a>

```json
{}

```

### Properties

*None*

