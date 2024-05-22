const getDateString = (format, inputDate = new Date()) => {
  const year = inputDate.getFullYear().toString()
  const month = (inputDate.getMonth() + 1).toString().padStart(2, '0')
  const date = inputDate.getDate().toString().padStart(2, '0')
  
  let dateString
  switch (format) {
  case 'yyyymmdd':
    dateString = `${year}${month}${date}`
    break
  case 'yymmdd':
    dateString = `${year.slice(2, 4)}${month}${date}`
    break
  case 'yyyy-mm-dd':
    dateString = `${year}-${month}-${date}`
    break
  case 'yyyymm':
    dateString = `${year}${month}`
    break
  case 'yymm':
    dateString = `${year.slice(2, 4)}${month}`
    break
  default:
    dateString = `${year}${month}${date}`
    break
  }

  return dateString
}

module.exports = getDateString