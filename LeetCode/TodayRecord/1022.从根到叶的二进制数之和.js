// @algorithm @lc id=1079 lang=javascript 
// @title sum-of-root-to-leaf-binary-numbers
import * as a from 'algm'
import { TreeNode } from 'algm'
// @test([1,0,1,0,1,0,1])=22
// @test([0])=0
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
var sumRootToLeaf = function(root) {
    let sum = 0
    function dfs(rt, path) {
        if(!rt) return
        path += rt.val
        if(!rt.left && !rt.right) {
            sum += parseInt(path, 2)
            return
        }
        dfs(rt.left, path)
        dfs(rt.right, path)
    }
    dfs(root, '')
    return sum
};