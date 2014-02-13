---
layout: post
title: "Deviceify"
date: 2014-02-13 10:11:18
---

I'm currently working on a free week project at work.  It was coming together, then I hit a snag. I needed an easy way to turn device identifiers `iPhone1,2` from iOS into a human name.  There are a few solutions out there. But free week is all about learning and trying new things, so I decided to make my own gem.

[Deviceify](https://github.com/skylarsch/deviceify) is simple.  Give it an identifier and it'll give back a `Deviceify::Device` instance.  It's that simple.

Want info on `iPhone6,2`

```ruby
Deviceify.device 'iPhone6,2'
=> #<Deviceify::Device:0x007fb3c4870580 @name="iPhone 5s", @generation="iPhone 5s", @fcc_ids=["BCG‑E2643A", "BCG‑E2643B"], @sizes=["16GB", "32GB", "64GB"], @models=["A1457", "A1518", "A1528", "A1530"]> 
```

If you just want the name,

```ruby
Deviceify.name 'iPhone6,2'
=> "iPhone 5s" 
```

`Deviceify.device` will return `nil` for an unknown identifier, `Deviceify.name` will return the unknown identifier.

```ruby
Deviceify.device 'iPhone9,1'
=> nil

Deviceify.name 'iPhone9,1'
=> 'iPhone9,1'
```

It's super simple, but it does exactly what I need.