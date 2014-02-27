---
layout: post
title: "Actionable Crash Reports"
date: 2014-02-27 08:33:34
---

My current role as an iOS developer has me writing code all day.  But it's not about writing features and creating new apps.  There's quite a bit of bug hunting and crash killing.  Ever since I started, we've been using Hockey for crash reports.  It made sense to use them, we were already uploading build and including the SDK.  Crash reporting was a natural fit into the existing workflow.

I was never quite happy with Hockey's crash reporting.  There were crash in `main()` all the time.  Bad stack traces, and other random things.  We were fixing the crashes we were getting good data on, but there were just to many that didn't give us any useful information.

I had been using [Crashlytics][1] on my personal projects for some time.  So when we completely re-wrote one of our apps for iOS 7, I decided to give Crashytics a shot in the big apps.  After a few weeks in production, I couldn't be happier.  So I added it to the "big app", the app with the most use.

Crashlytics has only been in the big app for a few days.  But in those few days, I've had more actionable reports than than any previous build, even with far less crashes than a few version ago.

If you're in the market for an iOS crash reporting framework, give Crashlytics a shot.  I have, and I couldn't be happier.

[1]: http://try.crashlytics.com/
