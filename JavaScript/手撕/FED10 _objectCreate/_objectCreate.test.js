Object.prototype._objectCreate = function (obj) {
  const newObj = {}
  newObj.__proto__ = obj.prototype
  return newObj
}

describe('_objectCreate test', () => {
  it('expect(obj2.name).toEqual(obj1.name)', () => {
    let obj1 = { name: 'obj1' }
    let obj2 = Object.create(obj1)
    expect(obj2.name).toEqual(obj1.name)
  })
})
