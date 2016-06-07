'use strict'

const envs = process.env
const lookupDsf = require('./lookup-dsf')

module.exports = function (options) {
  const seneca = this

  seneca.add('role:dsf, cmd:lookup', lookupDsf)

  return {
    name: envs.TFK_SENECA_DSF_TAG || 'tfk-seneca-dsf'
  }
}
