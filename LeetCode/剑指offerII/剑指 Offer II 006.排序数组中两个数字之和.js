// @algorithm @lc id=1000237 lang=javascript 
// @title kLl5u1
import * as a from 'algm'
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    function binary(tar, l, r) {
        while(l <= r) {
            let mid = (l+r) >> 1
            if(numbers[mid] == tar) return mid
            else if(numbers[mid] > tar) r = mid-1
            else l = mid+1
        }
        return -1
    }
    for(let i = 0; i < numbers.length; ++i) {
        let idx = binary(target-numbers[i], i+1, numbers.length-1)
        if(idx != -1) return [i, idx] 
    }
};