const totalIntegers = function(input) {
    if(Array.isArray(input) || typeof input === "object") {
        var arr;
        var total = 0;
        if(typeof input === "object") {
            arr = Object.values(input);
        }else {
            arr = input;
        }

        for(const values of arr) {
            if(Number.isInteger(values)) {
                total++;
            } else if(typeof values === "object" && values !== null) {
                total += totalIntegers(values);
            }
        }

        return total;
    } 
};
  
// Do not edit below this line
module.exports = totalIntegers;
