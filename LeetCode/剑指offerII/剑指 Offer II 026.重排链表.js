// @algorithm @lc id=1000262 lang=javascript 
// @title LGjMqU
/*
 * @Author: cos
 * @Date: 2022-07-04 21:02:47
 * @LastEditTime: 2022-07-04 21:38:43
 * @LastEditors: cos
 * @Description: 先找中间节点，然后反转右侧链表，然后合并
 * @FilePath: \Practice-Front-End\LeetCode\cn\JavaScript\剑指 Offer II 026.重排链表.js
 */
import * as a from 'algm'
import { ListNode } from 'algm'
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    function middle(head) {
        let [fast, slow] = [head, head]
        while(fast.next && fast.next.next) {
            fast = fast.next.next
            slow = slow.next
        }
        return slow
    }
    function reverse(h) {
        let [pre, now] = [null, h]
        while(now) {
            let temp = now.next
            now.next = pre
            pre = now
            now = temp
        }
        return pre
    }
    function merge(l1, l2) {
        let t1, t2 
        while(l1 && l2) {
            t1 = l1.next
            t2 = l2.next

            l1.next = l2
            l1 = t1

            l2.next = l1
            l2 = t2
        }
    }
    let mid = middle(head)
    let [l1, l2] = [head, mid.next]
    mid.next = null
    l2 = reverse(l2)
    merge(l1, l2)
};