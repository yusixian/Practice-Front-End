// @algorithm @lc id=513 lang=javascript 
// @title find-bottom-left-tree-value
// import * as a from 'algm'
import { TreeNode } from 'algm'
// @test([2,1,3])=1
// @test([1,2,3,4,null,5,6,null,null,7])=7
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
 * @return {number}
 */
var findBottomLeftValue = function(root) {
    let [maxh, res] = [0, 0]
    function dfs(rt, nowh) {
        if(!rt) return
        nowh++
        dfs(rt.left, nowh)
        dfs(rt.right, nowh)
        if(nowh > maxh) {
            maxh = nowh
            res = rt.val
        }
    }
    dfs(root, 0)
    return res
};