const _ = require('lodash');
const path = require('path');
const log = require('fancy-log');
const properties = require('properties');
const loaderUtils = require('loader-utils');

const DEFAULT_OPTIONS = {
  path: true,
  namespaces: true
};

const EXPORT_PREFIX = 'module.exports = ';

module.exports = function(source) {
  let $this = this;

  let options = _.merge(DEFAULT_OPTIONS, loaderUtils.getOptions());
  let callback = $this.async();

  let conf = JSON.parse(source);
  let propertiesPath = path.resolve(conf.path);

  properties.parse(propertiesPath, options, function(error, parsedProperties) {
    if (error) {
      log.error('properties parse error with:', propertiesPath);
      log.error(error);

      let stringifyProperties = JSON.stringify(parsedProperties);
      let modularizePropertiesContent = EXPORT_PREFIX + stringifyProperties;
      return callback(null, modularizePropertiesContent);
    }
  });
};
