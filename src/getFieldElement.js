const getFieldElement = (fieldCode, isMobile) => {
  try {
    if (isMobile === true) {
      return kintone.mobile.app.record.getFieldElement(fieldCode)
    } else {
      return kintone.app.record.getFieldElement(fieldCode)
    }
  } catch (err) {
    console.error(`kchelper getFieldElement: ${err}`)
  }
}

const getFieldElements = (fieldCode, isMobile) => {
  try {
    if (isMobile === true) {
      return kintone.mobile.app.getFieldElements(fieldCode)
    } else {
      return kintone.app.getFieldElements(fieldCode)
    }
  } catch (err) {
    console.error(`kchelper getFieldElements: ${err}`)
  }
}

module.exports = {
  getFieldElement,
  getFieldElements
}