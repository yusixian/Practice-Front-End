// @algorithm @lc id=1000312 lang=javascript 
// @title Jf1JuT
import * as a from 'algm'
/**
 * @param {string[]} words
 * @return {string}
 */
var alienOrder = function(words) {
    let nodes = new Map()
    let valid = true
    let visited = new Map()     // 1 2 未访问 访问中 已访问
    for (let i = 0; i < words.length; i++) {    // init
        const w1 = words[i]
        for(let j = 0; j < w1.length; ++j) {
            const c = w1[j]
            if (!nodes.has(c))
                nodes.set(c, [])
        }
    }
    function addEdge(s, e) {
        let [len1, len2] = [s.length, e.length]
        let len = Math.min(len1, len2)
        let idx = 0
        while(idx < len) {
            if(s[idx] !== e[idx]) {
                nodes.get(s[idx]).push(e[idx])
                break
            }
            idx++
        }
        if (idx === len && len1 > len2) {
            valid = false
        }
    }
    for (let i = 1; i < words.length && valid; i++) {
        addEdge(words[i-1], words[i])
    }

    let order = new Array(nodes.size).fill(0)
    let idx = nodes.size - 1
    function dfs(u) {
        visited.set(u, 1)
        const adj = nodes.get(u)
        for (let i = 0; i < adj.length; i++) {
            if(!visited.has(adj[i])) {
                dfs(adj[i])
                if(!valid) return
            } else if(visited.get(adj[i]) === 1) {
                valid = false
                return
            }
        }
        visited.set(u, 2)
        order[idx--] = u
    }
    const letters = nodes.keys()
    for (const u of letters) {
        if(!visited.has(u)) {
            dfs(u)
        }
    }
    if(!valid) return ''
    return order.join('');
};
// 拓扑排序