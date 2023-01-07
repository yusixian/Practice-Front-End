const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})
/**
 * 剑指 Offer 48. 最长不含重复字符的子字符串 原题
 * 少说见过三四遍了，常做常新：https://ysx.cosine.ren/coding-train/leetcode/offer/day10/#%E5%89%91%E6%8C%87-offer-48-%E6%9C%80%E9%95%BF%E4%B8%8D%E5%90%AB%E9%87%8D%E5%A4%8D%E5%AD%97%E7%AC%A6%E7%9A%84%E5%AD%90%E5%AD%97%E7%AC%A6%E4%B8%B2
 */
function solve(str) {
  let m = new Map()
  let maxlen = 0
  let [l, r] = [0, 0]
  while (r < str.length) {
    let ch = str[r]
    let rec = m.get(ch)
    if (m.has(ch) && m.get(ch) !== -1) {
      // 重复了，跑到不重复的地方
      while (l <= rec) m.set(str[l++], -1)
      maxlen = Math.max(maxlen, r - l + 1)
    } else {
      // 不重复
      maxlen = Math.max(maxlen, r - l + 1)
      m.set(ch, r)
      r++
    }
  }
  console.log(maxlen)
}
rl.on('line', function (line) {
  const tokens = line.split(' ')
  solve(line)
})
