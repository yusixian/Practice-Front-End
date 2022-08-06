/*
 * @Author: cos
 * @Date: 2022-08-04 16:40:31
 * @LastEditTime: 2022-08-06 22:16:21
 * @LastEditors: cos
 * @Description: 百度前端提前批一面真题...
 * @FilePath: \Practice-Front-End\JavaScript\手撕\扁平数组转树.test.ts
 */
type ChangeBefore = {
  id: number
  name: string
  parent?: number | null
}
type ChangeAfter = {
  id: number
  name: string
  children?: ChangeAfter[]
}
const data = [
  {
    name: '文本1',
    parent: null,
    id: 1,
  },
  {
    name: '文本2',
    id: 2,
    parent: 1,
  },
  {
    name: '文本3',
    parent: 2,
    id: 3,
  },
]
// 转成这个
const tar = [
  {
    name: '文本1',
    id: 1,
    children: [
      {
        name: '文本2',
        id: 2,
        children: [
          {
            name: '文本3',
            id: 3,
          },
        ],
      },
    ],
  },
]

function change(data: ChangeBefore[]): ChangeAfter[] {
  const res: ChangeAfter[] = []
  const m = new Map()
  for (let item of data) m.set(item.id, item)
  for (let item of data) {
    const { parent } = item
    if (!parent) {
      res.push(item)
    } else {
      const fa = m.get(parent)
      if (!fa.children) fa.children = [item]
      else fa.children.push(item)
    }
    delete item.parent
  }
  return res
}

describe('测试扁平数组转树', () => {
  it('data to tar', () => {
    const res = change(data)
    expect(JSON.stringify(res)).toEqual(JSON.stringify(tar))
  })
})
