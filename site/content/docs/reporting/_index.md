---
title: Dashboard
weight: 1
aliases:
- /docs/reporting
menu:
  docs:
    parent: "Reporting"
---

With the reporting dashboard one can get an overview of all of their checks and their average, p95, and p99 response times as well as the success ratio and more. One can also export this data to a CSV for further processing by any other tools one might have. 

## Overview

When navigating to the reporting dashboard, one first lands on the overview screen with a list of their first 15 checks. 

Here one can use the toolbar to filter / sort by the following metrics:

- Date Range
- Check Type
- Check Tags
- Check Group Tags
- Name (ASC / DESC)
- Check Type (ASC / DESC)

## Graphs

By clicking on a check it will open a graph of the **response times** and **success ratio**. These graphs are tied to the date range selected in the toolbar above.

In the **response times** graph, all three metrics (average, p95, p99) are shown by default. However, one can toggle these on and off by clicking on the pills with their respective names to the right.

![Reporting Dashboard Graphs](/docs/images/reporting/dashboard.png)

## CSV Export

In the reporting overview one can export all available statistics to a CSV file in the click of a button. Select the date range for which you'd like to export statistics, and then simply click **Download as CSV** on the right side of the toolbar. This will generate and download a CSV file with the following columns/fields:

- Name
- Check ID
- Check Type
- Success Ratio
- Response Time (Average)
- Response Time (P95)
- Response Time (P99)
- Check Tags

Remember these statistics, like success ratio and response times, are calculated based upon the date range selected. By default this is 'Last 24 Hours'. 