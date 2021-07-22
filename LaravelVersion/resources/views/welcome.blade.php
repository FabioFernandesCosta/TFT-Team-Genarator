<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" type="text/css" href="./css/app.css">
        <title>TFT Team Generator</title>
        @php
        {{ URL::asset('css/app.css'); }} 
        @endphp
        <!-- Fonts -->
        
        <style>
            body {
                font-family: 'Nunito', sans-serif;
            }
        </style>
    </head>
    <body>
        <h1 class="text1 tittle1">TeamFightTactics <br> Team Generator</h1>        
            <button class="text1"   onclick="window.location.href = '/genSelect';">Gerar Comp</button><br>
            <button class="text1" onclick="window.location.href = ''">Records</button><br>
            <button class="text1" onclick="window.location.href = '';">Info</button><br>
    </body>
</html>
