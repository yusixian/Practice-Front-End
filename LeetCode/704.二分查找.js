// @algorithm @lc id=792 lang=javascript 
// @title binary-search
// @test([-1,0,3,5,9,12],9)=4
// @test([-1,0,3,5,9,12],2)=-1
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let [l, r] = [0, nums.length - 1];
    while (l <= r) {
        let mid = (l+r) >> 1;
        if(nums[mid] == target) return mid;
        else if(nums[mid] < target) l = mid + 1;
        else r = mid - 1;
    }
    return -1;
};