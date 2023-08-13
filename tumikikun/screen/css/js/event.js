
// 積み木書き込み用配列
let block_data = [];

let process = [];

let cnt = [];

let moji = '';



    /* ========== モーダルウィンドウ =========== */

    const modalOpen = document.getElementById('openModal');
    const modalArea = document.getElementById('modalArea');
    modalOpen.addEventListener('click', () =>{
        let imageurl = 'https://halproducts.main.jp/U22_web/img.png';
        // let imageurl = 'https://halproducts.main.jp/test.jpg';
        let postdata = '{"Url":"' + imageurl + '"}';
        
        $.ajax({
            type: 'POST',
            url: 'https://haloh22cvnt21furuyama-prediction.cognitiveservices.azure.com/customvision/v3.0/Prediction/9e2fa579-5f7b-4f33-8e5f-a4db0f3fbe4e/detect/iterations/Iteration31/url',
            data: postdata,
            headers: {
                "Prediction-Key": "c92673e645cf43c5b7b25bdf7c0a4a9c",
                "Content-Type": "application/json"
            },
            dataType: "json",
            success: function(data) {

                block_data = [];

                for(let i=0; i<data.predictions.length; i++){

                    // 該当データ格納用配列
                    let list = [];
                    // 各部分の類似度
                    let rate = data.predictions[i].probability * 100;
                    // 類似度の基準
                    let lower_limit = 50;

                    // 類似度が基準を超えていた場合
                    if(lower_limit <= rate){
                        list[0] = data.predictions[i].tagName;
                        list[1] = data.predictions[i].probability * 100;
                        list[2] = data.predictions[i].boundingBox.top;
                        // データ格納
                        block_data.push(list);
                    }
        
                } 

                
                // // テストデータ
                // block_data = [];
                // block_data[0] = ["x_rectangle",92.43715,0.88775];
                // block_data[1] = ["y_square",92.43715,0.78775];
                // block_data[2] = ["y_square",92.43715,0.68865];
                // block_data[3] = ["y_square",92.43715,0.58865];
                // block_data[4] = ["y_square",92.43715,0.48865];
                // block_data[5] = ["y_square",92.43715,0.38865];
                // block_data[6] = ["y_square",92.43715,0.28775];
                // block_data[7] = ["x_rectangle",92.43715,0.18775];

                // list[2]の昇順(積み木の下から順に格納) 
                // 引数のa,bを入れ替えて昇順、降順を変更できる
                block_data.sort( (a, b) => {
                    return a[a.length - 1] - b[b.length -1]
                });

                console.log('ajax ok!');
                console.log(block_data);

                

                            
            }

        

        });
        modalArea.style.display = 'block';
    });


    const modalClose1 = document.getElementById('closeModal');
    modalClose1.addEventListener('click', () =>{
        modalArea.style.display = 'none';
    });

    const modalClose2 = document.getElementById('modalBg');
    modalClose2.addEventListener('click', () =>{
        modalArea.style.display = 'none';
    });
    const modalClose3 = document.getElementById('closeModalbutton');
    modalClose3.addEventListener('click', () =>{
        modalArea.style.display = 'none';
    });    
    const modalClose6 = document.getElementById('modalBg3');
    modalClose6.addEventListener('click', () =>{
        modalArea3.style.display = 'none';
    });
    const modalClose7 = document.getElementById('closeModal3');
    modalClose7.addEventListener('click', () =>{
        modalArea3.style.display = 'none';
    });

    const modalOpen2 = document.getElementById('openModal2');
    const modalArea2 = document.getElementById('modalArea2');   
    

    const bg2 = document.getElementById('modalBg2');
    bg2.addEventListener('click', () =>{
        modalArea2.style.display = 'none';

    });

    //モーダル２個目の×を押したとき
        const modalClose5 = document.getElementById('closeModal2');
        modalClose5.addEventListener('click', () =>{
            modalArea2.style.display = 'none';
        });
    //モーダル２個目のいいえを押した時
        const modalback = document.getElementById('backModalbutton');
        modalback.addEventListener('click', () =>{
            modalArea2.style.display = 'none';
            modalArea.style.display = 'block';
        
        });    


    /* ========== モーダルウィンドウ fin =========== */



    // 一個目はい押したとき
    //ここに写真を撮った後の画像認識処理をいれる
    const modalClose4 = document.getElementById('openbutton');
        modalClose4.addEventListener('click', () =>{

            let blocks = block_data;

            //ループが入っているか入っていないか（入っていないときフラグ１）
            for(let i = 0; i < blocks.length; i++){//要素分まで実行される
                if((blocks[i][0] == "rectangle")||(blocks[i][0] == "r_rectangle")||(blocks[i][0] == "x_rectangle")){
                    var flag = 1;
                    break;
                }
                else{
                    var flag = 0;            
                }    
            }

            console.log(flag);

            if(flag == 1){//ループが入っている時
                console.log('true');
                modalArea.style.display = 'none';
                modalArea2.style.display = 'block';
                
                //ループの開始位置を決めるコピー配列
                let blocks_copy = blocks;
                var nor_start_nom = 0;
                var red_start_nom = 0; 
                var x_start_nom = 0; 

                ////////////////////エラー処理開始
                // 使われているループブロックのみが格納される配列
                let loop_block = [];
                // エラーフラグ
                let error_flg = 0;
                // エラーの原因のブロックが格納される配列
                let error_block = '';

                console.log(block_data);

                // 配列分ループ(PHPで言うforeach文)
                for(let block of block_data){

                    // ループの開始または終了のブロックがでてきたとき
                    if(block[0] === 'r_rectangle' || block[0] === 'rectangle' || block[0] === 'x_rectangle'){

                        // 初めてループブロックがでてきたときにloop_blockに格納
                        if(loop_block.length === 0){
                            loop_block.push(block[0]);
                        }
                        else{
                            for(let i=0; i<loop_block.length; i++){
                                // loop_blockに同じループブロックが格納されていれば、そのブロックを配列から削除しループを抜ける
                                if(loop_block[i] === block[0]){
                                    loop_block[i] = '';
                                    break;
                                }
                                // loop_blockに同じブロックが格納されていなければ、新しくloop_blockに格納しループを抜ける
                                if(i == loop_block.length - 1){
                                    loop_block.push(block[0]);
                                    break;
                                }
                            }             
                        }

                    }
                }

                
                for(let i=0; i<loop_block.length; i++){
                    // loop_blockにブロックが残されていればエラーフラグを建て、loop_blockのブロックをerror_blockに格納
                    if(loop_block[i] != ''){
                        error_block = loop_block[i];
                        error_flg = 1;
                        break;
                    }
                }

                console.log(error_flg);
                console.log(error_block);


                ////////////////////エラー処理終了



                //ループスタート時とエンド時の位置を特定する
                // for (let i = 0; i < blocks.length; i++) {//要素分まで実行される
                //     if(blocks[i][0] == "rectangle"){ //木のループの時
                //         if((blocks_copy[i].flg == "nor_first")||(blocks_copy[nor_start_nom].flg == "nor_first")){
                //             blocks_copy[i].flg = "nor_end";                         
                //         }
                //         else{
                //             blocks_copy[i].flg = "nor_first";
                //             nor_start_nom = i; 
                //         }
                //     }
                //     else if(blocks[i].block == "r_rectangle"){ //赤のループ
                //         if((blocks_copy[i].flg == "red_first")||(blocks_copy[red_start_nom].flg == "red_first")){
                //             blocks_copy[i].flg = "red_end";      
                //         }
                //         else{
                //             blocks_copy[i].flg = "red_first";
                //             red_start_nom = i; 
                //         }                    
                //     }
                //     else if(blocks[i].block == "x_rectangle"){ //第三のループ
                //         if((blocks_copy[i].flg == "x_first")||(blocks_copy[x_start_nom].flg == "x_first")){
                //             blocks_copy[i].flg = "x_end";                   
                //         }
                //         else{
                //             blocks_copy[i].flg = "x_first";
                //             x_start_nom = i; 
                //         }                      
                //     }
                // }

                const layout = document.getElementById('block_lay');
                layout.innerHTML=null;
                let nor_cnt=0;
                let nor_cntxt=0;
                let red_cnt=0;
                let red_cntxt=0;
                let x_cnt=0;
                let x_cntxt=0;


                console.log(error_flg);
                console.log(blocks);

                //つみき画像に置き換え
                for (let i = 0; i < blocks.length; i++) {//要素分まで実行される
                    if(blocks[i][0] == "rectangle"){ //木のループの時
                        nor_cnt++;
                        if(nor_cnt == 1){
                            layout.innerHTML +="<li class='pulse-btn'><img width='100px' src='./img/nor2.png'></li>";
                        }
                        else{

                            layout.innerHTML +="<div class='buttoncon'><li class='pulse-btn'><img width='100px' src='./img/nor2.png'></li><div id='down_nor'>-</div><div id='text_nor'>"+nor_cntxt+"</div><div id='up_nor'>+</div></div>";
                            var nor_flg="in";
                        }
                    }
                    else if(blocks[i][0] == "y_square"){ //黄色の四角
                        layout.innerHTML +="<li><img width='100px' src='./img/y.png'></li>";
                    }
                    else if(blocks[i][0] == "b_rectangle"){ //青のジャンプ
                        layout.innerHTML +="<li><img width='100px' src='./img/b.png'></li>";
                    }
                    else if(blocks[i][0] == "r_rectangle"){ //赤のループ
                        red_cnt++;
                        if(red_cnt == 1){
                            layout.innerHTML +="<li class='pulse-btn'><img width='100px' src='./img/red.png'></li>";                            
                        }
                        else{
                            layout.innerHTML +="<div class='buttoncon'><li class='pulse-btn'><img width='100px' src='./img/red.png'></li><div id='down_red'>-</div><div id='text_red'>"+red_cntxt+"</div><div id='up_red'>+</div></div>";

                            var red_flg="in";
                        }                   
                    }
                    else if(blocks[i][0] == "x_rectangle"){ //第三のループ
                        x_cnt++;
                        if(x_cnt == 1){
                            layout.innerHTML +="<li class='pulse-btn'><img width='100px' src='./img/x.png'></li>";                        
                        }
                        else{
                            layout.innerHTML +="<div class='buttoncon'><li class='pulse-btn'><img width='100px' src='./img/x.png'></li><div id='down_x'>-</div><div id='text_x'>"+x_cntxt+"</div><div id='up_x'>+</div></div>";

                            var x_flg="in";
                        }
                                      
                    }
                    else{
                        layout.innerHTML +="<li><img width='100px' src='./img/nor.png'></li>";
                    }    
                }


            
                if(nor_flg == "in"){

                // ノーマルループのカウンター
                (() => {
                    //HTMLのid値を使って以下のDOM要素を取得
                    const downbutton_nor = document.getElementById('down_nor');
                    const upbutton_nor = document.getElementById('up_nor');

                    //ボタンが押されたらカウント減
                    downbutton_nor.addEventListener('click', (event) => {

                    //0以下にはならないようにする
                    if(nor_cntxt >= 1) {
                        
                    nor_cntxt--;
                    document.getElementById('text_nor').textContent = nor_cntxt;

                    }
                    });
                
                    //ボタンが押されたらカウント増
                    upbutton_nor.addEventListener('click', (event) => {
                        
                        nor_cntxt++;
                        document.getElementById('text_nor').textContent = nor_cntxt;
                    })
                

                
                })();
                }


                if(red_flg == "in"){
                // 赤ループのカウンター
                (() => {
                    //HTMLのid値を使って以下のDOM要素を取得
                    const downbutton_red = document.getElementById('down_red');
                    const upbutton_red = document.getElementById('up_red');

                    //ボタンが押されたらカウント減
                    downbutton_red.addEventListener('click', (event) => {
                    //0以下にはならないようにする
                    if(red_cntxt >= 1) {
                        
                    red_cntxt--;
                    document.getElementById('text_red').textContent = red_cntxt;

                    }
                    });
                
                    //ボタンが押されたらカウント増
                    upbutton_red.addEventListener('click', (event) => {
                        red_cntxt++;
                        console.log("赤+おしたよ");
                        document.getElementById('text_red').textContent = red_cntxt;
                        console.log(document.getElementById('text_red').textContent);       
                    })
                

                
                })();

                }

                if(x_flg == "in"){
                // 三つ目のループのカウンター
                (() => {
                    //HTMLのid値を使って以下のDOM要素を取得
                    const downbutton_x = document.getElementById('down_x');
                    const upbutton_x = document.getElementById('up_x');

                    //ボタンが押されたらカウント減
                    downbutton_x.addEventListener('click', (event) => {
                    //0以下にはならないようにする
                    if(x_cntxt >= 1) {
                        
                    x_cntxt--;
                    document.getElementById('text_x').textContent = x_cntxt;

                    }
                    });
                
                    //ボタンが押されたらカウント増
                    upbutton_x.addEventListener('click', (event) => {
                        x_cntxt++;
                        document.getElementById('text_x').textContent = x_cntxt;
                    })
                

                
                })();   
                }                  

                // window.location.href = '../webGLGlass/glassStage.html'; // 通常の遷移       
            }
            else{
                
                for(let val of block_data){
                    console.log(val);
                    process.push(val[0]);
                }
                var moziflag =1; 
                console.log("ループなし");
                console.log(process);
                const modalArea3 = document.getElementById('modalArea3');
                modalArea.style.display = 'none';
                modalArea3.style.display = 'block';

            }


        });  

            //モーダル２個目のはいを押した時
            const success = document.getElementById('success');
            success.addEventListener('click', () =>{

                //////  ループ回数格納処理
                let list = block_data;

                // list[2]の降順(積み木の下から順に格納) 
                // 引数のa,bを入れ替えて昇順、降順を変更できる
                list.sort( (b, a) => {
                    return a[a.length - 1] - b[b.length -1]
                });


                let directory_cnt = 0;
                let loop_block_list = [];
                let depth_num = [];
                let sum = 0;

                for(let val of list){
                    // ループブロックが出てきた場合
                    if(val[0] === 'r_rectangle' || val[0] === 'rectangle' || val[0] === 'x_rectangle'){

                        // 初めてループがでてきた場合
                        if(loop_block_list.length === 0){
                            loop_block_list.push(val[0]);
                            directory_cnt = directory_cnt + 1;
                            depth_num.push(directory_cnt);
                        }
                        else{
                            for(let i=0; i<loop_block_list.length; i++){
                                // ループ終了ブロックが出てきた場合
                                if(loop_block_list[i] === val[0]){
                                    directory_cnt = directory_cnt - 1;
                                    depth_num.push(directory_cnt);
                                    break;
                                }
                                //ループ開始ブロックが出てきた場合
                                else if(loop_block_list.length - 1 <= i){
                                    directory_cnt = directory_cnt + 1;
                                    loop_block_list.push(val[0]);
                                    depth_num.push(directory_cnt);
                                    break;
                                }
                            }
                        }                
                    }
                }

                // depth_numを合計
                for(let num of depth_num){
                    sum = sum + num;
                }

                console.log(sum);

                // sumの値で処理内容を判断
                if(sum === 0){
                    cnt = [0 , [0,0] , [0,0] , [0,0,0]];
                    console.log('ループ無し');
                }
                else if(sum === 1){
                    if(loop_block_list[0] === 'r_rectangle'){ 
                        cnt = [document.getElementById('text_red').textContent , [0,0] , [0,0] , [0,0,0]];
                    }
                    else if(loop_block_list[0] === 'rectangle'){
                        cnt = [document.getElementById('text_nor').textContent , [0,0] , [0,0] , [0,0,0]];
                    }
                    else{
                        cnt = [document.getElementById('text_x').textContent , [0,0] , [0,0] , [0,0,0]];
                    }
                    console.log('ループ1つ');

                }
                else if(sum === 2){
                    let cnt_num =[];
                    for(let i=0; i<loop_block_list.length; i++){
                        if(loop_block_list[i] === 'r_rectangle'){
                            cnt_num.push(document.getElementById('text_red').textContent);
                        }
                        else if(loop_block_list[i] === 'rectangle'){
                            cnt_num.push(document.getElementById('text_nor').textContent);
                        }
                        else{
                            cnt_num.push(document.getElementById('text_x').textContent);
                        }
                    }

                    cnt = [0 , [cnt_num[0],cnt_num[1]] , [0,0] , [0,0,0]];
                
                }
                else if(sum === 4){
                    let cnt_num =[];
                    for(let i=0; i<loop_block_list.length; i++){
                        if(loop_block_list[i] === 'r_rectangle'){
                            cnt_num.push(document.getElementById('text_red').textContent);
                        }
                        else if(loop_block_list[i] === 'rectangle'){
                            cnt_num.push(document.getElementById('text_nor').textContent);
                        }
                        else{
                            cnt_num.push(document.getElementById('text_x').textContent);
                        }
                    }

                    cnt = [0 , [0,0] , [cnt_num[0],cnt_num[1]] , [0,0,0]];
                }
                else if(sum === 7){
                    let cnt_num =[];
                    for(let i=0; i<loop_block_list.length; i++){
                        if(loop_block_list[i] === 'r_rectangle'){
                            cnt_num.push(document.getElementById('text_red').textContent);
                        }
                        else if(loop_block_list[i] === 'rectangle'){
                            cnt_num.push(document.getElementById('text_nor').textContent);
                        }
                        else{
                            cnt_num.push(document.getElementById('text_x').textContent);
                        }
                    }
                    console.log(loop_block_list);
                    cnt = [0 , [0,0] , [0,0] , [cnt_num[0],cnt_num[1],cnt_num[2]]];
                }
                ////////ループ格納処理終了

                console.log(cnt);
                
                // 現在のループを管理する配列
                let depth = [];

                // 外側ループの処理が格納される配列
                // ループが一回のみの場合はこの配列に値が格納される
                let loop = [];

                // 内側ループ処理が格納される
                let loop2 = [];

                // 外側のループ処理かつ、内側ループより前に処理があれば格納される
                let loop_front = [];

                // 二重ループ時の内側のループの処理が格納される
                let loop2_process = [];

                // ループの階層
                let depth_cnt = 0;

                // unityに送る(JSONに書き込む)配列
                let unity_process = [];

                // 現時点より前にループ(1セット)が存在する場合1
                let loop_flg = 0;

                // 二重ループ内の二つ目のループが終了した場合1
                let end_flg = 0;

                // 二重ループ内にループが2つある場合、内のループとループの間の処理が格納される
                let loop_mid = [];

                // 外側のループ処理かつ、内側ループより後に処理があれば格納される
                let loop_rear = [];

                // 二重ループの外側の終了ブロックより後の処理が格納される
                let rear = [];

                // list[2]の降順(積み木の下から順に格納) 
                // 引数のa,bを入れ替えて昇順、降順を変更できる
                block_data.sort( (b, a) => {
                    return a[a.length - 1] - b[b.length -1]
                });

                // ループ回数テストデータ
                // cnt = [0 , [2,2] , [0,0] , [2,2,2]];

                // 一重ループ
                if(cnt[0] != 0){
                    for(let val of block_data){
                        // ループの開始または終了があるとき
                        if(val[0] != 'r_rectangle' && val[0] != 'rectangle' && val[0] != 'x_rectangle'){
                            loop.push(val[0]); 
                        }
                    }
                    // loop内の処理をcnt[0]回processに格納
                    for(let i=0; i<cnt[0]; i++){
                        for(let j=0; j<loop.length; j++){
                            process.push(loop[j]);
                        }
                    } 

                }
                //一重ループが二つ
                else if(cnt[1][0] != 0){
                    for(let val of block_data){
                        // ループの開始または終了があるとき
                        if(val[0] === 'r_rectangle' || val[0] === 'rectangle' || val[0] === 'x_rectangle'){

                            // 初めてループがでてきたとき
                            if(depth.length === 0){
                                depth.push(val[0]);
                                depth_cnt = depth_cnt + 1;
                            }
                            // ループが前にない場合
                            else if(loop_flg === 0){
                                for(let i=0; i<cnt[1][0]; i++){
                                    for(let j=0; j<loop.length; j++){
                                        process.push(loop[j]);
                                    }
                                }
                                depth = [];
                                depth_cnt = depth_cnt - 1;
                                loop = [];
                                loop_flg = 1;
                            }
                            // ループが前にある場合
                            else{
                                for(let i=0; i<cnt[1][1]; i++){
                                    for(let j=0; j<loop.length; j++){
                                        process.push(loop[j]);
                                    }
                                }
                            }
                        }
                        // 現在の位置がループの中の場合
                        else if(depth_cnt === 1){
                            loop.push(val[0]);
                        }
                        // ループの外にいる場合
                        else{
                            process.push(val[0]);
                        }
                    }
                    console.log(process);
                }
                // 二重ループ
                else if(cnt[2][0] != 0){
                    for(let val of block_data){
                        //ループの開始または終了があるとき
                        if(val[0] === 'r_rectangle' || val[0] === 'rectangle' || val[0] === 'x_rectangle'){

                            // 初めてループがでてきたとき
                            if(depth.length === 0){
                                depth.push(val[0]);
                                depth_cnt = depth_cnt + 1;
                            }
                            else{
                                for(let i=0; i<depth.length; i++){
                                    
                                    if(depth[i] === val[0]){
                                        
                                        // 二重ループの内側のループの終了位置が確定したとき
                                        if(depth_cnt === 2){

                                            // 外側ループ開始位置と内側のループ開始位置の間に処理があるときに処理を格納
                                            if(loop.length === 0){
                                                for(let l=0; l<loop.length; l++){
                                                    loop_front.push(loop[l]);
                                                }
                                            }

                                            // 内側ループの処理を格納
                                            for(let j=0; j<cnt[2][1]; j++){
                                                for(let k=0; k<loop2.length; k++){
                                                    loop2_process.push(loop2[k]);
                                                }
                                            }

                                            // 外側ループ開始位置と内側のループ開始位置の間の処理を消す
                                            // この後、この配列は内側ループ終了時の処理を格納するのに使う
                                            loop = [];

                                        }

                                        // 二重ループで、外側のループの終了位置が確定したとき
                                        else if(depth_cnt === 1 && loop2_process.length != 0){
                                            for(j=0; j<cnt[2][0]; j++){

                                                // 外側ループ開始位置と内側のループ開始位置の間に処理があるときにprocessに格納
                                                for(let val2 of loop_front){
                                                    process.push(val2);
                                                }

                                                // 内側のループ処理を格納
                                                for(let l=0; l<loop2_process.length; l++){
                                                    process.push(loop2_process[l]);
                                                }

                                                // 外側ループ終了位置と内側のループ終了位置の間に処理があるときにprocessに格納
                                                for(let val3 of loop){
                                                    process.push(val3);
                                                }
                                            }
                                        }

                                        // ループの階層を上げる
                                        depth_cnt = depth_cnt - 1;
                                        depth[i] = ''; 
                                        break;
                                    }
                                    // ループ開始位置の場合
                                    else if(depth.length - 1 <= i){
                                        // ループの階層を下げる
                                        depth_cnt = depth_cnt + 1;
                                        depth.push(val[0]);
                                        break;
                                    }
                                    
                                }  
                            }
                        }
                        // 現在の位置がループ階層が1(外側、または一重)の場合
                        else if(depth_cnt === 1){
                            loop.push(val[0]);   
                        }
                        // 現在の位置がループ階層が2(二重ループの内側)の場合
                        else if(depth_cnt === 2){
                            loop2.push(val[0]);   
                        }
                        // ループの外にいる場合
                        else{
                            process.push(val[0]);   
                        }


                    }
                }
                // 二重ループで中にループが二つ
                else{
                    for(let val of block_data){

                        // ループの開始または終了があるとき
                        if(val[0] === 'r_rectangle' || val[0] === 'rectangle' || val[0] === 'x_rectangle'){

                            // 初めてループがでてきたとき
                            if(depth.length === 0){
                                depth.push(val[0]);
                                depth_cnt = depth_cnt + 1;
                            }
                            else{
                                for(let i=0; i<depth.length; i++){

                                    // ループ終了ブロックがあった場合
                                    if(depth[i] === val[0]){
                                        // 二重ループの内側のループの終了位置が確定したとき
                                        if(depth_cnt === 2){
                                            if(loop_flg === 0){
                                                loop_flg = 1;
                                            }
                                            else{
                                                end_flg = 1;
                                            }

                                        }

                                        // ループの階層を上げる
                                        depth_cnt = depth_cnt - 1;
                                        depth[i] = ''; 
                                        break;
                                    }
                                    // ループ開始ブロックがあった場合
                                    else if(depth.length - 1 <= i){
                                        // ループの階層を下げる
                                        depth_cnt = depth_cnt + 1;
                                        depth.push(val[0]);
                                        break;
                                    }
                                    
                                }  
                            }
                        }
                        // 外側のループと内側のループの間の処理を格納
                        else if(depth_cnt === 1 && loop.length === 0){
                            loop_front.push(val[0]);   
                        }
                        // 内側のループとループの間の処理を格納
                        else if(depth_cnt === 1 && loop.length != 0 && end_flg === 0){
                            loop_mid.push(val[0]);
                        }
                        // 二重ループ内の1ループ目の中の処理を格納
                        else if(depth_cnt === 2 && loop_flg === 0){
                            loop.push(val[0]);   
                        }
                        // 二重ループ内の2ループ目の中の処理を格納
                        else if(depth_cnt === 2 && loop_flg != 0){
                            loop2.push(val[0]);   
                        }
                        // 二重ループ内の2ループ目終了ブロック以降の処理を格納
                        else if(depth_cnt === 1 && loop2.length != 0 && end_flg != 0){
                            loop_rear.push(val[0]);
                        }
                        // 外側のループ開始ブロックより前の処理を格納
                        else if(loop.length === 0 && loop2.length === 0){
                            process.push(val[0]);
                        }
                        // 外側のループ終了ブロックより後の処理を格納
                        else{
                            rear.push(val[0]);   
                        }

                    }
                    // console.log(loop_front);
                    // console.log(loop);
                    // console.log(loop_mid);
                    // console.log(loop2);
                    // console.log(loop_rear);
                    // console.log(rear);

                    // processにすべての値を格納
                    for(let i=0; i<cnt[3][0]; i++){
                        for(let j=0; j<loop_front.length; j++){   
                            process.push(loop_front[j]);
                        }
                        for(let j=0; j<cnt[3][1]; j++){
                            for(let k=0; k<loop.length; k++){
                                process.push(loop[k]);
                            }
                        }

                        for(let j=0; j<loop_mid.length; j++){
                            process.push(loop_mid[j]);
                        }

                        for(let j=0; j<cnt[3][2]; j++){
                            for(let k=0; k<loop2.length; k++){
                                process.push(loop2[k]);
                            }
                        }

                        for(let j=0; j<loop_rear.length; j++){
                            process.push(loop_rear[j]);
                        }
                    }
                    for(let j=0; j<rear.length; j++){
                        process.push(rear[j]);
                    }
                    
                }

                //  配列内反転
                let reverse_list = [];

                for(let i=process.length-1; i>=0; i--){
                    reverse_list.push(process[i])
                }

                process = reverse_list;

                console.log(process);

                console.log(process);
                // unity用に中身を入れ替える
                // for(let i = process.length-1; i>=0; i--){
                //     unity_process.push(process[i]); 
                // }
            // ここにUNITYに送るためのJSONをサーバーに送る処理を書いてください
    
                const modalArea3 = document.getElementById('modalArea3');
                modalArea2.style.display = 'none';
                modalArea3.style.display = 'block';
            // window.location.href = '../webGLGlass/glassStage.html'; // 通常の遷移
            });   




        const go = document.getElementById('go');
        go.addEventListener('click', () =>{

            console.log(process);
            //ここにJSON発行
            mozi = "";
            for(let i = 0; i < process.length ;i++){
            if(process[i] == "y_square"){
                mozi = mozi + "walk";
                mozi = mozi + ",";
            }
            else if(process[i] == "b_rectangle"){
                mozi = mozi +  "jump";
                mozi = mozi + ",";
            }//左右の処理追加予定
            else if(process[i] == "square"){
                mozi = mozi +  "turn";
                mozi = mozi + ",";
            }//左右の処理追加予定
            };
            console.log(mozi);

            document.getElementById( "json" ).value = mozi ;

        });
        




//         for(let val of blocks){
//             // ループブロックが出てきた場合
//             if(val[0] === 'r_rectangle' || val[0] === 'rectangle' || val[0] === 'x_rectangle'){

//                 // 初めてループがでてきた場合
//                 if(depth.length === 0){
//                     depth.push(val[0]);
//                     depth_cnt = depth_cnt + 1;
//                     depth_num.push(depth_cnt);
//                 }
//                 else{
//                     for(let i=0; i<depth.length; i++){
//                         // ループ終了ブロックが出てきた場合
//                         if(depth[i] === val[0]){
//                             depth_cnt = depth_cnt - 1;
//                             depth_num.push(depth_cnt);
//                         }
//                         //ループ開始ブロックが出てきた場合
//                         else if(depth.length - 1 <= i){
//                             depth_cnt = depth_cnt + 1;
//                             depth.push(val[0]);
//                             depth_num.push(depth_cnt);
//                             break;
//                         }
//                     }
//                 }                
//             }
//         }
//             // depth_numを合計
//     for(let num of depth_num){
//         sum = sum + num;
//     }

//     // sumの値で処理内容を判断
//     if(sum === 0){
//         console.log('ループ無し');
//     }
//     else if(sum === 1){
//         console.log('ループ1つ');

//     }
//     else if(sum === 2){
 
//     }
//     else if(sum === 5){
//         console.log('2重');
//     }
//     else if(sum === 8){
//         console.log('2重で中にループ2つ');
//     }          

// console.log(cnt);        

