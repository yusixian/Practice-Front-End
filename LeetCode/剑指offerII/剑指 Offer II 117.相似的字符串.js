// @algorithm @lc id=1000317 lang=javascript 
// @title H6lPxb
// 一眼并查集
/**
 * @param {string[]} strs
 * @return {number}
 */
var numSimilarGroups = function(strs) {
	let [n, m] = [strs.length, strs[0].length]
	let fa = new Array(n).fill(0).map((v, i) => i)
	const find = (i) => fa[i] === i ? i: fa[i] = find(fa[i])
	const judge = (s1, s2) => {
		let sum = 0
		for(let i = 0; i < m; ++i) {
			if(s1[i] != s2[i]) sum++
			if(sum > 2) return false
		}
		return true
	}
	for(let i = 0; i < n; ++i) {
		for(let j = i+1; j < n; ++j) {
			let fi = find(i)
			let fj = find(j)
			if(fi == fj) continue
			if(judge(strs[i], strs[j]))
				fa[fi] = fj
		}
	}
	let res = 0
	for(let i = 0; i < n; ++i) {
		if(fa[i] == i) res++
	}
	return res
};