// @algorithm @lc id=100343 lang=javascript 
// @title yuan-quan-zhong-zui-hou-sheng-xia-de-shu-zi-lcof
/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var lastRemaining = function(n, m) {
   let res = 0
   for(let i = 2; i <= n; i++) {
       res = (res + m) % i
   }
   return res
};