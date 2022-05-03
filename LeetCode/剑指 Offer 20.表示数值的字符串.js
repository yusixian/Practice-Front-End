// @algorithm @lc id=100290 lang=javascript 
// @title biao-shi-shu-zhi-de-zi-fu-chuan-lcof
/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
    s = s.trim()    // 去除前后空格
    if(s.length == 0) return false
    function isDigit(ch) {
        return ch >= '0' && ch <= '9'
    }
    function judgeInt(s) {
        let cnt = 0
        if(s[cnt] == '-' || s[cnt] == '+')
            ++cnt
        if(cnt == s.length) return false
        while(cnt < s.length) {
            if(isDigit(s[cnt])) ++cnt 
            else return false
        }
        return true
    }
    function judgeDouble(s) {
        let cnt = 0
        if(s[cnt] == '-' || s[cnt] == '+') 
            ++cnt
        let isDot = false
        let pre = ''
        if(cnt == s.length) return false
        while(cnt < s.length) {
            if(s[cnt] == '.') {
                if(isDot) return false
                if(pre.length == 0 && ( cnt+1 >= s.length || !isDigit(s[cnt+1]) ) ) 
                    return false
                isDot = true
                ++cnt
            } else if(isDigit(s[cnt])) {
                if(!isDot) pre += s[cnt]
                ++cnt
            } else return false
        }
        return true
    }
    let idx = s.indexOf('e')
    if(idx == -1) idx = s.indexOf('E')
    if(idx != -1) {
        let pre = s.slice(0, idx)
        let post = s.slice(idx + 1)
        return (judgeDouble(pre) || judgeInt(pre)) && judgeInt(post)
    } 
    return judgeInt(s) || judgeDouble(s)
};