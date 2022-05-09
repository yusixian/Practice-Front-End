// @algorithm @lc id=979 lang=javascript 
// @title di-string-match
import * as a from 'algm'
// @test("IDID")=[0,4,1,3,2]
// @test("III")=[0,1,2,3]
// @test("DDI")=[3,2,0,1]
/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function(s) {
    let n = s.length
    let res = []
    let [i, j] = [0, n]
    for(let k = 0; k < n; k++) {
        if (s[k] == 'I') {
            res.push(i)
            i++
        } else {
            res.push(j)
            j--
        }
    }
    res.push(i)
    return res
};