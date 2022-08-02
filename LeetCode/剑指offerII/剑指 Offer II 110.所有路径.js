// @algorithm @lc id=1000303 lang=javascript 
// @title bP4bmD
/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
	let res = []
	let st = [0] 
	const dfs = (idx) => {
		if(idx == graph.length-1) return res.push(st.slice())
		for(const next of graph[idx]) {
			st.push(next)
			dfs(next)
			st.pop()
		}
	}
	dfs(0)
	return res
};