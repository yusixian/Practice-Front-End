// @algorithm @lc id=1000292 lang=javascript 
// @title qIsx9U
/**
 * Initialize your data structure here.
 * @param {number} size
 */
var MovingAverage = function(size) {
    this.win = []
    this.sum = 0;
    this.size = size;
};

/** 
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function(val) {
    let [win, size] = [this.win, this.size]
    if(win.length < size) {
        win.push(val)
        this.sum += val
    } else {
        let pre = win.shift()
        win.push(val)
        this.sum += (val-pre)
    }
    return this.sum / win.length
};

/**
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */