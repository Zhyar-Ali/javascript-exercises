const factorial = function(number) {
    if(!isNaN(number)){
        if(number === 0) {
            return 1;
        }else {
            return number * factorial(number-1);
        }
    }
};

// Do not edit below this line
module.exports = factorial;