// @algorithm @lc id=1951 lang=javascript 
// @title find-the-winner-of-the-circular-game
// @test(5,2)=3
// @test(6,5)=1
/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findTheWinner = function(n, k) {
    let vis = new Array(n).fill(false);
    let [idx, cnt, total] = [0, 0, n]   // cnt为数了多少次
    while(true) {
        if(vis[idx]) {
            idx = (idx + 1) % n;
            continue
        }
        if(total == 1) return idx+1
        if(++cnt == k) {
            --total;
            vis[idx] = true;
            cnt = 0;
        }
        idx = (idx + 1) % n;
    }   
};