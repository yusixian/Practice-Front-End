// @algorithm @lc id=1000313 lang=javascript 
// @title P5rCT8
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
 * @return {TreeNode}
 */
var inorderSuccessor = function(root, p) {
    let s = []
    let [prev, nowv] = [null, root]
    while(s.length || nowv) {
        while(nowv) {
            s.push(nowv)
            nowv = nowv.left
        }
        nowv = s.pop()
        if(prev === p) return nowv
        prev = nowv
        nowv = nowv.right
    }
    return null
};