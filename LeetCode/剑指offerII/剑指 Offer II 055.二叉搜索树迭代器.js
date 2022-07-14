// @algorithm @lc id=1000316 lang=javascript 
// @title kTOapQ
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
 */
var BSTIterator = function(root) {
    this.root = root
    this.res = []
    let res = this.res
    function inorder(rt) {
        if(!rt) return
        inorder(rt.left)
        res.push(rt.val)
        inorder(rt.right)
    }
    inorder(root)
    this.nowp = -1
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function() {
    return this.res[++this.nowp]
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
    return this.nowp < this.res.length-1
};

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */