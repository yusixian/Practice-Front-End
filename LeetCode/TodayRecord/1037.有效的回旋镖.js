// @algorithm @lc id=1115 lang=javascript 
// @title valid-boomerang
// @test([[1,1],[2,3],[3,2]])=true
// @test([[1,1],[2,2],[3,3]])=false
/**
 * @param {number[][]} points
 * @return {boolean}
 */
var isBoomerang = function(points) {
    let v1 = [points[1][0] - points[0][0], points[1][1] - points[0][1]]
    let v2 = [points[2][0] -  points[0][0], points[2][1] - points[0][1]]
    return v1[0]*v2[1]-v1[1]*v2[0] !== 0
};