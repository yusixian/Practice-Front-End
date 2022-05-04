// @algorithm @lc id=100324 lang=javascript 
// @title he-wei-sde-lian-xu-zheng-shu-xu-lie-lcof
/**
 * @param {number} target
 * @return {number[][]}
 */
var findContinuousSequence = function(target) {
    let res = []
    let [l, r] = [1, 2]
    while(l < r) {
        let sum = (l+r) * (r-l+1) / 2
        if(sum === target) { 
            let temp = []
            for(let i = l; i <= r; i++)
                temp.push(i)
            res.push(temp)
            ++l
        } else if(sum < target) ++r
        else ++l
    }
    return res
};