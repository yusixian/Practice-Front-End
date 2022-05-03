// @algorithm @lc id=100333 lang=javascript 
// @title er-cha-sou-suo-shu-de-di-kda-jie-dian-lcof
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthLargest = function(root, k) {
    let [cnt, res] = [0, 0];
    function dfs(rt) {
        if(!rt) return
        dfs(rt.right)
        if(++cnt === k) {
            res = rt.val
            return
        }
        dfs(rt.left)
    }
    dfs(root)
    return res
};