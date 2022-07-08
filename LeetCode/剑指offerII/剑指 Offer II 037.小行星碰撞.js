// @algorithm @lc id=1000281 lang=javascript 
// @title XagZNi
/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    let [s, i] = [[], 0]
    while(i < asteroids.length) {
        if(s.length == 0 || s[s.length-1] < 0 || asteroids[i] > 0) {
            s.push(asteroids[i])
        } else if( s[s.length-1] <= -asteroids[i]) {
            if(s.pop() < -asteroids[i])
                continue
        }
        i++
    }
    return s
};