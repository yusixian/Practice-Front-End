// @algorithm @lc id=1000260 lang=javascript 
// @title UHnkqh
/*
 * @Author: cos
 * @Date: 2022-07-04 21:02:43
 * @LastEditTime: 2022-07-04 21:05:00
 * @LastEditors: cos
 * @Description: 也是做过的
 * @FilePath: \Practice-Front-End\LeetCode\cn\JavaScript\剑指 Offer II 024.反转链表.js
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
 * @return {ListNode}
 */
var reverseList = function(head) {
    let [prev, nowv] = [null, head]
    while(nowv) {
        let temp = nowv.next
        nowv.next = prev
        prev = nowv
        nowv = temp
    }
    return prev
};