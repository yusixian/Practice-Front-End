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
    let res = ''
    function seria(rt) {
        if(!rt) {
            res = res + '#,'
            return 
        }
        res = res + `${rt.val},`
        seria(rt.left)
        seria(rt.right)
    }
    seria(root)
    return res
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    function deser(arr) {
        if(arr[0] === '#') {
            arr.shift()
            return null
        }
        let node = new TreeNode(parseInt(arr[0]))
        arr.shift()
        node.left = deser(arr)
        node.right = deser(arr)
        return node
    }
    let nodes = data.split(',')
    return deser(nodes)
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */