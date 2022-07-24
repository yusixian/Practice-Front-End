// @algorithm @lc id=1000232 lang=javascript 
// @title 4sjJUc
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    let res = []
    let path = []
    const dfs = (start, sum) => {
        if(sum == target) return res.push([...path])
        if(sum > target) return
        for(let i = start; i <= candidates.length; ++i) {
            if(i-1 >= start && candidates[i-1] == candidates[i]) continue
            path.push(candidates[i])
            dfs(i+1, sum+candidates[i])
            path.pop()
        }
    }
    candidates.sort((a, b) => a-b)
    dfs(0, 0)
    return res
};