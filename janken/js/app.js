// alert(1111);



// $("#gu,cho,par").on("click",function(){
// $(".answer-box").html();
// });

// 乱数 １〜３
// $("#gu").on("click", function() {
    // const r = Math.ceil(Math.random() * 3);

// if分岐
// if (r === 1) {}else{}else{}

// 表示処理
// $("#answer-box").html("グー");
// $("#judgment").html("あいこ");


$(document).ready(function() {
$("#gu").on("click", function() {
    const r = Math.ceil(Math.random() * 3);
    if (r === 1) {
        $("#answer-box").html("グー");
        $("#judgment").html("あいこ");
    } else if (r === 2) {
        $("#answer-box").html("チョキ");
        $("#judgment").html("勝ち");
    } else {
        $("#answer-box").html("パー");
        $("#judgment").html("負け");
    }
});

$("#cho").on("click", function() {
    const r = Math.ceil(Math.random() * 3);
    if (r === 1) {
        $("#answer-box").html("グー");
        $("#judgment").html("負け");
    } else if (r === 2) {
        $("#answer-box").html("チョキ");
        $("#judgment").html("あいこ");
    } else {
        $("#answer-box").html("パー");
        $("#judgment").html("勝ち");
    }
});

$("#par").on("click", function() {
    const r = Math.ceil(Math.random() * 3);
    if (r === 1) {
        $("#answer-box").html("グー");
        $("#judgment").html("勝ち");
    } else if (r === 2) {
        $("#answer-box").html("チョキ");
        $("#judgment").html("負け");
    } else {
        $("#answer-box").html("パー");
        $("#judgment").html("あいこ");
    }
});

});
//jQueryを使うときのルール htmlに目印をつけること！
// $("").on("click", function () {});