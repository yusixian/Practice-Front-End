// @algorithm @lc id=915 lang=javascript 
// @title generate-random-point-in-a-circle
/**
 * @param {number} radius
 * @param {number} x_center
 * @param {number} y_center
 */
 var Solution = function(radius, x_center, y_center) {
    this.r = radius
    this.cx = x_center
    this.cy = y_center
};

/**
 * @return {number[]}
 */
Solution.prototype.randPoint = function() {
    while(true) {
        let x = Math.random()*(2*this.r) - this.r
        let y = Math.random()*(2*this.r) - this.r
        if (x * x + y * y <= this.r * this.r) 
            return [this.cx+x, this.cy+y]
    }
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(radius, x_center, y_center)
 * var param_1 = obj.randPoint()
 */