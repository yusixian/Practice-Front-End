var x = 10
var x = 30
function a(y) {
  var x = 20
  return b(y)
}
function b(y) {
  for (let x = 0; x < 30; ++x) {}
  return x + y
}
console.log(a(20))
