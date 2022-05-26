// @algorithm @lc id=699 lang=javascript 
// @title falling-squares
import * as a from 'algm'
// @test([[2,1],[2,9],[1,8]])=[1,10,18]
// @test([[1,2],[2,3],[6,1]])=[2,5,5]
// @test([[100,100],[200,100]])=[100,100]
/**
 * @param {number[][]} positions
 * @return {number[]}
 */
var fallingSquares = function(positions) {
    let n = positions.length
    let heights = [positions[0][1]]
    for(let i = 1; i < n; ++i) {
        const [x1, w1] = positions[i]
        let height = w1 // 当前方块的高度
        for(let j = 0; j < i; ++j) {
            const [x2, w2] = positions[j]
            if(x1+w1-1 >= x2 && x2+w2-1 >= x1) {    // 当前方块会影响该处最大高度
                height = Math.max(height, heights[j]+w1);   // 更新最大高度
            }
        }
        heights.push(height)
    }
    for(let i = 1; i < n; ++i)
        heights[i] = Math.max(heights[i-1], heights[i])
    return heights
};