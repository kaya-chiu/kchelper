const { isMobile } = require('./utils')
const { getFieldElement, getFieldElements } = require('./getFieldElement')
const getSpaceElement = require('./getSpaceElement')
const getDateString = require('./getDateString')

const kchelper = {
  isMobile,
  getFieldElement, getFieldElements,
  getSpaceElement,
  getDateString,
}

module.exports = kchelper