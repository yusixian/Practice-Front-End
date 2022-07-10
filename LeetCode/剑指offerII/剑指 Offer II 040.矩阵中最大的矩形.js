// @algorithm @lc id=1000284 lang=javascript 
// @title PLYXKQ
/**
 * @param {string[]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
    function maxH(heights, res) {
        let s = [-1]
        for(let i = 0; i < heights.length; ++i) {
            while(s[s.length-1] != -1 && heights[s[s.length-1]] >= heights[i]) {  // 新元素小于栈顶元素
                let h = heights[s.pop()]
                let w = i - s[s.length-1] -1
                res = Math.max(res, h*w)
            }
            s.push(i)
        }
        while(s[s.length-1] != -1) {
            let h = heights[s.pop()]
            let w = heights.length - s[s.length-1] - 1
            res = Math.max(res, h*w)
        }
        return res
    }
    if(matrix.length == 0) return 0
    let [heights, ans] = [new Array(matrix[0].length).fill(0),0]
    for(let i = 0; i < matrix.length; ++i) {
        for(let j = 0; j < matrix[0].length; ++j) {
            if(matrix[i][j] == '0') heights[j] = 0
            else if(i > 0 && matrix[i-1][j] == '0')
                heights[j] = 1
            else heights[j]++
        }
        ans = maxH(heights, ans)
    }
    return ans
};