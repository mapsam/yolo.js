var yoloCode;

function yolo(e){
	yoloCode = String.fromCharCode(e.charCode);
	// use the log to test for charCode
	// console.log(yoloCode);

	// run functions based on keyboard charCodes
	// input should be string and actual character, no ASCII or Integer business!
	if (yoloCode == "#"){
		yoloEgg();
	}	
}

function yoloEgg(){
	console.log('yolo fool');

	// create holder for video
	body = document.getElementsByTagName("body")[0];
	full = document.createElement("div");
	full.id = "fullScreen";
	full.setAttribute("style", "position:absolute; top:0; left:0; height:100%; width:100%; text-align:center; background-color:rgba(0,0,0,0.8);");
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