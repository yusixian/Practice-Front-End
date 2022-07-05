// @algorithm @lc id=1000264 lang=javascript 
// @title Qv1Da2
import * as a from 'algm'
import { TreeNode } from 'algm'
/*
 * @Author: cos
 * @Date: 2022-07-05 22:12:59
 * @LastEditTime: 2022-07-05 23:16:14
 * @LastEditors: cos
 * @Description: 
 * @FilePath: \Practice-Front-End\LeetCode\cn\JavaScript\剑指 Offer II 028.展平多级双向链表.js
 */
/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function(head) {
    function dfs(node) {
        let [cur, last] = [node, null]
        while(cur) {
            let nxt = cur.next
            if(cur.child) {
                const childLast = dfs(cur.child)
                nxt = cur.next

                cur.next = cur.child
                cur.child.prev = cur
                if(nxt) {
                    childLast.next = nxt
                    nxt.prev = childLast
                }
                cur.child = null
                last = childLast
            } else last = cur
            cur = nxt
        }
        return last
    }
    dfs(head)
    return head
};