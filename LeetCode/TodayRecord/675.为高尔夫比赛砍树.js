// @algorithm @lc id=675 lang=javascript 
// @title cut-off-trees-for-golf-event
import * as a from 'algm'
// @test([[1,2,3],[0,0,4],[7,6,5]])=6
// @test([[1,2,3],[0,0,0],[7,6,5]])=-1
// @test([[2,3,4],[0,0,5],[8,7,6]])=6
/**
 * @param {number[][]} forest
 * @return {number}
 */
var cutOffTree = function(forest) {
    let trees = []
    let [n, m] = [forest.length, forest[0].length] 
    for(let i = 0; i < n; ++i) {
        for(let j = 0; j < m; ++j) {
            if(forest[i][j] > 1) trees.push([i, j])
        }
    }
    trees.sort((a, b) => forest[a[0]][a[1]] - forest[b[0]][b[1]])
    let dx = [0, 0, 1, -1]
    let dy = [1, -1, 0, 0]
    function bfs([x, y], [ex, ey]) {    // 求最短路
        if(x == ex && y == ey) return 0
        let ans = 0 // 距离
        let q = []
        q.push([x, y])
        let vis = new Array(n).fill(0).map(() => new Array(m).fill(false))
        vis[x][y] = true
        while(q.length != 0) {
            ++ans
            let nxt = []
            while(q.length != 0) {
                let [nx, ny] = q.shift()
                for(let j = 0; j < 4; ++j) {
                let [tx, ty] = [nx + dx[j], ny + dy[j]]
                    if(tx < 0 || tx >= n || ty < 0 || ty >= m 
                        || vis[tx][ty] || forest[tx][ty] < 1) 
                        continue
                    if(tx == ex && ty == ey)
                        return ans
                    vis[tx][ty] = true
                    nxt.push([tx, ty])
                }
            }
            q = nxt
        }
        return -1
    }
    let ans = 0
    let preT = [0, 0]
    for(let i = 0; i < trees.length; ++i) {
        let [x, y] = trees[i]
        let dis = bfs(preT, [x, y])
        if(dis == -1) return -1
        ans += dis
        preT = [x, y]
    }
    return ans
};