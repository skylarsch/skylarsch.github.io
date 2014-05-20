---
layout: post
title: "Sync Xcode Themes and Snippets"
date: 2014-05-20 09:59:30
---

I recently got a new work computer and instead of restore from backup, I started fresh (not by choice*).  With that, I lost my custom Xcode theme, and all my code snippets.

So I decided to solve this problem by using Dropbox to sync between machines and work as a simple backup.

If you want to do the same, the themes live in `~/Library/Developer/Xcode/UserData/FontAndColorThemes`.  Code snippets are in `~/Library/Developer/Xcode/UserData/CodeSnippets`.

Move those 2 folders into Dropbox, then symlink back to `~/Library/Developer/Xcode/UserData/`  Done and done.

***

_Disclaimer:_ Never use Dropbox as your only backup.

\*  I have a full bootable backup on Glacier that gets updated about once a month and use [Backblaze](http://www.backblaze.com)** for immediate backup.  I started fresh because I didn't want to wait for a full disk backup to download from Glacier, and couldn't wait for Backblaze to ship me a drive.

\**  I had also excluded `~/Library/Developer/Xcode` from Backblaze because of caches and logs.  So I couldn't restore them with the other cherry picked files.