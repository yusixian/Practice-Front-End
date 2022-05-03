// @algorithm @lc id=974 lang=javascript 
// @title reorder-data-in-log-files
// @test(["dig1 8 1 5 1","let1 art can","dig2 3 6","let2 own kit dig","let3 art zero"])=["let1 art can","let3 art zero","let2 own kit dig","dig1 8 1 5 1","dig2 3 6"]
// @test(["a1 9 2 3 1","g1 act car","zo4 4 7","ab1 off key dog","a8 act zoo"])=["g1 act car","a8 act zoo","ab1 off key dog","a1 9 2 3 1","zo4 4 7"]
/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function(logs) {
    let letters = []
    let digits = []
    for(let i = 0; i < logs.length; ++i) {
        let log = logs[i].split(' ')
        if(log[1].match(/^[a-z]+$/)) {
            letters.push(logs[i])
        } else {
            digits.push(logs[i])
        }
    }
    letters.sort((a, b) => {
        let arr1 = a.split(' ')
        let arr2 = b.split(' ')
        let [s1, s2] = [arr1.slice(1).join(' '), arr2.slice(1).join(' ')]
        if(s1 != s2) 
            return s1 < s2 ? -1 : 1
        return arr1[0] < arr2[0] ? -1 : 1
    })
    return letters.concat(digits)
};