// @algorithm @lc id=830 lang=javascript 
// @title largest-triangle-area
import * as a from 'algm'
// @test([[0,0],[0,1],[1,0],[0,2],[2,0]])=2.00000
// @test([[1,0],[0,0],[0,1]])=0.50000
/**
 * @param {number[][]} points
 * @return {number}
 */
var largestTriangleArea = function(points) {
    let maxArea = 0
    for(let i = 0; i < points.length; i++) {
        for(let j = i+1; j < points.length; j++) {
            for(let k = j+1; k < points.length; k++) {
                let x1 = points[i][0]
                let [x2, x3] = [points[j][0]-x1, points[k][0]-x1]
                let y1 = points[i][1]
                let [y2, y3] = [points[j][1]-y1, points[k][1]-y1]
                let area = Math.abs(x2*y3-x3*y2)/2
                if(area > maxArea) {
                    maxArea = area
                }
            }
        }       
    }
    return maxArea
};