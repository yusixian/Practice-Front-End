// @algorithm @lc id=498 lang=javascript 
// @title diagonal-traverse
import * as a from 'algm'
// @test([[1,2,3],[4,5,6],[7,8,9]])=[1,2,4,7,5,3,6,8,9]
// @test([[1,2],[3,4]])=[1,2,3,4]
/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function(mat) {
    let ans = []
    if(mat.length === 0) return ans
    let [n, m] = [mat.length, mat[0].length]
    for(let i = 0; i < n+m-1; i++) {
        if(i%2 == 1) {
            let x = i<m? 0 : i-m+1
            let y = i<m? i : m-1
            while(x < n && y >= 0) {
                ans.push(mat[x][y])
                x++
                y--
            }
        } else {
            let x = i<n? i : n-1
            let y = i<n? 0 : i-n+1
            while(x >= 0 && y < m) {
                ans.push(mat[x][y])
                x--
                y++
            }
        }
    }
    return ans
};