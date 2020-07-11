function _currentColorId() {
    return currentColorId
}
function _currentColorI() {
    return currentColorI
}
function _categoryIFromName(e) {
    switch (e.split(" - ")[0]) {
    case "CONVERTIBLE TOP BACKPACK":
    case "CONVERTIBLE TOP BACKPACK LIGHT":
    case "CONVERTIBLE TOP BACKPACK SMALL":
        return 0;
    case "AIRBAG GEAR TOTE MEDIUM":
    case "AIRBAG GEAR TOTE LARGE":
    case "RAIN COVER TOTE":
        return 1;
    case "TWIN PACK SACOCHE BAG":
    case "BOTTLE CASE 2WAY SACOCHE BAG":
        return 2;
    case "PC CASE":
        return 3;
    case "MOBILE CASE":
        return 4
    }
}
function _colorFromName(e) {
    return e.split(" - ")[1].split("/")[0].split(" ").join("-").toLowerCase()
}
function _priceFromName(e) {
    return e.split(" - ")[1].split("/")[1]
}
function _ieVersion() {
    var e = userAgent.match(/((msie|msie)\s|rv:)([\d\.]+)/)[3];
    return Number(e)
}
function _screenWidth() {
    return $(window).width()
}
function _screenHeight() {
    return $(window).height()
}
function _screenRatio() {
    return _screenWidth() / _screenHeight()
}
function _pageHeight() {
    return $(document).height()
}
function _scrollTop() {
    return $(window).scrollTop()
}
function _contents() {
    return $("#contents .page_identifier")[0].id
}
function _lang() {
    return $("#" + _contents()).hasClass("en") ? EN : $("#" + _contents()).hasClass("ja") ? JA : EN
}
function _layout() {
    return _screenWidth() <= 320 ? XS : 321 <= _screenWidth() && _screenWidth() <= 375 ? S : 376 <= _screenWidth() && _screenWidth() <= 735 ? M : 736 <= _screenWidth() && _screenWidth() <= 1024 ? L : 1025 <= _screenWidth() ? XL : void 0
}
function _isS2() {
    return 321 <= _screenWidth() && _screenWidth() <= 414
}
function _isLoggedIn() {
    var e = $("#wrapper #tag_logintypez table tbody tr td ul li").length;
    return 0 !== e && 2 !== e
}
function _addComma(e) {
    return String(e).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
}
function loadYouTubePlayer() {
    var e = document.createElement("script");
    e.src = "https://www.youtube.com/iframe_api";
    var t = document.getElementsByTagName("script")[0];
    t.parentNode.insertBefore(e, t)
}
function onYouTubeIframeAPIReady() {
    isYouTubeReady = !0,
    setYouTube("KeS4Q31HFCA")
}
function setYouTube(e) {
    var t;
    t = "pc" === _device ? 1 : 0,
    isSetYouTube || (youtubePlayer = new YT.Player("youtube",{
        width: "960",
        height: "540",
        videoId: e,
        playerVars: {
            autoplay: t,
            controls: 0,
            color: "white",
            disablekb: 1,
            enablejsapi: 1,
            origin: 1,
            playsinline: 1,
            iv_load_policy: 3,
            loop: 1,
            playlist: [e],
            modestbranding: 0,
            rel: 0,
            showinfo: 0
        },
        events: {
            onReady: onPlayerReady,
            onStateChange: onPlayerStateChange
        }
    }))
}
function onPlayerReady(e) {
    isSetYouTube = !0,
    "pc" !== _device && ($("#youtube_movie").addClass("visible"),
    $("#play_button").addClass("visible")),
    youtubePlayer.setVolume(0),
    youtubeWatchIntervalId = setInterval(function() {
        youtubePlayer.getCurrentTime() > 16 ? youtubePlayer.seekTo(0) : youtubePlayer.getCurrentTime() > 0 ? ($("#youtube_movie").addClass("visible"),
        $("#play_button").removeClass("visible")) : $("#youtube_movie").removeClass("visible")
    }, 25)
}
function onPlayerStateChange(e) {
    switch (e.data) {
    case YT.PlayerState.ENDED:
    case YT.PlayerState.PLAYING:
    case YT.PlayerState.PAUSED:
    case YT.PlayerState.BUFFERING:
    case YT.PlayerState.CUED:
    }
}
function playConcept() {
    youtubePlayer.playVideo()
}
function initHumburger() {
    if (!isHumburgerInit) {
        IS_EXISTS_NEW_ICON && addHumburgerNew(),
        sessionStorage.getItem("isHumburgerTaped") && removeHumburgerNew(),
        $("#humburger").append('<span class="one"></span><span class="two"></span><span class="three"></span>');
        var e, t, o, a;
        $("#humburger").bind("touchstart", function(o) {
            e = o.changedTouches[0].pageX,
            t = o.changedTouches[0].pageY
        }).bind("touchend", function(s) {
            o = s.changedTouches[0].pageX,
            a = s.changedTouches[0].pageY,
            Math.abs(o - e) < 3 && Math.abs(a - t) < 3 && toggleHumburger()
        }).bind("click", function(e) {
            "pc" === _device && toggleHumburger()
        }).bind("mouseover", function() {
            $(this).addClass("hover")
        }).bind("mouseout", function() {
            $(this).removeClass("hover")
        }).bind("touchstart", function() {
            $(this).addClass("hover")
        }).bind("touchend", function() {
            $(this).removeClass("hover")
        }),
        isHumburgerInit = !0
    }
    "_concept" === _contents() || "_cart" === _contents() ? $("header").addClass("invert") : $("header").removeClass("invert")
}
function toggleHumburger() {
    isMenuOpened = !isMenuOpened,
    $("body").toggleClass("menu_open"),
    isMenuOpened ? (startNoise(),
    $(window).on("touchmove.noScroll", function(e) {
        e.preventDefault()
    })) : (stopNoise(),
    $(window).off("touchmove.noScroll")),
    removeHumburgerNew()
}
function addHumburgerNew() {
    $("#humburger").addClass("new"),
    $("#modal_menu .menu_set .menu >a:nth-of-type(2)").addClass("new"),
    $("#modal_menu .menu_set .menu >a:nth-of-type(4)").addClass("new"),
    "_index" === _contents() && ($("#cover .menu >a:nth-of-type(1)").addClass("new"),
    $("#cover .menu >a:nth-of-type(3)").addClass("new"))
}
function removeHumburgerNew() {
    $("#humburger").removeClass("new"),
    sessionStorage.setItem("isHumburgerTaped", !0)
}
function copyProductInfo() {
    $("#name_tag_container .name_tag .name_color .name").text($("#product_detail h1").text().split(" - ")[0])
}
function prepareSlideshow() {
    if (!isSlideshowInit) {
        switch (_contents()) {
        case "_index":
            totalSlideshowNum = 4;
            break;
        case "_categorytop":
            totalSlideshowNum = 5;
            break;
        case "_detail":
            totalSlideshowNum = productsData[_currentCategoryId - 1].colors[_currentColorI()].slideNum
        }
        switch (currentSlideshowPos = totalSlideshowNum,
        _contents()) {
        case "_index":
            $("#slideshow .slide").remove();
            break;
        case "_categorytop":
            $(".category_set:eq(0) .slides .slide").remove();
            break;
        case "_detail":
            $("#slideshow .slide").remove(),
            $("#thumbnails .thumbnail").remove()
        }
        for (e = 0; e < totalSlideshowNum; e++)
            slideshowIds.push(e + 1);
        "_detail" != _contents() && (slideshowIds = shuffleArray(slideshowIds));
        for (var e = 0; e < totalSlideshowNum; e++)
            switch (_contents()) {
            case "_index":
                $("#slideshow").append('<a class="slide" href="' + TOP_SLIDESHOW_LINK[slideshowIds[totalSlideshowNum - e - 1] - 1] + '"></a>');
                break;
            case "_categorytop":
                $(".category_set:eq(0) .slides").prepend('<div class="slide"></div>');
                break;
            case "_detail":
                $("#slideshow").append('<div class="slide"></div>'),
                $("#thumbnails").prepend('<a href="javascript:setSlide(' + e + ');" class="thumbnail"></a>')
            }
        var t;
        switch (_contents()) {
        case "_index":
            t = _path + "asset/img/slideshow_" + slideshowIds[currentLoadingSlideshowPosId] + ".jpg?ck=" + CACHE_KILLER;
            break;
        case "_categorytop":
            t = _path + "asset/img/categorysetbg_" + _currentCategoryId + "_" + slideshowIds[currentLoadingSlideshowPosId] + ".jpg?ck=" + CACHE_KILLER;
            break;
        case "_detail":
            t = _path + "asset/img/product_" + _currentCategoryId + "_" + _currentColorId() + "_" + slideshowIds[currentLoadingSlideshowPosId] + ".jpg"
        }
        var o = new Image;
        o.onload = function() {
            switch (_contents()) {
            case "_index":
                $("#cover #slideshow .slide:eq(" + (totalSlideshowNum - currentLoadingSlideshowPosId - 1) + ")").css({
                    "background-image": "url(" + t + ")"
                });
                break;
            case "_categorytop":
                $(".category_set:eq(0) .slides .slide:eq(" + (totalSlideshowNum - currentLoadingSlideshowPosId - 1) + ")").css({
                    "background-image": "url(" + t + ")"
                });
                break;
            case "_detail":
                $("#images #slideshow .slide:eq(" + (totalSlideshowNum - currentLoadingSlideshowPosId - 1) + ")").css({
                    "background-image": "url(" + t + ")"
                }),
                $("#images #thumbnails .thumbnail:eq(" + currentLoadingSlideshowPosId + ")").css({
                    "background-image": "url(" + t + ")"
                }),
                $("#images #thumbnails .thumbnail:eq(" + currentLoadingSlideshowPosId + ")").addClass("loaded")
            }
            changeSlideshow(!0),
            initSlideshow()
        }
        ,
        o.src = t,
        isSlideshowInit = !0
    }
}
function shuffleArray(e) {
    for (var t = e.length; t; ) {
        var o = Math.floor(Math.random() * t)
          , a = e[--t];
        e[t] = e[o],
        e[o] = a
    }
    return e
}
function initSlideshow() {
    currentLoadingSlideshowPosId++;
    var e;
    switch (_contents()) {
    case "_index":
        e = _path + "asset/img/slideshow_" + slideshowIds[currentLoadingSlideshowPosId] + ".jpg?ck=" + CACHE_KILLER;
        break;
    case "_categorytop":
        e = _path + "asset/img/categorysetbg_" + _currentCategoryId + "_" + slideshowIds[currentLoadingSlideshowPosId] + ".jpg?ck=" + CACHE_KILLER;
        break;
    case "_detail":
        e = _path + "asset/img/product_" + _currentCategoryId + "_" + _currentColorId() + "_" + slideshowIds[currentLoadingSlideshowPosId] + ".jpg"
    }
    var t = new Image;
    t.onload = function() {
        switch (_contents()) {
        case "_index":
            $("#cover #slideshow .slide:eq(" + (totalSlideshowNum - currentLoadingSlideshowPosId - 1) + ")").css({
                "background-image": "url(" + e + ")"
            });
            break;
        case "_categorytop":
            $(".category_set:eq(0) .slides .slide:eq(" + (totalSlideshowNum - currentLoadingSlideshowPosId - 1) + ")").css({
                "background-image": "url(" + e + ")"
            });
            break;
        case "_detail":
            $("#images #slideshow .slide:eq(" + (totalSlideshowNum - currentLoadingSlideshowPosId - 1) + ")").css({
                "background-image": "url(" + e + ")"
            }),
            $("#images #thumbnails .thumbnail:eq(" + currentLoadingSlideshowPosId + ")").css({
                "background-image": "url(" + e + ")"
            }),
            $("#images #thumbnails .thumbnail:eq(" + currentLoadingSlideshowPosId + ")").addClass("loaded")
        }
        currentLoadingSlideshowPosId < totalSlideshowNum - 1 && initSlideshow()
    }
    ,
    t.src = e
}
function changeSlideshow(e) {
    currentSlideshowPos--,
    clearTimeout(slideshowTimeoutId);
    var t = (new Date).getTime();
    currentSlideshowPos > totalSlideshowNum ? currentSlideshowPos -= totalSlideshowNum : currentSlideshowPos === totalSlideshowNum && (currentSlideshowPos = 0);
    for (var o = 0; o < totalSlideshowNum; o++)
        switch (_contents()) {
        case "_index":
            o === currentSlideshowPos ? $("#cover #slideshow .slide:eq(" + o + ")").addClass("visible") : $("#cover #slideshow .slide:eq(" + o + ")").removeClass("visible");
            break;
        case "_categorytop":
            o === currentSlideshowPos ? $(".category_set:eq(0) .slides .slide:eq(" + o + ")").addClass("visible") : $(".category_set:eq(0) .slides .slide:eq(" + o + ")").removeClass("visible");
            break;
        case "_detail":
            o === currentSlideshowPos ? ($("#images #slideshow .slide:eq(" + o + ")").addClass("visible"),
            $("#images #thumbnails .thumbnail:eq(" + (totalSlideshowNum - o - 1) + ")").addClass("current")) : ($("#images #slideshow .slide:eq(" + o + ")").removeClass("visible"),
            $("#images #thumbnails .thumbnail:eq(" + (totalSlideshowNum - o - 1) + ")").removeClass("current"))
        }
    if (clearInterval(slideshowUnderScoreIntervalId),
    "_detail" === _contents()) {
        if (_layout() === M || _layout() === L || _layout() === XL)
            var a = 10 + 60 * (totalSlideshowNum - currentSlideshowPos - 1);
        slideshowUnderScoreIntervalId = setInterval(function() {
            var e = $("#images #thumbnails .under_score").css("left").split("px")[0]
              , o = $("#images #thumbnails .under_score").width()
              , s = ((new Date).getTime() - t) / 5e3 * 50;
            $("#images #thumbnails .under_score").css({
                left: e - (e - a) / 3 + "px",
                width: o - (o - s) / 3 + "px"
            })
        }, 25)
    }
    0 === currentSlideshowPos && (currentSlideshowPos = totalSlideshowNum),
    slideshowTimeoutId = setTimeout(function() {
        changeSlideshow()
    }, 5e3)
}
function prepareCategories() {
    if (!isCategoriesInit) {
        switch (_contents()) {
        case "_index":
            totalCategorySlideshowNum = 3;
            break;
        case "_productstop":
            totalCategorySlideshowNum = 5;
            break;
        case "_categorytop":
        case "_detail":
            totalCategorySlideshowNum = 1
        }
        currentCategorySlideshowPos = totalCategorySlideshowNum;
        for (o = 0; o < CATEGORIES_NUM; o++)
            for (var e = 0; e < totalCategorySlideshowNum; e++) {
                switch (_contents()) {
                case "_index":
                    $("#products .category:eq(" + o + ") a").prepend('<div class="slide"></div>');
                    break;
                case "_productstop":
                    $(".category_set:eq(" + o + ") .slides").prepend('<div class="slide"></div>');
                    break;
                case "_categorytop":
                case "_detail":
                    $("#products .category:eq(" + o + ") a").prepend('<div class="slide"></div>')
                }
                0 === o && categorySlideshowIds.push(e + 1)
            }
        categorySlideshowIds = shuffleArray(categorySlideshowIds);
        for (var t = [], o = 0; o < CATEGORIES_NUM; o++) {
            var a;
            switch (_contents()) {
            case "_index":
                a = _path + "asset/img/categorybg_" + (o + 1) + "_" + categorySlideshowIds[currentLoadingCategorySlideshowPosId] + ".jpg?ck=" + CACHE_KILLER;
                break;
            case "_productstop":
                a = _path + "asset/img/categorysetbg_" + (o + 1) + "_" + categorySlideshowIds[currentLoadingCategorySlideshowPosId] + ".jpg?ck=" + CACHE_KILLER;
                break;
            case "_categorytop":
            case "_detail":
                a = _path + "asset/img/categorybg_" + (o + 1) + "_" + categorySlideshowIds[currentLoadingCategorySlideshowPosId] + ".jpg?ck=" + CACHE_KILLER
            }
            t[o] = new Image,
            t[o].onload = function(e) {
                var t;
                switch (_contents()) {
                case "_index":
                    t = e.target.src.indexOf("categorybg_") + 11;
                    break;
                case "_productstop":
                    t = e.target.src.indexOf("categorysetbg_") + 14;
                    break;
                case "_categorytop":
                case "_detail":
                    t = e.target.src.indexOf("categorybg_") + 11
                }
                var o = e.target.src.indexOf("_", t)
                  , a = e.target.src.substring(t, o) - 1;
                switch (_contents()) {
                case "_index":
                    $("#products .category:eq(" + a + ") a .slide:eq(" + (totalCategorySlideshowNum - currentLoadingCategorySlideshowPosId - 1) + ")").css({
                        "background-image": "url(" + e.target.src + ")"
                    });
                    break;
                case "_productstop":
                    $(".category_set:eq(" + a + ") .slides .slide:eq(" + (totalCategorySlideshowNum - currentLoadingCategorySlideshowPosId - 1) + ")").css({
                        "background-image": "url(" + e.target.src + ")"
                    });
                    break;
                case "_categorytop":
                case "_detail":
                    $("#products .category:eq(" + a + ") a .slide:eq(" + (totalCategorySlideshowNum - currentLoadingCategorySlideshowPosId - 1) + ")").css({
                        "background-image": "url(" + e.target.src + ")"
                    })
                }
                checkLoadedCategorySlideshow()
            }
            ,
            t[o].src = a
        }
        isCategoriesInit = !0
    }
}
function checkLoadedCategorySlideshow(e) {
    ++loadedCategorySlideshowNum >= CATEGORIES_NUM && (e ? currentLoadingCategorySlideshowPosId < totalCategorySlideshowNum - 1 && initCategorySlideshow() : (changeCategorySlideshow(),
    initCategorySlideshow()),
    loadedCategorySlideshowNum = 0)
}
function changeCategorySlideshow() {
    currentCategorySlideshowPos--;
    for (var e = 0; e < CATEGORIES_NUM; e++)
        for (var t = 0; t < totalCategorySlideshowNum; t++)
            switch (_contents()) {
            case "_index":
                t === currentCategorySlideshowPos ? $("#products .category:eq(" + e + ") a .slide:eq(" + t + ")").addClass("visible") : $("#products .category:eq(" + e + ") a .slide:eq(" + t + ")").removeClass("visible");
                break;
            case "_productstop":
                t === currentCategorySlideshowPos ? $(".category_set:eq(" + e + ") .slides .slide:eq(" + t + ")").addClass("visible") : $(".category_set:eq(" + e + ") .slides .slide:eq(" + t + ")").removeClass("visible");
                break;
            case "_categorytop":
            case "_detail":
                t === currentCategorySlideshowPos ? $("#products .category:eq(" + e + ") a .slide:eq(" + t + ")").addClass("visible") : $("#products .category:eq(" + e + ") a .slide:eq(" + t + ")").removeClass("visible")
            }
    0 === currentCategorySlideshowPos && (currentCategorySlideshowPos = totalCategorySlideshowNum)
}
function initCategorySlideshow() {
    totalCategorySlideshowNum > 1 && currentLoadingCategorySlideshowPosId++;
    for (var e = [], t = 0; t < CATEGORIES_NUM; t++) {
        var o;
        switch (_contents()) {
        case "_index":
            o = _path + "asset/img/categorybg_" + (t + 1) + "_" + categorySlideshowIds[currentLoadingCategorySlideshowPosId] + ".jpg?ck=" + CACHE_KILLER;
            break;
        case "_productstop":
            o = _path + "asset/img/categorysetbg_" + (t + 1) + "_" + categorySlideshowIds[currentLoadingCategorySlideshowPosId] + ".jpg?ck=" + CACHE_KILLER;
            break;
        case "_categorytop":
        case "_detail":
            o = _path + "asset/img/categorybg_" + (t + 1) + "_" + categorySlideshowIds[currentLoadingCategorySlideshowPosId] + ".jpg?ck=" + CACHE_KILLER
        }
        e[t] = new Image,
        e[t].onload = function(e) {
            var t;
            switch (_contents()) {
            case "_index":
                t = e.target.src.indexOf("categorybg_") + 11;
                break;
            case "_productstop":
                t = e.target.src.indexOf("categorysetbg_") + 14;
                break;
            case "_categorytop":
            case "_detail":
                t = e.target.src.indexOf("categorybg_") + 11
            }
            var o = e.target.src.indexOf("_", t)
              , a = e.target.src.substring(t, o) - 1;
            switch (_contents()) {
            case "_index":
                $("#products .category:eq(" + a + ") a .slide:eq(" + (totalCategorySlideshowNum - currentLoadingCategorySlideshowPosId - 1) + ")").css({
                    "background-image": "url(" + e.target.src + ")"
                });
                break;
            case "_productstop":
                $(".category_set:eq(" + a + ") .slides .slide:eq(" + (totalCategorySlideshowNum - currentLoadingCategorySlideshowPosId - 1) + ")").css({
                    "background-image": "url(" + e.target.src + ")"
                });
                break;
            case "_categorytop":
            case "_detail":
                $("#products .category:eq(" + a + ") a .slide:eq(" + (totalCategorySlideshowNum - currentLoadingCategorySlideshowPosId - 1) + ")").css({
                    "background-image": "url(" + e.target.src + ")"
                })
            }
            checkLoadedCategorySlideshow(!0)
        }
        ,
        e[t].src = o
    }
    1 === currentLoadingCategorySlideshowPosId && totalCategorySlideshowNum > 1 && (categorySlideshowIntervalId = setInterval(function() {
        changeCategorySlideshow()
    }, 3e3))
}
function startNoise() {
    clearInterval(noiseIntervalId),
    clearTimeout(noiseStopTimerId);
    var e;
    noiseIntervalId = setInterval(function() {
        $(".noise").each(function() {
            ($(this).parent().hasClass("hover") || $(this).parent().hasClass("current") || $(this).parent().hasClass("stable") || $(this).parent().hasClass("fadeout")) && (e = Math.round(100 * Math.random()) + "px " + Math.round(100 * Math.random()) + "px",
            $(this).css({
                "background-position": e
            }))
        })
    }, 50)
}
function stopNoise() {
    var e = !1;
    $(".noise").each(function() {
        ($(this).parent().hasClass("hover") || $(this).parent().hasClass("current") || $(this).parent().hasClass("stable") || $(this).parent().hasClass("fadeout")) && (e = !0)
    }),
    e || isMenuOpened || (noiseStopTimerId = setTimeout(function() {
        clearInterval(noiseIntervalId),
        clearTimeout(noiseStopTimerId)
    }, 1e3))
}
function initH1() {
    $("h1").each(function() {
        $(this).parent().find(".h1").text($(this).text())
    })
}
function initCategories() {
    $(".category").each(function() {
        var e = $(this).find("h2").text();
        $(this).find(".h2").text(e)
    }),
    "_categorytop" === _contents() && $("#products .category:eq(" + (_currentCategoryId - 1) + ") a").addClass("current")
}
function initSwiper() {
    setTimeout(function() {
        new Swiper(".swiper-container",{
            grabCursor: !0,
            loop: !0,
            slidesPerView: "auto",
            spaceBetween: 30,
            centeredSlides: !0,
            roundLengths: !0,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: !0
            }
        });
        layout()
    }, 500)
}
function setCurrentEpisode() {
    for (var e = location.href.split("/special/")[1], t = 0; t < $(".special_category_set.more .items .item").length; t++)
        $(".special_category_set.more .items .item:eq(" + t + ")").attr("href").indexOf(e) >= 0 && $(".special_category_set.more .items .item:eq(" + t + ")").addClass("current")
}
function initEpisodeNum() {
    $(".episode").each(function() {
        $(this).text(setNumberOfDigits($(this).text(), 2))
    })
}
function setNumberOfDigits(e, t) {
    var o = e.length
      , a = "";
    if (o < t) {
        for (var s = 0; s < t - o; s++)
            a = 0;
        a += String(e)
    } else
        a = String(e);
    return a
}
function initClick() {
    $("a").unbind(),
    $("a").each(function() {
        var e, t, o, a;
        $(this).bind("touchstart", function(o) {
            e = o.changedTouches[0].pageX,
            t = o.changedTouches[0].pageY
        }).bind("touchend", function(s) {
            o = s.changedTouches[0].pageX,
            a = s.changedTouches[0].pageY,
            Math.abs(o - e) < 3 && Math.abs(a - t) < 3 && (s.preventDefault(),
            goLink($(this)))
        }).bind("click", function(e) {
            "pc" === _device && (e.preventDefault(),
            goLink($(this)))
        })
    })
}
function terminate() {
    clearInterval(slideshowIntervalId),
    clearInterval(categorySlideshowIntervalId),
    clearInterval(noiseIntervalId),
    clearInterval(slideshowUnderScoreIntervalId),
    clearTimeout(slideshowTimeoutId),
    isMenuOpened && toggleHumburger()
}
function resetVars() {
    isSlideshowInit = !1,
    slideshowIds = [],
    currentLoadingSlideshowPosId = 0,
    isCategoriesInit = !1,
    categorySlideshowIds = [],
    currentLoadingCategorySlideshowPosId = 0,
    loadedCategorySlideshowNum = 0,
    closeSlide()
}
function goLink(e) {
    terminate();
    var t = e.attr("href")
      , o = e.attr("target");
    goingURL = t,
    sendGA(),
    "_blank" === o ? window.open().location.href = goingURL : location.href = goingURL
}
function goViaPjax(e) {
    $.pjax({
        url: e,
        container: "#contents",
        fragment: "#contents",
        scrollTo: !0
    })
}
function sendGA() {
    "" === goingURL && (goingURL = location.pathname)
}
function initExpandButton() {
    $(".astoryofunite_paragraph .article .button").unbind(),
    $(".astoryofunite_paragraph .article .button").each(function() {
        var e, t, o, a;
        $(this).bind("touchstart", function(o) {
            e = o.changedTouches[0].pageX,
            t = o.changedTouches[0].pageY
        }).bind("touchend", function(s) {
            o = s.changedTouches[0].pageX,
            a = s.changedTouches[0].pageY,
            Math.abs(o - e) < 3 && Math.abs(a - t) < 3 && (s.preventDefault(),
            onExpandParagraph($(this)))
        }).bind("click", function(e) {
            "pc" === _device && (e.preventDefault(),
            onExpandParagraph($(this)))
        })
    })
}
function layout() {
    if ($("#cover").css({
        height: _screenHeight() + "px"
    }),
    "_detail" == _contents() && $("#name_tag_container").css({
        right: _screenWidth() - $(".add_to_cart:eq(0)").offset().left + "px",
        width: $(".add_to_cart:eq(0)").offset().left + "px",
        height: $(".add_to_cart:eq(0)").outerHeight() + "px"
    }),
    "_concept" == _contents()) {
        var e, t;
        _layout() == XS || _layout() == S || _layout() == M ? (e = "68%",
        t = $("#concept_fabric .container_wrapper").outerHeight() + 20 + "px") : (e = "center",
        t = "top"),
        $("#concept_fabric").css({
            "background-position": e + " " + t
        }),
        $("#concept")
    }
    if ($(".special_category_set").length > 0) {
        var o, a, s, r;
        (u = $(".special_category_set:eq(0) .title").outerWidth() / $(".special_category_set:eq(0) .title").outerHeight()) > 1.5 ? (s = $(".special_category_set:eq(0) .title").outerWidth(),
        r = Math.round(s / 1.5)) : u < 1.5 ? (r = $(".special_category_set:eq(0) .title").outerHeight(),
        s = Math.round(1.5 * r)) : (s = $(".special_category_set:eq(0) .title").outerWidth(),
        r = $(".special_category_set:eq(0) .title").outerHeight()),
        o = Math.round(($(".special_category_set .title:eq(0)").outerWidth() - s) / 2),
        a = Math.round(($(".special_category_set .title:eq(0)").outerHeight() - r) / 2),
        $(".special_category_set .title img").css({
            top: a + "px",
            left: o + "px",
            width: s + "px",
            height: r + "px"
        })
    }
    if ($("#_special_index").length > 0 || $("#_special_astoryofunite_detail").length > 0)
        for (var i = 0; i < $(".special_category_set .item").length; i++) {
            var n, c, d, l, u = $(".special_category_set .item:eq(" + i + ")").outerWidth() / $(".special_category_set .item:eq(" + i + ")").outerHeight();
            u > 1.5 ? (d = $(".special_category_set .item:eq(" + i + ")").outerWidth(),
            l = Math.round(d / 1.5)) : u < 1.5 ? (l = $(".special_category_set .item:eq(" + i + ")").outerHeight(),
            d = Math.round(1.5 * l)) : (d = $(".special_category_set .item:eq(" + i + ")").outerWidth(),
            l = $(".special_category_set .item:eq(" + i + ")").outerHeight()),
            n = Math.round(($(".special_category_set .item:eq(" + i + ")").outerWidth() - d) / 2),
            c = ($(".special_category_set .item:eq(" + i + ")").outerHeight() - l) / 2.5,
            $(".special_category_set .item:eq(" + i + ") img").css({
                top: c + "px",
                left: n + "px",
                width: d + "px",
                height: l + "px"
            })
        }
    if ($("#_special_astoryofunite_detail").length > 0) {
        var p, g, h;
        if (1.5 > _screenRatio() ? g = 1.5 * (h = _screenHeight()) : 1.5 < _screenRatio() ? h = (g = _screenWidth()) / 1.5 : (g = _screenWidth(),
        h = _screenHeight()),
        p = Math.round((_screenWidth() - g) / 2),
        0,
        $("#_special_astoryofunite_detail .bg img").css({
            top: "0px",
            left: p + "px",
            width: g + "px",
            height: h + "px"
        }),
        _layout() === L || _layout() === XL) {
            var _ = Math.round((_screenWidth() - CONTENTS_MAX_WIDTH) / 2);
            _ > 100 ? _ = 100 : _ < 0 && (_ = 0),
            $(".connected").css({
                width: 400 + _ - 48 - 50 + "px",
                "margin-right": -_ + "px"
            })
        } else
            $(".connected").css({
                width: "calc(100% - 28px - 30px - 20px - 20px)",
                "margin-right": "auto"
            })
    }
}
function follow() {
    if ("pc" === _device && ("_index" === _contents() && ($("#logo_typo").css({
        top: "calc(50% + " + _scrollTop() / 3 + "px)"
    }),
    $("#cover .menu").css({
        top: "calc(50% + " + (_scrollTop() / 3 + 80) + "px)"
    })),
    "_productstop" === _contents() && (_layout() === L || _layout() === XL ? $(".category_set").each(function() {
        var e, t = $(this).find(".slides").outerHeight(), o = $(this).offset().top - _scrollTop(), a = $(this).find(".slides").find(".slide").outerHeight();
        e = $(this).hasClass("backpacks") ? o / t * (a - t) : (o - _screenHeight()) / (_screenHeight() + t) * (a - t),
        $(this).find(".slides").find(".slide").css({
            top: e + "px"
        })
    }) : $(".category_set").each(function() {
        $(this).find(".slides").find(".slide").css({
            top: "0px"
        })
    })),
    "_detail" === _contents())) {
        var e;
        e = _layout() === XL ? Math.min($("#product_detail").offset().top + $("#product_detail").outerHeight() - _scrollTop() - _screenHeight(), 0) : 0,
        $("#images").css({
            top: e + "px"
        })
    }
    if ("_special_astoryofunite_detail" === _contents()) {
        var t = _scrollTop() / _screenHeight();
        t > 1 && (t = 1);
        var o = .1 * (1 - t)
          , a = 1 + .2 * t;
        $("#_special_astoryofunite_detail .bg img").css({
            opacity: o,
            transform: "scaleX(" + a + ") scaleY(" + a + ")"
        });
        var s, r, i;
        _isS2() ? (s = 150,
        r = 150,
        i = 38) : _layout() === XS || _layout() === S ? (s = 150,
        r = 100,
        i = 25) : (s = 200,
        r = 150,
        i = 38);
        var n, c, d = $("#_special_astoryofunite_detail .astoryofunite_profile .profile img").offset().left + s / 2, l = $("#_special_astoryofunite_detail .astoryofunite_profile .profile img").offset().top + s / 2;
        "L" !== _layout() && "XL" !== _layout() ? (n = _screenWidth(),
        c = 100) : (n = _screenWidth() - 100,
        c = 0);
        var u = Math.sqrt(Math.pow(n - d, 2) + Math.pow(c - l, 2))
          , p = Math.atan2(c - l, n - d) * (180 / Math.PI)
          , g = -(u - (n - d)) / 2
          , h = c - (c + l) / 2;
        $(".line.one").css({
            top: l + "px",
            left: d + "px",
            width: u + "px",
            transform: "translateX(" + g + "px) translateY(" + h + "px) rotate(" + p + "deg)"
        });
        var _ = $("#_special_astoryofunite_detail .astoryofunite_profile .profile img").offset().left + s / 2
          , f = $("#_special_astoryofunite_detail .astoryofunite_profile .profile img").offset().top + s / 2
          , m = _ + Math.cos((180 + p) / (180 / Math.PI)) * u
          , C = f - Math.sin((180 + p) / (180 / Math.PI)) * u
          , y = Math.sqrt(Math.pow(_ - m, 2) + Math.pow(f - C, 2))
          , w = Math.atan2(f - C, _ - m) * (180 / Math.PI)
          , b = -(y - (_ - m)) / 2
          , I = f - (f + C) / 2;
        $(".line.two").css({
            top: C + "px",
            left: m + "px",
            width: y + "px",
            transform: "translateX(" + b + "px) translateY(" + I + "px) rotate(" + w + "deg)"
        });
        var v = $("#_special_astoryofunite_detail .astoryofunite_paragraph .article .connected .profile img").offset().left + r / 2
          , E = $("#_special_astoryofunite_detail .astoryofunite_paragraph .article .connected .profile img").offset().top + r / 2
          , A = _screenWidth()
          , N = E - 300
          , O = Math.sqrt(Math.pow(v - A, 2) + Math.pow(E - N, 2))
          , T = (O - r / 2) / O
          , x = Math.atan2(E - N, v - A) * (180 / Math.PI)
          , B = -(O - (v - A)) / 2
          , P = E - (E + N) / 2;
        $(".line.three").css({
            top: N + "px",
            left: A + "px",
            width: O + "px",
            transform: "translateX(" + (B - Math.cos(x / (180 / Math.PI)) * i) + "px) translateY(" + (P - Math.sin(x / (180 / Math.PI)) * i) + "px) rotate(" + x + "deg) scaleX(" + T + ")"
        });
        var D = $("#_special_astoryofunite_detail .astoryofunite_paragraph .article .connected .profile img").offset().left + r / 2
          , k = $("#_special_astoryofunite_detail .astoryofunite_paragraph .article .connected .profile img").offset().top + r / 2
          , K = _screenWidth()
          , W = E + 300
          , M = Math.sqrt(Math.pow(D - K, 2) + Math.pow(k - W, 2))
          , R = (M - r / 2) / M
          , q = Math.atan2(k - W, D - K) * (180 / Math.PI)
          , H = -(M - (D - K)) / 2
          , Y = k - (k + W) / 2;
        $(".line.four").css({
            top: W + "px",
            left: K + "px",
            width: M + "px",
            transform: "translateX(" + (H - Math.cos(q / (180 / Math.PI)) * i) + "px) translateY(" + (Y - Math.sin(q / (180 / Math.PI)) * i) + "px) rotate(" + q + "deg) scaleX(" + R + ")"
        });
        var G = $("#_special_astoryofunite_detail .astoryofunite_credit").offset().left + $("#_special_astoryofunite_detail .astoryofunite_credit").outerWidth()
          , V = $("#_special_astoryofunite_detail .astoryofunite_credit").offset().top + ($("#_special_astoryofunite_detail .astoryofunite_credit").height() + parseInt($("#_special_astoryofunite_detail .astoryofunite_credit").css("padding-top"), 10) + parseInt($("#_special_astoryofunite_detail .astoryofunite_credit").css("padding-bottom"), 10)) / 2
          , U = (E + V) / 3
          , j = Math.sqrt(Math.pow(0 - G, 2) + Math.pow(U - V, 2))
          , X = Math.atan2(U - V, 0 - G) * (180 / Math.PI)
          , F = -(j - (0 - G)) / 2
          , J = U - (U + V) / 2;
        $(".line.five").css({
            top: V + "px",
            left: G + "px",
            width: j + "px",
            transform: "translateX(" + F + "px) translateY(" + J + "px) rotate(" + X + "deg)"
        });
        var z = _screenWidth()
          , Q = (W + V) / 1.7
          , Z = _pageHeight()
          , ee = Math.sqrt(Math.pow(0 - z, 2) + Math.pow(Z - Q, 2))
          , te = Math.atan2(Z - Q, 0 - z) * (180 / Math.PI)
          , oe = -(ee - (0 - z)) / 2
          , ae = Z - (Z + Q) / 2;
        $(".line.six").css({
            top: Q + "px",
            left: z + "px",
            width: ee + "px",
            transform: "translateX(" + oe + "px) translateY(" + ae + "px) rotate(" + te + "deg)"
        })
    }
}
function initHover() {
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
    $(".astoryofunite_paragraph .article .button").removeClass("hover"),
    $(".astoryofunite_paragraph .article .button").bind("mouseover", function() {
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
}
function aOver(e) {
    e.addClass("hover"),
    e.find(".noise").length > 0 && startNoise()
}
function aOut(e) {
    e.addClass("fadeout"),
    e.removeClass("hover"),
    setTimeout(function() {
        e.removeClass("fadeout")
    }, 1e3),
    e.find(".noise").length > 0 && stopNoise()
}
function initSlideshowUI() {
    $("#slideshow .prev").bind("click", function() {
        prevSlide()
    }),
    $("#slideshow .next").bind("click", function() {
        nextSlide()
    }),
    $("#slideshow .close").bind("click", function() {
        closeSlide()
    })
}
function checkCart() {
    "_cart_empty" === $("#_cart .cart_identifier")[0].id ? $("#cart_buttons").addClass("hide") : $("#cart_buttons").removeClass("hide")
}
function prevSlide() {
    currentSlideshowPos += 2,
    changeSlideshow()
}
function nextSlide() {
    changeSlideshow()
}
function setSlide(e) {
    currentSlideshowPos = e + 1,
    changeSlideshow()
}
function openSlide() {
    isSlideshowOpened = !0,
    $("#images").addClass("open"),
    $("#name_tag_container").addClass("open"),
    $(".add_to_cart:eq(0)").addClass("open"),
    scrollToTop(),
    layout()
}
function closeSlide() {
    isSlideshowOpened = !1,
    $("#images").removeClass("open"),
    $("#name_tag_container").removeClass("open"),
    $(".add_to_cart:eq(0)").removeClass("open")
}
function toggleSlide() {
    isSlideshowOpened ? closeSlide() : openSlide(),
    $("#images #thumbnails .slide_toggle").addClass("disabled"),
    setTimeout(function() {
        $("#images #thumbnails .slide_toggle").removeClass("disabled")
    }, 1e3)
}
function scrollToTop() {
    $("html,body").animate({
        scrollTop: 0
    }, {
        duration: Math.min(_scrollTop(), 1e3),
        easing: "easeInOutCirc"
    })
}
function onExpandParagraph(e) {
    e.parent().parent().removeClass("abridged")
}
function addToCart() {
    fbq("track", "AddToCart")
}
function init() {
    isJsonLoaded ? initAfterJsonLoad() : loadJson()
}
function initOldIE() {
    switch (_contents()) {
    case "_index":
    case "_productstop":
    case "_categorytop":
    case "_detail":
    case "_concept":
    case "_cart":
    case "_terms":
    case "_privacy":
    case "_law":
        rebuild_common()
    }
    addOldIE(),
    $("#old_ie").addClass("show"),
    $("body").addClass("show")
}
function loadJson() {
    $("#medias").empty(),
    $.getJSON(_path + "asset/json/products.json?ck=" + CACHE_KILLER, function(e) {
        colorData = e.colors,
        productsData = e.categories,
        figuresData = e.figures,
        initAfterJsonLoad()
    })
}
function initAfterJsonLoad() {
    switch ("_category" === _contents() && ("" === _currentCategory ? $("#contents .page_identifier").attr("id", "_productstop") : $("#contents .page_identifier").attr("id", "_categorytop")),
    initHumburger(),
    _contents()) {
    case "_index":
        rebuild_common(),
        rebuild_index(),
        initH1(),
        prepareSlideshow(),
        prepareCategories(),
        initCategories();
        break;
    case "_productstop":
        rebuild_common(),
        pickPrices(),
        rebuild_productstop(),
        initH1(),
        prepareCategories();
        break;
    case "_categorytop":
        rebuild_common(),
        pickPrices(),
        rebuild_categorytop(),
        initH1(),
        prepareSlideshow(),
        prepareCategories(),
        initCategories();
        break;
    case "_detail":
        rebuild_common(),
        rebuild_detail(),
        copyProductInfo(),
        initSlideshowUI(),
        prepareSlideshow(),
        prepareCategories(),
        initCategories(),
        initSwiper();
        break;
    case "_concept":
        loadYouTubePlayer();
        break;
    case "_cart":
        rebuild_common(),
        rebuild_cart(),
        checkCart();
        break;
    case "_terms":
    case "_privacy":
    case "_law":
        break;
    case "_special_index":
    case "_special_astoryofunite":
        initH1(),
        initEpisodeNum();
        break;
    case "_special_astoryofunite_detail":
        initH1(),
        initEpisodeNum(),
        setCurrentEpisode(),
        initExpandButton()
    }
    initClick(),
    initHover(),
    layout(),
    follow(),
    $("body").addClass("show")
}
function rebuild_common() {
    $("#bg").insertBefore($("center:eq(0)")),
    $("#wrapper").insertBefore($("center:eq(0)")),
    $("#contents").appendTo($("#wrapper")),
    $("footer").appendTo($("#wrapper")),
    $("#modal_menu").appendTo($("#wrapper")),
    _isLoggedIn() ? $("#modal_menu .menu_set .menu .loggedin").addClass("visible") : $("#modal_menu .menu_set .menu .loggedout").addClass("visible");
    var e = $("#wrapper #tag_cart_inside1 .M_headBasket #M_headBasketIn em").text().split(unescape("%u70B9"))[0];
    e > 0 && ($("#cart .num").text(e),
    $("#cart .num").addClass("visible"))
}
function addOldIE() {
    $("#wrapper").append('<div id="old_ie"><div class="set"><div class="logo_composition"></div><div class="text">' + unescape("%u3054%u8ff7%u60d1%u3092%u304a%u304b%u3051%u3057%u3066%u7533%u3057%u8a33%u3054%u3056%u3044%u307e%u305b%u3093%u3002") + "<br>" + unescape("%u3054%u5229%u7528%u4e2d%u306e") + "Internet Explorer" + unescape("%u306f%u3001%u5f53%u30b5%u30a4%u30c8%u30b5%u30dd%u30fc%u30c8%u5bfe%u8c61%u5916%u306e%u30d0%u30fc%u30b8%u30e7%u30f3%u3067%u3059%u3002") + '<br><a href="https://support.microsoft.com/ja-jp/help/17621/internet-explorer-downloads" target="_blank">' + unescape("%u6700%u65b0%u306e") + "Internet Explorer</a>" + unescape("%u3082%u3057%u304f%u306f%u3001") + '<a href="https://support.microsoft.com/ja-jp/help/4027741/windows-get-microsoft-edge" target="_blank">Microsoft Edge</a>' + unescape("%u3092%u30a4%u30f3%u30b9%u30c8%u30fc%u30eb%u306e%u4e0a%u3054%u5229%u7528%u304f%u3060%u3055%u3044%u3002") + "<br>" + unescape("%u6700%u65b0%u306eInternet Explorer %u306e%u5834%u5408%u3001 %u4e92%u63db%u30e2%u30fc%u30c9%u306e%u8a2d%u5b9a%u3092%u3054%u78ba%u8a8d%u304f%u3060%u3055%u3044%u3002") + '</div><span class="contact"><a href="javascript:bottom_sendmail();">' + unescape("%u304a%u554f%u3044%u5408%u308f%u305b") + '</a></span><div class="copyright"><span class="nowrap">Copyright <span class="c">&copy;</span>&nbsp;STYLEM CO.,LTD.&nbsp;</span><span class="nowrap">All rights reserved.</span></div></div></div>')
}
function rebuild_index() {
    _isLoggedIn() ? $("#cover .menu .loggedin").addClass("visible") : $("#cover .menu .loggedout").addClass("visible"),
    $("#information .container .information_indexs").empty();
    for (var e = "#information table tbody tr:nth-of-type(2) td table", t = $(e).length, o = 0; o < t; o++) {
        var a = $(e + ":eq(" + o + ") tbody tr td:nth-of-type(1)").text().split("[")[1].split("]")[0];
        if ((i = $(e + ":eq(" + o + ") tbody tr td:nth-of-type(2)").text()).indexOf("||") >= 0)
            var s = i.split("||")[0]
              , r = i.split("||")[1]
              , i = s + '<a href="' + i.split("||")[2] + '" target="' + i.split("||")[3] + '">' + r + "</a>" + i.split("||")[4];
        $("#information .container .information_indexs").append('<span class="information_index"><span class="date">' + a + '</span><span class="title">' + i + "</span></span>")
    }
}
function pickPrices() {
    var e = $("#tag_all_items").html().split("<\/script>")[1].split("<input")[0].split("|");
    e.pop();
    for (var t = 0; t < e.length; t++)
        for (var o = _categoryIFromName(e[t]), a = _colorFromName(e[t]), s = _priceFromName(e[t]), r = 0; r < productsData[o].colors.length; r++)
            productsData[o].colors[r].color === a && (productsData[o].colors[r].price = s)
}
function rebuild_productstop() {
    $("#_productstop .category_set").remove();
    for (var e = 0; e < productsData.length; e++) {
        var t = productsData[e].category
          , o = t.split("-").join(" ").toUpperCase();
        $("#_productstop").append('<section class="category_set ' + t + '"><h1>' + o + '</h1><div class="slides"></div><div class="title"><span class="h1 font_bold"></span></div><div class="items">\x3c!-- via js --\x3e</div></section>');
        for (var a = 0; a < productsData[e].colors.length; a++) {
            var s = productsData[e].colors[a].name
              , r = productsData[e].colors[a].color
              , i = r.split("-").join(" ").toUpperCase();
            "BLACK2" === i && (i = "BLACK"),
            "BLACK3" === i && (i = "BLACK"),
            "BLACK4" === i && (i = "BLACK"),
            "BLACK5" === i && (i = "BLACK"),
            "BLACK6" === i && (i = "BLACK"),
            "NAVY2" === i && (i = "NAVY"),
            "NAVY3" === i && (i = "NAVY"),
            "BROWN2" === i && (i = "BROWN"),
            "BEIGE2" === i && (i = "BEIGE"),
            "TWEED-BLACK" === i && (i = "TWEED BLACK"),
            "TWEED-NAVY" === i && (i = "TWEED NAVY"),
            "TWEED-BROWN" === i && (i = "TWEED BROWN");
            var n = _addComma(productsData[e].colors[a].price);
            $("#_productstop .category_set:eq(" + e + ") .items").append('<a href="/products/' + t + "/" + r + '/" class="item ' + r + '"><span class="bgs"><span class="bg"></span></span><span class="noise"></span><span class="name font_bold">' + s + '</span><span class="color font_bold">' + i + '</span><span class="price font_regular">' + n + "</span></a>")
        }
    }
    $("#_productstop").append($("#concept")),
    $(".category_set .description").remove(),
    $("#products").remove()
}
function rebuild_categorytop() {
    $("#_categorytop .category_set").remove();
    for (var e = 0; e < productsData.length; e++)
        if (_currentCategory === productsData[e].category) {
            var t = _currentCategory
              , o = t.split("-").join(" ").toUpperCase()
              , a = productsData[e].description;
            $("#_categorytop").append('<section class="category_set ' + t + '"><h1>' + o + '</h1><div class="slides"></div><div class="title"><span class="h1 font_bold"></span></div><div class="description font_medium">' + a + '</div><div class="items">\x3c!-- via js --\x3e</div></section>');
            for (var s = 0; s < productsData[e].colors.length; s++) {
                var r = productsData[e].colors[s].name
                  , i = productsData[e].colors[s].color
                  , n = i.split("-").join(" ").toUpperCase();
                "BLACK2" === n && (n = "BLACK"),
                "BLACK3" === n && (n = "BLACK"),
                "BLACK4" === n && (n = "BLACK"),
                "BLACK5" === n && (n = "BLACK"),
                "BLACK6" === n && (n = "BLACK"),
                "NAVY2" === n && (n = "NAVY"),
                "NAVY3" === n && (n = "NAVY"),
                "BROWN2" === n && (n = "BROWN"),
                "BEIGE2" === n && (n = "BEIGE"),
                "TWEED-BLACK" === n && (n = "TWEED BLACK"),
                "TWEED-NAVY" === n && (n = "TWEED NAVY"),
                "TWEED-BROWN" === n && (n = "TWEED BROWN");
                var c = _addComma(productsData[e].colors[s].price);
                $("#_categorytop .category_set:eq(0) .items").append('<a href="/products/' + t + "/" + i + '/" class="item ' + i + '"><span class="bgs"><span class="bg"></span></span><span class="noise"></span><span class="name font_bold">' + r + '</span><span class="color font_bold">' + n + '</span><span class="price font_regular">' + c + "</span></a>")
            }
            break
        }
    $("#_categorytop").append($("#products")),
    _os === WIN && _browser === CHROME && $("#_categorytop .category_set .description").removeClass("font_medium"),
    $("#concept").remove(),
    buildOtherCategories()
}
function rebuild_detail() {
    switch ($("#product_detail h1").text()) {
    case "CONVERTIBLE TOP BACKPACK LIGHT - BLACK2":
        $("#product_detail h1").text("CONVERTIBLE TOP BACKPACK LIGHT - BLACK");
        break;
    case "CONVERTIBLE TOP BACKPACK SMALL - BLACK3":
        $("#product_detail h1").text("CONVERTIBLE TOP BACKPACK SMALL - BLACK");
        break;
    case "CONVERTIBLE TOP BACKPACK SMALL - BEIGE2":
        $("#product_detail h1").text("CONVERTIBLE TOP BACKPACK SMALL - BEIGE");
        break;
    case "AIRBAG GEAR TOTE MEDIUM - BLACK2":
        $("#product_detail h1").text("AIRBAG GEAR TOTE MEDIUM - BLACK");
        break;
    case "AIRBAG GEAR TOTE LARGE - BLACK3":
        $("#product_detail h1").text("AIRBAG GEAR TOTE LARGE - BLACK");
        break;
    case "BOTTLE CASE 2WAY SACOCHE BAG - BLACK2":
        $("#product_detail h1").text("BOTTLE CASE 2WAY SACOCHE BAG - BLACK");
        break;
    case "BOTTLE CASE 2WAY SACOCHE BAG - NAVY2":
        $("#product_detail h1").text("BOTTLE CASE 2WAY SACOCHE BAG - NAVY")
    }
    for (r = 0; r < productsData[_currentCategoryId - 1].colors.length; r++)
        if (productsData[_currentCategoryId - 1].colors[r].color === _currentColor) {
            currentColorId = productsData[_currentCategoryId - 1].colors[r].id,
            currentColorI = r;
            break
        }
    $("#product_detail .colors").empty(),
    $(".category_set .items").empty();
    for (r = 0; r < productsData[_currentCategoryId - 1].colors[currentColorI].colorOption.length; r++) {
        var e = productsData[_currentCategoryId - 1].colors[productsData[_currentCategoryId - 1].colors[currentColorI].colorOption[r]].color
          , t = productsData[_currentCategoryId - 1].colors[productsData[_currentCategoryId - 1].colors[currentColorI].colorOption[r]].id;
        "BLACK2" === (n = e.toUpperCase()) && (n = "BLACK"),
        "BLACK3" === n && (n = "BLACK"),
        "BLACK4" === n && (n = "BLACK"),
        "BLACK5" === n && (n = "BLACK"),
        "BLACK6" === n && (n = "BLACK"),
        "NAVY2" === n && (n = "NAVY"),
        "NAVY3" === n && (n = "NAVY"),
        "BROWN2" === n && (n = "BROWN"),
        "BEIGE2" === n && (n = "BEIGE"),
        "TWEED-BLACK" === n && (n = "TWEED BLACK"),
        "TWEED-NAVY" === n && (n = "TWEED NAVY"),
        "TWEED-BROWN" === n && (n = "TWEED BROWN");
        var o = colorData["color_" + t].code
          , a = "color color_" + t;
        $("#product_detail .colors").append('<a href="/products/' + _currentCategory + "/" + e + '/" class="' + a + '"><span class="label font_bold">' + n + '</span><span class="id">' + o + "</span></a>")
    }
    for (var s, r = 0; r < productsData[_currentCategoryId - 1].colors[currentColorI].colorOption.length; r++)
        if (productsData[_currentCategoryId - 1].colors[productsData[_currentCategoryId - 1].colors[currentColorI].colorOption[r]].color === _currentColor) {
            s = r;
            break
        }
    $("#product_detail .colors .color:eq(" + s + ")").addClass("current");
    for (r = 0; r < productsData[_currentCategoryId - 1].colors.length; r++) {
        var i = productsData[_currentCategoryId - 1].colors[r].name
          , e = productsData[_currentCategoryId - 1].colors[r].color
          , t = productsData[_currentCategoryId - 1].colors[r].id
          , n = e.toUpperCase();
        "BLACK2" === n && (n = "BLACK"),
        "BLACK3" === n && (n = "BLACK"),
        "BLACK4" === n && (n = "BLACK"),
        "BLACK5" === n && (n = "BLACK"),
        "BLACK6" === n && (n = "BLACK"),
        "NAVY2" === n && (n = "NAVY"),
        "NAVY3" === n && (n = "NAVY"),
        "BROWN2" === n && (n = "BROWN"),
        "BEIGE2" === n && (n = "BEIGE"),
        "TWEED-BLACK" === n && (n = "TWEED BLACK"),
        "TWEED-NAVY" === n && (n = "TWEED NAVY"),
        "TWEED-BROWN" === n && (n = "TWEED BROWN");
        a = "item " + e;
        $(".category_set .items").append('<a href="/products/' + _currentCategory + "/" + e + '/" class="' + a + '"><span class="bgs"><span class="bg"></span></span><span class="noise"></span><span class="name font_bold">' + i + '</span><span class="color font_bold">' + n + "</span></a>")
    }
    $(".category_set").addClass(_currentCategory);
    for (var c, r = 0; r < productsData[_currentCategoryId - 1].colors.length; r++)
        if (productsData[_currentCategoryId - 1].colors[r].color === _currentColor) {
            c = r;
            break
        }
    $(".category_set .items .item:eq(" + c + ")").addClass("current"),
    $("#name_tag_container .name_tag .name_color .color").addClass("color_" + _currentColorId());
    var d = _currentColor.toUpperCase();
    "BLACK2" === d && (d = "BLACK"),
    "BLACK3" === d && (d = "BLACK"),
    "BLACK4" === d && (d = "BLACK"),
    "BLACK5" === d && (d = "BLACK"),
    "BLACK6" === d && (d = "BLACK"),
    "NAVY2" === d && (d = "NAVY"),
    "NAVY3" === d && (d = "NAVY"),
    "BROWN2" === d && (d = "BROWN"),
    "BEIGE2" === d && (d = "BEIGE"),
    "TWEED-BLACK" === d && (d = "TWEED BLACK"),
    "TWEED-NAVY" === d && (d = "TWEED NAVY"),
    "TWEED-BROWN" === d && (d = "TWEED BROWN");
    var l = productsData[_currentCategoryId - 1].colors[currentColorI].material
      , u = productsData[_currentCategoryId - 1].colors[currentColorI].modelHeight
      , p = _addComma(productsData[_currentCategoryId - 1].colors[currentColorI].weight)
      , g = _addComma(productsData[_currentCategoryId - 1].colors[currentColorI].capacity)
      , h = _addComma(productsData[_currentCategoryId - 1].colors[currentColorI].size)
      , _ = productsData[_currentCategoryId - 1].colors[currentColorI].delivery;
    $("#product_detail .spec dl dd:eq(0)").text(l),
    $("#product_detail .spec dl dd:eq(1)").text(d),
    $("#product_detail .spec dl dd:eq(2)").text(h + _WHD),
    "" === p ? $("#product_detail .spec dl dt:eq(3)").addClass("hidden") : $("#product_detail .spec dl dd:eq(3)").text(p + "g"),
    "" === g ? $("#product_detail .spec dl dt:eq(4)").addClass("hidden") : $("#product_detail .spec dl dd:eq(4)").text(g),
    "" === u ? $("#product_detail .spec dl dt:eq(6)").addClass("hidden") : $("#product_detail .spec dl dd:eq(6)").text(u + "cm"),
    $("#product_detail .spec dl dd:eq(7)").text(_);
    var f = productsData[_currentCategoryId - 1].colors[currentColorI].note;
    $("#product_detail .note").html(f),
    _os === WIN && _browser === CHROME && $("#product_detail .description").removeClass("font_medium");
    for (r = 0; r < productsData[_currentCategoryId - 1].colors[currentColorI].figures.length; r++) {
        var m = productsData[_currentCategoryId - 1].colors[currentColorI].figures[r];
        $("#product_detail .figures .swiper-wrapper").append('<div class="swiper-slide"><img src="' + _path + "asset/img/figure_" + m + '.jpg" alt="' + figuresData[m - 1] + '"><div class="caption">' + figuresData[m - 1] + "</div></div>")
    }
    buildOtherCategories()
}
function buildOtherCategories() {
    $("#products section").remove();
    for (var e = 0; e < productsData.length; e++) {
        var t = productsData[e].category
          , o = t.split("-").join(" ").toUpperCase();
        $("#products").append('<section class="category"><h2>' + o + '</h2><a href="/products/' + t + '/" class=""><span class="noise"></span><span class="h2 font_bold"></span></a></section>')
    }
    $("#products .category:eq(" + (_currentCategoryId - 1) + ") a").addClass("current")
}
function rebuild_cart() {
    $("#makebanner").appendTo($("#_cart .main-contents")),
    "pc" == _device ? $("#cart_list .product_in_cart .amount input").attr("type", "number") : $("#cart_list .product_in_cart .amount input").attr("type", "tel"),
    $("#cart_list .product_in_cart .amount input").attr("placeholder", "0"),
    $("#cart_list .product_in_cart .amount input").attr("pattern", "[0-9]*")
}
var youtubePlayer, youtubeWatchIntervalId, totalSlideshowNum, slideshowIntervalId, slideshowUnderScoreIntervalId, slideshowTimeoutId, totalCategorySlideshowNum, categorySlideshowIntervalId, noiseIntervalId, noiseStopTimerId, USERAGENT = window.navigator.userAgent, userAgent = USERAGENT.toLowerCase(), DEV = "dev", PRODUCTION = "production", mode = PRODUCTION, CACHE_KILLER = "20200124", _path = function() {
    if (location.href.indexOf("localhost") >= 0)
        return "/";
    switch (mode) {
    case DEV:
        return "//storage.uncar.dev.spfdesign.jp/";
    case PRODUCTION:
        return location.href.indexOf("spfdesign.jp") >= 0 ? "/" : "//storage.uncar.spfdesign.jp/"
    }
}(), _device = userAgent.indexOf("iphone") > 0 || userAgent.indexOf("ipod") > 0 ? "sp" : userAgent.indexOf("android") > 0 ? userAgent.indexOf("mobile") > 0 ? "sp" : "tab" : userAgent.indexOf("ipad") > 0 ? "tab" : "pc", _currentCategory = location.pathname.split("/")[2], _currentCategorySingular = function() {
    switch (_currentCategory) {
    case "backpacks":
        return "BACKPACK";
    case "tote-bags":
        return "TOTE BAG";
    case "sacoche-bags":
        return "SACOCHE BAG";
    case "pc-cases":
        return "PC CASE";
    case "mobile-cases":
        return "MOBILE CASE"
    }
}(), _currentCategoryId = function() {
    switch (_currentCategory) {
    case "backpacks":
        return 1;
    case "tote-bags":
        return 2;
    case "sacoche-bags":
        return 3;
    case "pc-cases":
        return 4;
    case "mobile-cases":
        return 5
    }
}(), _currentColor = location.pathname.split("/")[3], _isApple = userAgent.indexOf("mac os") >= 0, _isIE = !(!userAgent.match(/(msie|msie)/) && !userAgent.match(/(t|t)rident/)), IE = "IE", EDGE = "EDGE", CHROME = "CHROME", SAFARI = "SAFARI", FIREFOX = "FIREFOX", OPERA = "OPERA", UNKNOWN_BROWSER = "UNKNOWN_BROWSER", _browser = -1 != userAgent.indexOf("msie") || -1 != userAgent.indexOf("trident") ? IE : -1 != userAgent.indexOf("edge") ? EDGE : -1 != userAgent.indexOf("chrome") ? CHROME : -1 != userAgent.indexOf("safari") ? SAFARI : -1 != userAgent.indexOf("firefox") ? FIREFOX : -1 != userAgent.indexOf("opera") ? OPERA : UNKNOWN_BROWSER, WIN = "WIN", MAC = "MAC", UNKNOWN_OS = "UNKNOWN_OS", _os = userAgent.indexOf("win") >= 0 ? WIN : userAgent.indexOf("mac") >= 0 ? MAC : UNKNOWN_OS, _isAndroid = -1 != userAgent.indexOf("android"), EN = "en", JA = "ja", XS = "XS", S = "S", M = "M", L = "L", XL = "XL", _WHD = unescape("%uff08W%u00d7H%u00d7D%uff09"), isYouTubeReady = !1, isSetYouTube = !1, isHumburgerInit = !1, isMenuOpened = !1, IS_EXISTS_NEW_ICON = !0, isSlideshowInit = !1, slideshowIds = [], currentLoadingSlideshowPosId = 0, TOP_SLIDESHOW_LINK = ["/products/sacoche-bags/", "/products/tote-bags/", "/products/backpacks/", "/products/sacoche-bags/"], currentSlideshowPos = totalSlideshowNum, isCategoriesInit = !1, categorySlideshowIds = [], currentLoadingCategorySlideshowPosId = 0, CATEGORIES_NUM = 5, loadedCategorySlideshowNum = 0, goingURL = "", CONTENTS_MAX_WIDTH = 1e3, isSlideshowOpened = !1;
$(window).resize(function() {
    layout(),
    follow()
}),
$(window).on("orientationchange", function() {
    layout(),
    follow()
}),
$(window).scroll(function() {
    follow()
});
var mousewheelevent = "onwheel"in document ? "wheel" : "onmousewheel"in document ? "mousewheel" : "DOMMouseScroll";
$(document).on(mousewheelevent, function(e) {
    $("html,body").stop(),
    isSlideshowOpened && closeSlide()
}),
$(document).ready(function() {
    _browser == EDGE ? init() : _browser == IE ? _ieVersion() >= 11 ? init() : initOldIE() : init(),
    fbq("track", "ViewContent")
});
var colorData, productsData, figuresData, isJsonLoaded = !1;
window.onload = function() {
    layout(),
    follow()
}
;
var currentColorId, currentColorI;
