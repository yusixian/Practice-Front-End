// @algorithm @lc id=1000261 lang=javascript 
// @title lMSNwu
/*
 * @Author: cos
 * @Date: 2022-07-04 21:02:46
 * @LastEditTime: 2022-07-04 21:22:21
 * @LastEditors: cos
 * @Description: 
 * @FilePath: \Practice-Front-End\LeetCode\cn\JavaScript\剑指 Offer II 025.链表中的两数相加.js
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
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
    l1 = reverse(l1)
    if(!l1) return l2
    l2 = reverse(l2)
    if(!l2) return l1
    let flag = 0
    let head = null
    function insert(v) {
        let t = head
        head = new ListNode(v)
        head.next = t
    }
    while(l1 || l2) {
        let [x, y] = [l1?.val || 0, l2?.val || 0]
        let sum = x+y+flag
        if(sum >= 10) {
            flag = 1
            sum -= 10
        } else flag = 0
        insert(sum)
        if(l1) l1 = l1.next
        if(l2) l2 = l2.next
    }
    if(flag) insert(1)
    return head
};