// @algorithm @lc id=100287 lang=javascript 
// @title shu-de-zi-jie-gou-lcof
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
var isSubStructure = function(A, B) {
    function isSame(a, b) {
        if(!a && !b) return true;
        else if(!b) return true;    // b中不存在但a中存在,没问题
        else if(!a) return false;
        return a.val === b.val && isSame(a.left, b.left) && isSame(a.right, b.right);
    }
    if(!A || !B) return false;
    if(A.val === B.val && isSame(A, B)) return true;
    return isSubStructure(A.left, B) || isSubStructure(A.right, B);
};