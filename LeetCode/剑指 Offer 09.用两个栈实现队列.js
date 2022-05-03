// @algorithm @lc id=100273 lang=javascript 
// @title yong-liang-ge-zhan-shi-xian-dui-lie-lcof
var CQueue = function() {
    this.s1 = []        // 入队
    this.s2 = []        // 出队
};

/** 
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function(value) {
    this.s1.push(value)
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function() {
    if(this.s2.length == 0) {
        while(this.s1.length > 0)
            this.s2.push(this.s1.pop())
        return this.s2.length == 0 ? -1 : this.s2.pop()
    } else return this.s2.pop()
};
/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */
// 测试
 var obj = new CQueue()
 obj.appendTail(3)
 obj.appendTail(4)
 obj.appendTail(7)
 console.log(obj.deleteHead())
 console.log(obj.deleteHead())
 console.log(obj.deleteHead())