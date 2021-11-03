leftwristX=0;
rightwristX=0;
noseX=0;
noseY=0;
difference=0;

function preload(){

}
function setup(){

video=createCapture(VIDEO);
video.size(550,400);
canvas=createCanvas(550,500);
canvas.position(1700,400);
posenet=ml5.poseNet(video,modelLoaded);
posenet.on('pose',gotposes);

}
function gotposes(results){
    if(results.length>0){
        console.log(results);
noseX=results[0].pose.nose.x;
noseY=results[0].pose.nose.y;
leftwristX=results[0].pose.leftWrist.x;
rightwristX=results[0].pose.rightWrist.x;
difference=floor(leftwristX-rightwristX);
console.log("left wrist x = "+leftwristX+"rightwristx=" +rightwristX+"difference="+difference);


    }
}
function modelLoaded(){
    console.log("poseNet model is initilized");

}



function draw(){
background("#361A58 ");
document.getElementById("text_size").innerHTML="font size of the text will be  "+difference+"px";
textSize(difference);
fill("#FFFFFF");
text("Army",50,400);
}