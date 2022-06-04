// @algorithm @lc id=965 lang=javascript 
// @title unique-email-addresses
import * as a from 'algm'
// @test(["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"])=2
// @test(["a@leetcode.com","b@leetcode.com","c@leetcode.com"])=3
/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
    let m = new Map()
    for(let i = 0; i < emails.length; ++i) {
        let [name, domain] = emails[i].split('@')
        let realName = ''
        for(let j = 0; j < name.length; ++j) {
            if(name[j] === '+') break
            else if(name[j] === '.')
                continue
            else realName += name[j]
        }
        m.set(`${realName}@${domain}`, true)
    }
    return m.size
};