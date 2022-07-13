// @algorithm @lc id=1000307 lang=javascript 
// @title 6eUYwP
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
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function(root, targetSum) {
    if(!root) return 0
    function rSum(rt, tar) {
        if(!rt) return 0
        let sum = 0
        if(rt.val == tar) sum++
        sum += rSum(rt.left, tar - rt.val)
        sum += rSum(rt.right, tar - rt.val)
        return sum
    }
    let res = rSum(root, targetSum)
    res += pathSum(root.left, targetSum)
    res += pathSum(root.right, targetSum)
    return res
};