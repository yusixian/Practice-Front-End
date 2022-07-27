// @algorithm @lc id=1000269 lang=javascript 
// @title cyJERH
/**
 * @param {string} s
 * @return {number}
 */
var minFlipsMonoIncr = function(s) {
    let [pre, res] = [0, 0]
    for(let i = 0; i < s.length; ++i) {
        if(s[i] == '1') {
            pre++
            continue
        }
        res = Math.min(res+1, pre)  // 翻转当前 or 翻转前面所有1
    }
    return res
};