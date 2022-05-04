// @algorithm @lc id=100305 lang=javascript 
// @test([4,2,5,1,3])=[1,2,3,4,5]
// @title er-cha-sou-suo-shu-yu-shuang-xiang-lian-biao-lcof
/**
 * // Definition for a Node.
 * function Node(val,left,right) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var treeToDoublyList = function(root) { // 左前右后
    if(!root) return null
    let [head, prev] = [null, null]
    function dfs(rt) {
        if(!rt) return
        dfs(rt.left)
        if(prev) prev.right = rt    // 前结点的右结点指向当前结点
        else head = rt
        rt.left = prev              // 当前结点的前指针指向前结点
        prev = rt
        dfs(rt.right)
    }
    dfs(root)
    head.left = prev
    prev.right = head
    return head
};