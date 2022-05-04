// @algorithm @lc id=100328 lang=javascript 
// @title fan-zhuan-dan-ci-shun-xu-lcof
/**
 * @param {string} s
 * @return {string}
 */
 var reverseWords = function(s) {
    let trim2arr = function(str) {
        let arr = []
        let [l, r] = [0, 0]
        while(l < str.length) {
            while(l < str.length && str[l] === ' ') ++l
            r = l
            while(r < str.length && str[r] !== ' ') ++r
            arr.push(...str.slice(l, r), ' ')
            l = r
        }
        while(arr[arr.length-1] == ' ') arr.pop()
        return arr
    }
    let reverse = function(str, s, e) {
        while(s < e) {
            [str[s], str[e]] = [str[e], str[s]]
            ++s, --e
        }
    }
    let reverseWord = function(arr) {
        let [l, r] = [0, 0]
        while(l < arr.length) {
            while(l < arr.length && arr[l] === ' ') ++l
            r = l
            while(r < arr.length && arr[r] !== ' ') ++r
            reverse(arr, l, r - 1)
            l = r
        }
    }
    let ans = trim2arr(s)               // JS字符串不可变，需要转换成数组
    reverse(ans, 0, ans.length - 1)     // 反转整个字符串
    reverseWord(ans)                    // 反转每个单词
    return ans.join('')                 // 数组转换成字符串
};