// @algorithm @lc id=1000253 lang=javascript 
// @title M1oyTv
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    let [m, n] = [s.length, t.length]
    if(m < n) return ''
    let ch = new Array(60).fill(0)
    for(let i = 0; i < n; ++i) {
        --ch[s[i].charCodeAt() - 'A'.charCodeAt()]
        ++ch[t[i].charCodeAt() - 'A'.charCodeAt()]
    }
    function judge(m) {
        for(let i = 0; i < m.length; ++i)
            if(m[i] > 0) return false
        return true
    }
    if(judge(ch)) return s.substring(0, n)
    let [idx, minlen] = [-1, m+1]
    let [l, r] = [0, n]
    while(r < m) {
        --ch[s[r].charCodeAt()-'A'.charCodeAt()]
        while(judge(ch)) {
            let len = r-l+1
            if(len < minlen) {
                minlen = len
                idx = l
            }
            ++ch[s[l++].charCodeAt()-'A'.charCodeAt()]
        }
        ++r
    }
    if(idx == -1) return ''
    else return s.substring(idx, idx+minlen)
};