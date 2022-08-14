# FED10 \_objectCreate

[FED10 \_objectCreate](https://www.nowcoder.com/practice/213d0ef21cb841de8cf69fcc5ea60eb6?tpId=274&tags=&title=&difficulty=0&judgeStatus=0&rp=1&sourceUrl=%2Fexam%2Foj%3Fpage%3D1%26pageSize%3D50%26search%3D%26tab%3DJS%25E7%25AF%2587%26topicId%3D274)

描述
请补全 JavaScript 代码，要求实现 Object.create 函数的功能且该新函数命名为"\_objectCreate"。

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

使用现有的对象来提供新创建的对象的 proto

```javascript
Object.prototype._objectCreate = function (obj) {
  const newObj = {}
  newObj.__proto__ = obj.prototype
  return newObj
}

describe('_objectCreate test', () => {
  it('expect(obj2.name).toEqual(obj1.name)', () => {
    let obj1 = { name: 'obj1' }
    let obj2 = Object.create(obj1)
    expect(obj2.name).toEqual(obj1.name)
  })
})
```
