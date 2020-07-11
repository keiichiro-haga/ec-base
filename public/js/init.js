window.onload = function() { 
    if (document.querySelector(".swiper-container")) {
        var mySwiper = new Swiper(".swiper-container", {
            loop: true, //ループさせる
            effect: "fade", //フェードのエフェクト
            autoplay: {
            delay: 4000, //４秒後に次の画像へ
            disableOnInteraction: false //ユーザー操作後に自動再生を再開する
            },
            speed: 2000 //２秒かけながら次の画像へ移動
        });
    }
}
    
jQuery(document).ready(function($){
    $("a").removeClass("hover"),
    $("a").bind("mouseover", function() {
        aOver($(this))
    }).bind("mouseout", function() {
        aOut($(this))
    }).bind("touchstart", function() {
        aOver($(this))
    }).bind("touchend", function() {
        aOut($(this))
    }).bind("focus", function() {
        aOver($(this))
    }).bind("blur", function() {
        aOut($(this))
    }),
    $(".button").removeClass("hover"),
    $(".button").bind("mouseover", function() {
        aOver($(this))
    }).bind("mouseout", function() {
        aOut($(this))
    }).bind("touchstart", function() {
        aOver($(this))
    }).bind("touchend", function() {
        aOut($(this))
    }).bind("focus", function() {
        aOver($(this))
    }).bind("blur", function() {
        aOut($(this))
    })
    
    function aOver(e) {
        e.addClass("hover")
    }
    
    function aOut(e) {
        e.addClass("fadeout"),
        e.removeClass("hover"),
        setTimeout(function() {
            e.removeClass("fadeout")
        }, 1e3)
    }
});