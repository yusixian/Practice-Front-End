// @algorithm @lc id=436 lang=javascript 
// @title find-right-interval
import * as a from 'algm'
// @test([[1,2]])=[-1]
// @test([[3,4],[2,3],[1,2]])=[-1,0,1]
// @test([[1,4],[2,3],[3,4]])=[-1,2,-1]
/**
 * @param {number[][]} intervals
 * @return {number[]}
 */
var findRightInterval = function(intervals) {
    if(intervals.length <= 1) return [-1]
    for(let i = 0; i < intervals.length; i++) intervals[i].push(i)
    intervals.sort((a, b) => a[0] - b[0])
    // console.log(intervals)
    let n = intervals.length
    let res = new Array(n)
    for(let i = 0; i < n; ++i)
        res[i] = [-1, intervals[i][2]]
    for(let i = 0; i < n; ++i) {
        let [l, r] = intervals[i]
        let j = i+1
        while(j < n) {
            let ll = intervals[j][0]
            if(ll >= r) {
                res[i] = [intervals[j][2], intervals[i][2]]
                break
            }
            ++j
        }
    }
    // console.log(res)
    res.sort((a, b) => a[1] - b[1])
    return res.map(x => x[0])
};