---
title: Terraform
weight: 5
menu:
  docs:
    parent: "Integrations"
---

You can use [Hashicorp's Terraform](https://www.terraform.io/) to create and manage your checks. This allows you to completely keep
the definition of your checks in your code repository.

To get started, just install the latest version of the Checkly Terraform provider from the [Terraform registry](https://registry.terraform.io/providers/checkly/checkly/latest)

![Terraform registry](/docs/images/integrations/terraform_registry.png)


If we you want to get your hands dirty on the very last in development version, you can also:

1. Checkout the Checkly Terraform provider in [this GitHub repo](https://github.com/checkly/terraform-provider-checkly).
2. Build the provider and add it to your Terraform installation.
3. Write your first Checkly resource and apply it.

> 💡 Check out our [blog post for a full walk through of using Checkly with Terraform](https://blog.checklyhq.com/managing-checkly-checks-with-terraform/).
