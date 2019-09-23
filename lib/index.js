"use strict";
const _ = require("lodash");
const properties = require("properties");
const loaderUtils = require("loader-utils");
const DEFAULT_OPTIONS = {
    namespaces: true
};
const MODULE_EXPORTS_PREFIX = `module.exports = `;
function loader(source) {
    const options = _.merge(DEFAULT_OPTIONS, loaderUtils.getOptions(this));
    let content = '';
    try {
        content = properties.parse(source, options);
    }
    catch (e) {
        throw e;
    }
    return `${MODULE_EXPORTS_PREFIX}${JSON.stringify(content)}`;
}
module.exports = loader;
//# sourceMappingURL=index.js.map