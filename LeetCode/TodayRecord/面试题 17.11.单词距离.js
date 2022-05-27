// @algorithm @lc id=1000039 lang=javascript 
// @title find-closest-lcci
import * as a from 'algm'
// @test(["I","am","a","student","from","a","university","in","a","city"],"a","student")=1
/**
 * @param {string[]} words
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var findClosest = function(words, word1, word2) {
    let v1 = []
    let v2 = []
    for (let i = 0; i < words.length; i++) {
        if(words[i] === word1) {
            v1.push(i)
        } else if(words[i] === word2) {
            v2.push(i)
        }
    }
    let dis = Number.MAX_VALUE
    for(let i = 0; i < v1.length; ++i) {
        const w1 = v1[i]
        for(let j = 0; j < v2.length; ++j) {
            const w2 = v2[j]    // 第二个单词下标
            dis = Math.min(Math.abs(v1[i] - v2[j]), dis)
            if(w2 > w1)
                break
        }
    }
    return dis
};
// 2 5 8
// 3 