describe('测试合法url', () => {
  it('正则 简陋版', () => {
    const _isUrl = (url: string) => {
      return /^(https|https)?:\/\/([\w\d]+\.)+([\w\d]{2,6})(:\d)+?/.test(url)
    }
    expect(_isUrl('http://.com:80?name=?&age=1')).toEqual(false)
    expect(_isUrl('https://a.b.c.com:8080/get?name=?&age=1')).toEqual(true)
  })
})
