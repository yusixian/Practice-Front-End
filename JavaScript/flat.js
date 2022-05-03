/*
 * @Author: cos
 * @Date: 2022-03-31 14:23:39
 * @LastEditTime: 2022-03-31 14:37:36
 * @LastEditors: cos
 * @Description: 数组拍平
 * @FilePath: \code\js\flat.js
 */
// 1. 利用es6中...操作符将数组拍平
// function flat(arr) {
//     while(arr.some(Array.isArray)) {
//         arr = [].concat(...arr);
//     }
//     return arr
// }
// 2. 利用reduce操作符将数组拍平
// function flat(arr) {
//     return arr.reduce((prev, cur) => {
//         return Array.isArray(cur) ? prev.concat(flat(cur)) : prev.concat(cur);
//     }, [])
// }
// 3. 利用forEach+concat将数组拍平
// function flat(arr) {
//     let res = []
//     arr.forEach(e => {
//         res = res.concat(Array.isArray(e) ? flat(e) : e)
//     });
//     return res
// }
// 4. 利用toString(仅当全为数字或字符串)
// function flat(arr) {
//     return arr.toString().split(',').map(e => isNaN(e) ? e : Number(e))
// }
// 测试
let a = [1, 2, [3, [4, 5]], [6, 7, 8]]
console.log(flat(a))