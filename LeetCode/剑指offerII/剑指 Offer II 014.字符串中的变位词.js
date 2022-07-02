// @algorithm @lc id=1000250 lang=javascript 
// @title MPnaiL
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    let m1 = new Array(26).fill(0)
    if(s1.length > s2.length) return false
    for(let i = 0; i < s1.length; ++i) {
        --m1[s1[i].charCodeAt() - 'a'.charCodeAt()]
        ++m1[s2[i].charCodeAt() - 'a'.charCodeAt()]
    }
    let diff = 0
    for(let i = 0; i < 26; ++i) {
        if(m1[i] != 0) ++diff
    }
    if(diff == 0) return true
    for(let i = s1.length; i < s2.length; ++i) {
        const x = s2[i].charCodeAt() - 'a'.charCodeAt()
        const y = s2[i - s1.length].charCodeAt() - 'a'.charCodeAt();
        if (x == y) continue;
        if (m1[x] == 0) ++diff;
        ++m1[x];
        if (m1[x] == 0) --diff;
        if (m1[y] == 0) ++diff;
        --m1[y];
        if (m1[y] == 0) --diff;
        if (diff == 0) return true;
    }
    return false
};
