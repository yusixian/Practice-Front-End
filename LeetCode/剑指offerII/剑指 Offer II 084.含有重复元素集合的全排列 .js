// @algorithm @lc id=1000235 lang=javascript 
// @title 7p8L0Z
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    let res = []
    let vis = new Array(nums.length).fill(false)
    const permu = (path, idx) => {
        if(path.length == nums.length) return res.push([...path])
        for(let i = 0; i < nums.length; ++i) {
            if(vis[i] || (i > 0 && nums[i] == nums[i-1] && !vis[i-1])) continue
            vis[i] = true
            path.push(nums[i])
            permu(path, idx+1)
            path.pop()
            vis[i] = false
        }
    }
    nums.sort((a, b) => a-b)
    permu([], 0)
    return res
};
