// @algorithm @lc id=1000322 lang=javascript 
// @title fi9suh
var MyCalendar = function() {
    this.calendar = []
};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {boolean}
 */
MyCalendar.prototype.book = function(start, end) {
    for(const arr of this.calendar) {
        const [l, r] = arr
        if(l < end && start < r)
            return false
    }
    this.calendar.push([start, end])
    return true
};

/**
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */