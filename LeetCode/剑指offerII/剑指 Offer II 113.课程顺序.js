// @algorithm @lc id=1000310 lang=javascript 
// @title QA2IGt
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
	// 一眼拓扑
	let m = {}
	let inEdge = new Array(numCourses).fill(0)
	for(let [a, b] of prerequisites) {
		inEdge[a]++
		if(m[b]) m[b].push(a)
		else m[b] = [a]
	}
	let q = []
	for(let i = 0; i < numCourses; i++) {
		if(inEdge[i] == 0)
			q.push(i)
	}
	let res = []
	while(q.length) {
		let cur = q.shift()
		res.push(cur)
		for(let next of (m[cur] || [])) {
				inEdge[next]--
				if(inEdge[next] == 0) q.push(next)
		}
	}
	return res.length == numCourses ? res : [] 
};