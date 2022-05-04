// @algorithm @lc id=100307 lang=javascript 
// @title xu-lie-hua-er-cha-shu-lcof
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    function seria(root, str) {
        if(root === null) return str+'N,'
        str += `${root.val},`
        str = seria(root.left, str)
        str = seria(root.right, str)
        return str
    }
    return seria(root, '')
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    function deseria(arr) {
        if(arr[0] == 'N') {
            arr.shift()
            return null
        }
        let root = new TreeNode(parseInt(arr[0]))
        arr.shift()
        root.left = deseria(arr)
        root.right = deseria(arr)
        return root 
    }
    let arr = data.split(',')
    return deseria(arr)
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */