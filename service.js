'use strict'

const Seneca = require('seneca')
const Mesh = require('seneca-mesh')
const Dsf = require('./lib/dsf')
const envs = process.env

const options = {
  seneca: {
    tag: envs.TFK_SENECA_DSF_TAG || 'tfk-seneca-dsf'
  },
  mesh: {
    auto: true,
    listen: [
      {pin: 'role:dsf, cmd:lookup', model: 'consume'}
    ]
  },
  dsf: {
  },
  isolated: {
    host: envs.TFK_SENECA_DSF_HOST || 'localhost',
    port: envs.TFK_SENECA_DSF_PORT || 8000
  }
}

var Service = Seneca(options.seneca)

if (envs.TFK_SENECA_DSF_ISOLATED) {
  Service.listen(options.isolated)
} else {
  Service.use(Mesh, options.mesh)
}

Service.use(Dsf, options.dsf)
