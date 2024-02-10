function printForecast(arr) {
  let forecast = ''
  for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
      forecast += `...${arr[i]}C in ${i + 1} day `
    } else {
      forecast += `...${arr[i]}C in ${i + 1} days `
    }

    return forecast
  }

  console.log(forecast)
}

printForecast([17, 21, 23])
