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
    <script defer>
        let sinergias = {!! json_encode($sinergias) !!};

        function rd(){
            //25
            let rand = oneRandom();
            console.log(rand)
            document.getElementById("resultado").innerHTML = rand;
        }
    </script>
    
</head>
<body>

    <h1 class="text1 tittle2">O Resultado é:</h1>
    <div class="container">
        <p id="resultado" class="text1">Resultado</p>
        

    </div>
    <div class="spacer"></div>
    <div class="buttonPos">
        <button onclick="rd()" class="text1">Gerar</button>
    </div>
</body>
</html>