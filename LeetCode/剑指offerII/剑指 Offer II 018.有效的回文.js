// @algorithm @lc id=1000254 lang=javascript 
// @title XltzEq
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let s2 = ''
    function valid(ch) {
        if((ch >= 'a' && ch <= 'z') || (ch >= '0' && ch <= '9')) return ch
        if(ch >= 'A' && ch <= 'Z') return String.fromCharCode(ch.charCodeAt()-'A'.charCodeAt()+'a'.charCodeAt())
        return null
    }
    for(let i = 0; i < s.length; ++i) {
        let ch = valid(s[i])
        if(!ch) continue
        s2 += ch
    }
    let [l, r] = [0, s2.length-1]
    while(l < r) {
        if(s2[l] != s2[r]) return false
        ++l, --r
    }
    return true
};