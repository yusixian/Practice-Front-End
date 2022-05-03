// @algorithm @lc id=100282 lang=javascript 
// @title cong-wei-dao-tou-da-yin-lian-biao-lcof
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function(head) {
    let res = []
    while(head){
        res.unshift(head.val)
        head = head.next
    }
    return res
};