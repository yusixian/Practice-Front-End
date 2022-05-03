// @algorithm @lc id=100311 lang=javascript 
// @title cong-shang-dao-xia-da-yin-er-cha-shu-lcof
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var levelOrder = function(root) {
    if(!root) return []
    let ans = []
    let q = []
    q.push(root)
    while(q.length > 0){
        let n = q.length
        for(let i = 0; i < n; ++i) {
            let nowv = q.shift()
            ans.push(nowv.val)
            if(nowv.left) q.push(nowv.left)
            if(nowv.right) q.push(nowv.right)
        }
    }
    return ans
};