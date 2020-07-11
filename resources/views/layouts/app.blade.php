<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Scripts -->
    {{-- <script src="{{ asset('js/app.js') }}" defer></script> --}}
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/jquery.pjax/2.0.1/jquery.pjax.min.js" async></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js"></script>
    <script src="{{ ('js/init.js') }}"></script>
    

    <!-- Fonts -->
    <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="//cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">


    <!-- Styles -->
    {{-- <link href="{{ asset('css/app.css') }}" rel="stylesheet"> --}}
    <link rel="stylesheet" type="text/css" href="{{ mix('css/global-navi.css') }}">
    <link rel="stylesheet" type="text/css" href="//cdnjs.cloudflare.com/ajax/libs/Swiper/5.3.7/css/swiper.min.css">
    <link href="/css/app.css" rel="stylesheet">
</head>
<body bgcolor="#FFFFFF" topmargin="0" leftmargin="0" marginheight="0" marginwidth="0" class="show">
    <div id="app">
        <nav class="navbar navbar-expand-md navbar-light  shadow-sm" style="background-color:#0092b3; color:#fefefe;">
            <div class="container">
                <a class="navbar-brand" style="color:#fefefe; font-size:1.4em" href="{{ url('/') }}" >
                    {{ config('app.name', 'Laravel') }}
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="{{ __('Toggle navigation') }}">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <!-- Left Side Of Navbar -->
                    <ul class="navbar-nav mr-auto">

                    </ul>

                    <!-- Right Side Of Navbar -->
                    <ul class="navbar-nav ml-auto" >
                        <!-- Authentication Links -->
                        @guest
                            <li class="nav-item">
                                <a class="nav-link" style="color:#fefefe;"  href="{{ route('login') }}">{{ __('ログイン') }}</a>
                            </li>
                            @if (Route::has('register'))
                                <li class="nav-item">
                                    <a class="nav-link" style="color:#fefefe;"  href="{{ route('register') }}">{{ __('会員登録') }}</a>
                                </li>
                            @endif
                        @else
                            <li class="nav-item dropdown">
                                <a id="navbarDropdown" style="color:#fefefe;" class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                                    {{ Auth::user()->name }} <span class="caret"></span>
                                </a>

                                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="{{ route('logout') }}"
                                    onclick="event.preventDefault();
                                                    document.getElementById('logout-form').submit();">
                                        {{ __('ログアウト') }}
                                    </a>

                                    <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                        @csrf
                                    </form>

                                    <a class="dropdown-item" href="{{ url('/mycart') }}">
                                        カートを見る
                                    </a>
                                </div>
                            </li>

                            <a href="{{ url('/mycart') }}" >
                                <i class="fa fa-shopping-cart cart-icon h2" font-size aria-hidden="true"></i>
                            </a>
                        @endguest


                    </ul>
                </div>
            </div>
        </nav>

        {{-- <main class="py-4">
            @yield('content')
        </main> --}}
    </div>
    @yield('content')
    <div class="footer_design">

        @guest
            <p class="nav-item" style="display:inline;">
                <a class="nav-link" href="{{ route('login') }}" style="color:#fefefe; display:inline;">{{ __('ログイン') }}</a>

            @if (Route::has('register'))

                    <a class="nav-link" href="{{ route('register') }}" style="color:#fefefe; display:inline;">{{ __('会員登録') }}</a>
                </p>
            @endif
        
        @endguest
        <br>
        <div style="margin-top:24px;">
        -full organic-<br>
        <p style="font-size:2.4em">NATURAL HOUSE</p><br>
        </div>

        <p style="font-size:0.7em;">@copyright @portforio</p>

    </div>
    <script src="//cdnjs.cloudflare.com/ajax/libs/Swiper/5.3.7/js/swiper.min.js"></script>
    <script src="/js/app.js"></script>
</body>
</html>