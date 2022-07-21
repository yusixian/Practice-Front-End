// @algorithm @lc id=1000339 lang=javascript 
// @title 0H97ZC
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    let m = new Map()
    for(let i = 0; i < arr2.length; ++i)
        m.set(arr2[i], i)
    arr1.sort((a, b) => {
        const [f1, f2] = [m.has(a), m.has(b)]
        if(f1 && f2) return m.get(a) - m.get(b)
        else if(!f1 && !f2) return a-b
        else return f2
    })
    return arr1
};