# FED4 快速排序

描述

请补全 JavaScript 代码，要求将数组参数中的数字从小到大进行排序并返回该数组。
注意：

1. 数组元素仅包含数字
2. 请优先使用快速排序方法

示例 1

```
输入：
_quickSort([0,-1,1,-2,2])

输出：
[-2,-1,0,1,2]
```

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
  </head>
  <body>
    <script type="text/javascript">
      const _quickSort = (array) => {
        // 补全代码
      }
    </script>
  </body>
</html>
```

## 解答

快速排序，可以看之前写的这篇博客: [数据结构学习笔记<8 > 排序](https://ysx.cosine.ren/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0%EF%BC%9C8%EF%BC%9E%20%E6%8E%92%E5%BA%8F#%E5%BF%AB%E9%80%9F%E6%8E%92%E5%BA%8F)

```javascript
const _quickSort = (array) => {
  const quickSort = (s, e) => {
    if (s > e) return
    let [l, r] = [s, e]
    let k = array[s]
    while (l < r) {
      while (l < r && array[r] >= k) r--
      while (l < r && array[l] <= k) l++
      ;[array[l], array[r]] = [array[r], array[l]]
    }
    ;[array[s], array[l]] = [array[l], array[s]]
    quickSort(s, l - 1)
    quickSort(l + 1, e)
  }
  quickSort(0, array.length - 1)
  return array
}
```
