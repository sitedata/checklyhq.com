---
title: Asserting JSON responses
weight: 4
menu:
  docs:
    parent: "API Checks"
---

A big part of knowing your API is still working as designed is parsing and checking the response body. In many cases this will be
a JSON formatted document returned from REST API.

## Asserting basic types

Asserting string, boolean and number values works exactly as you'd expect, e.g. the example below asserts the number value of
the `id` property is greater than `2000`.

![](/docs/images/api-checks/assertions-4.png)

## Nested properties

You can traverse a JSON object using a dot notation. In the example below we are checking the string-based `size`
property that is part of the `product` object in the JSON response.

![](/docs/images/api-checks/assertions-3.png)

This next example checks for a **boolean** value in the `owner.site_admin` property

![](/docs/images/api-checks/assertions-5.png)
