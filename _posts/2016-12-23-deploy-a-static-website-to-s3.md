---
layout: post
title: "Deploy a Static Website to S3"
date: 2016-12-23 17:11:29
---

Setting up all the moving pieces to deploy a static website to S3 just by pushing to GitHub can be tedious.  So, I [built a thing](https://github.com/skylarsch/s3-static-website-deploy).

It's a CloudFormation template that sets up an API Gateway method for GitHub to hit.  That triggers CodeBuild to pull in the latest code and build it.  That is then sent to S3 where lambda deflates the slug and puts it into the root of the bucket to be served on the web by S3.

If this is something that sounds useful, give it a shot and let me know what you think!
