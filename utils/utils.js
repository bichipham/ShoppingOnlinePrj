export const formatNumberToMoney = (number, defaultNum, predicate) => {
  predicate = !predicate ? '' : '' + predicate
  if (
    number === 0 ||
        number === '' ||
        number == null ||
        number === 'undefined' ||
        isNaN(number) === true ||
        number === '0' ||
        number === '00' ||
        number === '000'
  ) { return '0' + predicate }

  const array = []
  let result = ''
  let count = 0

  if (!number) {
    return defaultNum || '' + predicate
  }

  let flag1 = false
  if (number < 0) {
    number = -number
    flag1 = true
  }

  let numberString = number.toString()
  if (numberString.length < 3) {
    if (flag1) numberString = '-' + numberString
    return numberString + predicate
  }

  for (let i = numberString.length - 1; i >= 0; i--) {
    count += 1
    if (numberString[i] === '.' || numberString[i] === ',') {
      array.push(',')
      count = 0
    } else {
      array.push(numberString[i])
    }
    if (count === 3 && i >= 1) {
      array.push('.')
      count = 0
    }
  }

  for (let i = array.length - 1; i >= 0; i--) {
    result += array[i]
  }

  if (flag1) result = '-' + result

  return result + ' ' + predicate
}

export const calculateTotalMoney = (carts) => {
  let total = 0
  carts.forEach(item => {
    const { price = 0, quantity = 0 } = item || {}
    total += price * quantity
  })
  return total
}
