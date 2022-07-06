// @algorithm @lc id=1000267 lang=javascript 
// @title FortPu
/**
 * Initialize your data structure here.
 */
var RandomizedSet = function() {
    this.nums = []
    this.map = new Map()
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if(this.map.has(val)) return false
    this.map.set(val, this.nums.length)
    this.nums.push(val)
    return true
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if(!this.map.has(val)) return false
    let idx = this.map.get(val)
    let len = this.nums.length
    this.map.set(this.nums[len-1], idx)
    this.nums[idx] = this.nums[len-1]
    this.nums.pop()
    this.map.delete(val)
    return true
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    const ranIdx = Math.floor(Math.random() * this.nums.length)
    return this.nums[ranIdx]
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */