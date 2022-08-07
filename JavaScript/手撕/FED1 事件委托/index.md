# FED1 事件委托

[FED1 事件委托](https://www.nowcoder.com/practice/02866b3ce7f8420c8b5d22f483c5fcc0?tpId=274&tqId=39521&rp=1&ru=/exam/oj&qru=/exam/oj&sourceUrl=%2Fexam%2Foj%3Fpage%3D1%26pageSize%3D50%26search%3D%26tab%3DJS%25E7%25AF%2587%26topicId%3D274&difficulty=undefined&judgeStatus=undefined&tags=&title=)

请补全 JavaScript 代码，要求如下：

1. 给"ul"标签添加点击事件
2. 当点击某"li"标签时，该标签内容拼接"."符号。如：某"li"标签被点击时，该标签内容为".."
   注意：
3. 必须使用 DOM0 级标准事件（onclick）

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
  </head>
  <body>
    <ul>
      <li>.</li>
      <li>.</li>
      <li>.</li>
    </ul>

    <script type="text/javascript">
      // 补全代码
    </script>
  </body>
</html>
```

## 解答

~~有手就行~~

- [事件介绍 - MDN](https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Building_blocks/Events)
- [Event.target](https://developer.mozilla.org/zh-CN/docs/Web/API/Event/target)

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
  </head>
  <body>
    <ul>
      <li>.</li>
      <li>.</li>
      <li>.</li>
    </ul>

    <script type="text/javascript">
      document.querySelector('ul').onclick = function (e) {
        e.target.innerHTML += '.'
      }
    </script>
  </body>
</html>
```
