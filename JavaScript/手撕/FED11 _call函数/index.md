# FED11 \_call 函数

[FED11 \_call 函数](https://www.nowcoder.com/practice/22df1ed71b204a46b00587fdb780b3ab?tpId=274&tags=&title=&difficulty=0&judgeStatus=0&rp=1&sourceUrl=%2Fexam%2Foj%253Fpage)

描述

请补全 JavaScript 代码，要求实现 Function.call 函数的功能且该新函数命名为"\_call"。

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
  </head>
  <body>
    <script type="text/javascript">
      // 补全代码
    </script>
  </body>
</html>
```

## 解答

[call](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/call) 方法使用一个给定的 this 值和单独给出的一个或多个参数来调用一个函数,他接受的是一个参数列表,而 apply 方法接受的则是一个包含多个参数的数组

```javascript
Function.prototype._call = function _call(ctx = window, ...args) {
  let key = Symbol('fn')
  ctx[key] = this
  const res = ctx[key](...args)
  delete ctx[key]
  return res
}

describe('_call test', () => {
  it('Product._call(this, name, price)', () => {
    function Product(name, price) {
      this.name = name
      this.price = price
    }
    function Food(name, price) {
      Product._call(this, name, price)
      this.category = 'food'
    }
    expect(new Food('cheese', 5).name).toEqual('cheese')
  })
})
```
