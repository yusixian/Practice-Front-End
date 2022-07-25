// @algorithm @lc id=1000241 lang=javascript 
// @title 0on3uN
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    let res = []
    let path = new Array(4)
    const dfs = (id, idx) => {
        if(id == 4 && idx == s.length)
            return res.push(path.join('.'))
        if(id == 4 || idx == s.length) return
        if(s[idx] == '0') {
            path[id] = '0'
            dfs(id + 1, idx + 1)
        }
        let sum = 0
        for(let i = idx; i < s.length; i++) {
            sum = sum * 10 + parseInt(s[i])
            if(sum > 255 || sum <= 0) break
            path[id] = sum+''
            dfs(id + 1, i + 1)              
        }
    }
    dfs(0, 0)
    return res
};