---
layout: post
title: "Hacking Auto Layout Into UITableView"
date: 2013-10-21 15:53:38
---

```
Disclaimer: Don't do this
```

```
*** Terminating app due to uncaught exception 'NSInternalInconsistencyException', reason: 'Auto Layout still required after executing -layoutSubviews. XXTableView's implementation of -layoutSubviews needs to call super.'
```
That error message had been spitting out of the console for the last hour, and I was tired of it.

I've recently become a fan of Auto layout.  Especially the visual format.  For my brain `@"H:|-10-[content]-10-|"` just clicks.  And for the most part it's been great.  The only problems have been my own creation.  Until now...

If you want to add an arbitrary view to a UITableView, and use auto layout to position it, you're in for some "happy fun crashey times."  From what I can tell, UITableView doesn't call `-[super layoutSubviews]`.  And for UIKit this is a serious problem.  While it's not a huge problem, it's also optimal.  I don't want to mix frame code with auto layout when the entire app is using one.

Enter `#import <objc/runtime.h>`.  In all seriousness if a file contains `#import <objc/runtime.h>` It's probably doing something dumb.  But sometimes things just need to be done to get something to work.  This sounds like a job for method swizzling (Swizzling should never be the answer).  But here goes.

Start by adding a category to `UITableView`

<script src="https://gist.github.com/skylarsch/7092414.js"></script>

So what does this do?

`UITableView.h` contains the method swizzle function and the class extension declaration.  

`UITableView.m` contains the magic.  It's really rather simple, `+load` replaces the current `layoutSubviews` with the new method and replaces the new layout method with the old.  That's why we can call `[self xx_autoLayoutLayoutSubviews]` without making everything explode.  `xx_autoLayoutLayoutSubviews` calls itself but at runtime it will be calling the original implementation for the `layoutSubviews` method.  Then we call super.

So far this seems to be working.  If anyone has better ideas, PLEASE [email me.](mailto:ss@schipp.co)