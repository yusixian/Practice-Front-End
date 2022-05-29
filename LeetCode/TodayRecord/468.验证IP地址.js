// @algorithm @lc id=468 lang=javascript 
// @title validate-ip-address
// @test("172.16.254.1")="IPv4"
// @test("2001:0db8:85a3:0:0:8A2E:0370:7334")="IPv6"
// @test("256.256.256.256")="Neither"
/**
 * @param {string} queryIP
 * @return {string}
 */
var validIPAddress = function(queryIP) {
    function isValidIPv4(ip) {
        let arr = ip.split('.')
        if (arr.length !== 4) return 'Neither'
        for(let i = 0; i < arr.length; i++) {
            let [num, s] = [0, arr[i]]
            if(s.length === 0 || s.length > 3) return 'Neither'
            if(s.length != 1 && s[0] == '0') return 'Neither'   // 不能前导零
            for(let j = 0; j < s.length; j++) {
                if (s[j] >= '0' && s[j] <= '9') {
                    num = num * 10 + (s.charCodeAt(j) - '0'.charCodeAt())
                } else return 'Neither'
            }
            if(num < 0 || num > 255) return 'Neither'
        }
        return 'IPv4'
    }
    function isValidIPv6(ip) {
        let arr = ip.split(':')
        if (arr.length !== 8) return 'Neither'
        for(let i = 0; i < arr.length; i++) {
            let [num, s] = [0, arr[i]]
            if(s.length === 0 || s.length > 4) return 'Neither'
            for(let j = 0; j < s.length; j++) {
                if ((s[j] >= '0' && s[j] <= '9') || (s[j].toLowerCase() <= 'f' && s[j].toLowerCase() >= 'a')) continue
                else return 'Neither'
            }
        }
        return 'IPv6'
    }
    if(queryIP.includes('.')){
        return isValidIPv4(queryIP)
    } else if(queryIP.includes(':')){
        return isValidIPv6(queryIP)
    } else return 'Neither'
};