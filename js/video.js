var video;


function getVid(){
	video = document.querySelector("#myVideo"); 
}

function playVid(){ 

	console.log("Play Video");
	video.play();
	let vol = document.querySelector("#volume");
	vol.innerHTML=video.volume *100 + "%";
	console.log(video)
} 

function pauseVid() { 
	video.pause()
	console.log("Pause Video");
} 

function decreaseSpeed() { 
	video.playbackRate *= .8
	console.log("Speed is "+ video.playbackRate);
	  
} 

function increaseSpeed() {
	video.playbackRate *= 1.25
	console.log("Speed is "+ video.playbackRate);
} 

function skipAhead() {
	if(video.currentTime == video.duration){
		video.currentTime = 0
		playVid()
	}
	else{
	video.currentTime += 60}
	console.log("Current location is "+ video.currentTime)
} 

function mute() {
	var muteButton = document.getElementById("mute");
  	if(video.muted == true){
		  console.log("Changing to Unmuted");
		  video.muted = false
		  muteButton.innerHTML="Mute";
	}
  	else{
		console.log("Muted");
		video.muted = true}
		muteButton.innerHTML="Unmute";

}

function changeVolume(val) {
;	console.log("Volume is ");
	
}
       

function gray() {;
	video.classList.add("grayscale");

	console.log("In grayscale")
}

function color() {
	video.classList.remove("grayscale");
	console.log("In color") 
}
