// @algorithm @lc id=100312 lang=javascript 
// @title cong-shang-dao-xia-da-yin-er-cha-shu-ii-lcof
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
        let level = []
        for(let i = 0; i < n; ++i) {
            let nowv = q.shift()
            level.push(nowv.val)
            if(nowv.left) q.push(nowv.left)
            if(nowv.right) q.push(nowv.right)
        }
        ans.push(level)
    }
    return ans
};