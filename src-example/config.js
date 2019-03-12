const merge = require('lodash/merge')

const apiToken = 10205265819442398
export const apiPrefix = `https://superheroapi.com/api/10205265819442398`

const config = {
  all: {
    env: process.env.NODE_ENV || 'development',
    isDev: process.env.NODE_ENV !== 'production',
    basename: process.env.PUBLIC_PATH,
    isBrowser: typeof window !== 'undefined',
  },
  test: {},
  development: {},
  production: {},
}

module.exports = merge(config.all, config[config.all.env])
