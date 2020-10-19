var video;

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
});

document.querySelector("#play").addEventListener("click", function() {
	video.play();
	console.log("Play Video");
});

document.querySelector("#pause").addEventListener("click", function() {
	video.pause();
  console.log("Pause Video");
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate -= (video.playbackRate * 0.2);
  console.log("Speed is " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate += (video.playbackRate * 0.25);
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
	var volume_val = volumeSlider.value / 100;
	video.volume = volume_val;
	var volume_text = document.getElementById("volume");
	volume_text.innerHTML = volumeSlider.value + "%";
  console.log("Volume is " + volumeSlider.value);
});

document.querySelector("#old").addEventListener("click", function() {
	video.classList.add("oldTime");
  console.log("In grayscale");
});

document.querySelector("#original").addEventListener("click", function() {
	video.classList.remove("oldTime");
  console.log("In color");
});
