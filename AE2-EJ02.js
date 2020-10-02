function average(dataArray){
    var suma=0;
    for (let i=0; i<dataArray.length; i++) {
        suma += dataArray[i];        
    }
    suma = suma/dataArray.length;
    return suma;
}
array=[2,5,4,6,5,7,8,4,3,7,5,4,2];
console.log(average(array));