const isMobile = event => {
  const { type } = event
  const isMobile = type.slice(0, 6) === 'mobile'
  return isMobile
}

module.exports = {
  isMobile
}