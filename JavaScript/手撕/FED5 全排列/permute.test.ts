const _permute = (str: string): string[] => {
  const res: string[] = []
  const n = str.length
  const vis = new Array(n).fill(false)
  const permu = (s: string) => {
    if (s.length == str.length) return res.push(s)
    for (let i = 0; i < n; ++i) {
      if (vis[i]) continue
      vis[i] = true
      permu(s + str[i])
      vis[i] = false
    }
  }
  permu('')
  return res
}
describe('测试全排列', () => {
  it('abc', () => {
    expect(_permute('abc')).toEqual(['abc', 'acb', 'bac', 'bca', 'cab', 'cba'])
  })
})
