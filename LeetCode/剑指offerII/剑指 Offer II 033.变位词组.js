// @algorithm @lc id=1000275 lang=javascript 
// @title sfvd7V
import * as a from 'algm'
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let m = new Object()
    for(let i = 0; i < strs.length; ++i) {
        const nums = new Array(26).fill(0)
        const str = strs[i]
        for(let j = 0; j < str.length; ++j)
            nums[str[j].charCodeAt() - 'a'.charCodeAt()]++
        m[nums] ? m[nums].push(str): m[nums] = [str]
    }
    return Object.values(m)
};