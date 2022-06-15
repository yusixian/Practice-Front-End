// @algorithm @lc id=719 lang=javascript 
// @title find-k-th-smallest-pair-distance
import * as a from 'algm'
// @test([1,3,1],1)=0
// @test([1,1,1],2)=0
// @test([1,6,1],3)=5
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestDistancePair = function(nums, k) {
    nums.sort((a, b) => a - b)
    function binarySearch(left, right, target) {
        while (left < right) {
            const mid = (left + right)>>1
            if(nums[mid] < target) {
                left = mid + 1
            } else right = mid;
        }
        return left
    }
    let n = nums.length
    let [l, r] = [0, nums[n-1]-nums[0]]
    while(l <= r) {
        const mid = (l + r)>>1
        let cnt = 0
        for(let j = 0; j < n; j++) {
            const i = binarySearch(0, j, nums[j] - mid)
            cnt += j-i
        }
        if (cnt >= k) {
            r = mid - 1
        } else {
            l = mid + 1
        }
    }
    return l
};