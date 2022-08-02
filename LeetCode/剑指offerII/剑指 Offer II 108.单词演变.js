// @algorithm @lc id=1000300 lang=javascript 
// @title om3reC
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
		let words = new Map()
		let edge = []
		let step = 0
		const addWord = (word) => {
			if(!words.has(word)) {
				words.set(word, step++)
				edge.push([])
			}
		}
		const addEdge = (word) => {
			addWord(word)
			let idx = words.get(word)
			for(let i = 0; i < word.length; i++) {
				const newWord = word.substring(0, i) + '*' + word.substring(i + 1)
				addWord(newWord)
				let idx2 = words.get(newWord)
				edge[idx].push(idx2)
				edge[idx2].push(idx)
			}
		}

		for(let word of wordList)
			addEdge(word)
		addEdge(beginWord)
		if(!words.has(endWord)) return 0

		let dist = new Array(step).fill(Number.MAX_VALUE)
		dist[words.get(beginWord)] = 0

		let begin = words.get(beginWord)
		let end = words.get(endWord)
		dist[begin] = 0
		let q = [begin]
		while(q.length) {
			let front = q.shift()
			if(front == end)
				return Math.floor(dist[end]/2) +1
			for(let i = 0; i < edge[front].length; i++) {
				const now = edge[front][i]
				if(dist[now] == Number.MAX_VALUE) {
					dist[now] = dist[front] + 1
					q.push(now)
				}
			}
		}
		return 0
};