// @algorithm @lc id=1000314 lang=javascript 
// @title ur2n8P
// 又双是拓扑 注意 唯一 可能的超序列
/**
 * @param {number[]} nums
 * @param {number[][]} sequences
 * @return {boolean}
 */
var sequenceReconstruction = function(nums, sequences) {
	let n = nums.length
	let edges = new Array(n+1).fill(0).map(() => new Set())
	let inDegree = new Array(n+1).fill(0)
	for(let seq of sequences) {
		seq.reduce((prev, curv) => {
			edges[prev].add(curv)
			inDegree[curv]++
			return curv
		})
	}
	let q = []
	for(let i = 1; i <= n; ++i) 
		if(inDegree[i] === 0) q.push(i)
	while(q.length) {
		if(q.length > 1) return false
		const cur = q.shift()
		for(let next of edges[cur]) {
			inDegree[next]--
			if(inDegree[next] === 0) q.push(next)
		}
	}
	return true
}