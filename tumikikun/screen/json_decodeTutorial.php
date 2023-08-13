<?php
//jsonファイル配列取得
$json_post = $_POST['sample'];
// echo $json_post;
$json_data=json_encode($json_post);
//学籍番号取得
$cookie_id = "process";

// echo $json_post;

//process.json作成
//jsonデータ加工
$json_post1 = substr($json_post, 0, -1);
$jsonArray1 = explode(',', $json_post1);
$process_array = [
    'process'=>$jsonArray1
];
// var_dump($process_array);
$json_data_process = json_encode($process_array,JSON_UNESCAPED_UNICODE);
//ファイルの有無処理
$process_file = './webGLTutorial/StreamingAssets/'.$cookie_id.'.json';
$process_exists = file_exists($process_file);
if ($process_exists) {
    //上書き処理
    $data_process = $json_data_process;
    $json_process = fopen($process_file, 'w+b');
    fwrite($json_process,$data_process);
    fclose($json_process);
}else{
    //作成処理
    $bytes = file_put_contents($process_file, $json_data_process); 
}

//number.json作成
//jsonデータ加工
// $json_post2 = substr($json_post, 0, -1);
// $jsonArray2 = explode(',', $json_post2);
//jsonデータ加工
$json_post2 = $_POST['numberSample'];
// echo $json_post2;
// $json_post2 = substr($json_post, 0, -1);
$jsonArray2 = explode(',', $json_post2);
$number_array = [
    'Numberjson'=>$jsonArray2
];
// var_dump($number_array);
$json_data_number = json_encode($number_array,JSON_UNESCAPED_UNICODE);
//ファイルの有無処理
$number_file = './webGLTutorial/StreamingAssets/'.$cookie_id.'ohs.json';
$number_exists = file_exists($number_file);
if ($number_exists) {
    //上書き処理
    $data_number = $json_data_number;
    $json_number = fopen($number_file, 'w+b');
    fwrite($json_number,$data_number);
    fclose($json_number);
}else{
    //作成処理
    $bytes = file_put_contents($number_file, $json_data_number); 
}


// https://halproducts.main.jp/screen/webGLGlass/glassStage.html
header("Location: https://halproducts.main.jp/testUpdate/screen/webGLTutorial/index.html");
exit;
require_once "./thinking.html";
