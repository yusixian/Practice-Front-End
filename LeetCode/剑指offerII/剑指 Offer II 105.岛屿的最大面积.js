// @algorithm @lc id=1000291 lang=javascript 
// @title ZL6zAn
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
	let res = 0
	const d = [[0, 1], [0, -1], [1, 0], [-1, 0]]
	const dfs = (i, j) => {
		if(i < 0 || j < 0 || i >= grid.length || j >= grid[0].length || grid[i][j] === 0) return 0
		grid[i][j] = 0
		let sum = 1
		for(let k = 0; k < 4; ++k) {
			const [dx, dy] = d[k]
			sum += dfs(i + dx, j + dy) 
		}
		return sum
	}
	for(let i = 0; i < grid.length; i++)
		for(let j = 0; j < grid[0].length; j++)
			res = Math.max(res, dfs(i, j))
	return res
};