// @algorithm @lc id=1000298 lang=javascript 
// @title LwUNpT
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
 * @return {number}
 */
var findBottomLeftValue = function(root) {
    let res = 0
    let q = [root]
    while(q.length) {
        let nodes = q
        res = nodes[0].val
        q = []
        for(let i = 0; i < nodes.length; ++i) {
            if(nodes[i].left) q.push(nodes[i].left)
            if(nodes[i].right) q.push(nodes[i].right)
        }
    }
    return res
};