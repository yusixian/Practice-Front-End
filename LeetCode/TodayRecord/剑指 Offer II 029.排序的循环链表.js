// @algorithm @lc id=1000265 lang=javascript 
// @title 4ueAj6
import * as a from 'algm'
import { ListNode } from 'algm'
/**
 * // Definition for a Node.
 * function Node(val, next) {
 *     this.val = val;
 *     this.next = next;
 * };
 */

/**
 * @param {Node} head
 * @param {number} insertVal
 * @return {Node}
 */
var insert = function(head, insertVal) {
    if(!head) {
        head = new ListNode(insertVal)
        head.next = head
        return head
    }
    if(head.next === head) {
        head.next = new ListNode(insertVal)
        head.next.next = head
        return head
    }
    let [pre, cur] = [head, head.next]
    while (cur != head) {
        if (insertVal >= pre.val && insertVal <= cur.val) {
            break
        }
        if(pre.val > cur.val) {
            if(insertVal > pre.val || insertVal < cur.val) {
                break
            }
        }
        pre = cur
        cur = cur.next
    }
    let node = new ListNode(insertVal)
    pre.next = node
    node.next = cur
    return head
};