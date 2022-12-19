noseX=0;
noseY=0;

function setup() {
    video = createCapture(VIDEO);
    video.size(600, 600);

    canvas = createCanvas(500, 500);
    canvas.position(600,120);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Intialized!');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
       console.log(results);
       noseX = results[0].pose.nose.x;
       noseY = results[0].pose.nose.y;
       console.log("noseX = " + noseX +" noseY = " +noseY);

       leftWristX = results[0].pose.leftWrist.x;
       rightWristX = results[0].pose.rightWrist.x;
       difference = floor(leftWristX - rightWristX);

       console.log("leftWristX = " + leftWristX + " rightWristX = "+ rightWristX + " difference = " + difference);
    }
}