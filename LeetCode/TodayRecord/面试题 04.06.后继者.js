// @algorithm @lc id=100178 lang=javascript 
// @title successor-lcci
import * as a from 'algm'
import { TreeNode } from 'algm'
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @return {TreeNode}
 */
var inorderSuccessor = function(root, p) {
    let res = []
    function inorder(rt) {
        if(!rt) return 
        inorder(rt.left)
        res.push(rt)
        inorder(rt.right)
    }
    inorder(root)
    let idx = res.findIndex(v => v.val === p.val)
    return idx === res.length-1 ? null : res[idx+1]
};