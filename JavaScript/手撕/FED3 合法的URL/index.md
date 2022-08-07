# FED3 合法的 URL

[FED3 合法的 URL](https://www.nowcoder.com/practice/81982d7a36aa436fa9143c8b4f5ea1a3?tpId=274&tags=&title=&difficulty=0&judgeStatus=0&rp=1&sourceUrl=%2Fexam%2Foj%3Fpage%3D1%26pageSize%3D50%26search%3D%26tab%3DJS%25E7%25AF%2587%26topicId%3D274)

请补全 JavaScript 代码，要求以 Boolean 的形式返回字符串参数是否为合法的 URL 格式。
注意：

1. 协议仅为 HTTP(S)

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
  </head>
  <body>
    <script type="text/javascript">
      const _isUrl = (url) => {
        // 补全代码
      }
    </script>
  </body>
</html>
```

## 解答

主要考 [正则](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions)

简易一点就这么写

```javascript
const _isUrl = (url: string) => {
  return /^(https|https)?:\/\/([\w\d]+\.)+([\w\d]{2,6})(:\d)+?/.test(url)
}
```
