---
title: Asserting JSON responses
weight: 4
menu:
  docs:
    parent: "API Checks"
---

A big part of knowing your API is still working as designed is parsing and checking the response body. In many cases this will be 
a JSON formatted document returned from REST API.

## Nested properties

In the example 
below we are checking the `size` property that is part of the `product` object in the JSON response.

```
source      property          comparison   target

JSON_BODY   "product.size"    HAS_VALUE    "XL"
```