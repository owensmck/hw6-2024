var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector("#player1")

	video.autoplay = false;
	video.loop = false;
	console.log('autoplay is set to ' + video.autoplay)
	console.log('loop is set to ' + video.loop)

})

/* button controls*/

/* play*/
document.querySelector("#play").addEventListener("click", function() {
	console.log("playing video")
	video.play();
  });

/* pause*/
document.querySelector("#pause").addEventListener("click", function() {
	console.log("video paused")
	video.pause();
  });

  /* mute the video*/
document.querySelector("#mute").addEventListener("click", function() {
	console.log("video muted")
	/*i kept trying to make it different if you click it and could not get it to work*/
video.muted =! video.muted;
  });
 

/* slow down the video speed */

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate -= .1;
	video.play();
	console.log('speed of video is set to ' + video.playbackRate)
})

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate += .1;
	video.play();
	console.log('speed of video is set to ' + video.playbackRate)
	})


/*skip ahead*/
document.querySelector("#skip").addEventListener("click", function() {
	console.log("video skipping ahead")
	time = video.currentTime+= 10;
	console.log('video is at ' + video.currentTime + ' seconds')

/* entering in stuff about if time is over 66 seconds (video is 67 seconds but doing this if i counted wrong)*/
/* maybe come back to and use just video.loop*/
	if(time >= 66){
	video.load();
	video.play();
	}
	else;
  });

/* volume slider*/
document.querySelector("#slider").addEventListener("change", function(){
console.log(video.volume)
video.volume = this.value/100
document.querySelector("#volume").innerHTML = video.volume*100 + '%';

})


/* now styling the buttons*/
/* for old school first*/

document.querySelector("#vintage").addEventListener("click", function() {
	document.querySelector('video').classList.add("oldSchool")
})

/* now back to original stlye*/
document.querySelector("#orig").addEventListener("click", function() {
	document.querySelector('video').classList.remove("oldSchool")
})
