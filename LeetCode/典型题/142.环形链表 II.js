// @algorithm @lc id=142 lang=javascript 
// @title linked-list-cycle-ii
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    let [slow, fast] = [head, head];
    while(fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
        if(slow === fast) break
    }
    if(!fast || !fast.next) return null
    let p = head
    while(p !== slow) {
        p = p.next
        slow = slow.next
    }
    return p
};