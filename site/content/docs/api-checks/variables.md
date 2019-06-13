---
title: Environment variables
weight: 3
menu:
  docs:
    parent: "API Checks"
    identifier: variables-api-checks
---

Multiple API checks can target the same server/service. In this case, your checks might need the same configuration item
like an authentication token, a specific user name or even just some specific part of the URL. You can use global variables to
'DRY' up your checks and store these variables in just one place.

## Managing variables

You can add variables on the **Variables** tab in the **Account** section. The variables stored here are globally accessible 
throughout Checkly, hence the "Global environment variables" title*.  

All variables are stored as string values. You can click the lock icon to encrypt the values and hide the value from all users
that do not have write access.

![adding variables](/docs/images/api-checks/add-variables.png)

## Accessing variables in API checks

Environment variables are exposed to your API checks using the common Handlebars/Moustache templating delimiters, i.e. `{{BASIC_PWD}}`.
Variables can be used in the following API checks fields:

- URL
- Body
- Header values
- Query parameters values
- Basic authentication username and password

When typing in most of the variable-enabled fields we show a small helper popup to help with selecting of the right variable.

![access variables](/docs/images/api-checks/access-variables.png)

Note, just the Body input field does not show this helper popup.


> We are working on a "Group" feature, where we will allow variables per group of checks for finer grained control. This is why the variables in the account section are explicitly named "Global"



