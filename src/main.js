const { isMobile } = require('./utils')
const { getFieldElement, getFieldElements } = require('./getFieldElement')
const getSpaceElement = require('./getSpaceElement')
const getDateString = require('./getDateString')
const hideField = require('./hideField')
const showField = require('./showField')
const { getRecord, setRecord } = require('./getAndSetRecord')

const kchelper = {
  isMobile,
  getFieldElement, getFieldElements,
  getSpaceElement,
  getDateString,
  hideField, showField,
  getRecord, setRecord
}

module.exports = kchelper