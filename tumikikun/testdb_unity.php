<?php
    //データベース接続
    $link = @mysqli_connect('mysql210.phy.lolipop.lan','LAA1400484','ohzoom','LAA1400484-hewuser');
    // //文字コード設定
    mysqli_set_charset($link,'utf8');
    // $SELECT = "SELECT m_member FROM login_id WHERE LIKE ";
    $SELECT = "SELECT * FROM m_user WHERE auto_id = 2;";
    $result = mysqli_query($link,$SELECT);
    if($row = mysqli_fetch_assoc($result)){
        $str_id = $row['id'];
    }
    echo $str_id;
?>
