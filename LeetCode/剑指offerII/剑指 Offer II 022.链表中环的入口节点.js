// @algorithm @lc id=1000258 lang=javascript 
// @title c32eOV
/*
 * @Author: cos
 * @Date: 2022-07-03 21:34:05
 * @LastEditTime: 2022-07-03 22:10:17
 * @LastEditors: cos
 * @Description: 也是做过的，快慢指针，快指针和慢指针相遇时~再走slow步即可
 * @FilePath: \Practice-Front-End\LeetCode\cn\JavaScript\剑指 Offer II 022.链表中环的入口节点.js
 */
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
    let [slow, fast] = [head, head]
    while(fast) {
        if(!fast.next) return null
        fast = fast.next.next   
        slow = slow.next
        if(slow == fast) {
            let p = head
            while(p != slow) {
                p = p.next
                slow = slow.next
            }
            return p
        }
    }
    return null
};