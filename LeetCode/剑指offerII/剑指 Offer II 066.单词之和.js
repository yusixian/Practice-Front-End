// @algorithm @lc id=1000330 lang=javascript 
// @title z1R5dt
/**
 * Initialize your data structure here.
 */
var MapSum = function() {
    this.mapSum = {}
};

/** 
 * @param {string} key 
 * @param {number} val
 * @return {void}
 */
MapSum.prototype.insert = function(key, val) {
    this.mapSum[key] = val
};

/** 
 * @param {string} prefix
 * @return {number}
 */
MapSum.prototype.sum = function(prefix) {
    let root = {}
    let p = root
    for(const ch of prefix) {
        if(!p[ch]) p[ch] = {}
        p = p[ch]
    }
    p.end = true
    let res = 0
    for(const key in this.mapSum) {
        p = root
        for(let ch of key) {
            if(!p[ch]) break
            p = p[ch]
        }
        if(p.end) res += this.mapSum[key]
    }
    return res
};

/**
 * Your MapSum object will be instantiated and called as such:
 * var obj = new MapSum()
 * obj.insert(key,val)
 * var param_2 = obj.sum(prefix)
 */