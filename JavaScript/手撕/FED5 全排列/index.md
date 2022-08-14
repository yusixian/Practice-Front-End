# FED5 全排列

[FED5 全排列](https://www.nowcoder.com/practice/b3ac35e1569e4601b6d3957dd337e70b?tpId=274&tags=&title=&difficulty=0&judgeStatus=0&rp=1&sourceUrl=%2Fexam%2Foj%3Fpage%3D1%26pageSize%3D50%26search%3D%26tab%3DJS%25E7%25AF%2587%26topicId%3D274)

描述

请补全 JavaScript 代码，要求以数组的形式返回字符串参数的所有排列组合。
注意：

1. 字符串参数中的字符无重复且仅包含小写字母
2. 返回的排列组合数组不区分顺序

示例 1

输入：

```
_permute('abc')
```

输出：

```
['abc','acb','bac','bca','cab','cba']
```

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
  </head>
  <body>
    <script type="text/javascript">
      const _permute = (string) => {
        // 补全代码
      }
    </script>
  </body>
</html>
```

## 解答

全排列 easy 啦

```javascript
const _permute = (str) => {
  const res = []
  const n = str.length
  const vis = new Array(n).fill(false)
  const permu = (s) => {
    if (s.length == str.length) return res.push(s)
    for (let i = 0; i < n; ++i) {
      if (vis[i]) continue
      vis[i] = true
      permu(s + str[i])
      vis[i] = false
    }
  }
  permu('')
  console.log(res)
  return res
}
```
