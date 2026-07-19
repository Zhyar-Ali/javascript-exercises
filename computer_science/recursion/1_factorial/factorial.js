const factorial = function(number) {
    if(Number.isInteger(number) && number >= 0){
        if(number === 0) {
            return 1;
        }else {
            return number * factorial(number-1);
        }
    }
};

// Do not edit below this line
module.exports = factorial;