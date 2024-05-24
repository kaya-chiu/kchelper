const setFieldShown = (fieldCode, isShown, isMobile = false) => {
  try {
    const show = isShown === true ? true : false

    if (isMobile === true) {
      return kintone.mobile.app.record.setFieldShown(fieldCode, show)
    } else {
      return kintone.app.record.setFieldShown(fieldCode, show)
    }
  } catch (err) {
    console.error(err)
  }
}

module.exports = setFieldShown