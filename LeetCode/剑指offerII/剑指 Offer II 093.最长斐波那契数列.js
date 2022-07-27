// @algorithm @lc id=1000271 lang=javascript 
// @title Q91FMA
/**
 * @param {number[]} arr
 * @return {number}
 */
var lenLongestFibSubseq = function(arr) {
    let m = new Map()
    let n = arr.length
    let dp = new Array(arr.length).fill(0).map(() => new Array(arr.length).fill(2))
    let res = 0
    for(let i = 0; i < n; ++i) {
        for(let j = i+1; j < n; ++j) {
            let tar = arr[j] - arr[i]
            if(m.has(tar)) {
                dp[i][j] = Math.max(dp[i][j],dp[m.get(tar)][i] + 1)
                res = Math.max(res, dp[i][j])
            }
        }
        m.set(arr[i], i)
    }
    return res > 2 ? res: 0
};