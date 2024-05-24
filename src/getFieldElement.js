const getFieldElement = (fieldCode, isMobile) => {
  try {
    if (isMobile === true) {
      return kintone.mobile.app.record.getFieldElement(fieldCode)
    } else {
      return kintone.app.record.getFieldElement(fieldCode)
    }
  } catch (err) {
    console.error(err)
  }
}

const getFieldElements = (fieldCode, isMobile) => {
  try {
    if (isMobile === true) {
      return kintone.mobile.app.record.getFieldElements(fieldCode)
    } else {
      return kintone.app.record.getFieldElements(fieldCode)
    }
  } catch (err) {
    console.error(err)
  }
}

module.exports = {
  getFieldElement,
  getFieldElements
}