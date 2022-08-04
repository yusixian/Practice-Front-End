// @algorithm @lc id=1000346 lang=javascript 
// @title bLyHh0
// 一眼并查集...
/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
	let n = isConnected.length
	let fa = new Array(n).fill(0).map((v, i) => i)
	const find = (i) => {
		return fa[i] == i? i: fa[i] = find(fa[i])
	}
	const merge = (i, j) => {
		fa[find(i)] = find(j)
	}
	for(let i = 0; i < n; ++i) {
		for(let j = 0; j < n; ++j) {
			if(isConnected[i][j]) {
				merge(i, j)
			}
		}
	}
	let res = 0
	for(let i = 0; i < fa.length; ++i) {
		if(fa[i] == i) res++
	}
	return res
};
// 1 1 0
// 1 1 0
// 0 0 1