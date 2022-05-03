// @algorithm @lc id=100314 lang=javascript 
// @title cong-shang-dao-xia-da-yin-er-cha-shu-iii-lcof
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(!root) return []
    let ans = []
    let q = []
    let h = 0
    q.push(root)
    while(q.length > 0){
        let n = q.length
        let level = []
        for(let i = 0; i < n; ++i) {
            let nowv = q.shift()
            if(h%2 === 0) level.push(nowv.val)
            else level.unshift(nowv.val)
            if(nowv.left) q.push(nowv.left)
            if(nowv.right) q.push(nowv.right)
        }
        ans.push(level)
        ++h
    }
    return ans
};