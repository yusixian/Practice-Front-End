// @algorithm @lc id=1000249 lang=javascript 
// @title O4NDxx
/**
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
    // 二维前缀和 有手就行
    let [m, n] = [matrix.length, matrix[0].length]
    this.sums = new Array(m+1).fill(0).map(() => new Array(n+1).fill(0))
    for(let i = 1; i < m+1; ++i) {
        for(let j = 1; j < n+1; ++j) {
            this.sums[i][j] = this.sums[i][j-1]+this.sums[i-1][j]-this.sums[i-1][j-1]+matrix[i-1][j-1]
        }
    }

};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
    return this.sums[row2+1][col2+1]-this.sums[row2+1][col1]-this.sums[row1][col2+1]+this.sums[row1][col1];
};

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */