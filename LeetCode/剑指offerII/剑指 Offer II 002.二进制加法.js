// @algorithm @lc id=1000231 lang=javascript 
// @title JFETK5
import * as a from 'algm'
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    a = a.split('').reverse().join('')
    b = b.split('').reverse().join('')
    let [len1, len2] = [a.length, b.length]
    let [res, flag] = ['', 0]
    let len = Math.max(len1, len2)
    for(let i = 0; i < len; ++i) {
        let x = (i < len1)?a[i].charCodeAt()-'0'.charCodeAt(): 0
        let y = (i < len2)?b[i].charCodeAt()-'0'.charCodeAt(): 0
        let sum = x+y+flag
        if(sum >= 2) {
            flag = 1
            sum -= 2
        } else flag = 0
        res += sum
    }
    if(flag) res += '1'
    return res.split('').reverse().join('')
};