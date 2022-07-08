// @algorithm @lc id=1000279 lang=javascript 
// @title 8Zf90G
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    function calcute(num1, num2, op) {
        if(op == '+') return num1+num2
        else if(op == '-') return num1-num2
        else if(op == '*') return num1*num2
        else if(op == '/') return (num1/num2) >= 0? Math.floor(num1/num2): Math.ceil(num1/num2)
    }
    let s = []
    for(let i = 0; i < tokens.length; ++i) {
        if(['*', '/', '-', '+'].indexOf(tokens[i]) != -1){
            let num2 = s.pop()
            let num1 = s.pop()
            s.push(calcute(num1, num2, tokens[i]))
        } else s.push(parseInt(tokens[i]))
    }
    return s[0]
};