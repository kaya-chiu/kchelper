const hideField = (fieldCode, isMobile) => {
  try {
    if (isMobile === true) {
      return kintone.mobile.app.record.setFieldShown(fieldCode, false)
    } else {
      return kintone.app.record.setFieldShown(fieldCode, false)
    }
  } catch (err) {
    console.error(`kchelper hideField: ${err}`)
  }
}

module.exports = hideField