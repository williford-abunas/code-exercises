let output = []

function fibonacciGenerator(n) {
  for (let i = 0; i < n; i++) {
    if (i === 0) {
      output.push(i)
    } else if (i === 1) {
      output.push(i)
    } else {
      let sum = output[i - 1] + output[i - 2]
      output.push(sum)
    }
  }

  return output
}

fibonacciGenerator(4)
