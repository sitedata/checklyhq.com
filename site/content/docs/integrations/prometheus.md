---
title: Prometheus (beta)
weight: 1
menu:
  docs:
    parent: "Integrations"
---

If you are using [Prometheus](https://prometheus.io/) for monitoring and the popular [Grafana](https://grafana.com/) stack
for dashboarding, you can expose Checkly's core metrics on a dedicated, secured endpoint.

Checkly exposes two type of metrics in a Prometheus-compatible format. 

- **checkly_check_status**: this metric reports if a check is failing. 1 means the check is passing, 0 means the check is failing.
- **checkly_check_result**: this metric reports the last collected response time for check in a specific region. This means
you get one checkly_check_result stanza for each region the check is configured to run in.

Here is an example:

```bash
# HELP checkly_check_status The status of the last check. 1 is passing, 0 is failing
# TYPE checkly_check_status gauge
checkly_check_status{check_name="Alerts fetch",check_type="api",muted="false",activated="true" tags="alerts,public"} 1
checkly_check_status{check_name="Email login",check_type="browser",muted="false",activated="true" tags="auth,browser-checks,public"} 1
# HELP checkly_check_result The response time of the last check per region.
# TYPE checkly_check_result gauge
checkly_check_result{check_name="Alerts fetch",check_type="api",region="ap-northeast-2",tags="alerts,public"} 1168
checkly_check_result{check_name="Alerts fetch",check_type="api",region="ap-southeast-1",tags="alerts,public"} 932
checkly_check_result{check_name="Alerts fetch",check_type="api",region="ca-central-1",tags="alerts,public"} 424
checkly_check_result{check_name="Alerts fetch",check_type="api",region="eu-west-2",tags="alerts,public"} 138
checkly_check_result{check_name="Alerts fetch",check_type="api",region="us-east-2",tags="alerts,public"} 432
checkly_check_result{check_name="Email login",check_type="browser",region="ap-south-1",tags="auth,browser-checks,public"} 10174
```

Activating this integration is simple.

1. Navigate to the **integrations** tab on the account screen and click the 'Create Prometheus endpoint' button.
![](/docs/images/integrations/prometheus_step1.png)

2. We directly create an endpoint for you and five your the URL and the required Bearer token.
![](/docs/images/integrations/prometheus_step2.png)

3. Creat a new job in your Prometheus `prometheus.yml` config and set up a scraping interval. We recommend an interval
between 30 seconds and 60 seconds. Add the URL (divided into `metrics_path`, `scheme` and `target`) and `bearer_token`.
Here is an example

```yaml
# prometheus.yml
- job_name: 'checkly'
  scrape_interval: 30s
  metrics_path: '/accounts/993adb-8ac6-3432-9e80-cb43437bf263/prometheus/metrics'
  bearer_token: 'lSAYpOoLtdAa7ajasoNNS234'
  scheme: https
  static_configs:  
  - targets: ['api.checklyhq.com']
``` 

Now restart Prometheus and you should see metrics coming in.

> **Note**: The Prometheus integration is now in beta. Anything missing? Anything wrong? Use the chat widget for suggestions.
We respond quickly and always integrate good user feedback.
