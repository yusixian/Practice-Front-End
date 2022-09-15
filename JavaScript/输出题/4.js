async function fn() {
  try {
    await new Promise((resolve) => {
      resolve(1)
      console.log(2)
    }).then((v) => {
      console.log(v)
      throw Error(3)
    })
  } catch (e) {
    console.log(e)
  } finally {
    console.log(4)
  }
}
fn()
console.log(5)

// try {
//   new Promise((resolve) => {
//     resolve(1)
//     console.log(2)
//   }).then((v) => {
//     console.log(v)
//     // throw Error(3)
//   })
// } catch (e) {
//   console.log(e)
// } finally {
//   console.log(4)
// }
// console.log(5)
