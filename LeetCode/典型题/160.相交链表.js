// @algorithm @lc id=160 lang=javascript 
// @title intersection-of-two-linked-lists
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    if(!headA || !headB) return null
    let [prea, preb] = [headA, headB]
    while(prea !== preb) {
        prea = prea.next
        preb = preb.next
        if(prea === preb) return prea
        if(!prea) prea = headB
        if(!preb) preb = headA
    }
    return prea
};