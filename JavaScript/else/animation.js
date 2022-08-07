/*
 * @Author: cos
 * @Date: 2022-05-03 21:35:09
 * @LastEditTime: 2022-08-06 22:49:43
 * @LastEditors: cos
 * @Description: 字节青训营的代码 JS动画封装
 * @FilePath: \Practice-Front-End\JavaScript\else\animation.js
 */
const ball = document.querySelector('.ball')
const draw = (progress) => {
  ball.style.transform = `translate(${progress}px, 0)`
}
// 沿x轴匀速运动
animate({
  duration: 1000,
  easing(timeFraction) {
    return timeFraction * 100
  },
  draw,
})
function easing(timeFraction) {
  return timeFraction ** 2 //timeFraction的平方
}
function animate({ easing, draw, duration }) {
  let start = performance.now() // 取当前时间
  return new Promise((resolve) => {
    requestAnimationFrame(function animate(time) {
      let timeFraction = (time - start) / duration
      if (timeFraction > 1) timeFraction = 1

      let progress = easing(timeFraction)

      draw(progress)

      if (timeFraction < 1) {
        requestAnimationFrame(animate)
      } else {
        resolve()
      }
    })
  })
}
