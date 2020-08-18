function test(){
    let x = 0, y = 0;

    x = Math.floor(Math.random() * (3 - 0)) + 0;
    y = Math.floor(Math.random() * (3 - 0)) + 0;
    console.log(x,y);
    let matriz = [
        [1,2,3],
        [4,5,6],
        [9,8,7]
    ];
    console.log(matriz[x][y]);
}test();