---
title: About the Checkly team
---

# About us { .display-2 }

<p class="lead mb-5">
Checkly was founded in 2018 and has been growing steadily.  
We are a small team, working remotely on the future of e2e-testing and active monitoring.
</p>


# Join us. From anywhere. { .pt-5 }

<div class="row pt-4">
{{< sm-4-col-item "Monitor for performance" "Checkly records the response time for each request, down to TCP, DNS and first byte times. Add assertions for maximum response time." >}}
{{< sm-4-col-item "Monitor for correctness" "Check payloads, return codes, headers, and authentication. Dive inside JSON payloads and validate specific items." >}}
{{< sm-4-col-item "Monitor globally" "Checkly can monitor your APIs from 16 global data center locations." >}}
</div>

Check out our [jobs page](/jobs) page for current openings.


{.text-center .section-header .mb-4}
## How it works

{{% feature-row header="Create an HTTP request" img="/product/api-monitoring/http-request@2x.png" %}}
Import your HTTP requests or assemble one by hand. Checkly gives you full control over all HTTP request options:
**HTTP method, URL, query parameters, headers, and body**. Add credentials or a Bearer
token for authentication.

{{% cta-link "Learn more" "/docs/api-checks/request-settings/" %}}


{{% /feature-row %}}

{{% feature-row header="Add API check assertions" img="/product/api-monitoring/assertions@2x.png" %}}
Checkly's assertion matrix helps you create as many assertions per check as you want. Monitor your API for correct response times, HTTP status code,
plain text or JSON bodies and headers. **Drill into JSON payloads with JSON path** or user regular expression.
{{% cta-link "Learn more" "/docs/api-checks/assertions/" %}}


{{% /feature-row %}}

{{% feature-row header="Customize setup & teardown" img="/product/api-monitoring/setup-teardown.png" %}}
If needed, you can take full control of how your request executes. Use setup scripts to **cryptographically sign requests**,
fetch OAuth tokens and update request attributes before any request is done. Use teardown scripts to clean up test data or
**scrub sensitive data** from the response.
{{% cta-link "Learn more" "/docs/api-checks/setup-teardown-scripts/" %}}


{{% /feature-row %}}

{{% feature-row header="Monitor your API every minute" img="/product/api-monitoring/results.png" %}}
We monitor your API as often as once per minute. This gives you a consistent and accurate view of your API performance.
Next to aggregating metrics, we give you **access to each result** from each of the configured data centers.
{{% /feature-row %}}


## Alerting for any situation {.text-center .section-header .pt-5}

![alerting options](/landing/alerting-options@2x.png) {.text-center .mb-lg-5 .img-w360}

<p class="text-center lead-text mb-lg-5">
When a check fails, you and your team need timely and actionable insights to address any down time.
Add Slack, SMS, email or Pagerduty: Checkly's alerts give you the right information whatever alerting medium you choose.
Need more control? Webhooks give you full access to the JSON data we use ourselves for alerting.
{{% cta-link "Learn more" "/product/alerting/" %}}
</p>


{.text-center .section-header .pt-5}
## Global coverage
{.text-center .mb-lg-5 .img-w720}
![alerting options](/landing/data-center-locations@2x.png)

<p class="text-center lead-text mb-lg-5">
Get a clear picture of how your services perform for all your users around the world. Run your check from any of sixteen
data center locations spread over the Americas, EMEA and Asia Pacific.

{{% cta-link "Learn more" "/docs/monitoring/global-locations/" %}}
</p>




