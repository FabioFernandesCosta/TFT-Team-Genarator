<!DOCTYPE html>
<html lang="en">

<head>
<meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" href="./css/app.css">
    <title>TFT Tam Generator</title>
    @php
        {{ URL::asset('css/app.css'); }} 
    @endphp
    <script type="text/javascript" src="<?php echo asset('js/apFunctions.js')?>"></script>
</head>

<body>
    <h1 class="tittle2 text1">Origen ou Classe?</h1>
    <button class="text1" onclick="window.location.href = '/genOrigin';">Origin</button><br>
    <button onclick="window.location.href = '/genClass';" class="text1">Class</button>
</body>

</html>