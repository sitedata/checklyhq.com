---
title: Opsgenie
weight: 1
aliases:
- /docs/integrations
menu:
  docs:
    parent: "Integrations"
---

Checkly integrates with [Opsgenie](https://opsgenie.com) and can deliver failure, degradation, and recovery events 
to any Opsgenie team. You can add as many Opsgenie channels as you wish. After setting up the integration, Checkly will:

1. Create an alert in Opsgenie when a check fails.
2. Send most recent result details when a check degrades.
3. Resolve alerts when a check recovers.

**To get started, take the following steps:**

1. First, you will need to create an **API integration** in Opsgenie.
 
    Log in to your Opsgenie account, and determine which region you are using. At the moment Opsgenie offers
    two [regions:](https://docs.opsgenie.com/docs/european-service-region) `US` and `EU`.

    > 💡 If your Opsgenie URL looks something like this  https://app.eu.opsgenie.com 
    you are using the `EU` region.
 
    Go to the **Teams** tab and choose a team you want to integrate with Checkly, 
    then navigate to your team's **Integrations** tab and press the `Add integration` button.
    ![setup checkly opsgenie integration step 1](/docs/images/integrations/opsgenie/opsgenie_step1.png)

2. Select the **API** integration from the list of integrations available in Opsgenie. 

    > 💡 You can use `REST API` query in the search box, to quickly find the **API** integration.  
    
    ![setup checkly opsgenie integration step 2](/docs/images/integrations/opsgenie/opsgenie_step2.png)

3. Choose a name for your integration, copy the **API Key** and press `Save Integration` at the bottom of the screen to 
save your integration.  
    ![setup checkly opsgenie integration step 3](/docs/images/integrations/opsgenie/opsgenie_step3.png)

4. Log in to Checkly and navigate to [Alert Settings](http://app.checklyhq.com/alert-settings). 
Press the `Add more channels` button, find Opsgenie on the list, and press `Add channel` next to it to 
create a new Opsgenie channel.
    ![setup checkly opsgenie integration step 4](/docs/images/integrations/opsgenie/opsgenie_step4.png)

5. Choose a name for your Opsgenie channel, paste your **API Key** and select your Opsgenie region (`EU` for EU based 
customers, `US` for the rest of the world). 

    > 💡 You can configure other options like 
    [alert priority in Opsgenie](https://docs.opsgenie.com/docs/alert-priority-settings), and 
    [check events](/docs/alerting/alert-channels) that will be sent to Opsgenie. 
    
    ![setup checkly opsgenie integration step 5](/docs/images/integrations/opsgenie/opsgenie_step5.png)

6. You can press the `Test API Key` button to test your integration, if everything is correct you should see a test 
alert created on your Opsgenie dashboard. 

    **To finish the setup process**, back in Checkly press the `Save Opsgenie integration` button. 
    ![setup checkly opsgenie integration step 6](/docs/images/integrations/opsgenie/opsgenie_step6.png)

**Congratulations!** You have successfully integrated Checkly with your Opsgenie team.
