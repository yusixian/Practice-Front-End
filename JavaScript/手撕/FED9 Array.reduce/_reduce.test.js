Array.prototype._reduce = function (fn, initVal) {
  const arr = this
  if (arr.length <= 1 && initVal == null) throw Error('TypeError: Reduce of empty array with no initial value')
  let pre = arr[0]
  let s = 1
  if (initVal != null) {
    pre = initVal
    s = 0
  }
  for (let i = s; i < arr.length; ++i) {
    pre = fn(pre, arr[i])
  }
  return pre
}

describe('_reduce test', () => {
  it('[1, 2, 3]._reduce((pre, cur) => pre + cur)', () => {
    expect([1, 2, 3]._reduce((pre, cur) => pre + cur)).toEqual([1, 2, 3].reduce((pre, cur) => pre + cur))
  })
  it('[1, 2, 3]._reduce((pre, cur) => pre + cur, 10)', () => {
    expect([1, 2, 3]._reduce((pre, cur) => pre + cur, 10)).toEqual([1, 2, 3].reduce((pre, cur) => pre + cur, 10))
  })
})
