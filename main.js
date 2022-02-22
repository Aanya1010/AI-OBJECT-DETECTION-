video="";

function setup() {
canvas=createCanvas(480,380);
canvs.center;
video=createCapture(VIDEO);
video=video(380,480);
video.hide();

}



function start() {
objectDetector=ml5.objectDetect('cocossd', modelLoaded);
object=document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded() {
console.log('Model Loaded!');
status="true";
}

function draw() {
image(0,0,480,360);
}

