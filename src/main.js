const { isMobile } = require('./utils')
const { getFieldElement, getFieldElements } = require('./getFieldElement')
const getSpaceElement = require('./getSpaceElement')
const getDateString = require('./getDateString')
const hideField = require('./hideField')
const { getRecord, setRecord } = require('./getAndSetRecord')

const kchelper = {
  isMobile,
  getFieldElement, getFieldElements,
  getSpaceElement,
  getDateString,
  hideField,
  getRecord, setRecord
}

module.exports = kchelper