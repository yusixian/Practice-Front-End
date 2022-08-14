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
