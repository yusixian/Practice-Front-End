Array.prototype._map = function (fn) {
  const arr = this
  const res = []
  for (let i = 0; i < arr.length; ++i) {
    res.push(fn(arr[i], i))
  }
  return res
}
describe('_map test', () => {
  it('[1, 2, 3].map((v) => v * 2)', () => {
    expect([1, 2, 3]._map((v) => v * 2)).toEqual([1, 2, 3].map((v) => v * 2))
  })
  it('[1, 2, 3].map((v, i) => i * 2 + v)', () => {
    expect([1, 2, 3]._map((v, i) => i * 2 + v)).toEqual([1, 2, 3].map((v, i) => i * 2 + v))
  })
})
