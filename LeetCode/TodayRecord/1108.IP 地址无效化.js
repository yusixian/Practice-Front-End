// @algorithm @lc id=1205 lang=javascript 
// @title defanging-an-ip-address
import * as a from 'algm'
// @test("1.1.1.1")="1[.]1[.]1[.]1"
// @test("255.100.50.0")="255[.]100[.]50[.]0"
/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    return address.replace(/\./g, "[.]")
};