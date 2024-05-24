const isMobile = event => {
  try {
    const type = event?.type || null
    if (!event || !type) {
      console.warn('kchelper isMobile: Failed to get kintone event type. Return default value (false).')
      return false
    }

    const isMobile = type.slice(0, 6) === 'mobile'
    return isMobile
  } catch (err) {
    console.error(`kchelper isMobile: ${err}`)
  }
}

module.exports = {
  isMobile
}