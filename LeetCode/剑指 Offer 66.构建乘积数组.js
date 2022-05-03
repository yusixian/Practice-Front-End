// @algorithm @lc id=100338 lang=javascript 
// @title gou-jian-cheng-ji-shu-zu-lcof
/**
 * @param {number[]} a
 * @return {number[]}
 */
var constructArr = function(a) {
    let res = new Array(a.length)
    let l = [1]
    for (let i = 1; i < a.length; i++) 
        l.push(l[i-1] * a[i-1])
    let r = 1;
    for (let i = a.length - 1; i >= 0; --i) { // 右侧乘积 & res计算
        if(i != a.length-1)
            r *= a[i+1]
        res[i] = l[i] * r
    }
    return res
};