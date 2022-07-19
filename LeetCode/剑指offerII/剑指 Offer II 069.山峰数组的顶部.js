// @algorithm @lc id=1000333 lang=javascript 
// @title B1IidL
/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
    let [l, r] = [0, arr.length]
    let res = 0
    while(l <= r) {
        let mid = (l + r) >> 1
        if(arr[mid] > arr[mid+1]) {
            res = mid
            r = mid-1
        } else l = mid+1
    }
    return res
};