// @algorithm @lc id=100325 lang=javascript 
// @title ba-shu-zi-fan-yi-cheng-zi-fu-chuan-lcof
/**
 * @param {number} num
 * @return {number}
 */
var translateNum = function(num) {
    if(num < 10) return 1
    let [p, q, res] = [0, 1, 1]
    num = num.toString()
    for(let i = 1; i < num.length; ++i) {
        p = q
        q = res
        if(i > 0 && num[i-1]+num[i] >= "10" && num[i-1]+num[i] <= "25")
            res += p
    }
    return res
}