// @algorithm @lc id=1000229 lang=javascript 
// @title Ygoe9J
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let res = []
    const dfs = (tar, path, idx) => {
        if(idx == candidates.length) return
        if(tar == 0) return res.push(path)
        dfs(tar, path, idx+1)
        const newT = tar-candidates[idx]
        if(newT >= 0) 
            dfs(newT, [...path, candidates[idx]], idx)
    }
    dfs(target, [], 0)
    return res
};