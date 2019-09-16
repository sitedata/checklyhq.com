---
title: Github deployments
weight: 1
menu:
  docs:
    parent: "CI/CD integration"
---

{{< page-toc >}}

Github deployments are webhook events triggered by Github whenever a deployment service reports a successful deployment 
event. This works out-of-the-box with the following services. 

- [Zeit / Now for Github](https://zeit.co/docs/v2/advanced/now-for-github/)
- [Heroku Pipelines & Review Apps](https://devcenter.heroku.com/articles/pipelines)

Any (SaaS) service that interacts with the [Github deployments API](https://developer.github.com/v3/repos/deployments/) and
reports the correct "success" message will work.

## Setting up your Github integration

1. Go to the **integrations tab** in your account settings and click the "Integrate with Github" button.    
![set up Github integration step 1](/docs/images/cicd/github_setup_1.png)

2. You will be redirected to Github and prompted to select an account and install the Checkly Github App.  
![set up Github integration step 2](/docs/images/cicd/github_setup_2.png)

3. When accepting the installation, you are redirected back to Checkly and the integration is installed. 
Now, go to the **CI/CD tab** of the check you want to link to a Github repository.    
![set up Github integration step 3](/docs/images/cicd/github_setup_3.png)

4. Click the **"Link Github repo"** button and select the repository you want to link.  
![set up Github integration step 4](/docs/images/cicd/github_setup_4.png)

5. On each deployment event, we will run your check and report the results directly in **your Github timeline and PR overview**.  
![set up Github integration step 5](/docs/images/cicd/github_setup_5.png)

6. You will also get an overview of the check result in the *details* section
![set up Github integration step 6](/docs/images/cicd/github_setup_6.png)


{{<info >}}
You can hook up multiple checks to the same repo. We will just run all of them as a test suite.
{{</info>}}

## Using target URL's

Github reports a **target URL** on each deployment event. Depending on what deployment service you use,
this target URL can be used to run your check on different target environment than configured in your check.  

The primary use case for this is that temporary review/branch deployments such as provided by Zeit and Heroku Pipelines
can be validated before going to production. 

So, when you enable the **"Use target URL from deployment trigger"** checkbox there are two scenarios:

### API checks & target URL's 

With API checks, we replace the hostname part of your request url with the host in the target URL. 
For example:

|                                                                 |                                 |
|-----------------------------------------------------------------|---------------------------------|
| `https://api.acme.com/v1/customers?page=1`                      | Configured URL                  |
| `https://now.customer-api.qis6va2z7.now.sh`                     | Target URL received from Github |
| `https://now.customer-api.qis6va2z7.now.sh/v1/customers?page=1` | Replaced URL                    |

Notice we only replace the **host** part, not the URL path or any query parameters. We also add the target url as the `TARGET_URL` environment variable.

### Browser checks & target URL's

For browser checks, the target URL is exposed as the `TARGET_URL` environment variable. This means you can use that
variable in your code to replace any hardcoded URL you might have, i.e.

```javascript
const puppeteer = require("puppeteer");

const browser = await puppeteer.launch();
const page = await browser.newPage();

const myURL = process.env.TARGET_URL || 'https://acme.com'
await page.goto(myURL);

await browser.close();
```








