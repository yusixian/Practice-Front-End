// @algorithm @lc id=100298 lang=javascript 
// @title fan-zhuan-lian-biao-lcof
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let prep = null
    let nowp = head
    while(nowp) {
        let t = nowp.next 
        nowp.next = prep
        prep = nowp
        nowp = t
    }
    return prep
};