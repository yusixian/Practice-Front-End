const _quickSort = (array: number[]) => {
  const quickSort = (s: number, e: number) => {
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
describe('测试快速排序', () => {
  it('[0, -1, 1, -2, 2]', () => {
    expect(_quickSort([0, -1, 1, -2, 2])).toEqual([-2, -1, 0, 1, 2])
  })
})
