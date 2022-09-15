Function.prototype.a = () => console.log('1')
Object.prototype.b = () => console.log('2')

let A = function () {}

let a = new A()

console.log(a.a()) // Uncaught TypeError: a.a is not a function

console.log(a.b())
console.log(A.a())
console.log(A.b())
// 2
// undefined
// 1
// undefined
// 2
// undefined
