//Event to execute when the mobile device is ready
document.addEventListener("deviceready", onDeviceReady, false);

var mediastream = null;
var paused=false;
var song;

//Adding the events to the buttons
function onDeviceReady() {
	$("#play").on("click", function(event, ui) {
		playAudio();
	});
	$("#pause").on("click", function(event, ui) {
		pauseAudio();
	});
	$("#stop").on("click", function(event, ui) {
		stopAudio();
	});
}

//Playing the audio
function playAudio() {
	if(!paused || song!=$('#music').val()){
		stopAudio();
		song=$('#music').val();
	    /*
	     * Use the next line to play local files inside the audio folder 
	    src='file:///android_asset/www/audio/'+$('#music').val();
	    */   
	    src='http://dl.dropbox.com/u/212845/audio-phonegap/'+$('#music').val();
		mediastream = new Media(src, onSuccess, onError);
	}	
    mediastream.play();
    paused=false;
}

// Pause audio
function pauseAudio() {
    if (mediastream) {
        mediastream.pause();
        paused=true;
    }
}

// Stop audio
function stopAudio() {
    if (mediastream) {
        mediastream.stop();
    }    
}

// onSuccess Callback
function onSuccess() {
    console.error("playing "+$('#music').val());
}

// onError Callback
function onError(error) {
	console.log(error.code+": "+error.message);    
}