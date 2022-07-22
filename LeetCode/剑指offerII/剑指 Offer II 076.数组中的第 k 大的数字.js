// @algorithm @lc id=1000340 lang=javascript 
// @title xx4gT2
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    const quickSort = (nums, k, s, e) => {
        let idx = Math.floor(Math.random()*(e-s+1))+s
        let m = nums[idx]
        let [l, r] = [s, e]
        nums[idx] = nums[l]
        while(l != r) {
            while(l < r && nums[r] <= m) --r
            nums[l] = nums[r]
            while(l < r && nums[l] >= m) ++l
            nums[r] = nums[l]
        }
        nums[l] = m
        if(l == k-1) return nums[l]
        else if(l > k-1) return quickSort(nums, k, s, l-1)
        else return quickSort(nums, k, l+1, e)
    }
    return quickSort(nums, k, 0, nums.length-1)
};