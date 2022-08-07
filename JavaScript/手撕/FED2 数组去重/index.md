# FED2 数组去重

[FED2 数组去重](https://www.nowcoder.com/practice/7a26729a75ca4e5db49ea059b01305c9?tpId=274&tqId=39521&rp=1&ru=%2Fexam%2Foj&qru=%2Fexam%2Foj&sourceUrl=%2Fexam%2Foj%3Fpage%3D1%26pageSize%3D50%26search%3D%26tab%3DJS%25E7%25AF%2587%26topicId%3D274&difficulty=undefined&judgeStatus=undefined&tags=&title=)

请补全 JavaScript 代码，要求去除数组参数中的重复数字项并返回该数组。

注意：

1. 数组元素仅包含数字

示例 1

输入：

```
_deleteRepeat([-1,1,2,2])
```

输出:

```
[-1,1,2]
```

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
  </head>
  <body>
    <script type="text/javascript">
      const _deleteRepeat = (array) => {
        // 补全代码
      }
    </script>
  </body>
</html>
```

## 解答

~~有手就行~~

```javascript
const _deleteRepeat = (array: number[]) => {
  return Array.from(new Set(array))
}
// or
const _deleteRepeat = (array) => {
  return [...new Set(array)]
}
```
