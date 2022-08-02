// @algorithm @lc id=1000302 lang=javascript 
// @title zlDJc7
/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function(deadends, target) {
	if(target === '0000') return 0
	const dead = new Set(deadends)
	if(dead.has('0000')) return -1
	let step = 0
	const q = []
	q.push('0000')
	dead.add('0000')
	const get = (status) => {
		const res = []
		const nums = Array.from(status)
		for(let i = 0; i < nums.length; i++) {
			const num = nums[i]
			nums[i] = num === '9' ? '0' : String(Number(num) + 1)
			res.push(nums.join(''))
			nums[i] = num === '0' ? '9' : String(Number(num) - 1)
			res.push(nums.join(''))
			nums[i] = num
		}
		return res
	}
	const vis = new Set()
	vis.add('0000')
	while(q.length){
		++step
		const size = q.length
		for(let i = 0; i < size; ++i){
			const status = q.shift()
			for(const statu of get(status)) {
				if(dead.has(statu) || vis.has(statu)) continue
				if(statu === target) return step
				q.push(statu)
				vis.add(statu)
			}
		}
	}
	return -1
};