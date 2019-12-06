var song = new Audio("ivebeendelayed.mp3"),
timestamp = document.getElementById("timestamp"),
volume = document.getElementById("volume-slider");

song.autoplay = false;
song.load();
song.volume = 0.2;

var playing = false;

const x = 10 * 60 * 60 + 8 * 60 + 45, // Seconds at song start

y = 10 * 60 * 60 + 10 * 60 + 15; // Seconds at 10:10:15

function playMusic(startTime) {
  song.currentTime = startTime;
  song.play();
};

function addZero(i) { // Taken from https://www.w3schools.com/jsref/jsref_getseconds.asp
  if (i < 10) {
    i = "0" + i;
  };
  return i;
};

function setTime() {
  var d = new Date(),

  h = d.getHours(),
  m = d.getMinutes(),
  s = d.getSeconds();

  if (h > 12) {h -= 12};

  let t = h * 60 * 60 + m * 60 + s; // Seconds passed in total

  //console.log(t);

  if (t >= x && !playing) {
    playing = true;
    playMusic(t - x);
  };

  if (t == y) {
    timestamp.style.fontWeight = "bold";
  } else {
    timestamp.style.fontWeight = "normal";
  };

  h = addZero(h),
  m = addZero(m),
  s = addZero(s);

  timestamp.innerHTML = [h, m, s].join(":");
};

setTime();

volume.addEventListener("change", function () {
  song.volume = volume.value;
});

setInterval(setTime, 250);
