function fullRandom(base, tipo, oL, cL) {

    //Coleta de info das classes e origens
    ori = getOC(false);
    cla = getOC(true);


    //Variaveis que definem aleatoriamente quais sinergias serao usadas.
    let sOrigem = [Math.floor(Math.random() * (ori.length - 0)) + 0, Math.floor(Math.random() * (ori.length - 0)) + 0, Math.floor(Math.random() * (ori.length - 0)) + 0]
    let sClasses = [Math.floor(Math.random() * (cla.length - 0)) + 0, Math.floor(Math.random() * (cla.length - 0)) + 0, Math.floor(Math.random() * (cla.length - 0)) + 0]

    //Variaveis que definem aleatoriamente quantas sinergias vao ser usadas. (Maximo 6)


    if (base != -1 && tipo != -1) {
        if (tipo == 1) {
            sOrigem[0] = base;
        }
        if (tipo == 2) {
            sClasses[0] = base;
        }
    }

    if (oL == 0 && cL == 0) {
        return ["that's not how things", -1]
    }

    if (oL == -1) {
        sOrigem.length = Math.floor(Math.random() * (2 - 0)) + 1;

    } else if (oL > 0) {
        sOrigem.length = oL
    }


    if (cL == -1) {
        sClasses.length = Math.floor(Math.random() * (2 - 0)) + 1;

    } else if (cL > 0) [
        sClasses.length = cL
    ]


    //Ordena Origem e Classe por ordem crescente < p/ >
    sOrigem.sort();
    sClasses.sort();

    //definem a criação da variavel de resultado e de index do resultado
    let res = [];
    let i = 0;

    //conecta os valores numericos obtidos aleatoriamente com as respectivas classe/origens atribuindo o 
    //nome das mesmas a variavel res
    let rOrigem = [];
    let rClasse = [];

    for (let i = 0; i < sOrigem.length; i++) {
        rOrigem[i] = ori[sOrigem[i]];
    }
    for (let i = 0; i < sClasses.length; i++) {
        rClasse[i] = cla[sClasses[i]];
    }

    res = rOrigem.concat(rClasse);

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
        //linha(x) representa 1 origem, classe coluna(y)
    //   0  1  2  3  4  5  6  7  8  9  10 11
        [1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0], //0
        [0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1],
        [0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1],
        [1, 0, 1, 0, 1, 0 ,0, 0, 1, 0, 1, 0],
        [1, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 1, 0, 0, 1, 0, 1, 0, 0],
        [0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1],
        [0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1],
        [1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 0],
        [0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
        [0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0],
    ];

    let classSelfMatch = [
    //   0  1  2  3  4  5  6  7  8  9  10 11
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0]
    ]

    //["Keeper"0, "Adept"1, "Mage"2, "Assassin"3, "Mystic"4, "Brawler"5, "Shade"6, "Dazzler"7,
    // "Sharpshooter"8, "Duelist"9, "Vanguard"10, "Hunter"11];

    let oriSelfMatch = [
    //   0  1  2  3  4  5  6  7  8  9  10
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    ]

    //["Cultist"0, "Divine"1, "Moonlight"2, "Dusk"3, "Ninja"4, "Enslightened"5, "Spirit"6,
    //"Elderwood"7, "Warlord"8, "Exile"9, "Fortune"10];
    
    
    let resMatch = 0;

    for (let i = 0; i < sOrigem.length; i++) {
        for (let j = 0; j < sClasses.length; j++) {
            if (match[sOrigem[i]][sClasses[j]] != 0) {
                resMatch++;
            }
        }
    }

    for(let i = 0; i<sOrigem.length; i++){
        for(let j = 0; j<sOrigem.length; j++){
            if(classSelfMatch[sOrigem[i]][sOrigem[j]] != 0){
                resMatch++;
            }
        }
    }

    for(let i = 0; i<sClasses.length; i++){
        for(let j = 0; j<sClasses.length; j++){
            if(classSelfMatch[sClasses[i]][sClasses[j]] != 0){
                resMatch++;
            }
        }
    }

    let finalArray = [finalRes, resMatch]
    return finalArray;
}

function oneRandom() {
    let all = getOC(false).concat(getOC(true));
    let sOrigem = Math.floor(Math.random() * (all.length - 0)) + 0;
    let res = all[sOrigem];
    return res;
}


function getOC(OC) { //false = Origin / true = class
    if (OC == false) {
        return ["Cultist", "Divine", "Moonlight", "Dusk", "Ninja", "Enslightened", "Spirit", "Elderwood", "Warlord", "Exile", "Fortune"];
    } else if (OC == true) {
        return ["Keeper", "Adept", "Mage", "Assassin", "Mystic", "Brawler", "Shade", "Dazzler", "Sharpshooter", "Duelist", "Vanguard", "Hunter"];
    }
}