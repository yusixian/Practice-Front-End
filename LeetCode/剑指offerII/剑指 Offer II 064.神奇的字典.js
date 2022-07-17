// @algorithm @lc id=1000328 lang=javascript 
// @title US1pGT
/**
 * Initialize your data structure here.
 */
var MagicDictionary = function() {
    // 还是字典树……
    this.dict = {}
};

/** 
 * @param {string[]} dictionary
 * @return {void}
 */
MagicDictionary.prototype.buildDict = function(dictionary) {
    for(const word of dictionary) {
        let p = this.dict
        for(const ch of word) {
            if(!p[ch]) p[ch] = {}
            p = p[ch]
        }
        p.end = true
    }
};

/** 
 * @param {string} searchWord
 * @return {boolean}
 */
MagicDictionary.prototype.search = function(searchWord) {
    const dfs = (word, pos, node, isChange) => {
        if(pos == word.length) 
            return isChange && node.end
        const ch = word[pos]
        if(node[ch]) {
            if(dfs(word, pos+1, node[ch], isChange))    // 不做操作
                return true
        }
        if(!isChange) {     // 还没改过 改下试试
            for(let i = 0; i < 26; ++i) {
                const nowCh = String.fromCharCode('a'.charCodeAt()+i) 
                if(nowCh != ch && node[nowCh]) {
                    if(dfs(word, pos+1, node[nowCh], true))
                        return true
                }
            }
        }
        return false
    }
    return dfs(searchWord, 0, this.dict, false)
};

/**
 * Your MagicDictionary object will be instantiated and called as such:
 * var obj = new MagicDictionary()
 * obj.buildDict(dictionary)
 * var param_2 = obj.search(searchWord)
 */