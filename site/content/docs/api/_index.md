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

<h1 id="checkly-api">Checkly API V1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Base URLs:

* <a href="http://localhost:3000/">http://localhost:3000/</a>

# Authentication

* API Key (Bearer)
    - Parameter Name: **Authorization**, in: header. 

<h1 id="checkly-api-check-results">Check results</h1>

## Lists check results

<a id="opIdgetV1CheckresultsCheckid"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://localhost:3000/v1/check-results/{checkId} \
  -H 'Accept: */*' \
  -H 'Authorization: API_KEY'

```

`GET /v1/check-results/{checkId}`

<h3 id="lists-check-results-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|checkId|path|string|true|none|
|limit|query|number|false|none|
|page|query|number|false|none|
|location|query|string|false|none|

> Example responses

> 200 Response

<h3 id="lists-check-results-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful|[CheckResultsList](#schemacheckresultslist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

<h1 id="checkly-api-check-status">Check status</h1>

## Lists all check statuses

<a id="opIdgetV1Checkstatuses"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://localhost:3000/v1/check-statuses \
  -H 'Accept: */*' \
  -H 'Authorization: API_KEY'

```

`GET /v1/check-statuses`

Show the current status information for all checks in your account

> Example responses

> 200 Response

<h3 id="lists-all-check-statuses-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful|[CheckStatusList](#schemacheckstatuslist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## Get check status details

<a id="opIdgetV1CheckstatusesCheckid"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://localhost:3000/v1/check-statuses/{checkId} \
  -H 'Accept: */*' \
  -H 'Authorization: API_KEY'

```

`GET /v1/check-statuses/{checkId}`

Show the current status information for a specific check

<h3 id="get-check-status-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|checkId|path|string|true|none|

> Example responses

> 200 Response

<h3 id="get-check-status-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful|[CheckStatus](#schemacheckstatus)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

<h1 id="checkly-api-checks">Checks</h1>

## List all checks

<a id="opIdgetV1Checks"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://localhost:3000/v1/checks \
  -H 'Accept: */*' \
  -H 'Authorization: API_KEY'

```

`GET /v1/checks`

<h3 id="list-all-checks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|number|false|none|
|page|query|number|false|none|

> Example responses

> 200 Response

<h3 id="list-all-checks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful|[CheckList](#schemachecklist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## Create a check

<a id="opIdpostV1Checks"></a>

> Code samples

```shell
# You can also use wget
curl -X POST http://localhost:3000/v1/checks \
  -H 'Content-Type: application/json' \
  -H 'Accept: */*' \
  -H 'Authorization: API_KEY'

```

`POST /v1/checks`

Creates a new API or browser check

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
  "sslCheckDomain": "string",
  "shouldFail": true,
  "locations": [
    "string"
  ],
  "request": {
    "method": "GET",
    "url": "localhost",
    "followRedirects": true,
    "body": "string",
    "bodyType": "JSON",
    "headers": [
      {
        "key": "string",
        "value": "",
        "locked": false
      }
    ],
    "queryParameters": [
      {
        "key": "string",
        "value": "",
        "locked": false
      }
    ],
    "assertions": [
      "string"
    ],
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
  "alertChannels": {
    "email": [
      {
        "address": ""
      }
    ],
    "webhook": [
      {
        "name": "",
        "url": ""
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
  "tags": [
    "string"
  ],
  "setupSnippetId": 0,
  "tearDownSnippetId": 0,
  "localSetupScript": "string",
  "localTearDownScript": "string",
  "alertSettings": {},
  "useGlobalAlertSettings": true
}
```

<h3 id="create-a-check-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CheckCreate](#schemacheckcreate)|false|none|

> Example responses

> 201 Response

<h3 id="create-a-check-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Created|[Check](#schemacheck)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## Delete a check

<a id="opIddeleteV1ChecksId"></a>

> Code samples

```shell
# You can also use wget
curl -X DELETE http://localhost:3000/v1/checks/{id} \
  -H 'Accept: */*' \
  -H 'Authorization: API_KEY'

```

`DELETE /v1/checks/{id}`

Permanently removes a API or browser check and all it underpinning data like results

<h3 id="delete-a-check-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> default Response

<h3 id="delete-a-check-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Successful|string|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## Get check details

<a id="opIdgetV1ChecksId"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://localhost:3000/v1/checks/{id} \
  -H 'Accept: */*' \
  -H 'Authorization: API_KEY'

```

`GET /v1/checks/{id}`

Show details of a specific API or browser check

<h3 id="get-check-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

<h3 id="get-check-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful|[Check](#schemacheck)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## Update a check

<a id="opIdputV1ChecksId"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT http://localhost:3000/v1/checks/{id} \
  -H 'Content-Type: application/json' \
  -H 'Accept: */*' \
  -H 'Authorization: API_KEY'

```

`PUT /v1/checks/{id}`

Updates a new API or browser check

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
  "sslCheckDomain": "string",
  "shouldFail": true,
  "locations": [
    "string"
  ],
  "request": {
    "method": "GET",
    "url": "localhost",
    "followRedirects": true,
    "body": "string",
    "bodyType": "JSON",
    "headers": [
      {
        "key": "string",
        "value": "",
        "locked": false
      }
    ],
    "queryParameters": [
      {
        "key": "string",
        "value": "",
        "locked": false
      }
    ],
    "assertions": [
      "string"
    ],
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
  "alertChannels": {
    "email": [
      {
        "address": ""
      }
    ],
    "webhook": [
      {
        "name": "",
        "url": ""
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
  "tags": [
    "string"
  ],
  "setupSnippetId": 0,
  "tearDownSnippetId": 0,
  "localSetupScript": "string",
  "localTearDownScript": "string",
  "alertSettings": {},
  "useGlobalAlertSettings": true
}
```

<h3 id="update-a-check-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|body|body|[CheckCreate](#schemacheckcreate)|false|none|

> Example responses

> 200 Response

<h3 id="update-a-check-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful|[Check](#schemacheck)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

<h1 id="checkly-api-snippets">Snippets</h1>

## List all snippets

<a id="opIdgetV1Snippets"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://localhost:3000/v1/snippets \
  -H 'Accept: */*' \
  -H 'Authorization: API_KEY'

```

`GET /v1/snippets`

<h3 id="list-all-snippets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|number|false|none|
|page|query|number|false|none|

> Example responses

> 200 Response

<h3 id="list-all-snippets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful|[SnippetsList](#schemasnippetslist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## Create a snippet

<a id="opIdpostV1Snippets"></a>

> Code samples

```shell
# You can also use wget
curl -X POST http://localhost:3000/v1/snippets \
  -H 'Content-Type: application/json' \
  -H 'Accept: */*' \
  -H 'Authorization: API_KEY'

```

`POST /v1/snippets`

Creates a new code snippet

> Body parameter

```json
{
  "name": "string",
  "script": "string"
}
```

<h3 id="create-a-snippet-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SnippetCreate](#schemasnippetcreate)|false|none|

> Example responses

> 201 Response

<h3 id="create-a-snippet-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Created|[Snippet](#schemasnippet)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## Delete snippet

<a id="opIddeleteV1SnippetsId"></a>

> Code samples

```shell
# You can also use wget
curl -X DELETE http://localhost:3000/v1/snippets/{id} \
  -H 'Accept: */*' \
  -H 'Authorization: API_KEY'

```

`DELETE /v1/snippets/{id}`

<h3 id="delete-snippet-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|number|true|none|

> Example responses

> default Response

<h3 id="delete-snippet-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Successful|string|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## Get snippet details

<a id="opIdgetV1SnippetsId"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://localhost:3000/v1/snippets/{id} \
  -H 'Accept: */*' \
  -H 'Authorization: API_KEY'

```

`GET /v1/snippets/{id}`

Show details of a specific snippet

<h3 id="get-snippet-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|number|true|none|

> Example responses

> 200 Response

<h3 id="get-snippet-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful|[Snippet](#schemasnippet)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## Update a snippet

<a id="opIdputV1SnippetsId"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT http://localhost:3000/v1/snippets/{id} \
  -H 'Content-Type: application/json' \
  -H 'Accept: */*' \
  -H 'Authorization: API_KEY'

```

`PUT /v1/snippets/{id}`

Updates a code snippet

> Body parameter

```json
{
  "name": "string",
  "script": "string"
}
```

<h3 id="update-a-snippet-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|number|true|none|
|body|body|[SnippetCreate](#schemasnippetcreate)|false|none|

> Example responses

> 200 Response

<h3 id="update-a-snippet-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful|[Snippet](#schemasnippet)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

# Schemas

<h2 id="tocSapicheckresult">apiCheckResult</h2>

<a id="schemaapicheckresult"></a>

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
  "runLocation": "string",
  "lastCheckRunId": "string",
  "sslDaysRemaining": 0,
  "failedCheckRuns": 0,
  "startedAt": "2019-04-05",
  "stoppedAt": "2019-04-05",
  "created_at": "2019-04-05",
  "responseTime": 0,
  "apiCheckResult": {},
  "browserCheckResult": {},
  "checkRunId": 0,
  "attempts": 0
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|name|string|false|none|none|
|checkId|string|false|none|none|
|hasFailures|boolean|false|none|none|
|hasErrors|boolean|false|none|none|
|runLocation|string|false|none|none|
|lastCheckRunId|string|false|none|none|
|sslDaysRemaining|number|false|none|none|
|failedCheckRuns|number|false|none|none|
|startedAt|string(date)|false|none|none|
|stoppedAt|string(date)|false|none|none|
|created_at|string(date)|false|none|none|
|responseTime|number|false|none|none|
|apiCheckResult|[apiCheckResult](#schemaapicheckresult)|false|none|none|
|browserCheckResult|[apiCheckResult](#schemaapicheckresult)|false|none|none|
|checkRunId|number|false|none|none|
|attempts|number|false|none|none|

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
    "runLocation": "string",
    "lastCheckRunId": "string",
    "sslDaysRemaining": 0,
    "failedCheckRuns": 0,
    "startedAt": "2019-04-05",
    "stoppedAt": "2019-04-05",
    "created_at": "2019-04-05",
    "responseTime": 0,
    "apiCheckResult": {},
    "browserCheckResult": {},
    "checkRunId": 0,
    "attempts": 0
  }
]

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[CheckResult](#schemacheckresult)]|false|none|none|

<h2 id="tocScheckstatus">CheckStatus</h2>

<a id="schemacheckstatus"></a>

```json
{
  "checkId": "string",
  "hasFailures": true,
  "hasErrors": true,
  "longestRun": 0,
  "shortestRun": 0,
  "lastRunLocation": "string",
  "lastCheckRunId": "string",
  "sslDaysRemaining": 0,
  "failedCheckRuns": 0,
  "created_at": "2019-04-05",
  "updated_at": "2019-04-05"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|checkId|string|false|none|none|
|hasFailures|boolean|false|none|none|
|hasErrors|boolean|false|none|none|
|longestRun|number|false|none|none|
|shortestRun|number|false|none|none|
|lastRunLocation|string|false|none|none|
|lastCheckRunId|string|false|none|none|
|sslDaysRemaining|number|false|none|none|
|failedCheckRuns|number|false|none|none|
|created_at|string(date)|false|none|none|
|updated_at|string(date)|false|none|none|

<h2 id="tocScheckstatuslist">CheckStatusList</h2>

<a id="schemacheckstatuslist"></a>

```json
[
  {
    "checkId": "string",
    "hasFailures": true,
    "hasErrors": true,
    "longestRun": 0,
    "shortestRun": 0,
    "lastRunLocation": "string",
    "lastCheckRunId": "string",
    "sslDaysRemaining": 0,
    "failedCheckRuns": 0,
    "created_at": "2019-04-05",
    "updated_at": "2019-04-05"
  }
]

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[CheckStatus](#schemacheckstatus)]|false|none|none|

<h2 id="tocSlocations">Locations</h2>

<a id="schemalocations"></a>

```json
[
  "string"
]

```

### Properties

*None*

<h2 id="tocScheck">Check</h2>

<a id="schemacheck"></a>

```json
{
  "id": "string",
  "name": "string",
  "checkType": "string",
  "frequency": 0,
  "activated": true,
  "muted": true,
  "doubleCheck": true,
  "sslCheck": true,
  "sslCheckDomain": "string",
  "shouldFail": true,
  "locations": [
    "string"
  ],
  "request": {},
  "script": "string",
  "environmentVariables": [
    "string"
  ],
  "tags": [
    "string"
  ],
  "setupSnippetId": 0,
  "tearDownSnippetId": 0,
  "localSetupScript": "string",
  "localTearDownScript": "string",
  "alertSettings": {},
  "useGlobalAlertSettings": true,
  "created_at": "2019-04-05",
  "updated_at": "2019-04-05"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|name|string|false|none|none|
|checkType|string|false|none|The type of checks.|
|frequency|number|false|none|The interval in minutes this check is scheduled.|
|activated|boolean|false|none|none|
|muted|boolean|false|none|none|
|doubleCheck|boolean|false|none|none|
|sslCheck|boolean|false|none|none|
|sslCheckDomain|string|false|none|none|
|shouldFail|boolean|false|none|none|
|locations|[Locations](#schemalocations)|false|none|none|
|request|[apiCheckResult](#schemaapicheckresult)|false|none|none|
|script|string|false|none|none|
|environmentVariables|[Locations](#schemalocations)|false|none|none|
|tags|[Locations](#schemalocations)|false|none|none|
|setupSnippetId|number|false|none|none|
|tearDownSnippetId|number|false|none|none|
|localSetupScript|string|false|none|none|
|localTearDownScript|string|false|none|none|
|alertSettings|[apiCheckResult](#schemaapicheckresult)|false|none|none|
|useGlobalAlertSettings|boolean|false|none|none|
|created_at|string(date)|false|none|none|
|updated_at|string(date)|false|none|none|

<h2 id="tocSchecklist">CheckList</h2>

<a id="schemachecklist"></a>

```json
[
  {
    "id": "string",
    "name": "string",
    "checkType": "string",
    "frequency": 0,
    "activated": true,
    "muted": true,
    "doubleCheck": true,
    "sslCheck": true,
    "sslCheckDomain": "string",
    "shouldFail": true,
    "locations": [
      "string"
    ],
    "request": {},
    "script": "string",
    "environmentVariables": [
      "string"
    ],
    "tags": [
      "string"
    ],
    "setupSnippetId": 0,
    "tearDownSnippetId": 0,
    "localSetupScript": "string",
    "localTearDownScript": "string",
    "alertSettings": {},
    "useGlobalAlertSettings": true,
    "created_at": "2019-04-05",
    "updated_at": "2019-04-05"
  }
]

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Check](#schemacheck)]|false|none|none|

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

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|none|
|value|string|true|none|none|
|locked|boolean|false|none|none|

<h2 id="tocSheaders">headers</h2>

<a id="schemaheaders"></a>

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

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[KeyValue](#schemakeyvalue)]|false|none|none|

<h2 id="tocSbasicauth">basicAuth</h2>

<a id="schemabasicauth"></a>

```json
{
  "username": "",
  "password": ""
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|username|string|false|none|none|
|password|string|false|none|none|

<h2 id="tocSrequest">Request</h2>

<a id="schemarequest"></a>

```json
{
  "method": "GET",
  "url": "localhost",
  "followRedirects": true,
  "body": "string",
  "bodyType": "JSON",
  "headers": [
    {
      "key": "string",
      "value": "",
      "locked": false
    }
  ],
  "queryParameters": [
    {
      "key": "string",
      "value": "",
      "locked": false
    }
  ],
  "assertions": [
    "string"
  ],
  "basicAuth": {
    "username": "",
    "password": ""
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|method|string|true|none|none|
|url|string|true|none|none|
|followRedirects|boolean|false|none|none|
|body|string|false|none|none|
|bodyType|string|false|none|none|
|headers|[headers](#schemaheaders)|false|none|none|
|queryParameters|[headers](#schemaheaders)|false|none|none|
|assertions|[Locations](#schemalocations)|false|none|none|
|basicAuth|[basicAuth](#schemabasicauth)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|method|GET|
|method|POST|
|method|PUT|
|method|HEAD|
|method|DELETE|
|method|PATCH|
|bodyType|JSON|
|bodyType|FORM|
|bodyType|RAW|

<h2 id="tocSalertemail">AlertEmail</h2>

<a id="schemaalertemail"></a>

```json
{
  "address": ""
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|string|true|none|none|

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

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[AlertEmail](#schemaalertemail)]|false|none|none|

<h2 id="tocSalertwebhook">AlertWebhook</h2>

<a id="schemaalertwebhook"></a>

```json
{
  "name": "",
  "url": ""
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|url|string|true|none|none|

<h2 id="tocSwebhook">webhook</h2>

<a id="schemawebhook"></a>

```json
[
  {
    "name": "",
    "url": ""
  }
]

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[AlertWebhook](#schemaalertwebhook)]|false|none|none|

<h2 id="tocSalertslack">AlertSlack</h2>

<a id="schemaalertslack"></a>

```json
{
  "url": ""
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|url|string|true|none|none|

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

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[AlertSlack](#schemaalertslack)]|false|none|none|

<h2 id="tocSalertsms">AlertSms</h2>

<a id="schemaalertsms"></a>

```json
{
  "number": "",
  "name": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|number|string|true|none|none|
|name|string|true|none|none|

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

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[AlertSms](#schemaalertsms)]|false|none|none|

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
      "url": ""
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

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|[email](#schemaemail)|false|none|none|
|webhook|[webhook](#schemawebhook)|false|none|none|
|slack|[slack](#schemaslack)|false|none|none|
|sms|[sms](#schemasms)|false|none|none|

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
  "sslCheckDomain": "string",
  "shouldFail": true,
  "locations": [
    "string"
  ],
  "request": {
    "method": "GET",
    "url": "localhost",
    "followRedirects": true,
    "body": "string",
    "bodyType": "JSON",
    "headers": [
      {
        "key": "string",
        "value": "",
        "locked": false
      }
    ],
    "queryParameters": [
      {
        "key": "string",
        "value": "",
        "locked": false
      }
    ],
    "assertions": [
      "string"
    ],
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
  "alertChannels": {
    "email": [
      {
        "address": ""
      }
    ],
    "webhook": [
      {
        "name": "",
        "url": ""
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
  "tags": [
    "string"
  ],
  "setupSnippetId": 0,
  "tearDownSnippetId": 0,
  "localSetupScript": "string",
  "localTearDownScript": "string",
  "alertSettings": {},
  "useGlobalAlertSettings": true
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|checkType|string|true|none|none|
|frequency|number|false|none|none|
|activated|boolean|true|none|none|
|muted|boolean|false|none|none|
|doubleCheck|boolean|false|none|none|
|sslCheck|boolean|false|none|none|
|sslCheckDomain|string|false|none|none|
|shouldFail|boolean|false|none|none|
|locations|[Model_1](#schemamodel_1)|false|none|none|
|request|[Request](#schemarequest)|false|none|none|
|script|string|false|none|none|
|environmentVariables|[headers](#schemaheaders)|false|none|none|
|alertChannels|[AlertChannels](#schemaalertchannels)|false|none|none|
|tags|[Locations](#schemalocations)|false|none|none|
|setupSnippetId|number|false|none|none|
|tearDownSnippetId|number|false|none|none|
|localSetupScript|string|false|none|none|
|localTearDownScript|string|false|none|none|
|alertSettings|[apiCheckResult](#schemaapicheckresult)|false|none|none|
|useGlobalAlertSettings|boolean|false|none|none|

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

<h2 id="tocSsnippet">Snippet</h2>

<a id="schemasnippet"></a>

```json
{
  "id": 0,
  "name": "string",
  "script": "string",
  "created_at": "2019-04-05",
  "updated_at": "2019-04-05"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|number|false|none|none|
|name|string|false|none|none|
|script|string|false|none|none|
|created_at|string(date)|false|none|none|
|updated_at|string(date)|false|none|none|

<h2 id="tocSsnippetslist">SnippetsList</h2>

<a id="schemasnippetslist"></a>

```json
[
  {
    "id": 0,
    "name": "string",
    "script": "string",
    "created_at": "2019-04-05",
    "updated_at": "2019-04-05"
  }
]

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Snippet](#schemasnippet)]|false|none|none|

<h2 id="tocSsnippetcreate">SnippetCreate</h2>

<a id="schemasnippetcreate"></a>

```json
{
  "name": "string",
  "script": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|The snippet name|
|script|string|true|none|Your Node.js code that interacts with the API check lifecycle, or functions as a partial for browser checks.|

<h2 id="tocSmodel_1">Model_1</h2>

<a id="schemamodel_1"></a>

```json
[
  "string"
]

```

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

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|none|
|value|string|true|none|none|
|locked|boolean|false|none|none|

<h2 id="tocSschema2">schema2</h2>

<a id="schemaschema2"></a>

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

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[schema1](#schemaschema1)]|false|none|none|

<h2 id="tocSschema3">schema3</h2>

<a id="schemaschema3"></a>

```json
[
  "string"
]

```

### Properties

*None*

<h2 id="tocSschema4">schema4</h2>

<a id="schemaschema4"></a>

```json
{
  "username": "",
  "password": ""
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|username|string|false|none|none|
|password|string|false|none|none|

<h2 id="tocSschema5">schema5</h2>

<a id="schemaschema5"></a>

```json
{}

```

### Properties

*None*

<h2 id="tocSschema6">schema6</h2>

<a id="schemaschema6"></a>

```json
[
  "string"
]

```

### Properties

*None*

<h2 id="tocSschema7">schema7</h2>

<a id="schemaschema7"></a>

```json
[
  "string"
]

```

### Properties

*None*

<h2 id="tocSschema8">schema8</h2>

<a id="schemaschema8"></a>

```json
{
  "method": "GET",
  "url": "localhost",
  "followRedirects": true,
  "body": "string",
  "bodyType": "JSON",
  "headers": [
    {
      "key": "string",
      "value": "",
      "locked": false
    }
  ],
  "queryParameters": [
    {
      "key": "string",
      "value": "",
      "locked": false
    }
  ],
  "assertions": [
    "string"
  ],
  "basicAuth": {
    "username": "",
    "password": ""
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|method|string|true|none|none|
|url|string|true|none|none|
|followRedirects|boolean|false|none|none|
|body|string|false|none|none|
|bodyType|string|false|none|none|
|headers|[schema2](#schemaschema2)|false|none|none|
|queryParameters|[schema2](#schemaschema2)|false|none|none|
|assertions|[schema3](#schemaschema3)|false|none|none|
|basicAuth|[schema4](#schemaschema4)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|method|GET|
|method|POST|
|method|PUT|
|method|HEAD|
|method|DELETE|
|method|PATCH|
|bodyType|JSON|
|bodyType|FORM|
|bodyType|RAW|

