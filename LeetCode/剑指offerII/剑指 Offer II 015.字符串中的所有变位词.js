// @algorithm @lc id=1000251 lang=javascript 
// @title VabMRr
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    // cbaebabacd  abc
    let [m, n] = [s.length, p.length]
    if(m < n) return []
    let ch = new Array(26).fill(0)  // > 0 则需要 < 0 则不需要
    for(let i = 0; i < n; ++i) {
        ++ch[p[i].charCodeAt() - 'a'.charCodeAt()]
        --ch[s[i].charCodeAt() - 'a'.charCodeAt()]
    }
    let diff = 0
    for(let i = 0; i < 26; ++i) {
        if(ch[i] != 0)  ++diff 
    }
    let res = []
    if(diff == 0) res.push(0)   // 0~n-1
    for(let i = n; i < m; ++i) {
        const l = s[i-n].charCodeAt()-'a'.charCodeAt()
        const r = s[i].charCodeAt()-'a'.charCodeAt()
        if(ch[l] == 0) diff++
        ch[l]++
        if(ch[l] == 0) diff--

        if(ch[r] == 0) diff++
        ch[r]--
        if(ch[r] == 0) diff--

        if(diff == 0) res.push(i-n+1)
    }
    return res
};