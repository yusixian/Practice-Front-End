// @algorithm @lc id=143 lang=javascript 
// @title reorder-list
// @test([1,2,3,4])=[1,4,2,3]
// @test([1,2,3,4,5])=[1,5,2,4,3]
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
    if(!head || !head.next) return;
    let [prev, nowv] = [null, head];
    while(nowv.next) {
        prev = nowv
        nowv = nowv.next
    }
    if(!prev || prev === head)  return
    prev.next = null
    nowv.next = head.next
    head.next = nowv
    reorderList(nowv.next)
};