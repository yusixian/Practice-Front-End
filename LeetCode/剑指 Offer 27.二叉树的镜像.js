// @algorithm @lc id=100288 lang=javascript 
// @title er-cha-shu-de-jing-xiang-lcof
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var mirrorTree = function(root) {
    if(!root) return null
    let newroot = new TreeNode(root.val)
    newroot.left = mirrorTree(root.right)
    newroot.right = mirrorTree(root.left)
    return newroot
};