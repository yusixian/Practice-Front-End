// @algorithm @lc id=100286 lang=javascript 
// @title he-bing-liang-ge-pai-xu-de-lian-biao-lcof
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    let ehead = new ListNode(0)
    let nowv = ehead
    while(l1 && l2) {
        if(l1.val >= l2.val) {
            nowv.next = new ListNode(l2.val)
            l2 = l2.next
            nowv = nowv.next
        } else {
            nowv.next = new ListNode(l1.val)
            l1 = l1.next
            nowv = nowv.next
        }
    }
    if(l1) nowv.next = l1
    else if(l2) nowv.next = l2
    return ehead.next
};