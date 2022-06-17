// @algorithm @lc id=1168 lang=javascript 
// @title duplicate-zeros
// @test([1,0,2,3,0,4,5,0])=[1,0,0,2,3,0,0,4]
// @test([1,2,3])=[1,2,3]
/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
    arr.join('').replace(/0/g, '00').substring(0, arr.length).split('').forEach((v, i) => {arr[i] = v.charCodeAt() - '0'.charCodeAt()})
};