
window.onload = () => {
  const video = document.querySelector("#camera");
  const se = document.querySelector('#se');
  /** カメラ設定 */
  const constraints = {
    audio: false,
    video: {
      width: 1200,
      height: 800,
      // facingMode: "user"   // フロントカメラを利用する
      facingMode: { exact: "environment" }  // リアカメラを利用する場合
    }
  };
  /**
   * カメラを<video>と同期
   */
  navigator.mediaDevices.getUserMedia(constraints)
    .then((stream) => {
      video.srcObject = stream;
      video.onloadedmetadata = e => {
        video.play();
      };
    })
    .catch((err) => {
      console.log(err.name + ": " + err.message);
    });

  /**
   * シャッターボタン
   */
  const shutter = document.querySelector("#shutter");
  shutter.addEventListener("click", () => {

    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const ctx = canvas.getContext("2d");

    // 演出的な目的で一度映像を止めてSEを再生する
    video.pause();  // 映像を停止
    se.play();      // シャッター音
    setTimeout(() => {
      video.play();    // 0.5秒後にカメラ再開
    }, 3000);
    $('.placeWrap').show(100);
    $('.placeWrap').delay(2800).hide(100)
    // canvasに画像を貼り付ける
    ctx.drawImage(video, 0, 0);

    let dataURL = canvas.toDataURL("image/png");
    document.getElementById("shutter").href = dataURL;

    // // Fetch APIでデータ送信
    const sendData = new FormData();
    sendData.append('dataURL', dataURL);
    fetch('./picture.php', {// 送信先URL
      method: 'post', // 通信メソッド
      body: sendData // JSON形式のデータをセットしたFormDataオブジェクト
    })
      .then(response => response.text())
      .then(data => {
      });
  });
};

