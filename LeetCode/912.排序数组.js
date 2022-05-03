// @algorithm @lc id=948 lang=javascript 
// @title sort-an-array
// @test([5,2,3,1])=[1,2,3,5]
// @test([5,1,1,2,0,0])=[0,0,1,1,2,5]
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    let merge = function(arr, s, m, e, tmp) {
        let [i, j, k] = [s, m+1, 0]
        while(i <= m && j <= e)
            tmp[k++] = arr[i] < arr[j] ? arr[i++] : arr[j++]
        while(i <= m) 
            tmp[k++] = arr[i++]
        while(j <= e)
            tmp[k++] = arr[j++]
        for(let i = 0; i < k; i++) 
            arr[s+i] = tmp[i]
    }
    let mergesort = function (arr, s, e, tmp) {
        if (s >= e) return
        let mid = (s+e)>>1
        mergesort(arr, s, mid, tmp)        // 归并左半部分
        mergesort(arr, mid + 1, e, tmp)    // 归并右半部分
        merge(arr, s, mid, e, tmp)         // 合并两部分
    }
    mergesort(nums, 0, nums.length-1, new Array(nums.length))
    return nums
};