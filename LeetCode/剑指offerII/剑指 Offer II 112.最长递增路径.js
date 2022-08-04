// @algorithm @lc id=1000308 lang=javascript 
// @title fpTFWP
/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function(matrix) {
	let [m, n] = [matrix.length, matrix[0].length]
	let f = new Array(m).fill(0).map(() => new Array(n).fill(0))
	const dfs = (i, j) => {
		if(f[i][j]) return f[i][j]
		++f[i][j]
		for(let [x, y] of [[i - 1, j], [i + 1, j], [i, j - 1], [i, j + 1]]) {
			if(x < 0 || x >= m || y < 0 || y >= n || matrix[x][y] >= matrix[i][j]) continue
			f[i][j] = Math.max(f[i][j], dfs(x, y)+1)
		}
		return f[i][j]
	}
	let res = 0
	for(let i = 0; i < m; i++) {
		for(let j = 0; j < n; j++) {
			res = Math.max(res, dfs(i, j))
		}
	}
	return res
};