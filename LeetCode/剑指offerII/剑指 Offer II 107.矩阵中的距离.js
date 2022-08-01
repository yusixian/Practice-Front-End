// @algorithm @lc id=1000296 lang=javascript 
// @title 2bCMpM
/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {
	let [m, n] = [mat.length, mat[0].length]
	let dist = new Array(m).fill(0).map(() => new Array(n).fill(0))
	let vis = new Array(m).fill(0).map(() => new Array(n).fill(true))
	let q = []
	mat.map((row, i) => {row.map((item, j) => {item == 0 ? q.push([i, j]): vis[i][j] = false})})
	while(q.length) {
		let [i, j] = q.shift()
		for(let [x, y] of [[i-1, j], [i+1, j], [i, j-1], [i, j+1]]) {
			if(x < 0 || x >= m || y < 0 || y >= n || vis[x][y]) continue
			dist[x][y] = dist[i][j] + 1
			q.push([x, y])
			vis[x][y] = true
		}
	}
	return dist
};