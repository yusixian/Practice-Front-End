// @algorithm @lc id=450 lang=javascript 
// @title delete-node-in-a-bst
import * as a from 'algm'
import { TreeNode } from 'algm'
// @test([5,3,6,2,4,null,7],3)=[5,4,6,2,null,null,7]
// @test([5,3,6,2,4,null,7],0)=[5,3,6,2,4,null,7]
// @test([],0)=[]
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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
    if(!root) return root
    if(root.val > key) root.left = deleteNode(root.left, key)
    else if(root.val < key) root.right = deleteNode(root.right, key)
    else {
        if(!root.left) return root.right
        if(!root.right) return root.left
        let min = root.right
        while(min.left) min = min.left
        root.val = min.val
        root.right = deleteNode(root.right, min.val)
    }
    return root
};