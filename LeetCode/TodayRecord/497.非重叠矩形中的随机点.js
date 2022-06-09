// @algorithm @lc id=914 lang=javascript 
// @title random-point-in-non-overlapping-rectangles
/**
 * @param {number[][]} rects
 */
var Solution = function(rects) {
    this.rects = rects
    this.n = rects.length
    this.sum = new Array(rects.length+1)
    this.sum[0] = 0
    for (let i = 1; i <= rects.length; i++) {
        let [ai, bi, xi, yi] = rects[i-1]
        this.sum[i] = this.sum[i-1] + (xi-ai+1) * (yi-bi+1)
    }
};

/**
 * @return {number[]}
 */
Solution.prototype.pick = function() {
    let rval = Math.floor(Math.random() * this.sum[this.n])+1
    let [l, r] = [0, this.n]
    while(l < r) {
        let mid = (l+r) >> 1
        if(this.sum[mid] >= rval) r = mid
        else l = mid+1
    }
    let [ai, bi, xi, yi] = this.rects[r-1]
    let x = Math.floor(Math.random() * (xi-ai+1))+ai
    let y = Math.floor(Math.random() * (yi-bi+1))+bi
    return [x, y]
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(rects)
 * var param_1 = obj.pick()
 */