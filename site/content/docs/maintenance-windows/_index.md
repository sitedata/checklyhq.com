---
title: Overview
weight: 1
menu:
  docs:
    parent: "Maintenance windows"
    identifier: overview-maintenance-windows
---

You can schedule planned maintenance for your API, app or website using Checkly's maintenance windows. During maintenance 
windows, checks that are part of a specific window are not scheduled to run, saving you the headache of ignoring alerts and
having big red callouts on your dashboard.


## Creating a maintenance window 

Adding a maintenance window is simple. Navigate to the maintenance windows overview indicated by the wrench icon on the 
menu and click "create new". You're now on the maintenance window editor.

![maintenance window editor](/docs/images/maintenance-windows/maintenance-windows-editor.png)

After giving your window an appropriate name, the core options you have are:

## Setting a schedule

Set your preferred starting date and time for your maintenance window.

{{< info >}} Note that all times are in UTC. Takes this into account, also when judging daylight savings time if applicable. {{< /info >}}

## Setting repeats
If your maintenance window repeats at a certain cadence, toggle the **repeat** option. Here you can set

1. The amount of repetitions.
2. The unit of repetition, i.e. **Day**, **Week** or **Month**.
3. The date on which the repetition cycle should end.

## Adding check and check groups

You need to select which checks and/or check groups are targeted by your maintenance window. You do this by:
 
- Adding the relevant check tags.
- Adding the relevant check group tags.

This way, any checks or check groups created *after* creating your maintenance window can still be made part of the window; no
need to update the maintenance window configuration. Just set the correct tags.
