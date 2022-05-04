// @algorithm @lc id=2 lang=javascript 
// @title add-two-numbers
// @test([2,4,3],[5,6,4])=[7,0,8]
// @test([0],[0])=[0]
// @test([9,9,9,9,9,9,9],[9,9,9,9])=[8,9,9,9,0,0,0,1]
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
    let ehead = new ListNode()
    let nowp = ehead 
    let flag = 0    // 进位
    while(l1 || l2 || flag) {
        let x = l1? l1.val: 0
        let y = l2? l2.val: 0
        let sum = x + y + flag
        flag = sum >= 10? 1: 0
        nowp.next = new ListNode(sum % 10)
        nowp = nowp.next
        if(l1) l1 = l1.next
        if(l2) l2 = l2.next
    }
    return ehead.next
};