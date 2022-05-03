// @algorithm @lc id=100336 lang=javascript 
// @title hua-dong-chuang-kou-de-zui-da-zhi-lcof
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    if(nums.length === 0) return [];
    let q = []
    let res = []
    for(let i = 0; i < k; ++i) {
        while(q.length && nums[i] >= nums[q[q.length - 1]] )
            q.pop()
        q.push(i)
    }
    res.push(nums[q[0]])
    for(let l = 1; l+k-1 < nums.length; ++l) {
        let r = l+k-1
        while(q.length && nums[q[q.length - 1]] < nums[r]) 
            q.pop()
        q.push(r)
        while(q.length && q[0] < l)
            q.shift()
        res.push(nums[q[0]])
    }
    return res
};