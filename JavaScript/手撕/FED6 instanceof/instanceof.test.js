const _instanceof = (target, Fn) => {
  while (target.__proto__ != null) {
    target = target.__proto__
    if (target == Fn.prototype) return true
  }
  return false
}
console.log(_instanceof([1, 2, 3], Object))
describe('测试instanceof', () => {
  it('{} instanceof Object', () => {
    expect(_instanceof({}, Object)).toBe({} instanceof Object)
  })
  it('[1,2,3] instanceof Object', () => {
    expect(_instanceof([1, 2, 3], Object)).toBe([1, 2, 3] instanceof Object)
  })
  it('[] instanceof Array', () => {
    expect(_instanceof([], Array)).toBe([] instanceof Array)
  })
  it('new Object', () => {
    function Fa() {
      this.name = 'Fa'
    }
    function Fn() {
      this.__proto__ = Fa.prototype
      this.name = 'Fn'
    }
    let newObj = new Fn()
    expect(_instanceof(newObj, Fa)).toBe(newObj instanceof Fa)
  })
})
