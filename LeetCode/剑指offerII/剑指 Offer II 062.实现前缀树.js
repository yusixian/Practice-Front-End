// @algorithm @lc id=1000325 lang=javascript 
// @title QC3q1f
/**
 * Initialize your data structure here.
 */
var Trie = function() {
    this.nodes = {}
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let node = this.nodes
    for(const ch of word) {
        if(!node[ch])
            node[ch] = {}
        node = node[ch]
    }
    node.end = true
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let node = this.nodes
    for(const ch of word) {
        if(!node[ch]) return false
        node = node[ch]
    }
    return !!node.end
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let node = this.nodes
    for(const ch of prefix) {
        if(!node[ch]) return false
        node = node[ch]
    }
    return node
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */