# GyroMove

A small library for  getting access to mobile sensor events (gyroscope and accelerometer) using javascript.

Start the session and get user autorizacion by adding the "startGyromove" id to a button or link
use the following variables to get acces to the gyroscope and accelerometer.

JavaScriptを使ってモバイルセンサ（ジェイロスコープや加速度計）にアクセスできるようになるライブラリです
セッションを始めて、「startGyromove」idをbuttonかlinkに加えることでユーザー認定を得ます。
以下の変数を使い、ジャイロスコープと加速度計へアクセスします。

**Rotation Rate -  回転率**

- gyroX
- gyroY
- gyroZ

**Orientation - 方向**

- orientationA
- orientationB
- orientationG

**Acceleration Including Gravity - 重力を加えた加速度**

- accelerationIncludingGravityX
- accelerationIncludingGravityY
- accelerationIncludingGravityZ

**Acceleration - 加速度**

- accelerationX
- accelerationY
- accelerationZ


## Load GyroMove from cdn

- cdn: https://cdn.jsdelivr.net/gh/syspla/GyroMove@0.3/gyromove.js


```html

<script src="https://cdn.jsdelivr.net/gh/syspla/GyroMove@0.3/gyromove.js" charset="utf-8"></script>


```

## Use GyroMove in your script

```javascript

//example gyro rotation x
let MyRotationX = gyroX;

```


## Good Luck! ;)


