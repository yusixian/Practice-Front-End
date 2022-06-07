// @algorithm @lc id=907 lang=javascript 
// @title koko-eating-bananas
// @test([3,6,7,11],8)=4
// @test([30,11,23,4,20],5)=30
// @test([30,11,23,4,20],6)=23
/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    function check(k) {
        let time = 0
        for(let i = 0; i < piles.length; ++i) {
            if(piles[i] <= k)
                ++time
            else time += Math.ceil(piles[i] / k)
            if(time > h) return false
        }
        return true
    }
    let [l, r] = [1, Math.max(...piles)]
    while(l < r) {
        let mid = (l+r) >> 1
        if(check(mid)) r = mid
        else l = mid + 1
    }
    return l
};