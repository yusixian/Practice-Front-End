// @algorithm @lc id=100340 lang=javascript 
// @title ba-zi-fu-chuan-zhuan-huan-cheng-zheng-shu-lcof
/**
 * @param {string} str
 * @return {number}
 */
var strToInt = function(str) {
    let flag = 1;
    let [ans, idx] = [0, 0]
    while(idx < str.length && str[idx] == ' ') ++idx;
    if(idx < str.length && (str[idx] == '-' || str[idx] == '+')) {
        str[idx] == '-' ? flag = -1 : flag = 1
        ++idx
    }
    function isDigit(ch) {
        return ch >= '0' && ch <= '9'
    }
    let Int_max = Math.pow(2,31) - 1
    let Int_min = -Math.pow(2,31)
    while(idx < str.length && isDigit(str[idx])) {
        ans = ans * 10 + (str[idx] - '0')
        if(ans*flag >= Int_max) return Int_max
        else if(ans*flag <= Int_min) return Int_min
        ++idx
    }
    return ans*flag
};