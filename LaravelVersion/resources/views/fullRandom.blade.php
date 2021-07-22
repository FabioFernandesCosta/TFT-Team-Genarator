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
    <style>
        body {
            font-family: 'Nunito', sans-serif;
        }
    </style>

    <script defer>
        let sinergias = {!! json_encode($sinergias) !!};    //obtem objeto com todas as classes ([1]) e origens([0])
        //console.log(typeof sinergias[0][0])               //printa o primeiro elemento nas origens
        //console.log(sinergias[0][0]['origin_name'])       //printa um campo (['origin_name']) desse elemento
        

        function start() {
            document.getElementById("resultado").innerHTML = "Generate your <br> comp!";
        }


        function generate() {
            let orA = document.getElementById("oL").value;
            let clA = document.getElementById("cL").value;
            let rand = fullRandom(-1, -1, orA, clA);

            document.getElementById("resultado").innerHTML = rand[0];

        }

        //createOpt()
        

    </script>
</head>


<body class="text1">

    <h1 class="text1 tittle2">FullRandom Generator</h1>
    
        <button class="text1" onclick="generate()">Gerar</button>
        <button class="text1" onclick="save()">Gravar comp</button> <br>

        <select class="text1" id="oL">
            <option class="text1" value="-1">Quantidade Aleatoria de Origens</option>
            <option class="text1" value="0">0</option>
            <option class="text1" value="1">1</option>
            <option class="text1" value="2">2</option>

        </select>

        <select class="text1" id="cL">
            <option class="text1" value="-1">Quantidade Aleatoria de Classes</option>
            <option class="text1" value="0">0</option>
            <option class="text1" value="1">1</option>
            <option class="text1" value="2">2</option>
            <option class="text1" value="3">3</option>

        </select>

    
    <div class="container">
        <p id="resultado" class="text1">Gere sua <br> comp!</p>
        

    </div>
</body>
</html>