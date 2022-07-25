// @algorithm @lc id=1000240 lang=javascript 
// @title M99OJA
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    let res = []
    let path = []
    const dfs = (idx) => {
        if(idx == s.length) return res.push([...path])
        let str = ''
        for(let i = idx; i < s.length; i++) {
            str += s[i]
            if(str != str.split('').reverse().join('')) continue
            path.push(str)
            dfs(i + 1)
            path.pop()
        }
    }
    dfs(0)
    return res
};