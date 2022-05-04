// @algorithm @lc id=100337 lang=javascript 
// @title dui-lie-de-zui-da-zhi-lcof
var MaxQueue = function() {
    this.maxq = []
    this.q = []
};

/**
 * @return {number}
 */
MaxQueue.prototype.max_value = function() {
    if(this.maxq.length == 0) return -1
    return this.maxq[0] 
};

/** 
 * @param {number} value
 * @return {void}
 */
MaxQueue.prototype.push_back = function(value) {
    this.q.push(value)
    while(this.maxq.length != 0 && this.maxq[this.maxq.length - 1] < value)
        this.maxq.pop()
    this.maxq.push(value)
};

/**
 * @return {number}
 */
MaxQueue.prototype.pop_front = function() {
    if(this.maxq.length == 0 || this.q.length == 0) return -1
    let value = this.q.shift()  
    if(this.maxq.length != 0 && value == this.maxq[0])
        this.maxq.shift()
    return value
};

/**
 * Your MaxQueue object will be instantiated and called as such:
 * var obj = new MaxQueue()
 * var param_1 = obj.max_value()
 * obj.push_back(value)
 * var param_3 = obj.pop_front()
 */