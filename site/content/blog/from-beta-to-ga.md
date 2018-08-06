---
date: 2018-07-04T09:00:00+00:00
title: "Lessons learned fom taking a solo startup from beta to GA"
author: "Tim Nolet"
avatar: "tnolet.jpg"
tags: ["company", "entrepreneurship"]
publishdate: 2018-08-03
---

![Crossing the River Styx" by Joachim Patinir](/blog/crossing.png)
<small> "Crossing the River Styx" by Joachim Patinir (circa 1480-1524) - Museo Nacional del Prado. Licensed under Public Domain via Wikimedia Commons</small>

Last week the "beta" tag officially came off of Checkly 🍾 yay for me! This is a write up on some of the things I bumped
into in the period between [launching a private beta](https://hackernoon.com/things-i-learned-from-my-saas-projects-private-beta-period-cd69a11d9e58)
and hammering down on all features and ripping the beta notice of the navbar.

> Note: Don't take any of this as gospel. Every situation is different. Stay critical.

<!--more-->

## 1. Taking payments with Stripe

Once you ask for money, it becomes real. I added a pricing page and a way to pay some months before I actively started 
steering users towards the paid plans. Stripe get's good press for its developer friendliness but integration was more of a 
hassle than I expected.

1. Discounts can only be applied **AFTER** a person has signed up for a subscription. That's pretty weird from the customer perspective. Also, their widgets have no input box for coupons.
2. Stripe introduced Billing as a separate product, merged Subscriptions into it and put everyone in some weird starter plan. No one got it. [CEO had to jump into the Hacker News thread](https://news.ycombinator.com/item?id=16766846). 
3. No real business metrics, as in none. Now I understand the market for services like Chargebee, Chargify, Baremetrics etc.

On that note, the Stripe test sandbox is great.

## 2. Getting launching customers

Once I had the means of receiving money I offered a discount in the form of *x-months-for-free* to some early users I was emailing with.
Rationale is that there is no out-of-pocket cost and the minimal infrastructure is already running: might as well use it. 
Three rules I forced myself to stick to:

1. Don't offer it to everyone and **don't offer it straight of the bat**. It should not be the prime driver.
2. The new customer has to actually sign up with **a valid credit card**. The discount is applied afterward.
3. In exchange for the discount, the customer agrees with a **testimonial** I can use on a landing page.

Shame on me for completely breaking the payment flow in a botched UI update. Praise on an early customer for graciously
waiting some hours and not fleeing the scene! 😅


## 3. The "but they have that" rabbit hole

Pretty soon, early users started comparing features and pricing to a wide range of other services. From free to quadruple the 
price. From very basic to super advanced. 

Now, Checkly was still in beta and maybe even alpha for some parts so there was some room to expand features or add options
to existing features. I added a weekly status email, SSL certificate expiry monitoring and SMS alerts partly based on these
comparisons early users made.

This checklist mentality is sometimes very hard to balance at such an early stage, but I told myself that it if takes one simple objection off the 
table, adds one new launching customer AND the feature fits with the product strategy it's worth pursuing.


## 4. The "one more feature" trap

The "but they have that" rabbit hole neatly segs into the "one more feature" trap, although they are slightly different. One 
is external and comes from users pointing at other services, while the other is internal and comes mostly from myself 
justifying the price vs. feature balance.

The "one more feature" trap is a pretty well known trope of the startup industry so I was prepared for it. It turns out not 
prepared enough, as I added some major new things like [double checks](https://checklyhq.com/docs/alerting/settings/#double-checking), 
[triggers](https://checklyhq.com/docs/browser-checks/triggers/) and [teams](https://checklyhq.com/docs/teams/). Sorry, totally failed on this one.

{{< tweet 978185749421051904 >}}

## 5. Buy vs. Build

If you're starting a SaaS then your next hobby will be collecting other SaaS-es. Hosting, email, payments, databases the list goes on.
Here's what I'm paying now, straight from the credit card slip:

1. **Heroku** ~$75. Totally worth it.
2. **Github** $7 for private repo's. I'm so used to the Github flow that I can't be bothered to Gitlab or Bitbucker for free private repo's.
3. **Docker** $7 for private repo's. This just works. All others I tried were either more expensive or cumbersome.
4. **Google Gsuite** $5 for mail and other tools.
5. **Solarwinds** $7 for graphs & monitoring. 
6. **Amazon Web Services** $0. Due to $1000 credit on the [AWS Activate program](https://aws.amazon.com/activate/). This will
change and be a more significant cost center in the future.

I left out the services for which I'm still on the free plan or that have no paid tier, like **Twitter, Trello, Mailchimp, Google Analytics, Hotjar and Heap**.
I use all of these, some daily some bi-weekly.

Now, I could have probably build some pretty crappy versions of what these services provide Checkly with *just* some EC2 instances
and about 8 years of solid engineering time. Silly me, I chose not to! 

## 6. The acquihire distraction

What 😱 !! Yes, I spend some time meeting with the nice folks of a pretty big tech player discussing a possible acquihire/acquisition
of me and Checkly at this early stage. This is enough material for another post, suffice to say we didn't strike a deal in the end and
parted ways on good terms. Also, it didn't really derail me that much. More later.

## 7. Switching the 80/20 time division.

During beta period, I roughly divided my time into 80% engineering and 20% marketing and sales. Now I'm flipping that.
I'll be spending 80% of my time emailing, tweeting, blogging, calling and talking to users to get more launching customers.

Notice that the above list of expenditures and monthly costs does not include any marketing outlay. This is not *completely* fair
as I did spend around $250 on playing around with Twitter and Betalist to get beta users, which I wrote about 
[here](https://hackernoon.com/things-i-learned-from-my-saas-projects-private-beta-period-cd69a11d9e58)

However, will I probably delay any serious paid marketing until get to a certain amount of customers strictly through my 
network and through organic, non-paid traffic. There is no real substitute for elbow grease at this early stage.  

