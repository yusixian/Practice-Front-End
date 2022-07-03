// @algorithm @lc id=1000259 lang=javascript 
// @title 3u1WK4
/*
 * @Author: cos
 * @Date: 2022-07-03 21:34:07
 * @LastEditTime: 2022-07-03 21:39:30
 * @LastEditors: cos
 * @Description: 专项I中就有的题目
 * @FilePath: \Practice-Front-End\LeetCode\cn\JavaScript\剑指 Offer II 023.两个链表的第一个重合节点.js
 */
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
    let [pA, pB] = [headA, headB]
    while(pA !== pB) {
        pA = pA.next
        pB = pB.next
        if(pA == pB) return pA
        if(!pA) pA = headB
        if(!pB) pB = headA
    }
    return pA
};