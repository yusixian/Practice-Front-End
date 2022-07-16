// @algorithm @lc id=1000323 lang=javascript 
// @title jBjn9C
// 注：此题还是用c++做比较香，可以用优先队列。
/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
    this.k = k
    this.nums = nums
    this.nums.sort((a, b) => b-a)
};
/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    const nums = this.nums
    const k = this.k
    if(nums.length < k) {
        nums.push(val)
        if(nums.length != k) return null
    }
    for(let i = 0; i < k; ++i) {
        if(val > nums[i]) {
            for(let j = k-1; j > i; --j) 
                nums[j] = nums[j-1]
            nums[i] = val
            return this.nums[k-1]
        } 
    }
    return this.nums[k-1]
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
// 8 5 4 2
// 8 5 4
// 8 5 5
// 10 8 5
// 10 9 8
// 10 9 8
// 2 3 4 5 5 8 9 10