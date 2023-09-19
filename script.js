"use strict";

$(function(){
    let windowWidth = $(window).width();
    const maxWidth = 800;

    //レスポンシブ対応
    //幅801px以上のとき、ロゴとメニューがスクロール
    //幅800px以下のとき、タブメニューの切り替え
    if(windowWidth > maxWidth) {
        $(window).scroll(function(){
            if($(window).scrollTop() === 0){
                $("#nav").css("top", $(window).scrollTop() - "70");
            } else {
                $("#nav").css("top", $(window).scrollTop() - "40");
            }
        });
    } else {
        $("#nav").css("position", "static");
    }

    //メニューをクリック時にその場所へスクロール
    $("#menu li a").click(function(){
        let target = $($(this).attr("href")).offset().top;
        $("html, body").animate({scrollTop: target}, 700);
        return false;
    });

    //ロゴをクリック時にトップまでスクロール
    $("#logo a").click(function(){
        $("html, body").animate({scrollTop: 0}, 900);
        return false;
    });
    
    //レスポンシブ対応
    //メニュー表示の切り替え、
    //メニュー外をタップで非表示
    $("#tri").click(function(){
        if($(this).hasClass("close")) {
            $("#menu").slideDown(300);
            $("#tri div").css("border-top", 0);
            $("#tri div").css("border-bottom", "40px solid #fff");
            $("#tri").removeClass("close");
            $("#article").click(function(){
                $("#menu").hide();
                $("#tri div").css("border-top", "40px solid #fff");
                $("#tri div").css("border-bottom", 0);
                $("#tri").addClass("close");
            });
        } else {
            $("#menu").slideUp(300);
            $("#tri div").css("border-top", "40px solid #fff");
            $("#tri div").css("border-bottom", 0);
            $("#tri").addClass("close");
        }
    });
    
});
