---
layout: post
title: "Programing in Minecraft"
date: 2014-09-05 10:59:45
---

I love playing [Minecraft][1].  I’ve spent crazy amounts of time playing Minecraft.  But there is something I love even more than Minecraft.  Modded Minecraft.

In a sandbox world full of endless possibilities, mods add even more.  Mods allow a player to automate away tedious tasks like farming, killing mobs, mining.  It’s possible to get to a point where all you have to do is login, and stand there.  The machines do all the work for you.

One of my favorite mods is [ComputerCraft][2].  On the surface, it’s a simple mod.  It adds computers and simple robots called turtles to the game.  But the things you can do are amazing.

The mining turtle is one of the first items I craft when finding diamonds in a new world.  It’s a simple digging robot.  It has a small inventory so it can collect the items it digs.  The mining turtle comes with some handy built in commands.  `$ excavate 20` will have the turtle dig a 20x20 hole all the way to the bottom of the world.  `$ tunnel 20` will create a 3x2 tunnel 20 blocks long.  But the best thing about ComputerCraft, is the computers and turtles are programmable.

Being a programmer this intrigued me so I started looking into the API.  All ComputerCraft programs are written in [Lua][6], an embeddable scripting language.  [The API looked fairly simple][3], so I tried writing some programs.

[branch.lua][4]

Branch is a simple branch mining program.  The turtle will create 8 tunnels 10 blocks long, spaced 2 blocks apart.  I’ve found this to be an optimal mining strategy because the two block spacing doesn’t allow ores to go missed between walls.  There are 3 optional command line arguments to pass the program in game.

1. The number of tunnels to dig.  By default this is 8.
2. The length of each tunnel in blocks.  By default this is 10.
3. The space between each tunnel in blocks.  By default this is 2.

[room.lua][5]

The room program creates a simple room underground.  The turtle will start in the lower left corner of the room and dig a space 9x9x5.  Again, room has 3 command line arguments.

1. The length of the room to dig.  By default this is 9.
2. The width of the room to dig.  By default this is 9.
3. The height of the room to dig.  By default this is 5.

I have used both of these programs in my own world and they work great.  Give ‘em a shot, and let me know how they work for you.

[1]: https://minecraft.net
[2]: http://www.computercraft.info
[3]: http://computercraft.info/wiki/Turtle_(API)
[4]: https://gist.github.com/skylarsch/6e8ed57d388e22094dc7
[5]: https://gist.github.com/skylarsch/8e7239dc0d088b8cf8b1
[6]: http://www.lua.org