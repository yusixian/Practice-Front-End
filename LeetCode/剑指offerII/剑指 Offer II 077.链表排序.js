// @algorithm @lc id=1000341 lang=javascript 
// @title 7WHec2
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
var sortList = function(head, tail) {
    if(!head) return head
    if(!tail) tail = null
    if(head.next === tail) {
        head.next = null
        return head
    }
    let [slow, fast] = [head, head]
    while(fast !== tail) {
        slow = slow.next
        fast = fast.next
        if(fast !== tail) fast = fast.next
    }
    const mid = slow
    const merge = (h1, h2) => {
        const newHead = new ListNode(0)
        let [t, p1, p2] = [newHead, h1, h2]
        while(p1 && p2) {
            if(p1.val <= p2.val) {
                t.next = p1
                p1 = p1.next
            } else {
                t.next = p2
                p2 = p2.next
            }
            t = t.next
        }
        if(p1) t.next = p1
        else if(p2) t.next = p2
        return newHead.next
    }
    return merge(sortList(head, mid), sortList(mid, tail))
};