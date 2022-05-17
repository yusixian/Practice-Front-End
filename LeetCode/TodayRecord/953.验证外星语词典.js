// @algorithm @lc id=990 lang=javascript 
// @title verifying-an-alien-dictionary
import * as a from 'algm'
// @test(["hello","leetcode"],"hlabcdefgijkmnopqrstuvwxyz")=true
// @test(["word","world","row"],"worldabcefghijkmnpqstuvxyz")=false
// @test(["apple","app"],"abcdefghijklmnopqrstuvwxyz")=false
/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
    let m = new Map()
    for(let i = 0; i < order.length; i++) {
        m.set(order[i], i)
    }
    function judge(s1, s2) {    // s2是否大于s1
        let [len1, len2] = [s1.length, s2.length]
        let [i, j] = [0, 0]
        while(i < len1 && j < len2) {
            if(m.get(s1[i]) > m.get(s2[j])) return false
            if(m.get(s1[i]) < m.get(s2[j])) return true
            i++, j++
        }
        if(i < len1) return false
        if(j < len2) return true
        return true
    }
    for(let i = 0; i < words.length-1; i++) {
        if(!judge(words[i], words[i+1])) return false
    }
    return true
};