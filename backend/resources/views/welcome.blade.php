<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta charset="utf-8" />
        <title>Laravel</title>
        @viteReactRefresh
        @vite('resources/css/app.css')
        @vite('resources/js/App.jsx')
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta content="Hasibul Hasan" name="description" />
        <meta content="Hasibul Hasan" name="author" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==" crossorigin="anonymous" referrerpolicy="no-referrer" />

    </head>
    <body>
        <div id="app">

        </div>

        <!-- Vendor js -->
        <script src="{{ asset('assets/js/vendor.min.js') }}"></script>

        <!--Morris Chart-->
        {{-- <script src="{{ asset('assets/libs/morris-js/morris.min.js') }}"></script>
        <script src="{{ asset('assets/libs/raphael/raphael.min.js') }}"></script> --}}

        <!-- Dashboard init js-->
        {{-- <script src="{{ asset('assets/js/pages/dashboard.init.js') }}"></script> --}}

        <!-- App js -->
        <script src="{{ asset('assets/js/app.min.js') }}"></script>
    </body>
</html>
