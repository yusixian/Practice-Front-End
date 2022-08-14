# FED8 Array.Filter

[FED8 Array.Filter](https://www.nowcoder.com/practice/93b96e9694634437898353f844d877af?tpId=274&tags=&title=&difficulty=0&judgeStatus=0&rp=1&sourceUrl=%2Fexam%2Foj%3Fpage%3D1%26pageSize%3D50%26search%3D%26tab%3DJS%25E7%25AF%2587%26topicId%3D274)

请补全 JavaScript 代码，要求实现 Array.filter 函数的功能且该新函数命名为"\_filter"。

输入

```
[1,2]._filter(i => i>1)
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

filter 传入一个函数，对数组里每项运用这个函数，将返回值为真的组合构成新的数组。

传入的这个函数参数为 value 和 index 也就是值和当前下标

```javascript
Array.prototype._filter = function (fn) {
  const arr = this
  const res = []
  for (let i = 0; i < arr.length; ++i) {
    if (fn(arr[i], i)) res.push(arr[i])
  }
  return res
}
describe('_filter test', () => {
  it('[1, 2, 3]._filter((v) => v < 2)', () => {
    expect([1, 2, 3]._filter((v) => v < 2)).toEqual([1, 2, 3].filter((v) => v < 2))
  })
  it('[1, 2, 3]._filter((v, i) => i >= 1)', () => {
    expect([1, 2, 3]._filter((v, i) => i >= 1)).toEqual([1, 2, 3].filter((v, i) => i >= 1))
  })
})
```
