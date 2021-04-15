let soundClassifier;
const image = document.querySelector("img");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const music = document.querySelector("audio");
const imgContainer = document.querySelector(".img-container");
const progressContainer = document.getElementById("progress-container");
const progress = document.getElementById("progress");
const currentTimeEL = document.getElementById("current-time");
const durationEl = document.getElementById("duration");
const prevBtn = document.getElementById("prev");
const playBtn = document.getElementById("play");
const nextBtn = document.getElementById("next");
const html = document.querySelector("html");
const shuffleBtn = document.querySelector('[title = "Shuffle"]');
const volume = document.querySelector(".volume");
// Booleans
let shuffle;
JSON.parse(localStorage.getItem("userData"))
  ? (shuffle = JSON.parse(localStorage.getItem("userData")).shuffleState)
  : (shuffle = false);
JSON.parse(localStorage.getItem("userData"))
  ? (music.muted = JSON.parse(localStorage.getItem("userData")).muteState)
  : music.muted = false;

let listeningVoice = false;
// chech if playing
let isPlaying = false;

//
// music

const musicObj = new Audio("assets/music/The Weeknd - After Hours.mp3");
console.log(musicObj);
const songs = [
  {
    name: "Eladio Carrion - Corona Freestyle",
    displayName: "Corona Freestyle",
    colors: {
      color1: "175, 163, 53",
      color2: "14, 19, 20",
    },
    artist: "Eladio Carrion",
  },

  {
    name: "Trippie Redd - Loyalty Before Royalty",
    displayName: "Loyalty Before Royalty",
    colors: {
      color1: "29, 35, 29",
      color2: "215, 224, 208",
    },
    artist: "Trippie Redd",
  },
  {
    name: "Eladio Carrion - Sauce Boy Freestyle III",
    displayName: "Sauce Boy Freestyle III",
    colors: {
      color1: "57, 50, 58",
      color2: "175, 77, 70",
    },
    artist: "Eladio Carrion",
  },
  {
    name: "The Weeknd - After Hours",
    displayName: "After Hours",
    colors: {
      color1: "141, 22, 4",
      color2: "92, 21, 6",
    },
    artist: "The Weeknd",
  },
  {
    name: "Eladio Carrion - Progreso",
    displayName: "Progreso",
    colors: {
      color1: "81, 38, 79",
      color2: "83, 194, 194",
    },
    artist: "Eladio Carrion",
  },
  {
    name: "G4 Boyz, G4choppa - Local Scammer",
    displayName: "Local Scammer",
    colors: {
      color1: "176, 69, 71",
      color2: "12, 12, 12",
    },
    artist: "G4 Boyz, G4choppa",
  },
  {
    name: "Gucci Mane, Offset - Met Gala (feat. Offset)",
    displayName: "Met Gala",
    colors: {
      color1: "158, 50, 60",
      color2: "216, 205, 198",
    },
    artist: "Gucci Mane, Offset",
  },
  {
    name: "G4 Boyz, DreamDoll, G4choppa - Prada - Remix",
    displayName: "Prada - Remix",
    colors: {
      color1: "100, 96, 93",
      color2: "29, 56, 95",
    },
    artist: "G4 Boyz, DreamDoll",
  },
  {
    name: "Drake, Future - Jumpman",
    displayName: "Jumpman",
    colors: {
      color1: "185, 185, 189",
      color2: "66, 68, 77",
    },
    artist: "Drake, Future",
  },
  {
    name: "XXXTENTACION - UP LIKE AN INSOMNIAC - Freestyle",
    displayName: "UP LIKE AN INSOMNIAC",
    colors: {
      color1: "69, 48, 41",
      color2: "197, 188, 180",
    },
    artist: "XXXTENTACION",
  },
];

/* Play */
function playSong() {
  playBtn.addEventListener;
  isPlaying = true;
  playBtn.classList.replace("fa-play", "fa-pause");
  playBtn.setAttribute("title", "Pause");
  imgContainer.classList.add("play");
  music.play();
  // paletteColor();
}

/* Pause */
function pauseSong() {
  isPlaying = false;
  playBtn.classList.replace("fa-pause", "fa-play");
  playBtn.setAttribute("title", "Play");
  imgContainer.classList.remove("play");
  music.pause();
}
function muteSong() {
  volume.classList.remove("fa-volume-up");
  volume.classList.add("fa-volume-mute");
  music.muted = true;
  addDataLS();
  console.log(music.muted);
}
function unmuteSong() {
  volume.classList.remove("fa-volume-mute");
  volume.classList.add("fa-volume-up");
  music.muted = false;
  addDataLS();
  console.log(music.muted);
}
const changeVolume = () => {
  volume.className.includes("fa-volume-up") ? muteSong() : unmuteSong();
};

function changeShuffleBtn() {
  shuffleBtn.className.indexOf("active") != -1
    ? (shuffleBtn.classList.remove("active"), (shuffle = false))
    : (shuffleBtn.classList.add("active"), (shuffle = true));
  addDataLS();
  console.log(music.muted);
}

/* play or pause event  listener  */

playBtn.addEventListener("click", () => (isPlaying ? pauseSong() : playSong()));

function paletteColor(color1, color2) {
  document.documentElement.style.setProperty("--color1", `rgb(${color1})`);
  document.documentElement.style.setProperty("--color2", `rgb(${color2})`);
}

function addDataLS() {
  let userData = {
    currentMusic: songIndex,
    muteState: music.muted,
    shuffleState: shuffle,
  };
  console.log(userData);
  console.log(music.muted);
  localStorage.setItem("userData", JSON.stringify(userData));
}

function loadSong(song) {
  title.textContent = song.displayName;
  artist.textContent = song.artist;
  music.src = `assets/music/${song.name}.mp3`;
  image.src = `assets/img/${song.name}.jpg`;

  addDataLS();
  console.log(music.muted);

  paletteColor(song.colors.color1, song.colors.color2);
}

//current song
let songIndex = 0;

//previus song
function prevSong() {
  if (shuffle) {
    songIndex = Math.floor(Math.random() * (10 - 1)) + 1;
    loadSong(songs[songIndex]);
    playSong();
    return;
  }

  songIndex--;
  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }
  loadSong(songs[songIndex]);

  playSong();
}

//next song
function nextSong() {
  if (shuffle) {
    songIndex = Math.floor(Math.random() * (10 - 1)) + 1;
    loadSong(songs[songIndex]);
    playSong();
    return;
  }
  songIndex++;
  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }
  loadSong(songs[songIndex]);
  playSong();
}
console.log(localStorage.getItem("userData"));

// on load - select first song

if (localStorage.getItem("userData")) {
  let userData = JSON.parse(localStorage.getItem("userData"));
  loadSong(songs[userData.currentMusic]);
  if (userData.shuffleState) {
    shuffleBtn.classList.add("active");
  }
  shuffle = userData.shuffleState;
  if(userData.muteState) {
    // music.muted = true;
    console.log('muted');
    muteSong()
  }
  // changeShuffleBtn();
  // music.muted = userData.muteState;
  // mute
} else {
  loadSong(songs[songIndex]);
}

// paletteColor()

//Update Progress Bar en Time

function updateProgressBar(e) {
  if (isPlaying) {
    const { duration, currentTime } = e.srcElement;

    // update progress bar width
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;

    // calculate display for duration
    const durationMinutes = Math.floor(duration / 60);
    let durationSeconds = Math.floor(duration % 60);
    if (durationSeconds < 10) {
      durationSeconds = `0${durationSeconds}`;
    }

    //Delay swiching  duration element to avoit NaN
    if (durationSeconds) {
      durationEl.textContent = `${durationMinutes}:${durationSeconds}`;
    }
    // calculate display for current
    const currentMinutes = Math.floor(currentTime / 60);
    let currentSeconds = Math.floor(currentTime % 60);
    if (currentSeconds < 10) {
      currentSeconds = `0${currentSeconds}`;
    }

    currentTimeEL.textContent = `${currentMinutes}:${currentSeconds}`;
  }
}

// set progress bar

function setProgressBar(e) {
  console.log(e.offsetX);
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const { duration } = music;
  music.currentTime = (clickX / width) * duration;
}

image.addEventListener("change", (e) => console.log(e));

// event listeners state
prevBtn.addEventListener("click", prevSong);
nextBtn.addEventListener("click", nextSong);
music.addEventListener("ended", nextSong);
music.addEventListener("timeupdate", updateProgressBar);
progressContainer.addEventListener("click", setProgressBar);
shuffleBtn.addEventListener("click", changeShuffleBtn);
volume.addEventListener("click", changeVolume);
document.addEventListener("keyup", (e) =>
  e.code == "Space" ? playBtn.click() : false
);
document.addEventListener("keyup", (e) =>
  e.code == "ArrowLeft" ? prevBtn.click() : false
);

document.addEventListener("keyup", (e) =>
  e.code == "ArrowRight" ? nextBtn.click() : false
);
document.addEventListener("keyup", (e) =>
  e.code == "KeyM" ? volume.click() : false
);
//soundClassifer

// let soundClassifier;
let output;

function preload() {
  let options = { probabilityThreshold: 0.95 };
  soundClassifier = ml5.soundClassifier("SpeechCommands18w", options);
}

function setup() {
  createCanvas(0, 0);
  soundClassifier.classify(gotResults);
}
function gotResults(err, results) {
  if (err) {
    console.log(`Error: ${err}`);
    return;
  }

  console.log(results[0].label);
  if (results[0].label == "stop") {
    pauseSong();
  }
  if (results[0].label == "go") {
    playSong();
  }
  if (results[0].label == "left") {
    prevSong();
  }
  if (results[0].label == "right") {
    nextSong();
  }
  if (results[0].label == "down") {
    muteSong();
  }
  if (results[0].label == "up") {
    unmuteSong();
  }
}
