const getRecord = (isMobile) => {
  try {
    if (isMobile === true) {
      return kintone.mobile.app.record.get().record
    } else {
      return kintone.app.record.get().record
    }
  } catch (err) {
    console.error(`kchelper getRecord: ${err}`)
  }
}

const setRecord = (record, isMobile) => {
  try {
    if (isMobile === true) {
      return kintone.mobile.app.record.set({ record })
    } else {
      return kintone.app.record.set({ record })
    }
  } catch (err) {
    console.error(`kchelper setRecord: ${err}`)
  }
}

module.exports = { getRecord, setRecord }