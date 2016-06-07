'use strict'

const dsf = require('node-dsf')
const envs = process.env

module.exports = function loookupDsf (args, callback) {
  const config = {
    systemname: envs.TFK_SENECA_DSF_SYSTEM_NAME || 'systemname',
    url: envs.TFK_SENECA_DSF_SYSTEM_URL || 'http://ws-test.infotorg.no/xml/ErgoGroup/DetSentraleFolkeregister1_4/2015-08-10/DetSentraleFolkeregister1_4.wsdl',
    username: envs.TFK_SENECA_DSF_USERNAME || 'username',
    password: envs.TFK_SENECA_DSF_PASSWORD || 'password'
  }
  const method = args.method || 'hentDetaljer'
  var query = {
    saksref: envs.TFK_SENECA_DSF_SAKSREF || 'Saksref',
    foedselsnr: args.foedselsnr
  }

  if (args.etternavn && args.etternavn) {
    query.etternavn = args.etternavn
    query.fornavn = args.fornavn
  }

  const options = {
    method: method,
    config: config,
    query: query
  }

  dsf(options, function (error, data) {
    if (error) {
      callback(error, null)
    } else {
      callback(null, data)
    }
  })
}
