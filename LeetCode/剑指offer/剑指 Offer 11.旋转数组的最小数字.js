// @algorithm @lc id=100278 lang=javascript 
// @title xuan-zhuan-shu-zu-de-zui-xiao-shu-zi-lcof
/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function(numbers) {
    if(numbers.length == 0) return 0;
    let [l, r] = [0, numbers.length - 1];
    while(l < r) {
        let mid = (l + r) >> 1;
        if(numbers[mid] > numbers[r]) l = mid + 1;
        else if(numbers[mid] < numbers[r]) r = mid;
        else --r;
    }
    return numbers[l];
};