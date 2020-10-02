values.map = function multipleFactorial(value) {
        var valuesv2 = [];
        if (value == 0) {
            return 1;
        } else {
            multipleFactorial(value - 1) * value;
        }
        valuesv2.push(value);
        return valuesv2;
     };

var values=[2,5,6,7,8,9,4,5,6,7,8,1,7,8,6,0,5,4,9,5,3];

console.log(multipleFactorial(values));