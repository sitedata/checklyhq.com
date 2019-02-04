---
title: Assertions
weight: 4
menu:
  docs:
    parent: "API Checks"
---

The response of an API request can be checked for correctness and timeliness by using assertions on the response data. Assertions are flexible statements that combine preset modifiers with custom values to meet the needs of a broad set of use cases.

{{< page-toc >}}

## How assertions work

Assertions are statements you create that check one aspect of the HTTP response. You can create multiple assertions for one check that assert various aspects of a response, for example:

- HTTP response status equals 200.
- HTTP response body equals the text "success".
- HTTP response time is lower than 2000 milliseconds.
- HTTP response header "X-Custom-Header" equals "SomeValue".
- HTTP response JSON object has a key called "accountBalance" with a value greater than 9999

In each assertion, a **source** is connected to a **comparison** and a **target**.

![api monitoring assertions example 1](/docs/images/api-checks/assertions-1.png)

In some cases a **property** is added, for example when asserting headers or JSON response bodies.

![api monitoring assertions example 2](/docs/images/api-checks/assertions-2.png)

Assertions are executed from top to bottom. If one assertion fails, the full check is considered as failed.

## Source

On each API check assertion, the following sources are available:

### Status code
The HTTP response status, parsed as an integer.

### JSON object
The response body parsed as a JSON object. This allows inspection of the JSON object using the "Has key" and "Has value" comparisons.

### JSON array
The response body parsed as a JSON array. With JSON arrays, you get the option to target the last, first or any *nth* item and then apply
the same comparison as a JSON object. Very handy when your API endpoint returns collections. 

### Text body
The response body as plain text.

### Headers
The response headers as an array of key/value pairs. This allows the inspection of headers using the "property" field to match the header name and the "target" field to match the header value.

### Response time
The response time of the full API request in milliseconds, parsed as an integer value.

## Property

The property field is a free form text field, mostly used to identify the name of a header or the key of a JSON object to be used in the assertion statement.

When used on JSON bodies, the property field accepts **nested identifiers** in the form of dot-separated strings to target nested properties in an object, i.e. `product.size`.

Read more about asserting JSON response bodies below.

## Comparison

Comparisons are the operators that work on the source data and target data, i.e. `response time (source) is LESS THAN 150 (target)` or `status code EQUALS 200`. You get it.
On each API check assertion, the following comparisons are available:

- Equals / Not equals
- Is empty / Not empty
- Has key / Not has key
- Has value / Not has value
- Greater than
- Less than

## Target

The target field is a free form text field that determines the desired outcome of your assertion.


## Asserting JSON responses

A big part of knowing your API is still working as designed is parsing and checking the response body. In many cases this will be
a JSON formatted document returned from a REST API.

## Asserting basic types

Asserting string, boolean and number values works exactly as you'd expect, e.g. the example below asserts the number value of
the `id` property is greater than `2000`.

![api monitoring assertions example 4](/docs/images/api-checks/assertions-4.png)

## Nested properties

You can traverse a JSON object using a dot notation. In the example below we are checking the string-based `size`
property that is part of the `product` object in the JSON response.

![api monitoring assertions JSON object](/docs/images/api-checks/assertions-3.png)

This next example checks for a **boolean** value in the `owner.site_admin` property

![api monitoring assertions nested JSON object](/docs/images/api-checks/assertions-5.png)

## JSON arrays

For response bodies with JSON arrays instead of objects you have the following options:

- **Length:** let's check you checks the amount of items in the returned array.
- **First item:** picks the first item in the array.
- **Last item:** picks the last item in the array.
- **Nth item:** picks any item in the array by index.

In the first example below we check if the total array has more than 30 items using the **Length** and **Greater than** options.

![api monitoring assertions nested JSON array](/docs/images/api-checks/assertions-6.png)

In this example we pick the last item in the array and check if the `customerId` property has the value `123ab`  

![api monitoring assertions nested JSON array pick item](/docs/images/api-checks/assertions-7.png)

In the last example we pick the item with index value 4. This is the 5th item as array indexes start at 0. We then assert
that the `responseTime` property is less than `2000`.  


![api monitoring assertions nested JSON array pick nth item](/docs/images/api-checks/assertions-8.png)
