// @algorithm @lc id=100315 lang=javascript 
// @title er-cha-sou-suo-shu-de-hou-xu-bian-li-xu-lie-lcof
/**
 * @param {number[]} postorder
 * @return {boolean}
 */
var verifyPostorder = function(postorder) {
    // 小大中间
    function verify(l, r) {
        if(l >= r) return true
        let root = postorder[r]
        let leftRT = l
        // 小 找到第一个大的 实际左子树的根为leftRT-1
        while(postorder[leftRT] < root) ++leftRT  
        let rightRT = leftRT
        // 大 找到第一个小的 按理说会找到root的位置。
        while(postorder[rightRT] > root) rightRT++  
        return rightRT == r && verify(l, leftRT - 1) && verify(leftRT, r - 1)
        // 验证左右子树
    }
    return verify(0, postorder.length - 1)
};