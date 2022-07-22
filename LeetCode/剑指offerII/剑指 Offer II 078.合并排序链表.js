// @algorithm @lc id=1000342 lang=javascript 
// @title vvXgSW
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    if(!lists.length) return null
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
    let newH = lists[0]
    for(let i = 1; i < lists.length; ++i) {
        newH = merge(newH, lists[i])
    }
    return newH
};