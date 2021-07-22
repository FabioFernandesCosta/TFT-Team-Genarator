<!DOCTYPE html>
<html lang="en">
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
    <h1 class="text1 tittle2">Selecione o Gerador</h1>

        <button class="text1" onclick="window.location.href = '/fullRandom';">Full Random</button> <br>

        <button class="text1" onclick="window.location.href = '/OriOrCla';" class="button">Com Siniergia Especifica</button> <br>

        <button class="text1" onclick="window.location.href = '/randomPicker';" class="button">Sortear 1 Classe/Origem</button> <br>
  
</body>
</html>