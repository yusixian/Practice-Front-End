// @algorithm @lc id=1427 lang=javascript 
// @title all-elements-in-two-binary-search-trees
// @test([2,1,4],[1,0,3])=[0,1,1,2,3,4]
// @test([1,null,8],[8,1])=[1,1,8,8]
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
var getAllElements = function(root1, root2) {
    function tree2arr(root) {
        let arr = []
        function inorder(rt) {
            if(!rt) return
            inorder(rt.left)
            arr.push(rt.val)
            inorder(rt.right)
        }
        inorder(root)
        return arr
    }
    let arr1 = tree2arr(root1)
    let arr2 = tree2arr(root2)
    let res = []
    let [i, j] = [0, 0]
    while(i < arr1.length && j < arr2.length) {
        if(arr1[i] <= arr2[j]) res.push(arr1[i++])
        else res.push(arr2[j++])
    }
    while(i < arr1.length) res.push(arr1[i++])
    while(j < arr2.length) res.push(arr2[j++])
    return res
};