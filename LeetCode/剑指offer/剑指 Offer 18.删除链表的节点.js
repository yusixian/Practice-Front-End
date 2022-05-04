// @algorithm @lc id=100299 lang=javascript 
// @title shan-chu-lian-biao-de-jie-dian-lcof
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function(head, val) {
    if(head.val === val) return head.next;
    let [prev, nowv] = [head, head.next];
    while(nowv) {
        if(nowv.val === val) {
            prev.next = nowv.next;
            break;
        }
        prev = nowv;
        nowv = nowv.next;
    }
    return head;
};