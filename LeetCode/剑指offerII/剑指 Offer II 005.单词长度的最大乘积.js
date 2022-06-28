// @algorithm @lc id=1000236 lang=javascript 
// @title aseY1I
/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function(words) {
    let res = 0
    let mask = new Array(words.length);
    for(let i = 0; i < words.length; ++i) {
        let word = words[i]
        for(let j = 0; j < word.length; ++j) {
            let idx = word[j].charCodeAt() - 'a'.charCodeAt()
            mask[i] |= (1<<idx)
        }
    }
    let maxlen = 0
    for(let i = 0; i < words.length; ++i) {
        for(let j = i+1; j < words.length; ++j) {
            let [w1, w2] = [words[i], words[j]]
            if(mask[i] & mask[j]) continue  // 为0才是不包含相同字符
            maxlen = Math.max(maxlen, w1.length*w2.length)
        }
    }
    return maxlen
};