---
layout: post
title: "Fighting with transitionDelegates"
date: 2013-11-06 10:55:08
---

I spent a good chunk of my morning fighting with custom UIViewController transitions.  

![Bad Memory](http://skylarsch.com.s3.amazonaws.com/images/bad_memory.png)

I don't think you have to be a developer to realize that the blue bar shouldn't be going up without going down.  iOS devices have a very limited amount of memory, and that graph isn't helping the situation.  And in this case the app probably would be killed by the system.  Not ideal for creating a great user experience.

After much Googling I had turned up nothing.  Mostly what I found was pre-arc not calling `release` problems.  Not my case...

More digging I discovered that it came down to my view controllers `transitionDelegate`.  I was using the view controller being presented to manage the custom transition.  So, `self.transitionDelegate = self;`  Probably not the best practice but I found a few examples online that were doing this so it didn't seem like a big problem.  Was I ever wrong.

When the view controller was dismissed, it's memory was never deallocated and given back to the system.  So if you presented and dismissed 4 times, like the screenshot above, you were suddenly hitting some serious memory problems.

Narrowing the problem down to `self.transitionDelegate = self;` took quite a while, and now I'm creating a new object in the UIViewController and setting that as the transitionDelegate.  Its sole purpose is to return the animation controllers.  A quick build and run, and this is what you get...

![Good Memory](http://skylarsch.com.s3.amazonaws.com/images/good_memory.png)

Much better!

There is still quite a bit going on but ~50MB is much better than 250MB.

Long story short, don't do this `self.transitionDelegate = self;`.  It breaks many things.

***

Edit: 11-12-13

After some more investigating and hearing from a few people, I've decided that it's not my problem entirerly.  

**RADAR** rdar://15450840

***

Edit 3-18-14

This issue is fixed in iOS 7.1.  Radar is closed.
