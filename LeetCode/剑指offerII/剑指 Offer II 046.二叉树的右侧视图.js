// @algorithm @lc id=1000299 lang=javascript 
// @title WNC0Lk
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
var rightSideView = function(root) {
    let maxh = 0
    let res = []
    function bfs(rt, h) {
        if(!rt) return
        if(h > maxh) {
            maxh = h
            res.push(rt.val)
        }
        bfs(rt.right, h+1)
        bfs(rt.left, h+1)
    }
    bfs(root, 1)
    return res
};