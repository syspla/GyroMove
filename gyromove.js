//Gyromove
//A small library to get accessto mobile sensor events (gyroscope and accelerometer) using javascript
//Start the session and get user autorizacion by adding the "startGyromove" id to a button or link
//use the following variables to get acces to the gyroscope and accelerometer.

//JavaScriptを使ってモバイルセンサ（ジェイロスコープや加速度計）にアクセスできるようになるライブラリです
//セッションを始めて、「startGyromove」idをbuttonかlinkに加えることでユーザー認定を得ます。
//以下の変数を使い、ジャイロスコープと加速度計へアクセスします。

//Rotation Rate -  回転率
var gyroX=0;
var gyroY=0;
var gyroZ=0;
//Orientation - 方向
var orientationA=0;
var orientationB=0;
var orientationG=0;
//acceleration Including Gravity - 重力を加えた加速度
var accelerationIncludingGravityX=0;
var accelerationIncludingGravityY=0;
var accelerationIncludingGravityZ=0;
//Acceleration - 加速度
var accelerationX=0;
var accelerationY=0;
var accelerationZ=0;


function handleOrientation(event) {
  var orientationA=event.alpha;
  var orientationB=event.beta;
  var orientationG=event.gamma;
}

function handleMotion(event) {
  var accelerationIncludingGravityX=event.accelerationIncludingGravity.x;
  var accelerationIncludingGravityY=event.accelerationIncludingGravity.y;
  var accelerationIncludingGravityZ=event.accelerationIncludingGravity.z;

  var accelerationX=event.acceleration.x;
  var accelerationY=event.acceleration.y;
  var accelerationZ=event.acceleration.z;

  var gyroX=event.rotationRate.beta;
  var gyroY=event.rotationRate.gamma;
  var gyroZ=event.rotationRate.alpha;
}


let is_running = false;
let start_button = document.getElementById("startGyromove");
start_button.onclick = function(e) {
  e.preventDefault();

  // Request permission for iOS devices
  if (
    DeviceMotionEvent &&
    typeof DeviceMotionEvent.requestPermission === "function"
  ) {
    DeviceMotionEvent.requestPermission();
  }
  if (is_running){
    window.removeEventListener("devicemotion", handleMotion);
    window.removeEventListener("deviceorientation", handleOrientation);
    is_running = false;
  }else{
    window.addEventListener("devicemotion", handleMotion);
    window.addEventListener("deviceorientation", handleOrientation);
    document.getElementById("startGyromove").innerHTML = "Stop";
    is_running = true;
  }
};
