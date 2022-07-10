// @algorithm @lc id=1000295 lang=javascript 
// @title NaqhDT
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
var CBTInserter = function(root) {
    this.q = []
    this.root = root
};

/** 
 * @param {number} v
 * @return {number}
 */
CBTInserter.prototype.insert = function(v) {
    let node = new TreeNode(v)
    this.q.push(this.root)
    while(this.q[0].left && this.q[0].right) {
        this.q.push(this.q[0].left, this.q[0].right)
        this.q.shift()
    }
    this.q[0].left? this.q[0].right = node: this.q[0].left = node
    return this.q[0].val
};

/**
 * @return {TreeNode}
 */
CBTInserter.prototype.get_root = function() {
    return this.root
};

/**
 * Your CBTInserter object will be instantiated and called as such:
 * var obj = new CBTInserter(root)
 * var param_1 = obj.insert(v)
 * var param_2 = obj.get_root()
 */