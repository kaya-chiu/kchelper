const { isMobile } = require('./utils')

const getFieldElement = (event, fieldCode) => {
  if (isMobile(event)) {
    return kintone.mobile.app.record.getFieldElement(fieldCode)
  } else {
    return kintone.app.record.getFieldElement(fieldCode)
  }
}

const getFieldElements = (event, fieldCode) => {
  if (isMobile(event)) {
    return kintone.mobile.app.getFieldElements(fieldCode)
  } else {
    return kintone.app.getFieldElements(fieldCode)
  }
}

module.exports = {
  getFieldElement,
  getFieldElements
}