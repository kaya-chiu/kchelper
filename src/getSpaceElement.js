const { isMobile } = require('./utils')

const getSpaceElement = (event, id) => {
  if (isMobile(event)) {
    return kintone.mobile.app.record.getSpaceElement(id)
  } else {
    return kintone.app.record.getSpaceElement(id)
  }
}

module.exports = getSpaceElement