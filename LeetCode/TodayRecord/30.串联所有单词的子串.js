// @algorithm @lc id=30 lang=javascript 
// @title substring-with-concatenation-of-all-words
import * as a from 'algm'
// @test("barfoothefoobarman",["foo","bar"])=[0,9]
// @test("wordgoodgoodgoodbestword",["word","good","best","word"])=[]
// @test("barfoofoobarthefoobarman",["bar","foo","the"])=[6,9,12]
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    let [m, n] = [words[0].length, words.length]
    let sum = m*n
    let map = new Map()
    for(let i = 0; i < n; ++i) {
        if(!map.has(words[i])) map.set(words[i], 1)
        else map.set(words[i], map.get(words[i]) + 1)
    }
    function equal(m1, m2) {
        if(m1.size != m2.size) return false
        for(const [key, val] of m1) {
            if(!m2.has(key) || m2.get(key) != val) return false
        }
        return true
    }
    let res = []
    for(let i = 0; i < s.length; ++i) {
        let nowp = new Map()
        let word = ''
        for(let j = i; j < i+sum; ++j) {
            word += s[j]
            if(word.length == m) {
                if(!map.has(word)) break
                else nowp.set(word, (nowp.get(word) || 0) + 1)
                word = ''
            }
        }
        if(equal(nowp, map)) res.push(i)
    }
    return res
};