/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let result = 0;
    const value = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    
    for(let i = 0; i < s.length; i++){
        let num1 = value[s[i]];
        let num2 = value[s[i+1]];
        
        if(num1 < num2){
            result += num2 - num1;
            i++;
        } else {
            result += num1;
        }
    }
    return result;
};