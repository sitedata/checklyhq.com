---
title: CircleCI
weight: 3
menu:
  docs:
    parent: "CI/CD integration"
---

Below you can find an example that leverages the Checkly [command line trigger](/docs/cicd/triggers/) feature to run checks from your CircleCI projects.

First of all, you will need to set your `CHECKLY_TOKEN` as an environment variable for your project. This allows it to be picked up by the trigger command without the need to expose it in plain text in your repository.

![CircleCI Checkly Token Config](/docs/images/cicd/circleci-param.png)

## CircleCI Example
This `config.yml` is from our [checkly-ci-test GitHub repo](https://github.com/checkly/checkly-ci-test). This file contains different steps (here shown as generic placeholders) going from application build to deployment, with an added post-deployment step to trigger Checkly checks and mark the build passed or failed depending on the outcome.

The content of each previous step will of course be highly specific to your stack, environment and build process.
```yml
// The pipeline structure hinted at is just to contextualise the example
version: 2.1
jobs:
  build:
    docker:
      - image: circleci/node:13.13
    steps:
      - checkout
      - run:
          name: Setup
          command: |
            echo "Setup starting..."
            npm install
      - run:
          name: Build
          command: |
            echo "Building..."
            npm run build
      - run:
          name: Test
          command: |
            echo "Running tests..."
            npm run test:unit
      - run:
          name: Deploy
          command: 
            echo "Running tests..."
            # Insert your own deployment procedure
      - run:
          name: Trigger Checkly
          command: |
            echo "Deployment finished."
            # Call Checkly trigger
            curl "https://api-test.checklyhq.com/check-groups/4/trigger/${CHECKLY_TOKEN}" > ${PWD}/checkly.json
            # Exit with an error status if we find more than 0 "hasFailures: true" in the output
            if [ $(grep -c \'"hasFailures":true\' $PWD/checkly.json) -ne 0 ]; then exit 1; fi
```

{{< info >}}
This is a v1 integration. We are working on providing better feedback, longer runs, GitHub PR feedback and more customization options
for checks triggered directly via the API. 
{{< /info >}}
 
{{< warning >}}
The total run time of all checks cannot exceed 30 seconds or you will receive a timeout error. 
{{< /warning >}}
  

