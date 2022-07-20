// @algorithm @lc id=1000335 lang=javascript 
// @title cuyjEf
/**
 * @param {number[]} w
 */
var Solution = function(w) {
    pre = new Array(w.length).fill(0);
    pre[0] = w[0];
    for (let i = 1; i < w.length; ++i) {
        pre[i] = pre[i - 1] + w[i];
    }
    this.sum = w.reduce((pre, cur) => pre+cur, 0)
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function() {
    let rand = Math.floor(Math.random()*this.sum)+1
    const binarySearch = (x) => {
        let [l, r] = [0, pre.length-1]
        while(l < r) {
            let mid = (l+r) >> 1
            if(pre[mid] < x) l = mid+1
            else r = mid
        }
        return l
    }
    return binarySearch(rand)
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */