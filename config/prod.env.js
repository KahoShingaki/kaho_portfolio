'use strict'
module.exports = {
  NODE_ENV: '"production"',
  MAILGUN_DOMAIN: JSON.stringify(process.env.MAILGUN_DOMAIN)
  MAILGUN_APIKEY: JSON.stringify(process.env.MAILGUN_APIKEY)
}
