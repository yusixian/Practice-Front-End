/*
 * @Author: cos
 * @Date: 2022-01-17 16:26:01
 * @LastEditTime: 2022-03-23 11:22:10
 * @LastEditors: cos
 * @Description: 
 * @FilePath: \code\js\debounce.js
 */
function debounce(fn, dur) {
    dur = dur || 100;   // dur若不存在则设置dur为100ms
    var timer;
    return function() {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(this, arguments);
        }, dur);
    }
}
// 若无限次触发 防抖的函数不会被执行