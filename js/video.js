var video;

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.querySelector("#volume").innerHTML = "100%"
});

document.querySelector("#pause").addEventListener("click", function() {
	video.pause();
  console.log("Pause Video");
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate = (video.playbackRate * 0.9);
  console.log("Speed is " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate = (video.playbackRate * 1.1);
  console.log("Speed is " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	video.currentTime += 5;
  if (video.currentTime > video.duration) {
    video.currentTime = 0;
    video.playbackRate = 0;
    console.log("Current location is " + video.currentTime);
  } else {
    console.log("Current location is " + video.currentTime);
  }
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted == false) {
		video.muted = true;
		var btn = document.getElementById("mute");
		btn.innerHTML = 'Unmute';
		console.log("Unmuted");
	} else {
		video.muted = false;
		var btn = document.getElementById("mute");
		btn.innerHTML = 'Mute';
		console.log("Muted");
	}
});

document.querySelector("#volumeSlider").addEventListener("click", function() {
	console.log("Volume is " + volumeSlider.value);
	var slidervolume = volumeSlider.value;
	video.volume = slidervolume / 100;
	document.querySelector("#volume").innerHTML = slidervolume + "%"
});

document.querySelector("#old").addEventListener("click", function() {
	video.classList.add("oldTime");
  console.log("In grayscale");
});

document.querySelector("#original").addEventListener("click", function() {
	video.classList.remove("oldTime");
  console.log("In color");
});
