// @algorithm @lc id=100303 lang=javascript 
// @title shu-ju-liu-zhong-de-zhong-wei-shu-lcof
/**
 * initialize your data structure here.
 */
var MedianFinder = function() {
    this.nums = []
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    let len = this.nums.length
    if(len === 0) {
        this.nums.push(num)
        return
    }
    if(num < this.nums[0]) {
        this.nums.unshift(num)
    } else if(num > this.nums[len - 1]) {
        this.nums.push(num)
    } else {
        let i = 0
        while(i < len && num > this.nums[i]) ++i
        this.nums.splice(i, 0, num)         // 更改原数组，从i开始插入num，删除0个元素
    }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    let len = this.nums.length
    if(len === 0) return null
    else if(len % 2 === 0) {    // 偶数
        return (this.nums[len/2-1] + this.nums[len/2]) / 2
    } else return this.nums[Math.floor(len / 2)]
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */