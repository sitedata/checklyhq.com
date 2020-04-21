---
title: Heroku CI
weight: 6
menu:
  docs:
    parent: "CI/CD integration"
---

Checkly can work with Heroku either through its [GitHub Deployments integration](/docs/cicd/github/) or with Heroku CI. When in doubt between the two, our recommended solution is to use the GitHub Deployments integration.

## Heroku CI Example
If you are using Heroku CI, you can add a post-deploy step in your `app.json` file:
```json
{
    "scripts": {
      "postdeploy": "echo 'Deployment finished.' && curl 'https://api-test.checklyhq.com/check-groups/4/trigger/$CHECKLY_TOKEN' > $PWD/checkly.json' && if [ $(grep -c '\"hasFailures\":true' $PWD/checkly.json) -ne 0 ]; then exit 1; fi"
    }
}
```

Additionally, you will need to set your `CHECKLY_TOKEN` as a [config variable](https://devcenter.heroku.com/articles/config-vars) for your app on Heroku CI. This allows it to be picked up by the trigger command without the need to expose it in plain text in your repository.

![Jenkins Pipeline Checkly Token Config](/docs/images/cicd/herokuci-param.png)

{{< info >}}
This is a v1 integration. We are working on providing better feedback, longer runs, GitHub PR feedback and more customization options
for checks triggered directly via the API. 
{{< /info >}}
 
 {{< warning >}}
 The total run time of all checks cannot exceed 30 seconds or you will receive a timeout error. 
 {{< /warning >}}  
