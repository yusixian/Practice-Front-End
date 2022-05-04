// @algorithm @lc id=100293 lang=javascript 
// @title shun-shi-zhen-da-yin-ju-zhen-lcof
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let [n, cnt] = [matrix.length, 1]
    if(n == 0) return []
    let [m, res] = [matrix[0].length, []]
    let sum = n*m
    let [r, c] = [0, 0]
    res.push(matrix[0][0])
    while(cnt < sum) {
        while(c+1 < m && matrix[r][c+1] != null) {
            res.push(matrix[r][c+1])
            ++cnt
            matrix[r][c++] = null
        }
        while(r+1 < n && matrix[r+1][c] != null) {
            res.push(matrix[r+1][c])
            ++cnt
            matrix[r++][c] = null
        }
        while(c-1 >= 0 && matrix[r][c-1] != null) {
            res.push(matrix[r][c-1])
            ++cnt
            matrix[r][c--] = null
        }
        while(r-1 >= 0 && matrix[r-1][c] != null) {
            res.push(matrix[r-1][c])
            ++cnt
            matrix[r--][c] = null
        }
    }
    return res
};