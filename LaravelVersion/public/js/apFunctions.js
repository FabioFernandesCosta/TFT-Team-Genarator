let listaSorteados = [];
function fullRandom(base, tipo, oL, cL) {
    listaSorteados = [];
    //Coleta de info das classes e origens
    let ori = getOC(false);
    let cla = getOC(true);
    
    

    //Variaveis que definem aleatoriamente quais sinergias serao usadas.
    let sOrigem = null;
    let sClasses = null;

    while(sOrigem == null || checkDuplicate(sOrigem) || checkDuplicate(sClasses)){

        sOrigem = [Math.floor(Math.random() * (ori.length - 0)) + 0, Math.floor(Math.random() * (ori.length - 0)) + 0, Math.floor(Math.random() * (ori.length - 0)) + 0]
        sClasses = [Math.floor(Math.random() * (cla.length - 0)) + 0, Math.floor(Math.random() * (cla.length - 0)) + 0, Math.floor(Math.random() * (cla.length - 0)) + 0]
        //console.log(sOrigem+' | '+sClasses)
    }


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

    } else if (cL > 0) {
        sClasses.length = cL
    }
    


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
            finalRes = finalRes + "[" + res[i] + "] <br>";
        } else {

            finalRes = finalRes + "[" + res[i] + "]";
        }

    }


    
    let finalArray = [finalRes, 0/*resMatch*/];
    console.log(finalArray)
    return finalArray;
}

function oneRandom() {
    let all = getOC(false).concat(getOC(true));
    let sOrigem = Math.floor(Math.random() * (all.length - 0)) + 0;
    let res = all[sOrigem];
    return res;
}


function getOC(OC) { //false = Origin / true = class
    let objetivo = [];
    if(OC == false){
        for(let i = 0; i< sinergias[0].length; i++){
            objetivo.push(sinergias[0][i]['origin_name'] + '&nbsp'.repeat(2) + qRandom(sinergias[0][i]['sin_val']))
        }
    }else{
        for(let i = 0; i< sinergias[1].length; i++){
            objetivo.push(sinergias[1][i]['class_name'] + '&nbsp'.repeat(2) + qRandom(sinergias[1][i]['sin_val']))
        }
    }
    return objetivo
}

function getOCnn(OC){
    let objetivo = [];
    if(OC == false){
        for(let i = 0; i< sinergias[0].length; i++){
            objetivo.push(sinergias[0][i]['origin_name'])
        }
    }else{
        for(let i = 0; i< sinergias[1].length; i++){
            objetivo.push(sinergias[1][i]['class_name'])
        }
    }
    return objetivo
}


function setOC(){
    
}

function checkDuplicate(arr) {
    let result = false;
    // create a Set with array elements
    const s = new Set(arr);
    // compare the size of array and Set
    if(arr.length !== s.size){
       return(true);
    }
}

function createOPT(){
    //console.log(true)
    let page = window.location.pathname.split("/").pop();
    if(page == 'genClass'){
        let select = document.getElementById('option');
        for(let i = 0; i < getOC(true).length; i++){
            option = document.createElement('option')
            option.setAttribute('class', 'text1');
            option.setAttribute('value', i);
            option.appendChild(document.createTextNode(getOCnn(true)[i]));
            select.appendChild(option);
        }
        

    }else if(page == 'genOrigin'){
        let select = document.getElementById('option');
        for(let i = 0; i < getOC(false).length; i++){
            option = document.createElement('option')
            option.setAttribute('class', 'text1');
            option.setAttribute('value', i);
            option.appendChild(document.createTextNode(getOCnn(false)[i]));
            select.appendChild(option)
        }
    }

}

function qRandom(sin_val){
    let sorteado;
    let contagem = 0;
    while(sorteado == undefined || sorteado == '/' )
        sorteado = sin_val[Math.floor(Math.random() * (sin_val.length - 0))];
    return(sorteado)
}




document.addEventListener("DOMContentLoaded", createOPT);