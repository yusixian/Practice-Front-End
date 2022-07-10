// @algorithm @lc id=1000283 lang=javascript 
// @title 0ynMMM
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    let res = 0
    let s = [-1]
    for(let i = 0; i < heights.length; ++i) {
        while(s[s.length-1] != -1 && heights[s[s.length-1]] >= heights[i]) {  // 新元素小于栈顶元素
            let h = heights[s[s.length-1]]
            s.pop()
            let w = i - s[s.length-1] -1
            res = Math.max(res, h*w)
        }
        s.push(i)
    }
    while(s[s.length-1] != -1) {
        let h = heights[s[s.length-1]]
        s.pop()
        let w = heights.length - s[s.length-1] - 1
        res = Math.max(res, h*w)
    }
    return res
};