/* config-overrides.js
*
*   This was created to support react-rewired
*
*   this module allows us to pull additional babel plugins, like npm install --save styled-jsx, into
*   the project without ejecting the react-app
* */

const {injectBabelPlugin} = require('react-app-rewired')
const rewireMobX = require('react-app-rewire-mobx')
const rewirePreact = require('react-app-rewire-preact')

module.exports = (config, env) => {
  // inject styled-jsx plugin
  config = injectBabelPlugin('styled-jsx/babel', config)

  if (env === 'production') {
    console.log('Production build with Preact')
    config = rewirePreact(config, env)
  }

  config = rewireMobX(config, env)

  return config;
}