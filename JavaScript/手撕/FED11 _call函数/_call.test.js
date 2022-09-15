Function.prototype._call = function _call(ctx = window, ...args) {
  let key = Symbol('fn')
  ctx[key] = this
  const res = ctx[key](...args)
  delete ctx[key]
  return res
}

describe('_call test', () => {
  it('Product._call(this, name, price)', () => {
    function Product(name, price) {
      this.name = name
      this.price = price
    }
    function Food(name, price) {
      Product._call(this, name, price)
      this.category = 'food'
    }
    expect(new Food('cheese', 5).name).toEqual('cheese')
  })
})
