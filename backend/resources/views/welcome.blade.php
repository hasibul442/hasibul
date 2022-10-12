<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta charset="utf-8" />
        <title>Laravel</title>
        @viteReactRefresh
        @vite('resources/js/App.jsx')
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta content="Hasibul Hasan" name="description" />
        <meta content="Hasibul Hasan" name="author" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <link rel="shortcut icon" href="{{ asset('assets/images/favicon.ico') }}">
        <link href="{{ asset('assets/css/bootstrap.min.css') }}" rel="stylesheet" type="text/css" id="bootstrap-stylesheet" />
        <link href="{{ asset('assets/css/icons.min.css') }}" rel="stylesheet" type="text/css" />
        <link href="{{ asset('assets/css/app.min.css') }}" rel="stylesheet" type="text/css"  id="app-stylesheet" />
    </head>
    <body>
        <div id="app">

        </div>

        <!-- Vendor js -->
        <script src="{{ asset('assets/js/vendor.min.js') }}"></script>

        <!--Morris Chart-->
        <script src="{{ asset('assets/libs/morris-js/morris.min.js') }}"></script>
        <script src="{{ asset('assets/libs/raphael/raphael.min.js') }}"></script>

        <!-- Dashboard init js-->
        <script src="{{ asset('assets/js/pages/dashboard.init.js') }}"></script>

        <!-- App js -->
        <script src="{{ asset('assets/js/app.min.js') }}"></script>
    </body>
</html>
