// @algorithm @lc id=100306 lang=javascript 
// @title zhan-de-ya-ru-dan-chu-xu-lie-lcof
/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {
    let s = []
    let cnt = 0
    for(let i = 0; i < pushed.length; ++i) {
        s.push(pushed[i])
        while(s.length > 0 && s[s.length - 1] === popped[cnt]) {
            s.pop()
            ++cnt
        }
    }
    return s.length == 0
};