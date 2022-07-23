// @algorithm @lc id=1000344 lang=javascript 
// @title uUsW3B
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    if(k <= 0 || n <= 0) return []
    let res = []
    let path = []
    const dfs = (start, path) => {
        if(k == path.length) return res.push([...path])
        for(let i = start; i <= n; ++i) {
            path.push(i)
            dfs(i+1, path)
            path.pop()
        }
    }
    dfs(1, path)
    return res
};