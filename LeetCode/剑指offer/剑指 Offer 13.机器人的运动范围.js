// @algorithm @lc id=100281 lang=javascript 
// @title ji-qi-ren-de-yun-dong-fan-wei-lcof
/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var movingCount = function(m, n, k) {
    function count(x) {
        if(x == 0) return 0
        let sum = 0
        while(x) {
            sum += x%10
            x = Math.floor(x/10)
        }
        return sum
    }
    
    let dx = [1, 0]
    let dy = [0, 1]  // 下 右
    let canVis = new Array(m).fill(0).map(() => new Array(n).fill(false))
    let vis = new Array(m).fill(0).map(() => new Array(n).fill(false))
    for(let i = 0; i < m; ++i)
        for(let j = 0; j < n; ++j)
            canVis[i][j] = (count(i) + count(j)) <= k

    function judge(i, j) {
        if(i < 0 || i >= m || j < 0 || j >= n || !canVis[i][j] || vis[i][j])
            return false
        return true
    }
    let q = []
    let ans = 0
    vis[0][0] = true
    q.push([0, 0])
    while(q.length) {
        let [x, y] = q.shift()
        ++ans
        for(let i = 0; i < 2; ++i) {
            let nx = x + dx[i]
            let ny = y + dy[i]
            if(judge(nx, ny)) {
                vis[nx][ny] = true
                q.push([nx, ny])
            }
        }
    }
    return ans
};