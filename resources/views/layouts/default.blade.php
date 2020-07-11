<!DOCTYPE html>
<html class="mti-inactive">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/jquery.pjax/2.0.1/jquery.pjax.min.js" async></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js"></script>
    {{-- <script src="//storage.uncar.spfdesign.jp/asset/js/uncar.js?ck=0124"></script> --}}
    <script src="{{ ('js/init.js') }}"></script>
    <link rel="stylesheet" type="text/css" href="{{ mix('css/global-navi.css') }}">
    <link rel="stylesheet" type="text/css" href="//cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" type="text/css" href="//cdnjs.cloudflare.com/ajax/libs/Swiper/5.3.7/css/swiper.min.css">
    <link href="/css/app.css" rel="stylesheet">
    </head>
    <body bgcolor="#FFFFFF" topmargin="0" leftmargin="0" marginheight="0" marginwidth="0" class="show">
        <div id="bg"></div>
        <div id="wrapper">
            <div id="contents">
                <div id="_index" class="page_identifier">
                    @yield('top-content')
                    @yield('body-content')
                </div>
            </div>
        </div>
    <script src="//cdnjs.cloudflare.com/ajax/libs/Swiper/5.3.7/js/swiper.min.js"></script>
    <script src="/js/app.js"></script>
    </body>
</html>
