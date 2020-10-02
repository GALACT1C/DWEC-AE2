function findGreaterThan(numero){
    var resultado;
    for (let i=0;i<values.length;i++) {
        if(values[i] > numero){
            resultado=true;
        }else{
            resultado=false;
        }
        return resultado;
    }
}

var values=[2,5,6,7,8,9,4,5,6,7,8,1,7,8,6,0,5,4,9,5,3];

console.log(findGreaterThan(-7));