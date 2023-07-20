function somaFunc(a) {
  return function (b) {
    return a + b;
  }
}

const somaArrow = (a) => {
  return (b) => {
    return a + b;
  }
}

const somar5 = somaFunc(5)

console.log(typeof somar5) // function
console.log(somar5(2)) // 7

const somar10 = somaArrow(10)
console.log(typeof somar10) // function
console.log(somar10(2)) // 12

console.log(
  somaFunc(40)(2) // 42
)
console.log(
  somaArrow(21)(21) // 42
)
