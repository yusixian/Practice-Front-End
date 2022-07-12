// @algorithm @lc id=1000304 lang=javascript 
// @title h54YBf
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
    function seria(rt, str) {
        if(!rt) return str+'N,'
        str += `${rt.val},`
        str = seria(rt.left, str)
        str = seria(rt.right, str)
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
        let rt = new TreeNode(parseInt(arr[0]))
        arr.shift()
        rt.left = deseria(arr)
        rt.right = deseria(arr)
        return rt
    }
    return deseria(data.split(','))
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */