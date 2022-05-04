// @algorithm @lc id=100276 lang=javascript 
// @title er-wei-shu-zu-zhong-de-cha-zhao-lcof
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function(matrix, target) {
    if(matrix.length == 0) return false;
    let [n, m] = [matrix.length, matrix[0].length];
    let [r, c] = [0, m - 1];
    while(r < n && c >= 0) {
        if(matrix[r][c] == target) return true;
        else if(matrix[r][c] > target) --c;
        else ++r;
    }
    return false;
};
// var findNumberIn2DArray = function(matrix, target) {
//     if(matrix.length == 0) return false;
//     let [n, m] = [matrix.length, matrix[0].length];
//     for(let k = 0; k < n; ++k) {
//         if(matrix[k][0] > target) 
//             break;
//         if(matrix[k][m - 1] < target) 
//             continue;
//         let [l, r] = [0, m-1]
//         while(l <= r) {
//             let mid = (l+r)>>1;
//             if(matrix[k][mid] === target) 
//                 return true;
//             if(matrix[k][mid] > target) r = mid - 1;
//             else l = mid + 1;
//         }
//     }
//     return false;
// };