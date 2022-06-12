// @algorithm @lc id=926 lang=javascript 
// @title find-and-replace-pattern
import * as a from 'algm'
// @test(["abc","deq","mee","aqq","dkd","ccc"],"abb")=["mee","aqq"]
// @test(["a","b","c"],"a")=["a","b","c"]
/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
var findAndReplacePattern = function(words, pattern) {
    let res = []
    for(let i = 0; i < words.length; i++) {
        let word = words[i]
        if(word.length != pattern.length) continue
        let m = new Map()
        let n = new Map()
        let flag = true
        for(let j = 0; j < word.length; j++) {
            if(m.has(pattern[j])) {
                if(m.get(pattern[j]) != word[j]) {
                    flag = false
                    break
                }
            } else {
                if(n.has(word[j])) {
                    flag = false
                    break
                }
                n.set(word[j], pattern[j])
                m.set(pattern[j], word[j])
            }
        }
        if(flag) res.push(word)
    }
    return res
};