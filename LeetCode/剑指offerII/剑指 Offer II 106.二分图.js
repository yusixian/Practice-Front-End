// @algorithm @lc id=1000294 lang=javascript 
// @title vEAB3K
/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function(graph) {
	let color = new Array(graph.length).fill(0)
	let res = true
	const dfs = (i, c) => {
		color[i] = c;
		const newColor = (c == 1? 2: 1)
		for(let j = 0; j < graph[i].length; ++j) {
			const next = graph[i][j]
			if(color[next] == 0) {
				dfs(next, newColor)
				if(!res) return
			} else if(newColor != color[next]) {
				res = false
				return
			}
		}
	}
	for(let i = 0; i < graph.length; ++i) {
		if(color[i] == 0) {
			dfs(i, 1)
			if(!res) return false
		}
	}
	return res
};