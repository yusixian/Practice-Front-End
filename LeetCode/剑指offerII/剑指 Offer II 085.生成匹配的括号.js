// @algorithm @lc id=1000238 lang=javascript 
// @title IDBivT
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const res = []
    const dfs = (left, right, str) => {
        if(left === n && right === n)
            return res.push(str)
        if(left < n)
            dfs(left + 1, right, str + '(')
        if(right < left)
            dfs(left, right + 1, str + ')')
    }
    dfs(0, 0, '')
    return res
};