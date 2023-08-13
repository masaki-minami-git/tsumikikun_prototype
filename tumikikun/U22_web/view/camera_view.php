<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- google fonts ゲーム文字-->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=DotGothic16&display=swap" rel="stylesheet">
    <!-- ここまで -->
    <link rel="stylesheet" href="css/style.css">
    <title>カメラモード</title>
</head>
<body>
<!-- <header>
    <h1>図形を撮れ！</h1>
</header> -->
<main>

<video id="camera" playsinline  muted></video>
<!-- <canvas id="picture"></canvas> -->
<form>
  <button type="button" id="shutter">よみとり</button>
</form>

<audio id="se" preload="auto">
  <source src="get.mp3" type="audio/mp3">
</audio>
<h1></h1>

</main>
<footer>

</footer>
<script
  src="https://code.jquery.com/jquery-3.6.0.min.js"
  integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
  crossorigin="anonymous"></script>
<script src="./js/camera.js"></script>
</body>
</html>