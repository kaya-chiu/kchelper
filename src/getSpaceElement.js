const getSpaceElement = (spaceId, isMobile) => {
  try {
    if (isMobile === true) {
      return kintone.mobile.app.record.getSpaceElement(spaceId)
    } else {
      return kintone.app.record.getSpaceElement(spaceId)
    }
  } catch (err) {
    console.error(`kchelper getSpaceElement: ${err}`)
  }
}

module.exports = getSpaceElement