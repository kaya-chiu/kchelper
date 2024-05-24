const { isMobile } = require('./utils')
const { getFieldElement, getFieldElements } = require('./getFieldElement')
const getSpaceElement = require('./getSpaceElement')
const getDateString = require('./getDateString')
const setFieldShown = require('./setFieldShown')

const kchelper = {
  isMobile,
  getFieldElement, getFieldElements,
  getSpaceElement,
  getDateString,
  setFieldShown
}

module.exports = kchelper