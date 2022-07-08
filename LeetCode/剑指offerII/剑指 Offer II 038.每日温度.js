// @algorithm @lc id=1000282 lang=javascript 
// @title iIQa4I
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    let n = temperatures.length
    let ans = new Array(n).fill(0)
    let s = []
    for(let i = 0; i < n; ++i) {
        let t = temperatures[i]
        while(s.length != 0 && t > temperatures[s[s.length-1]]) {
            let prev = s.pop()
            ans[prev] = i-prev
        }
        s.push(i)
    }
    return ans
};