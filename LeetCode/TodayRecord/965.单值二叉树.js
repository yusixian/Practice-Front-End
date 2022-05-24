// @algorithm @lc id=1005 lang=javascript 
// @title univalued-binary-tree
import * as a from 'algm'
import { TreeNode } from 'algm'
// @test([1,1,1,1,1,null,1])=true
// @test([2,2,2,5,2])=false
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
 * @return {boolean}
 */
var isUnivalTree = function(root) {
    if(!root) return true
    if(!root.left && !root.right) return true 
    let val = root.val
    let [f1, f2] = [true, true]
    if(root.left && (root.left.val != val || !isUnivalTree(root.left))) 
        f1 = false
    if(root.right && root.right.val != val || !isUnivalTree(root.right)) 
        f2 = false
    return f1 && f2
};
