// @algorithm @lc id=1000305 lang=javascript 
// @title vlzXQL
/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function(equations, values, queries) {
	let m = new Map()
	let idx = 0
	for(let [a, b] of equations) {
		if(!m.has(a)) m.set(a, idx++)
		if(!m.has(b)) m.set(b, idx++)
	}
	let edge = new Array(idx).fill(0).map(() => new Array(idx).fill(-1))
	for(let i = 0; i < equations.length; i++) {
		let [a, b] = equations[i]
		let [x, y] = [m.get(a), m.get(b)]
		edge[x][y] = values[i]
		edge[y][x] = 1 / values[i]
	}
	let res = []
	const Floyd = () => {
		for(let k = 0; k < idx; ++k) {
			for(let i = 0; i < idx; ++i) {
				for(let j = 0; j < idx; ++j) {
					if(edge[i][k] < 0 || edge[k][j] < 0)
						continue
					edge[i][j] = edge[i][k] * edge[k][j]
				}
			}
		}
	}
	Floyd()
	for(let [a, b] of queries) {
		let ans = -1
		if(m.has(a) && m.has(b)) {
			let [x, y] = [m.get(a), m.get(b)]
			if(edge[x][y] > 0) ans = edge[x][y] 
		}
		res.push(ans)
	}	
	return res
};