# FED9 Array.reduce

[FED9 Array.reduce](https://www.nowcoder.com/practice/213d0ef21cb841de8cf69fcc5ea60eb6?tpId=274&tags=&title=&difficulty=0&judgeStatus=0&rp=1&sourceUrl=%2Fexam%2Foj%3Fpage%3D1%26pageSize%3D50%26search%3D%26tab%3DJS%25E7%25AF%2587%26topicId%3D274)

请补全 JavaScript 代码，要求实现 Array.reduce 函数的功能且该新函数命名为"\_reduce"。

输入

```
[1,2,3]._reduce((left, right) => left + right)
```

输出

```
[2]
```

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

~~有手就行~~

reduce((pre, cur) => => { /_ ... _/ }, initVal ) 方法对数组中的每个元素执行 fn 函数，每一次运行 fn 会将先前元素的计算结果作为参数传入，最后将其结果汇总为单个返回值。 若传了 initVal 则从第一个元素开始，否则从第二个元素开始，以第一个元素作为上一个元素

```javascript
Array.prototype._map = function (fn) {
  const arr = this
  const res = []
  for (let i = 0; i < arr.length; ++i) {
    res.push(fn(arr[i], i))
  }
  return res
}
describe('_map test', () => {
  it('[1, 2, 3].map((v) => v * 2)', () => {
    expect([1, 2, 3]._map((v) => v * 2)).toEqual([1, 2, 3].map((v) => v * 2))
  })
  it('[1, 2, 3].map((v, i) => i * 2 + v)', () => {
    expect([1, 2, 3]._map((v, i) => i * 2 + v)).toEqual([1, 2, 3].map((v, i) => i * 2 + v))
  })
})
```
