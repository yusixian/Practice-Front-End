// @algorithm @lc id=100332 lang=javascript 
// @title zui-chang-bu-han-zhong-fu-zi-fu-de-zi-zi-fu-chuan-lcof
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let [l, r] = [0, 0]
    let m = new Map()
    let res = 0
    while (r < s.length) {
        if (m.has(s[r]) && m.get(s[r]) >= l)
            l = Math.max(l, m.get(s[r]) + 1)
        m.set(s[r], r)
        r++
        res = Math.max(res, r - l)
    }
    return res
};