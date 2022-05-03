// @algorithm @lc id=100302 lang=javascript 
// @title bao-han-minhan-shu-de-zhan-lcof
/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.s = []
    this.mins = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.s.push(x)
    if(this.mins.length == 0 || x <= this.mins[this.mins.length - 1])   // push的元素小于当前元素，将其放入mins
        this.mins.push(x)
};

/**
 * @return {void}
 */
 MinStack.prototype.pop = function() {
    let x = this.s.pop()
    if(x === this.mins[this.mins.length - 1]) // 如果pop的元素是mins的最后一个元素，则mins也要pop
        this.mins.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.s[this.s.length - 1]
};

/**
 * @return {number}
 */
 MinStack.prototype.min = function() {
    return this.mins[this.mins.length - 1]
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.min()
 */
 var obj = new MinStack()
 obj.push(-2)
 obj.push(0)
 obj.push(-3)
 console.log(obj.min())     // -3
 obj.pop()
 console.log(obj.top())     // 0
console.log(obj.min())      // -2