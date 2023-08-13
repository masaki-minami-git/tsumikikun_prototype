function stopload(){
    $('#wrap').css('display','block');
    $('#loader-bg').delay(900).fadeOut(800);
    $('#loader').delay(600).fadeOut(300);
};


$('.slick').slick({
    infinite: false,
    arrows: true,
    prevArrow: '<div class="arrow" id="left">'+
                    '<p id="p_left">'+
                        '<span class="triangle" id="t_left"></span>'+
                    '</p>'+
                '</div>',
    nextArrow: '<div class="arrow" id="right">'+
                    '<p id="p_right">'+
                        '<span class="triangle" id="t_right"></span>'+
                    '</p>'+
                '</div>',
});

// ステージ１
$('#s1-1').hover(
    function(){
        $('#mv1-1').css('opacity','1');
        $('#mv1-2,#mv1-3,#mv1-4,#mv1-5').css('opacity','0');
    },
    function(){
        $('#mv1-2,#mv1-3,#mv1-4,#mv1-5').css('opacity','0');
    }
);
$('#s1-2').hover(
    function(){
        $('#mv1-2').css('opacity','1');
        $('#mv1-1,#mv1-3,#mv1-4,#mv1-5').css('opacity','0');
    },
    function(){
        $('#mv1-1,#mv1-3,#mv1-4,#mv1-5').css('opacity','0');
    }
);
$('#s1-3').hover(
    function(){
        $('#mv1-3').css('opacity','1');
        $('#mv1-1,#mv1-2,#mv1-4,#mv1-5').css('opacity','0');
    },
    function(){
        $('#mv1-1,#mv1-2,#mv1-4,#mv1-5').css('opacity','0');
    }
);
$('#s1-4').hover(
    function(){
        $('#mv1-4').css('opacity','1');
        $('#mv1-1,#mv1-2,#mv1-3,#mv1-5').css('opacity','0');
    },
    function(){
        $('#mv1-1,#mv1-2,#mv1-3,#mv1-5').css('opacity','0');
    }
);
$('#s1-5').hover(
    function(){
        $('#mv1-5').css('opacity','1');
        $('#mv1-1,#mv1-2,#mv1-3,#mv1-4').css('opacity','0');
    },
    function(){
        $('#mv1-1,#mv1-2,#mv1-3,#mv1-4').css('opacity','0');
    }
);


// ステージ２
$('#s2-1').hover(
    function(){
        $('#mv2-1').css('opacity','1');
        $('#mv2-2,#mv2-3,#mv2-4,#mv2-5').css('opacity','0');
    },
    function(){
        $('#mv2-2,#mv2-3,#mv2-4,#mv2-5').css('opacity','0');
    }
);
$('#s2-2').hover(
    function(){
        $('#mv2-2').css('opacity','1');
        $('#mv2-1,#mv2-3,#mv2-4,#mv1-5').css('opacity','0');
    },
    function(){
        $('#mv2-1,#mv2-3,#mv2-4,#mv2-5').css('opacity','0');
    }
);
$('#s2-3').hover(
    function(){
        $('#mv2-3').css('opacity','1');
        $('#mv2-1,#mv2-2,#mv2-4,#mv2-5').css('opacity','0');
    },
    function(){
        $('#mv2-1,#mv2-2,#mv2-4,#mv2-5').css('opacity','0');
    }
);
$('#s2-4').hover(
    function(){
        $('#mv2-4').css('opacity','1');
        $('#mv2-1,#mv2-2,#mv2-3,#mv2-5').css('opacity','0');
    },
    function(){
        $('#mv2-1,#mv2-2,#mv2-3,#mv2-5').css('opacity','0');
    }
);
$('#s2-5').hover(
    function(){
        $('#mv2-5').css('opacity','1');
        $('#mv2-1,#mv2-2,#mv2-3,#mv2-4').css('opacity','0');
    },
    function(){
        $('#mv2-1,#mv2-2,#mv2-3,#mv2-4').css('opacity','0');
    }
);


// ステージ３
$('#s3-1').hover(
    function(){
        $('#mv3-1').css('opacity','1');
        $('#mv3-2,#mv3-3,#mv3-4,#mv3-5').css('opacity','0');
    },
    function(){
        $('#mv3-2,#mv3-3,#mv3-4,#mv3-5').css('opacity','0');
    }
);
$('#s3-2').hover(
    function(){
        $('#mv3-2').css('opacity','1');
        $('#mv3-1,#mv3-3,#mv3-4,#mv3-5').css('opacity','0');
    },
    function(){
        $('#mv3-1,#mv3-3,#mv3-4,#mv3-5').css('opacity','0');
    }
);
$('#s3-3').hover(
    function(){
        $('#mv3-3').css('opacity','1');
        $('#mv3-1,#mv3-2,#mv3-4,#mv3-5').css('opacity','0');
    },
    function(){
        $('#mv3-1,#mv3-2,#mv3-4,#mv3-5').css('opacity','0');
    }
);
$('#s3-4').hover(
    function(){
        $('#mv3-4').css('opacity','1');
        $('#mv3-1,#mv3-2,#mv3-3,#mv3-5').css('opacity','0');
    },
    function(){
        $('#mv3-1,#mv3-2,#mv3-3,#mv3-5').css('opacity','0');
    }
);
$('#s3-5').hover(
    function(){
        $('#mv3-5').css('opacity','1');
        $('#mv3-1,#mv3-2,#mv3-3,#mv3-4').css('opacity','0');
    },
    function(){
        $('#mv3-1,#mv3-2,#mv3-3,#mv3-4').css('opacity','0');
    }
);


// ステージ４
$('#s4-1').hover(
    function(){
        $('#mv4-1').css('opacity','1');
        $('#mv4-2,#mv4-3,#mv4-4,#mv4-5').css('opacity','0');
    },
    function(){
        $('#mv4-2,#mv4-3,#mv4-4,#mv4-5').css('opacity','0');
    }
);
$('#s4-2').hover(
    function(){
        $('#mv3-2').css('opacity','1');
        $('#mv4-1,#mv4-3,#mv4-4,#mv4-5').css('opacity','0');
    },
    function(){
        $('#mv4-1,#mv4-3,#mv4-4,#mv4-5').css('opacity','0');
    }
);
$('#s4-3').hover(
    function(){
        $('#mv4-3').css('opacity','1');
        $('#mv4-1,#mv4-2,#mv4-4,#mv4-5').css('opacity','0');
    },
    function(){
        $('#mv4-1,#mv4-2,#mv4-4,#mv4-5').css('opacity','0');
    }
);
$('#s4-4').hover(
    function(){
        $('#mv4-4').css('opacity','1');
        $('#mv4-1,#mv4-2,#mv4-3,#mv4-5').css('opacity','0');
    },
    function(){
        $('#mv4-1,#mv4-2,#mv4-3,#mv4-5').css('opacity','0');
    }
);
$('#s4-5').hover(
    function(){
        $('#mv4-5').css('opacity','1');
        $('#mv4-1,#mv4-2,#mv4-3,#mv4-4').css('opacity','0');
    },
    function(){
        $('#mv4-1,#mv4-2,#mv4-3,#mv4-4').css('opacity','0');
    }
);


// ステージ５
$('#s5-1').hover(
    function(){
        $('#mv5-1').css('opacity','1');
        $('#mv5-2,#mv5-3,#mv5-4,#mv5-5').css('opacity','0');
    },
    function(){
        $('#mv5-2,#mv5-3,#mv5-4,#mv5-5').css('opacity','0');
    }
);
$('#s5-2').hover(
    function(){
        $('#mv5-2').css('opacity','1');
        $('#mv5-1,#mv5-3,#mv5-4,#mv5-5').css('opacity','0');
    },
    function(){
        $('#mv5-1,#mv5-3,#mv5-4,#mv5-5').css('opacity','0');
    }
);
$('#s5-3').hover(
    function(){
        $('#mv5-3').css('opacity','1');
        $('#mv5-1,#mv5-2,#mv5-4,#mv5-5').css('opacity','0');
    },
    function(){
        $('#mv5-1,#mv5-2,#mv5-4,#mv5-5').css('opacity','0');
    }
);
$('#s5-4').hover(
    function(){
        $('#mv5-4').css('opacity','1');
        $('#mv5-1,#mv5-2,#mv5-3,#mv5-5').css('opacity','0');
    },
    function(){
        $('#mv5-1,#mv5-2,#mv5-3,#mv5-5').css('opacity','0');
    }
);
$('#s5-5').hover(
    function(){
        $('#mv4-5').css('opacity','1');
        $('#mv4-1,#mv4-2,#mv4-3,#mv4-4').css('opacity','0');
    },
    function(){
        $('#mv4-1,#mv4-2,#mv4-3,#mv4-4').css('opacity','0');
    }
);
const video = document.getElementById('opAnime');

video.onended = (event) => {
    $("#opAnimeWrap").css("display","none")
};
// OPビデオ初回のみ再生
$(function(){
    // 1回目のアクセス
    if($.cookie("access") === undefined) {
      //alert("初回です");
      $.cookie("access","onece");
      $("#opAnimeWrap").css("display","block")
    	
    $(".top").addClass("anime");
    // 2回目以降
    } else {
        console.log('a');
    //   alert("二回目以降です");
      $("#opAnimeWrap").css("display","none")
    }
  });


// console.log(flag);
