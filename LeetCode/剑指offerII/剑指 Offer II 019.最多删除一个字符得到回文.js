// @algorithm @lc id=1000255 lang=javascript 
// @title RQku0D
/**
 * @param {string} s
 * @return {boolean}
 */
 function isPalind(s) {
    let rs = s.split('').reverse().join('');
    // console.log("isPalind:", s, rs);
    return s === rs;
}
var validPalindrome = function(s) {
    let ans = true;
    let [l, r] = [0, s.length-1];
    while(l <= r) {
        if(s[l] != s[r]) 
            return isPalind(s.slice(l+1, r+1)) || isPalind(s.slice(l, r));
        ++l, --r;
    }
    return ans;
};