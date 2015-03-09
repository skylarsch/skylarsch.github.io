---
layout: post
title: "One Month With Spotify"
date: 2015-02-25 16:11:33
---

It’s been one month since I decided to try out [Spotify][s] again.  I had been a user a few years ago, but ultimately switched to Rdio then back to iTunes.

The transition went well.  I just replaced the iTunes icon on my dock with Spotify, but I’m still retraining myself to type “spot”, instead of “itu” in Alfred.

Having a massive music library just a search box away is amazing, and the offline support is fantastic.  I haven’t come across any music Spotify is missing that I really want to listen to, with the exception of Taylor Swift.

It hasn’t all been roses.  There was an issue that took a while to track down.  I would play a song, and switch back to Xcode.  A few minutes the music would cut out for a second, then come back.  This would happen consistently.  The files were cached for offline so it wasn’t the network.  After much Googling I hadn’t turned up much expect for re-installing (didn’t work).  Then I remembered App Nap.

App Nap is a Mac feature that will sleep backgrounded applications to save on CPU and battery. Sure enough Spotify was opted into App Nap.  In Finder pressing cmd-i on Spotify and checking Prevent App Nap fixed the problem.

Overall Spotify has been a great experience so far.  It will take quite a bit for iTunes to become my default audio player again.

_Edit_:

If the "Prevent App Nap" checkbox isn't showing up for you, open Terminal and type.

```bash
defaults write com.spotify.client NSAppSleepDisabled -bool YES
```

[s]: https://www.spotify.com/
