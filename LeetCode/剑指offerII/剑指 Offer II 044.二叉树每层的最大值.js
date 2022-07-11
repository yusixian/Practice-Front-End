// @algorithm @lc id=1000297 lang=javascript 
// @title hPov7L
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
var largestValues = function(root) {
    if(!root) return []
    let res = []
    let q = [root]
    while(q.length) {
        let nodes = q
        let maxv = nodes[0].val
        q = []
        for(let i = 0; i < nodes.length; ++i) {
            maxv = Math.max(maxv, nodes[i].val)
            if(nodes[i].left) q.push(nodes[i].left)
            if(nodes[i].right) q.push(nodes[i].right)
        }
        res.push(maxv)
    }
    return res
};