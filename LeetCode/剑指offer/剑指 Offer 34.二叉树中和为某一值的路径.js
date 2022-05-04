// @algorithm @lc id=100317 lang=javascript 
// @title er-cha-shu-zhong-he-wei-mou-yi-zhi-de-lu-jing-lcof
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
 * @param {number} target
 * @return {number[][]}
 */
var pathSum = function(root, target) {
    if(!root) return []
    let res = []
    let path = []
    function dfs(rt, sum) {
        if(!rt) return 
        if(!rt.left && !rt.right) { // 为叶子节点了
            if(rt.val+sum === target) 
                res.push(path.concat(rt.val))
            return 
        } else if(rt.left && rt.right) { // 为非叶子节点
            path.push(rt.val)
            dfs(rt.left, sum+rt.val)
            dfs(rt.right, sum+rt.val)
            path.pop()
        } else if(rt.left) { // 为左子树
            path.push(rt.val)
            dfs(rt.left, sum+rt.val)
            path.pop()
        } else { // 为右子树
            path.push(rt.val)
            dfs(rt.right, sum+rt.val)
            path.pop()
        }
    }
    dfs(root, 0)
    return res
};