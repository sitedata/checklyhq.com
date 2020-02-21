---
title: Overview
weight: 1
menu:
  docs:
    parent: "Groups"
    identifier: overview-groups
---

Groups allow you to organize your checks and centralize settings like base URL's, headers, variables and other properties
a collection of checks might share. 

Example use cases for groups are organizing your checks around:

- A common URL endpoint
- A specific team
- A specific feature in your app
- A test suite; trigger all checks after a deployment

## Key features

The screenshot below gives a quick overview of the groups' key features.

![Check group editor](/docs/images/groups/group-editor.png)

1. **Activate and mute** all checks in a group
2. Configure **shared settings** for all checks in the group
    1. API check defaults like headers, assertions and setup & teardown scripts
    2. Environment variables
    3. Data center locations
    4. Alert setting and alert channels
    5. CI/CD triggers
3. **Run all checks in one go** with a configurable concurrency.
4. Tweak checks in the inline "mini editor" to **quickly build up a group of similar checks**
5. Use a **common base URL** for your API checks      

