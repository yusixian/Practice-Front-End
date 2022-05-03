// @algorithm @lc id=46 lang=javascript 
// @title permutations
// @test([1,2,3])=[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
// @test([0,1])=[[0,1],[1,0]]
// @test([1])=[[1]]
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var permute = function(nums) {
    let ans = []
    let len = nums.length
    if (len === 0) return ans
    if (len === 1) return [nums]
    let vis = new Array(len).fill(false)
    let permu = function(arr) {
        if (arr.length === len) {
            ans.push(arr.slice())
            return
        }
        for (let i = 0; i < len; i++) {
            if (vis[i]) continue
            vis[i] = true
            arr.push(nums[i])
            permu(arr)
            arr.pop()
            vis[i] = false
        }
    }
    permu([])
    return ans
};