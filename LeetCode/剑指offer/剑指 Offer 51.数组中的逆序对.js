/// @algorithm @lc id=100318 lang=javascript 
// @title shu-zu-zhong-de-ni-xu-dui-lcof
/**
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function(nums) {
    let res = 0
    function merge(nums, s, mid, e) {   // 合并s~mid mid+1~e
        let next = new Array(e-s+1)
        let cnt = 0 // 新数组的下标
        let [i, j] = [s, mid+1]
        while(i <= mid && j <= e) {
            if(nums[i] <= nums[j]) {
                next[cnt++] = nums[i++]
            } else {    // 大于 说明产生了逆序对~
                res += mid-i+1 
                next[cnt++] = nums[j++]
            }
        }
        while(i <= mid)
            next[cnt++] = nums[i++]
        while(j <= e)
            next[cnt++] = nums[j++]
        cnt = 0
        while(s <= e)
            nums[s++] = next[cnt++]
    }
    function mergeSort(nums, s, e) {
        if(s >= e) return
        let mid = (s+e)>>1
        mergeSort(nums, s, mid)
        mergeSort(nums, mid+1, e)
        merge(nums, s, mid, e)
    }
    mergeSort(nums, 0, nums.length-1)
    return res
};