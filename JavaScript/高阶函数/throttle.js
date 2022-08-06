/*
 * @Author: cos
 * @Date: 2022-01-17 16:20:01
 * @LastEditTime: 2022-03-31 15:30:39
 * @LastEditors: cos
 * @Description: 
 * @FilePath: \code\js\throttle.js
 */
function throttle(fn, wait = 500) {
    var timer;
    return function(...args) {
        if(!timer) {
            fn.apply(this, args);
            timer = setTimeout(() => {
                console.log('setTimeout');
                timer = null;
            }, wait);
        }
    }
}
// 若无限次触发 节流的函数会间隔一段时间执行
// btn.onclick = throttle(function(e){
//     /* 事件处理 */
//     circle.innerHTML = parseInt(circle.innerHTML)+1;
//     circle.className = 'fade';
//     setTimeout(() => circle.className = '', 250);
// });
