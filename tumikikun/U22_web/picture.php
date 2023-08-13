<?php
$dataURL = $_POST['dataURL'];
//base64の中身右側を取得
$base64 = explode(";base64,",$dataURL)[1];
//画像ファイルの形式になる
$img = base64_decode($base64);
//これで書き込み
file_put_contents('./img.png',$img);

return;
?>