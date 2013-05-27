---
layout: post
title: "Underscore Bash Profile"
date: 2012-11-13 01:11:11
---

I'm a big fan of Terminal.  I use it every day, mange git, delete stuff, create stuff, and other shenanigans.  One big problem I had was keeping my bash profile updated across multiple computers.  Enter [Dropbox](http://db.tt/leFMzBW1).

Dropbox has saved my life on numerous occasions, so I thought I would give it a shot at making my life easier.  (Not that is didn't already but it's one more thing to make it that much better)  The glaring problem was Dropbox and dot-files don't play nice.

After some pondering I came up with a solution that couldn't be easier.

1. Move current `.bash_profile` to Dropbox named `_bash_profile`.
2. Enter this command.

`$ ln -s /path/to/dropbox/_bash_profile .bash_profile`

Syncs between computers and what nots.  

Some of the files I'm syncing include

- `.bash_profile`
- `.bashrc`
- `.gitconfig`
