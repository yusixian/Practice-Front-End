// @test([1,2,3,4,5], 2)=[4,5]
// @algorithm @lc id=100294 lang=javascript 
// @title lian-biao-zhong-dao-shu-di-kge-jie-dian-lcof
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function(head, k) {
    let [fast, slow] = [head, head]
    for(let i = 0; i < k; i++) {
        fast = fast.next
    }
    while(fast) {
        fast = fast.next
        slow = slow.next
    }
    return slow
};