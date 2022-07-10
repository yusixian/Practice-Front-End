// @algorithm @lc id=1000293 lang=javascript 
// @title H8086Q
var RecentCounter = function() {
    this.reqs = []
    this.pre = 0
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    this.reqs.push(t)
    const tar = t-3000
    // 1 100
    while(this.pre < this.reqs.length && this.reqs[this.pre] < tar) {
        this.pre++
    }
    return this.reqs.length - this.pre
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */