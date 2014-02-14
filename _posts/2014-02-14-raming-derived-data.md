---
layout: post
title: "RAMing Derived Data"
date: 2014-02-14 09:05:50
---

I've had [iRamDisk][0] for a while.  It's a great little app that creates mountable disks entirely in RAM.  This allows for fast, and truly temporary file caches.

[Dave Verwer's iOS Dev Weekly][1] included an article from [Vadim Shpakovski][2] on reducing Xcode build times.  The solution is so simple.  Create `DerivedData` as a RAM disk.  Xcode reads/writes all the build data to and from this location.  By sticking it all in RAM you get super fast builds, the simulator launches in less than a second.

Unlike traditional disk images when you allocate 2GB of space to a RAM disk, it doesn't use 2GB.  It grows as the data stored inside grows.  When you logout, the data is cleared and you get all the ram back.

My current RAM disk setup.

![Ram Disk](/images/posts/ram-disk.png)

- 2GB allocated towards DerivedData
- 512MB allocated towards Safari Cache
- 512MB allocated towards `~/.tmpmemcache`

I use the `.tmpmemcache` for a fast log or scratch disk that doesn't need to stick around after I finish something.  It's a true temporary directory.

[iRamDisk][0] is only $10.  Seriously, go give it a try.


[0]: https://itunes.apple.com/us/app/iramdisk/id492615400?mt=12
[1]: https://iosdevweekly.com
[2]: http://blog.shpakovski.com/2014/02/how-to-reduce-xcode-and-appcode.html?utm_campaign=iOS_Dev_Weekly_Issue_133&utm_medium=email&utm_source=iOS%2BDev%2BWeekly