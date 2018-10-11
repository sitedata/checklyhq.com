---
date: 2018-08-16T09:00:00+00:00
title: "An Opinionated List of Skills You Need for a DevOps Job in 2018"
author: "Tim Nolet"
avatar: "tnolet.jpg"
tags: ["dev", "devops", "guide"]
publishdate: 2018-10-04
featured_image: "https://checklyhq.com/blog/devops_skills.jpg"
---

![devops skills](/blog/devops_skills.jpg)
<small> "Casting an Invocation on the Waves at Kakuda in Sado Province" by Utagawa Kuniyoshi (1797-1861) - [Honolulu Museum of Art](http://honolulumuseum.org/art/exhibitions/11514-pathways_evolution_japanese_buddhist_prints/)</small>

The world of DevOps is a pretty confusing place for folks just starting out. Even figuring out what "DevOps" means can be hard. Is it **CI/CD with Kubernetes and Serverless** to drive Agile™ product iterations? Or is it SSH-ing into a box and **restarting Apache**? You guessed it. All of the above and most things in between.

After ~20 years in Ops and later Dev I thought I'd write up a biased, but hopefully helpful list of **technical and organisational skills** that I would look for when hiring someone for a DevOps position.   

*2018-10-11: Keen Reddit user mentioned I forgot Git. He was right and I added it.* 
<!--more-->

## 1. Deploying.

DevOps is very much related to "releasing stuff" and making that work without a hitch. If there is *anything* you should get paranoid about it is managing, prepping, rehearsing, checking (and later automating) releases and deployments. Regardless of language, platform, framework, sector, industry or any other technical / organisational details this is the thing that REALLY matters.

> 💡 Two life tips: Don't buy pans from Ikea and never deploy on Fridays.


## 2. Monitoring

Intrinsically connected to deploying is making sure that deployments work as expected and within parameters. This is about as vague as it gets. Just make sure you are somewhat comfortable with the various types of monitoring out there: uptime monitoring, process monitoring, real-user monitoring, synthetic monitoring etc. The bigger, more complex your stack, the more of these you will need. Again this the bread & butter. Screw this up and you are dead and blind.

> 💡 Nagios, Graphite and other "old school" tools are still very useful to grasp the essentials. 


## 3. HTTP

Learn how HTTP works. Obsess over tools like curl and your browsers debugger network panel. 99% of your tools and API’s speak it. All your SaaS providers speak it. Being able to interpret HTTP traffic and write simple scripts that “do HTTP” is a gift that will keep on giving. Hungry for more? Dive into TCP also.

> 💡 Try a telnet session and [type the HTTP protocol by hand.](http://coryforsyth.com/2014/04/06/hand-crafted-http-with-telnet-exploring-the-protocol/)

## 4. SSH

Next to HTTP, SSH is basically essential. It lets you quickly navigate and troubleshoot almost any current stack. Except the serverless ones I guess. Creating and using keys and swift usage of any SSH client (whether on Linux or Windows) must feel like second nature. Strangely, FTP seems to be going extinct.

> 💡 Tunnelling over SSH will save you one day. [Learn it](https://www.ssh.com/ssh/tunneling/example)


## 5. CPU, process and storage

You need to have a basic understanding of how a computer works, again regardless of the platform. Why? Because you will encounter issues with stuck programs, corrupt files, performance bottlenecks, i.e. complaining end users or coworkers. In 99% of cases, this is due to resource contention somewhere.

Regardless of the cause (bad programming, failing disks, slow CPU) you will need to get a knack for recognising where to look.  Over time, you will recognise patterns “this reminds of that crashing disk issue we once had”, or “seems like Java just hasn’t got enough memory and is GC-ing all the time”.

> 💡 Try to REALLY understand the output of `top` on *NIX or its Windows equivalent. 

## 6. Triaging

Probably the easiest way to spot a junior engineer is observing how they go about finding the root cause of some arcane bug or mysterious outage. Don't get me wrong, this is a hard skill to grow. The systematic process of identifying, analyzing, developing and implementing a remedy for a problem is something you just have to do a lot to master it.
It is the opposite of "have you tried turning it off and on again?". This skill also transfers well to other business domains and even your daily life. 

> 💡 Read error messages. You'd be amazed how many people skip this essential step.


## 7. Databases

You don’t have to be a full blown DBA. You do need to recognise that databases are in general still a “hard” problem to solve. In comparison, (stateless) API’s, web servers, application servers etc. are all fairly low risk, low maintenance and almost complete commodity. Databases, distributed or not, are still hard and tend to hold a ton of value for your company. Learn some SQL, read the Mongo docs or just go with Postgres, the best database in the world™.

> 💡 ORM's are not an excuse to not grasp how databases function.


## 8. CI/CD

Continuous Integration and Continuous Deployment only at place eight? That should be number one, right? Actually, no. Without understanding how databases and migrations work I dare you to create a useful deployment pipeline. Without understanding how HTTP works and how sessions are (not) handled, I dare you to do continuous deployment without interrupting users and generally creating a very bad time for your customers and coworkers. 

> 💡 Master doing things manually. Understand them deeply. Only then automate them.

## 9. Git

I started with CVS and SVN. They are pretty fine source code versioning tools. But Git is way more than that in a DevOps
context. Git (with Github or Gitlab or any hosted platform) is now your bookkeeper, collaboration platform, todo list and
many more things. Versioning is just one part of it. Learn it.

> 💡 Reset, rebase and merge fixes can be tricky. There is no shame in using a UI tool.


## 10. Risk assessment

Isn’t this part of deploying? Kind of, but with added security and business insights. As you and your organisation mature you will have to judge whether the path you are taking is safe, secure and even legal in the broadest sense. Storing those user files in S3? Porting production backups to test environments? 

Many times your product and business coworkers will not see (or care) about the risks involved. Technical people can leverage their general paranoia here for good. Be critical. Block unsafe, risky or careless proposals, or at least raise your voice.

> 💡 Security testing or penetration testing help. Do them quarterly.


## 11. Load & performance testing

You will need to be able to at least make a guesstimation on performance for new products or features. Even in the age of auto scaling and quick cloud provisioning. Remember that databases, some external services or expensive / specific hardware don't not scale that well.
Start with simple tools like Apache Bench and slowly ramp up to platforms like Jmeter or Gatling. Try to use data and usage patterns that are somewhat representative of real users. This is hard.

> 💡 Don't expect load patterns found in test to translate 1:1 to prod. Stay vigilant.


## 12. Language runtimes and their configuration 

One language shops exist, but don’t bet on it. Get some inkling on how a basic app is build, started and configured for multiple platforms. Building and running a Node.js app is pretty different from a Java / JVM app, which can be split into Scala an Kotlin and Clojure variations. They use different package managers, require different types of monitoring and have different resource usage patterns.

> 💡 Starting with a JVM language helps, even if your shop doesn't use Java.


## 13. Infrastructure as code

You can do CI/CD easily without any automated infrastructure provisioning. And infrastructure as code is not a super valuable “business booster”. Except when things get bigger and scale happens. This can also be “internal scale” when you have to duplicate environments for development and testing purposes. Get handy with Terraform, Ansible, Puppet or AWS Cloudformation. Spinning up a new environment with the touch of a button is pretty damn cool also.

> 💡 Don't try to get 100% full reproducibility. It is an endless time sink.

## 14. Developer Experience

You are expensive and so are your developer pals. Keeping them happy is actually pretty important on many levels. The term “DX” is pretty new but makes sense. As the DevOps mindset enters an organisation tools, platforms and infrastructure can get overwhelming. A smooth, transparent workflow where teams can easily access resources, ship new projects and get feedback on their new services is a holy grail for many companies. There is no easy solution for this. Listen and take baby steps.

> 💡 Sometimes a cup of coffee or having lunch together is all the DX that is needed.


## 15. Containers

(Docker) containers are here to stay, so you probably need to get comfortable with the eco system. None of this is terribly hard, especially not if you have some Linux chops. Most important is to recognize when to use them and when they are just an unnecessary burden.
Do not "containerize all the things".

> 💡 Docker portability between Mac, Windows and *NIX is not 100%. Expect some issues.


## 16. Container orchestration 

In a mature technical organisation at some form of scale, you will be introduced to container orchestration issues at some stage. It is where the industry is going. By all means, use Kubernetes or any of its competitors but remain critical.  

Compared to using just Docker to wrap some apps in container, using any container orchestration tool is a significantly bigger investment in time and money.  Remember, this tech is quite young, so only use it when you are feeling the pain of *not* using it.

> 💡 Get a hosted solution if you can.

## Further reading

This a list of books useful books, even if some of them might seem dated. The books are listed alphabetically by author. Not all are strict "DevOps" book, but all have valuable content related to the skill areas mentioned above.

DeMarco, Tom. e.a. [Peopleware](https://www.amazon.com/Peopleware-Productive-Projects-Tom-DeMarco/dp/0932633439)  - *Mostly on soft skills and project management. Still highly relevant in tech circles.*  

Grigorik, Ilya. [High Performance Browser Networking](https://www.amazon.com/High-Performance-Browser-Networking-performance-ebook/dp/B00FM0OC4S) - *Everything you need to grasp HTTP from a web perspective.*  
  
Humble, Jez. e.a. [Continuous Delivery](https://www.amazon.com/Continuous-Delivery-Deployment-Automation-Addison-Wesley/dp/0321601912) - *Essential to grasp the current CI/CD, Agile and DevOps scene.*  
  
Martin, Robert C. [Clean Code](https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882/) - *Java oriented, but whatever language you work with you will recognize things from this book.*  
     

