// @algorithm @lc id=1000331 lang=javascript 
// @title ms70jA
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaximumXOR = function(nums) {
    const maxBit = 30
    let root = {}   // left 0 right 1
    const add = (num) => {
        let p = root
        for(let i = maxBit; i >= 0; --i) {
            const bit = num & (1 << i)
            if(bit) {
                if(!p.right) p.right = {}
                p = p.right
            } else {
                if(!p.left) p.left = {}
                p = p.left
            }
        }
    }
    
    const check = (num) => {
        let p = root
        let res = 0
        for(let i = maxBit; i >= 0; --i) {
            const bit = num & (1 << i)
            if(bit) {   // 为1 往0走
                if(p.left) {
                    res = res*2+1
                    p = p.left
                } else {
                    res = res*2
                    p = p.right
                }
            } else {    // 为0 往1走
                if(p.right) {
                    res = res*2+1
                    p = p.right
                } else {
                    res = res*2
                    p = p.left
                }
            }
        }
        return res
    }
    let res = 0
    for(let i = 1; i < nums.length; ++i) {
        add(nums[i-1])
        res = Math.max(res, check(nums[i]))
    }
    return res
};
// 3       11
// 10    1010
// 5      101
// 25   11001
// 2       10
// 8     1000