// @algorithm @lc id=100308 lang=javascript 
// @title zi-fu-chuan-de-pai-lie-lcof
/**
 * @param {string} s
 * @return {string[]}
 */
var permutation = function(s) {
    let res = [];
    function permu(rest, str) {
        if(rest.length == 0) {
            res.push(str)
            return
        }
        let m = new Map();
        for(let i = 0; i < rest.length; i++) {
            if(m.has(rest[i]))
                continue
            m.set(rest[i], 1)
            let next = rest.slice(0, i) + rest.slice(i+1)
            permu(next, str+rest[i])
        }
    }
    permu(s, '')
    return res;
};