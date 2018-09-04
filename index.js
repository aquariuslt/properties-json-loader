const _ = require('lodash');
const path = require('path');
const log = require('fancy-log');
const properties = require('properties');
const loaderUtils = require('loader-utils');

const DEFAULT_OPTIONS = {
  namespaces: true
};

const EXPORT_PREFIX = 'module.exports = ';

module.exports = function(source) {
  let $this = this;

  let options = _.merge(DEFAULT_OPTIONS, loaderUtils.getOptions($this));
  let callback = $this.async();

  properties.parse(source, options, function(error, parsedProperties) {
    if (error) {
      log.error('properties parse error with:', error);
    }
    let stringifyProperties = JSON.stringify(parsedProperties);
    let modularizePropertiesContent = EXPORT_PREFIX + stringifyProperties;
    return callback(null, modularizePropertiesContent);
  });
};
