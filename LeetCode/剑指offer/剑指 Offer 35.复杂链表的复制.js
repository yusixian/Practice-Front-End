// @algorithm @lc id=100300 lang=javascript 
// @title fu-za-lian-biao-de-fu-zhi-lcof
/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */
/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    if(!head) return null
    let nowp = head
    for(let nowp = head; nowp; nowp = nowp.next.next) {
        let t = new Node(nowp.val, nowp.next, null)
        nowp.next = t
    }
    for(let nowp = head; nowp; nowp = nowp.next.next) {
        nowp.next.random = nowp.random ? nowp.random.next: null    // 新链表的random赋值
    }
    let res = head.next
    for(let nowp = head; nowp; nowp = nowp.next) {
        let newNode = nowp.next
        nowp.next = newNode.next
        newNode.next = newNode.next? nowp.next.next: null   // 新链表的next赋值
    }
    return res
};

// var m = new Map()
// /**
//  * @param {Node} head
//  * @return {Node}
//  */
// var copyRandomList = function(head) {
//     if(!head) return null
//     if(m.has(head)) return m.get(head)
//     let newv = new Node(head.val, null, null)
//     m.set(head, newv)
//     newv.next = copyRandomList(head.next)
//     newv.random = copyRandomList(head.random)
//     return newv
// };