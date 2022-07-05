// @algorithm @lc id=1000263 lang=javascript 
// @title aMhZSa
import * as a from 'algm'
import { ListNode } from 'algm'
/*
 * @Author: cos
 * @Date: 2022-07-05 22:12:49
 * @LastEditTime: 2022-07-05 23:06:27
 * @LastEditors: cos
 * @Description: 反转后半段进行比较
 * @FilePath: \Practice-Front-End\LeetCode\cn\JavaScript\剑指 Offer II 027.回文链表.js
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
 * @return {boolean}
 */
var isPalindrome = function(head) {
    function midNode(head) {
        let [f, s] = [head, head]
        while(f.next && f.next.next) {
            s = s.next
            f = f.next.next
        }
        return s
    }
    function reverse(head) {
        let [pre, now] = [null, head]
        while(now) {
            let t = now.next
            now.next = pre
            pre = now 
            now = t
        }
        return pre
    }
    const mid = midNode(head)
    const rh = reverse(mid.next)
    let [p1, p2] = [head, rh]
    let res = true
    while(res && p2) {
        if(p1.val != p2.val) res = false
        p1 = p1.next
        p2 = p2.next
    }
    mid.next = reverse(rh)  // 还原
    return res
};