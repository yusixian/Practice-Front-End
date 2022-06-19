// @algorithm @lc id=508 lang=javascript 
// @title most-frequent-subtree-sum
import * as a from 'algm'
import { TreeNode } from 'algm'
// @test([5,2,-3])=[2,-3,4]
// @test([5,2,-5])=[2]
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findFrequentTreeSum = function(root) {
    let cnt = new Map()
    let maxc = 0
    function dfs(rt) {
        if(!rt) return 0
        let sum = rt.val + dfs(rt.left) + dfs(rt.right)
        cnt.set(sum, (cnt.get(sum) || 0) + 1)
        maxc = Math.max(maxc, cnt.get(sum))
        return sum
    }
    dfs(root)
    let res = []
    for(let [k, v] of cnt) {
        if(v === maxc) res.push(k)
    }
    return res
};