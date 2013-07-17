function yolo(e){
	var yoloCode = String.fromCharCode(e.charCode);
	// use the log to test for charCode
	console.log(yoloCode);

	// run functions based on keyboard charCodes
	// input should be string and actual character, no ASCII or Integer business!
	switch (yoloCode) {
		case "#" : 
			yoloEgg();
			break;
		case "$" : 
			laughTrack();
			break;
		case "%" : 
			callMe();
			break;
		case "X" :
			reset();
			break;
	}
}

function yoloEgg(){
	console.log('yolo fool');

	// create holder for video
	body = document.getElementsByTagName("body")[0];
	full = document.createElement("div");
	full.id = "fullScreen";
	full.setAttribute("style", "position:absolute; top:0; left:0; height:100%; width:100%; text-align:center; background-color:rgba(0,0,0,0.8);");
	full.className = "yolo";
	body.appendChild(full);

	// add video to new div
	iframe = document.createElement("iframe");
	iframe.setAttribute("width", "560");
	iframe.setAttribute("height", "315");
	iframe.setAttribute("style", "position:relative; top:50%; margin-top:-157.5px;");
	iframe.setAttribute("src", "//www.youtube.com/embed/z5Otla5157c?autoplay=1");
	iframe.setAttribute("frameborder", "0");
	document.getElementById("fullScreen").appendChild(iframe);
}

function laughTrack() {
	body = document.getElementsByTagName("body")[0];
	body.setAttribute("style", "background:url(http://www.latenightwithjimmyfallon.com/audience11.jpg) no-repeat center center; background-size:cover; -webkit-background-size:cover; -o-background-size:cover; -moz-background-size:cover;");
	iframe = document.createElement("iframe");
	iframe.className = "yolo";
	iframe.setAttribute("src", "//www.youtube.com/embed/iYVO5bUFww0?autoplay=1");
	iframe.setAttribute("width", "0");
	iframe.setAttribute("height", "0");
	body.appendChild(iframe);
}

function callMe() {
	$('body').append("<div id='callMe'></div>");

	$('#callMe')
		.css({
			"position": "absolute",
			"top": 0,
			"left": 0,
			"height": "100%",
			"width": "100%",
			"text-align": "center",
			"background-color": "rgba(0,0,0,0.8)"
		})
		.attr("class", "yolo")
		.append("<iframe id='callMeVid'></iframe");

	$('#callMeVid')
		.css({
			"width": "560px",
			"height": "315px",
			"position": "relative",
			"top": "50%",
			"margin-top": "-157.5px",
			"frameborder": 0
		})
		.attr("src", "//www.youtube.com/embed/fWNaR-rxAic?autoplay=1");
}

function reset() {
	$('.yolo').remove();
	$('body').css("background", "none");
}