/*
 * @Author: cos
 * @Date: 2022-08-04 16:39:41
 * @LastEditTime: 2022-08-06 22:35:47
 * @LastEditors: cos
 * @Description: 发布订阅模式
 * @FilePath: \Practice-Front-End\JavaScript\设计模式\发布订阅模式.test.ts
 */
// 和观察者模式不同
class EventEmitter {
  events: {
    [name: string]: Function[]
  } = {}
  constructor() {
    this.events = {}
  }
  /**
   * @description: 订阅 接受一个事件名及其对应函数
   * @param {string} eventName 事件名
   * @param {Function} fn 函数
   */
  on(eventName: string, fn: Function) {
    if (this.events && this.events[eventName]) this.events[eventName].push(fn)
    else this.events[eventName] = [fn]
  }
  /**
   * @description: 取消订阅
   * @param {string} eventName 事件名
   * @param {Function} fn 函数
   */
  off(eventName: string, fn: Function) {
    if (!this.events[eventName]) return
    // 删除该事件
    this.events[eventName] = this.events[eventName].filter((nowFn) => nowFn != fn)
  }
  /**
   * @description: 发布该事件
   * @param {string} eventName 事件名
   * @param {Function} fn 函数
   */
  emit(eventName: string, ...args: any[]) {
    if (!this.events || !this.events[eventName]) return
    this.events[eventName].forEach((fn) => fn(...args))
  }
  /**
   * @description: 类似on订阅 但让该事件对应函数只执行一次后便卸载
   * @param {string} eventName 事件名
   * @param {Function} fn 函数
   */
  once(eventName: string, fn: Function) {
    let ctx = this
    function realFn(...args: any[]) {
      fn.call(ctx, ...args)
      ctx.off(eventName, realFn)
    }
    this.on(eventName, realFn)
  }
}
describe('测试发布订阅', () => {
  const emitter = new EventEmitter()
  const handleNormal = jest.fn()
  const handleOnce = jest.fn()
  test('handleNormal on button', () => {
    emitter.on('button', handleNormal)
    emitter.emit('button', '1111')
    emitter.emit('button', '2222')
    emitter.emit('button', '3333')
    expect(handleNormal).toBeCalledTimes(3)
  })
  test('handleOnce button', () => {
    emitter.once('button', handleOnce)
    emitter.emit('button', '4444')
    emitter.emit('button', '5555')
    expect(handleOnce).toBeCalledTimes(1)
    expect(handleNormal).toBeCalledTimes(2)
  })
  test('off button', () => {
    emitter.off('button', handleNormal)
    emitter.emit('button', '6666')
    expect(handleNormal).toBeCalledTimes(0)
  })
})
