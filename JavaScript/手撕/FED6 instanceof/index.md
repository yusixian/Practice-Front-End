# FED6 instanceof

[FED6 instanceof](https://www.nowcoder.com/practice/a1169935fd6145899f953ba8fbccb585?tpId=274&tags=&title=&difficulty=0&judgeStatus=0&rp=1&sourceUrl=%2Fexam%2Foj%3Fpage%3D1%26pageSize%3D50%26search%3D%26tab%3DJS%25E7%25AF%2587%26topicId%3D274)

请补全 JavaScript 代码，要求以 Boolean 的形式返回第一个实例参数是否在第二个函数参数的原型链上。

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
  </head>
  <body>
    <script type="text/javascript">
      const _instanceof = (target, Fn) => {
        // 补全代码
      }
    </script>
  </body>
</html>
```

## 解答

原型链，具体可以看这篇博客 [深入 JavaScript 学习之路（一）对象、类与面向对象编程](https://ysx.cosine.ren/js-learning-1/#原型链)

```javascript
const _instanceof = (target, Fn) => {
  while (target.__proto__ != null) {
    target = target.__proto__
    if (target == Fn.prototype) return true
  }
  return false
}
```

几个测试用例：

```javascript
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
```

```

```
