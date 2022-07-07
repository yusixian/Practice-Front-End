// @algorithm @lc id=1000278 lang=javascript 
// @title 569nqc
/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function(timePoints) {
    let zeroNum = 0
    let times = timePoints.map((item) => {
        let [h, m] = item.split(':')
        h = parseInt(h)
        m = parseInt(m)
        if(h == 0 && m == 0) zeroNum++
        return h*60+m
    })
    if(zeroNum > 1) return 0
    times.sort((a, b) => a-b)
    const maxM = 24*60
    let res = maxM+1
    if(times[0] == 0) times.push(maxM)
    for(let i = 0; i+1 < times.length; ++i) {
        res = Math.min(res, times[i+1]-times[i])
    }
    if(times[0] != 0) res = Math.min(maxM-times[times.length-1]+times[0], res)
    return res
};