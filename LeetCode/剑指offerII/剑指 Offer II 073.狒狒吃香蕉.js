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