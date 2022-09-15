var a = { x: 2, y: 3 }
var b = a
a.x = a = { n: 1 }
console.log(a)
console.log(b)
// { n: 1 }
// { x: { n: 1 }, y: 3 }