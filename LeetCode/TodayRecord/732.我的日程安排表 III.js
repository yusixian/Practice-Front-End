// @algorithm @lc id=732 lang=javascript 
// @title my-calendar-iii
var MyCalendarThree = function() {
    this.calendar = new Map()
};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {number}
 */
MyCalendarThree.prototype.book = function(start, end) {
    let s = this.calendar.get(start) || 0
    let e = this.calendar.get(end) || 0
    this.calendar.set(start, s + 1)
    this.calendar.set(end, e - 1)
    let arr = Array.from(this.calendar.entries())
    arr.sort((a, b) => a[0] - b[0])
    let [res, cnt] = [0, 0]
    console.log(arr)
    for(let [key, value] of arr) {
        cnt += value
        res = Math.max(res, cnt)
    }
    return res
};
// TODO: 改为线段树做法
/**
 * Your MyCalendarThree object will be instantiated and called as such:
 * var obj = new MyCalendarThree()
 * var param_1 = obj.book(start,end)
 */