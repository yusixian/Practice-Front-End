/*
 * @Author: cos
 * @Date: 2022-07-06 22:37:24
 * @LastEditTime: 2022-07-06 23:09:36
 * @LastEditors: cos
 * @Description: 
 * @FilePath: \Practice-Front-End\LeetCode\cn\JavaScript\剑指 Offer II 031.最近最少使用缓存.js
 */
function DLNode(key = -1, val = -1) {
    this.val = val
    this.key = key
    this.prev = null
    this.next = null
}
// @algorithm @lc id=1000270 lang=javascript 
// @title OrIXps
/**
 * @param {number} capacity
 */
 var LRUCache = function(capacity) {
    this.capacity = capacity
    this.size = 0
    this.cache = new Map()
    this.head = new DLNode()
    this.tail = new DLNode()
    this.head.next = this.tail
    this.tail.prev = this.head
};

LRUCache.prototype.remove = function(p) {
    p.prev.next = p.next
    p.next.prev = p.prev
    delete p
    --this.size
}

LRUCache.prototype.insertHead = function(key, val) {
    let t = this.head.next
    let newp = new DLNode(key, val)
    newp.next = t
    newp.prev = this.head
    t.prev = newp
    this.head.next = newp
    ++this.size
    return newp
}
LRUCache.prototype.move2Head = function(p) {
    let newp = this.insertHead(p.key, p.val)
    this.remove(p)
    return newp
}
/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if(!this.cache.has(key) || !this.cache.get(key)) return -1
    let node = this.move2Head(this.cache.get(key))
    this.cache.set(key, node)
    return node.val
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if(!this.cache.has(key) || !this.cache.get(key)) {
        if(this.size === this.capacity) {
            this.cache.set(this.tail.prev.key, null)
            this.remove(this.tail.prev)
        }
        let newp = this.insertHead(key, value)
        this.cache.set(key, newp)
    } else {
        this.cache.set(key, this.move2Head(this.cache.get(key)))
        this.cache.get(key).val = value
    }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */