// @algorithm @lc id=100301 lang=javascript 
// @title zui-xiao-de-kge-shu-lcof
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function(arr, k) {
    function quickSort(arr, s, e) {
        if(s >= e) return
        let [l, r] = [s, e]
        let p = arr[s]
        while(l < r) {
            while(l < r && arr[r] >= p) r--
            while(l < r && arr[l] <= p) l++
            [arr[l], arr[r]] = [arr[r], arr[l]]
        }
        [arr[s], arr[l]] = [arr[l], arr[s]]
        if(k < l) quickSort(arr, s, l - 1)
        else if(k > l) quickSort(arr, l + 1, e)
        else return
    }
    quickSort(arr, 0, arr.length - 1)
    return arr.slice(0, k)
};