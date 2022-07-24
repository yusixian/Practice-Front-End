// @algorithm @lc id=1000234 lang=javascript 
// @title VvJkup
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var permute = function(nums) {
    let res = []
    let vis = new Array(nums.length).fill(false)
    const permu = (path) => {
        if(path.length == nums.length) return res.push([...path])
        for(let i = 0; i < nums.length; ++i) {
            if(vis[i]) continue
            vis[i] = true
            path.push(nums[i])
            permu(path)
            path.pop()
            vis[i] = false
        }
    }
    permu([])
    return res
};