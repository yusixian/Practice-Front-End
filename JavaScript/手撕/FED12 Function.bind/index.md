# FED12 Function.bind

[FED12 Function.bind](https://www.nowcoder.com/practice/ecad0164931847f78c55278cee56e544?tpId=274&tags=&title=&difficulty=0&judgeStatus=0&rp=1&sourceUrl=%2Fexam%2Foj%253Fpage)

描述

请补全 JavaScript 代码，要求实现 Function.bind 函数的功能且该新函数命名为"\_bind"。

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

[bind](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) 方法使用一个给定的 this 返回绑定了这个 this 后的函数

> bind 函数绑定的时候还能传参,可以像这样子

```javascript
Function.prototype._call = function _call(ctx = window, ...args) {
  let key = Symbol('fn')
  ctx[key] = this
  const res = ctx[key](...args)
  delete ctx[key]
  return res
}

describe('_objectCreate test', () => {
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
