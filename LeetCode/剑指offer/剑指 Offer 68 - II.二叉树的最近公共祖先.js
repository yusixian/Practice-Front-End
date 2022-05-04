// @algorithm @lc id=100347 lang=javascript 
// @title er-cha-shu-de-zui-jin-gong-gong-zu-xian-lcof
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
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if(!root) return null
    let fa = new Map()
    function dfs(rt, pre) {
        if (rt === null) return
        fa.set(rt, pre)
        dfs(rt.left, rt)
        dfs(rt.right, rt)
    }
    dfs(root, null)
    let vis = new Map()
    let nowv = q
    while (nowv) {
        vis.set(nowv, true)
        if(fa.has(nowv)) 
            nowv = fa.get(nowv)
    }
    nowv = p
    while (nowv) {
        if(vis.has(nowv)) 
            return nowv
        if(fa.has(nowv)) 
            nowv = fa.get(nowv)
    }
};