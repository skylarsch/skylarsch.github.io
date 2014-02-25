---
layout: post
title: "Beautiful not Fast"
date: 2014-02-24 14:22:44
---

I was browsing through the popular Objective-C repos on GitHub today, and came across one called [YOLOKit][0].

From the readme.

> YOLOKit is a delightful library for enumerating Foundation objects.

> You only live once: let’s code expressively.


```objc
/* Example from readme */

id rv = @[@1, @2, @3, @4].map(^(NSNumber *n){
    return @(n.intValue * n.intValue);
});
// rv => @[@1, @4, @9, @16]
```

I don't have anything inherently against this.  In fact I have some similar methods in a helper library, but here's the thing.

There is an [issue on Github][1] where [danhd123][2] breaks down how these are some expensive helper methods.  This is the repo owners response...

> Yeah I'm sure. I designed YOLOKit to make your code nice. Performance wasn't a consideration...

I think this attitude is wrong.  iOS runs on a device that's resource constrained.  Its CPU is decent (A7), but it's RAM constrained.  iOS never pages to disk so everything has to fit into memory.  Every time the CPU spins up it sucks down the precious battery life.  Even Mac is moving towards portable.  And while we're not as constrained on OS X, there is still battery life and CPU cycles to consider.  Heck 10.9 shames the apps in the menu bar that aren't sipping at resources.

I hear people say they want their code to be beautiful.  In most cases, this means shorter syntax, less characters, and clever tricks.  I don't think this is correct.  To me, beautiful code should be about being a good citizen on the platform.  Beautiful code should do what it needs to do, without exploding, then GTFO.

Please, make your code readable, and easy to mentally parse.  But don't bring design patterns from another language just because they look cool.  Especially a language that's primarily running on large, plugged in servers.  Looking at you Ruby.  For most developers, you're not writing code so you can sell the source code.  Instead you're writing code that's going to be compiled, and deployed to a device.

I can guarantee you that the average user doesn't give two craps about your source code.  They care that your app does what you said it did.  And if the app does it's job fast, and without draining battery.  That's even better.

***

_Edit:_  I'm not saying that you need to have crapy looking code just so things aren't slow.  It's a trade off.  Find a good balance and go with it.


[0]: https://github.com/mxcl/YOLOKit
[1]: https://github.com/mxcl/YOLOKit/issues/7
[2]: https://github.com/danhd123