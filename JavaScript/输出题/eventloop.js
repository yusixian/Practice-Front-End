/*
 * @Author: cos
 * @Date: 2022-03-23 11:59:26
 * @LastEditTime: 2022-03-23 12:00:35
 * @LastEditors: cos
 * @Description: 
 * @FilePath: \code\js\eventloop.js
 */
console.log('start');
 
setTimeout(() => {
    console.log('timeout');
}, 0);

let p = new Promise((resolve) => {
    console.log('promise start')
    resolve(1)
    console.log('promise end')
}).then((data) => {
    console.log('promise', data);
}).then((data) => {
    console.log('promise', data);
});

console.log('end');