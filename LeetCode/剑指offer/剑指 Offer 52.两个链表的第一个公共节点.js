// @algorithm @lc id=100326 lang=javascript 
// @title liang-ge-lian-biao-de-di-yi-ge-gong-gong-jie-dian-lcof
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
    let [a, b] = [headA, headB]
    while(a !== b) {
        a = a.next
        b = b.next
        if(!a && !b) return null
        if(!a) a = headB
        if(!b) b = headA
    }
    return a
};
// var getIntersectionNode = function(headA, headB) {
//     let m = new Map()
//     let [a, b] = [headA, headB]
//     while(a) {
//         m.set(a, a)
//         a = a.next
//     }
//     while(b) {
//         if(m.has(b)) return b
//         b = b.next
//     }
//     return null
// };