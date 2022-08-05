// @algorithm @lc id=1000318 lang=javascript 
// @title 7LpjUW
// 怎么又是并查集
/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function(edges) {
	let n = edges.length
	let fa = new Array(n+1).fill(0).map((v, i) => i)
	const find = (i) => fa[i] === i ? i: fa[i] = find(fa[i])
	for(let edge of edges) {
		const [v1, v2] = edge
		if(find(v1) == find(v2)) return edge
		fa[find(v1)] = find(v2)  
	}
};