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
        let sinergias = {!! json_encode($sinergias) !!};

        function start() {
            document.getElementById("resultado").innerHTML = "Generate your <br> comp!";
        }



        function generate() {
            let orA = document.getElementById("oL").value;
            let clA = document.getElementById("cL").value;
            let base = document.getElementById("option").value;
            let rand = fullRandom(base, 1, orA, clA);
            
            document.getElementById("resultado").innerHTML = rand[0];

        }

        //console.log(sinergias[0][0]);
    </script>
</head>


<body class = "text1">

    <h1 class="text1 tittle2">Selecione a Origem</h1>

    <select class="text1" id="option"></select>

    <button class="text1" onclick="generate()">Gerar</button> <br>




    <select class="text1" id="oL">
        <option value="-1">Quantidade Aleatoria de Origens</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>

    </select>

    <select class="text1" id="cL">
        <option value="-1">Quantidade Aleatoria de Classes</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>

    </select>

    <div class="container">
        <p id="resultado" class="text1">Gere sua <br> comp!</p>

    </div>
    
    
    
</body>
</html>