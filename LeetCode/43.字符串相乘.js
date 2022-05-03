// @algorithm @lc id=43 lang=javascript 
// @title multiply-strings
// @test("2","3")="6"
// @test("123","456")="56088"
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    if(num1 == '0' || num2 == '0') 
        return '0'
    let [n, m] = [num1.length, num2.length]
    let res = new Array(n+m).fill(0)
    for(let i = n-1; i >= 0; i--) {
        for(let j = m-1; j >= 0; j--) {
            let mul = parseInt(num1[i]) * parseInt(num2[j])
            let p1 = i + j, p2 = i + j + 1
            let sum = mul + res[p2]
            res[p1] += Math.floor(sum / 10)
            res[p2] = sum % 10  // 取余
        }
    }
    let idx = res.findIndex(x => x != 0)  // 去除前导0
    return idx == -1? '0' : res.slice(idx).join('')
};