---
layout: post
title: "Subject Dates"
date: 2013-05-22 23:32:33
---

I don't think I'm any different from the average human with an email address, I hate email.  Don't get me wrong, I thinks it's a great way to communicate, but I hate the junk.  The services that I singed up for, canceled my account and they want me to sign in to change my email preferences.  (Looking at you Linkedin) But there are some services that I want their updates to grace my inbox.  [HockeyApp](http://hockeyapp.net/), [GoSquared](https://www.gosquared.com/), [Gauges](http://get.gaug.es/), [GitHub](https://github.com/), and [AppFigures](https://appfigures.com) to name a few.  They provide me with information that I need to do my job.

With the exception of GitHub these services send me _daily report_ emails.  Nothing to fancy, just the previous days data they collected.  That's great, except for one thing.  The email subjects.

Mail.app has a conversation view, where it will detect the subjects in all the other emails and thread matching ones into a conversation.  Really useful when using email as a communication tool.  But not so much when you have hundreds of these daily reports.

![HockeyApp](https://s3.amazonaws.com/skylarsch.com/images/hockey-app.png)

![GoSquared](https://s3.amazonaws.com/skylarsch.com/images/gosquared.png)

Each of those is a single thread.  Mail pulls an Xcode and locks up my entire machine when I try and open those threads.  "Why don't you just delete some of them then?" you may ask.  NO!  I don't want to.  I may need that one email with that tiny bit of information in it some day.

If you're thinking about starting or running a service that will be sending large volumes of email to a single person then PLEASE include some sort of unique text in the email subjects.  AppFigures does this for their daily reports, and I couldn't love them any more for it.

![AppFigures](https://s3.amazonaws.com/skylarsch.com/images/appfigures.png)

Look at that! Each daily email in it's own place, where it should be.  The trick is just a simple `Time.now` or what have you.  Your users will thank you, I'll thank you, and the heavens will smile upon you with ever loving kindness.

__TLDR;__ Put a date in daily email subjects.

***

EDIT (5/31/13):  Since I wrote this HockyApp has responded to my ticket and added a date/time to their daily report email subjects.
