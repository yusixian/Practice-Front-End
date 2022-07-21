// @algorithm @lc id=1000338 lang=javascript 
// @title SsGoHC
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a, b) => a[0]-b[0])
    let res = []
    for(let arr of intervals) {
        const [l, r] = arr
        if(!res.length) {
            res.push([l, r])
            continue
        }
        const [ll, rr] = res[res.length-1]
        if(l > rr) res.push(arr)
        else res[res.length-1] = [ll, Math.max(r, rr)]
    }
    return res
};