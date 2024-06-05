const showField = (fieldCode, isMobile) => {
  try {
    if (isMobile === true) {
      return kintone.mobile.app.record.setFieldShown(fieldCode, true)
    } else {
      return kintone.app.record.setFieldShown(fieldCode, true)
    }
  } catch (err) {
    console.error(`kchelper showField: ${err}`)
  }
}

module.exports = showField