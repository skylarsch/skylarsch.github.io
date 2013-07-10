---
layout: post
title: "Minecraft"
date: 2013-07-09 22:47:10
---

I decided to create a Minecraft server.  But starting/stoping said server is kinda a pain, so I've decided to throw together a [little script](https://gist.github.com/skylarsch/5963319) that helps with that.

How it works is you upload it to your server that is running the Minecraft server then

`$ ./start`

It's that easy.

There are some optional options you can set:

- `-g` Takes a number argument of `0` or `1`.  This sets the game mode of the server. (default is 0)

- `-m` Sets the amount of memory the server should use.  (default is 756)

- `-t` Sets the memory amount denomination. (default is M (MB))

If I wanted to start a server with 2GB of RAM in creative mode.

`$ ./start -g 1 -m 2 -t G`


<script src="https://gist.github.com/skylarsch/5963319.js"></script>