
// @algorithm @lc id=1000257 lang=javascript 
// @title SLwz0R
/*
 * @Author: cos
 * @Date: 2022-07-03 21:34:04
 * @LastEditTime: 2022-07-03 22:06:47
 * @LastEditors: cos
 * @Description: 也是I的时候就刷过了
 * @FilePath: \Practice-Front-End\LeetCode\cn\JavaScript\剑指 Offer II 021.删除链表的倒数第 n 个结点.js
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    if(!head) return 
    let [fast, slow] = [head, head]
    for(let i = 0; i < n; ++i) { 
        fast = fast.next
    }
    if(!fast) return head.next
    while(fast.next) {
        fast = fast.next
        slow = slow.next
    }
    slow.next = slow.next.next
    return head
};