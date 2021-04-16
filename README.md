# **Music Player SoundClassifier**

This web app is about a music player with voice commands, developed using **ml5.js** and **p5.js** for the **voice commands**, **Firebase** for the **deploy**, **colorThief** to get the predominant colors of the cover of the image and then add a background gradient, and obviously **JavaScript**.

## Features

When the user closes the web app completely, when he returns to the app he stays in the same music that he was playing, it also happens when the music is muted or random playback is activated, all that remains in the same state in which you left the app when closing it, this was possible using the **Web Storage API** and its **localStorage** object. It has voice commands and keyboard commands, the commands are as follows:

### Voice commands:
#### Always active:

> **Stop:** Pause the music.
> **Go:** Play the music.

**Commands active when the microphone option is activated:**

>**Down:** Mute the music.
**Up:** Unmute music.
**Left:** Play previous music.
**Right:** Play next music.

### Keyboard commands:

>**Space:** Pause and Play the music.
**M:** Mute and unmute music.
**Left Arrow:** Play previous music.
**Right Arrow:** Play next music.
**V:** Activate and Deactivate voice commands.
**S:** Activate and Deactivate random play.
