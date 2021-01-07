<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="{{ asset('css/app.css') }}" rel="stylesheet">
        <title>Admin Login</title>

    </head>
    <body class="h-screen flex justify-center items-center px-4">
            <div class="p-4 border rounded max-w-lg flex flex-col items-center">
                <div class="flex flex-between items-start">
                    <a href="/" class="text-sm font-semibold text-gray-700">
                        back to homepage
                    </a>
                </div>
                    <h1 class="text-4xl text-blue-700 font-bold mb-4">Login</h1>
                <input class="border rounded p-2 mb-4" type="email" placeholder="E-mail" name="" id="">
                <input class="border rounded p-2" type="password" placeholder="Password" name="" id="">
            </div>
    </body>
</html>
