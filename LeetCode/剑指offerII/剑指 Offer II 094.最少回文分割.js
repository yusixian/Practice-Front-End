// @algorithm @lc id=1000272 lang=javascript 
// @title omKAoA
/**
 * @param {string} s
 * @return {number}
 */
var minCut = function(s) {
    let dp = new Array(s.length).fill(0).map(() => new Array(s.length).fill(false));
    // dp[i][j] i~j是否为回文串
    for(let i = 0; i < s.length; i++) {
        dp[i][i] = true;
        if(i && s[i] == s[i-1]) dp[i-1][i] = true;
    }
    for(let i = 2; i <= s.length; i++) {
        for(let j = 0; j+i < s.length; j++) {
            if(s[j] == s[j+i] && dp[j+1][j+i-1]) dp[j][j+i] = true;
        }
    }
    let res = new Array(s.length).fill(Number.MAX_VALUE);
    for(let i = 0; i < s.length; i++) {
        if(dp[0][i]) {
            res[i] = 0;
            continue
        }
        for(let j = 0; j < i; j++) {
            if(dp[j+1][i]) res[i] = Math.min(res[i], res[j]+1);
        }
    }
    return res[s.length-1];
};