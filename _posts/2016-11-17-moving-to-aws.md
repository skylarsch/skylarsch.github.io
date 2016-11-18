---
layout: post
title: "Moving to AWS"
date: 2016-11-17 23:03:03
---

The first website I ever created was in PHP, hosted on Dreamhost shared hosted.  It wasn't anything fancy, but we've all got to start somewhere.  After a few years of building crappy PHP sites, I decided to check out this "Rails" thing everyone was talking about.  My biggest hurdle was wrapping my brain around "not ftp-ing a bunch of files to a server."



Enter Heroku.



Heroku was the first Rails host I ever used.  But as a broke college dropout, it was WAY above my means at the time so the free tier is the furthest I every took anything.  As my projects got more complicated I needed more than the free tier could provide.  So I moved all my stuff again.



I split up projects between Digital Ocean and Linode.  After a few months of running apps on both platforms, I moved everything to Linode.  Digital Ocean just had more downtime.  A Linode VPS has been serving this blog [since January of 2015](http://127.0.0.1:4000/2015/01/07/moving-off-pages.html), and it's done an outstanding job.  My monitoring service say's I've only had 5 outages in the last 6 months with the longest being 8 minutes when I migrated to a new instance.  Needless to say, Linode has treated me right, but I like playing with new things.



I've had an AWS account for years, but never touched anything outside of s3 and Route 53.  About a month or two ago, a coworker told me about [Packer](https://www.packer.io) and how he was using it to create AMIs.  This piqued my interest.  My biggest pain point for side projects is managing the servers they run on.  Packer and AMIs solve about 95% of that pain for me.  So I begain another move. 



It wasn't all roses and the AWS learning curve is steep.  But there is a metric ton of documentation and articles to get you going.  Once I got my head around most of the pieces it all started coming together and I'm very pleased with AWS.  This site was the last thing to move and now that it's complete I only have 1 box still running on Linode (a Minecraft server that won't be moved).  I'm no AWS expert, but I love learning new things.  And there a ton of things to learn in AWS land.