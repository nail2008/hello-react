'use strict';

const path = require('path');
const args = require('minimist')(process.argv.slice(2));

// List of allowed environments
const allowedEnvs = ['dev', 'dist', 'test'];

// Set the correct environment
var env;
if (args._.length > 0 && args._.indexOf('start') !== -1) {
  env = 'test';
} else if (args.env) {
  env = args.env;
} else {
  env = 'dev';
}
process.env.REACT_WEBPACK_ENV = env;
console.log("env="+env);

/**
 * Build the webpack configuration
 * @param  {String} wantedEnv The wanted environment
 * @return {Object} Webpack config
 */
function buildConfig(wantedEnv) {
  let isValid = wantedEnv && wantedEnv.length > 0 && allowedEnvs.indexOf(wantedEnv) !== -1;
  let validEnv = isValid ? wantedEnv : 'dev';
  let config = require(path.join(__dirname, 'cfg/' + validEnv));
  return config;
}

module.exports = buildConfig(env);

//webpack 配置说明
//真正的配置都在cfg文件夹中的文件
//defaults.js 进行一些默认的配置，包括默认端口、默认加载器、publicPath、srcPath，这些配置信息会在webpack配置文件中引用
//base.js、dev.js、dist.js、test.js 文件是webpack的配置文件，其中base.js是基础文件，dev、dist、test都会引用这个文件，再做相应的改变
