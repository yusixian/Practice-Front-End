describe('测试数组去重', () => {
  const data = [-1, 1, 2, 2]
  const tar = [-1, 1, 2]
  it('Array from Set', () => {
    const _deleteRepeat = (array: number[]) => Array.from(new Set(array))
    expect(_deleteRepeat(data)).toEqual(tar)
  })
  it('...Set', () => {
    const _deleteRepeat = (array: number[]) => [...new Set(array)]
    expect(_deleteRepeat(data)).toEqual(tar)
  })
})
