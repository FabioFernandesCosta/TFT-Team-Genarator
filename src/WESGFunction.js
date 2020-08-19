function generator(ori, cla, base, tipo, oL, cL) {

    //Variaveis que definem as sinergias por nomes.
    let resMatch = 0;
    let origin = ori;
    let classes = cla;








    //Variaveis que definem aleatoriamente quais sinergias serao usadas.
    let sOrigem = [Math.floor(Math.random() * (origin.length - 0)) + 0, Math.floor(Math.random() * (origin.length - 0)) + 0, Math.floor(Math.random() * (origin.length - 0)) + 0]
    let sClasses = [Math.floor(Math.random() * (classes.length - 0)) + 0, Math.floor(Math.random() * (classes.length - 0)) + 0, Math.floor(Math.random() * (classes.length - 0)) + 0]

    if (tipo === 1) {
        sOrigem[0] = base;
    } else if (tipo === 2) {
        sClasses[0] = base;
    }

    //Variaveis que definem aleatoriamente quantas sinergias vao ser usadas. (Maximo 6)
    

    
    if (oL == 0) {
        sOrigem.length = Math.floor(Math.random() * (2 - 0)) + 1;

    } else if (oL > 0) {
        sOrigem.length = oL
    }


    if (cL == 0) {
        sClasses.length = Math.floor(Math.random() * (2 - 0)) + 1;

    } else if (cL > 0) {

        sClasses.length = cL
    }
    
    

    ////console.log(origin[sOrigem[0]], origin[sOrigem[1]], classes[sClasses[0]], classes[sClasses[1]]);

    //Ordena Origem e Classe por ordem numerica < p/ >
    sOrigem.sort();
    sClasses.sort();

    //definem a criação da variavel de resultado e de index do resultado
    let res = [];
    let i = 0;

    //conecta os valores numericos obtidos aleatoriamente com as respectivas classe/origens atribuindo o 
    //nome das mesmas a variavel res
    let rOrigem = [];
    let rClasse = [];

    for(let i = 0; i<sOrigem.length; i++){
        rOrigem[i] = origin[sOrigem[i]];
    }
    for(let i = 0; i<sClasses.length; i++){
        rClasse[i] = cla[sClasses[i]];
    }
    //console.log(rClasse)

    res = rOrigem.concat(rClasse);
    //console.log(res);

    let finalRes = "";
    for (i = 0; i < res.length; i++) {

        if (i != res.length - 1) {
            finalRes = finalRes + "[" + res[i] + "] ";
        } else {

            finalRes = finalRes + "[" + res[i] + "]";
        }

    }




    //match


    let match = [
        //origem lateral, classe vertical
      // 0 1 2 3 4 5 6 7 8 9 x 1 2 3
        [0,0,1,0,0,0,0,1,0,0,1,0,0,1], //0
        [0,1,1,0,1,0,0,1,0,1,0,1,0,0], //1
        [1,0,0,0,0,1,0,1,0,1,1,0,0,0], //2
        [1,1,1,0,0,1,0,0,0,0,1,1,0,1], //3
        [1,1,1,0,1,1,0,0,0,0,1,0,0,1], //4
        [0,0,0,0,1,0,0,1,0,1,1,1,0,1], //5
        [0,0,0,1,1,0,0,0,0,0,0,1,0,0], //6
        [1,1,1,1,1,0,0,0,0,0,0,0,1,0], //7
        [0,1,0,1,0,1,1,0,0,0,0,0,0,1], //8
        [0,0,0,0,0,0,0,1,1,1,0,1,0,1]  //9
         
    ];


    /*
    let sOTM = sOrigem.length;
    let sCTM = sClasses.length;

    let sOCon = 0;
    let sCCon = 0;

    for (i = 0; i < sOTM; i++) {

        sOCon = sClasses[i];


        for (i2 = 0; i2 < sCTM; i2++) {

            sCCon = sOrigem[i2]


            if (match[sCCon][sOCon] == 1) {
                resMatch = resMatch + 1;
            }


        }
    }


    */

   

   for(let i = 0; i < sOrigem.length; i++){
       for(let j = 0; j < sClasses.length; j++){
           if(match[sOrigem[i]][sClasses[j]] !=0){
               resMatch++;
           }
       }
   }

    //console.log(sOCon, sCCon)
   

    let finalArray = [finalRes, resMatch]


    console.log(finalRes, resMatch);



    return finalArray;



}





