import * as properties from 'properties';
import { getOptions } from 'loader-utils';


const DEFAULT_OPTIONS = {
  namespaces: true
};

const MODULE_EXPORTS_PREFIX = `module.exports = `;
const ES_MODULE_EXPORT_PREFIX = `export default`;

export default function propertyJsonLoader(source: string) {
  const options = Object.assign({}, DEFAULT_OPTIONS, getOptions(this));

  let content = {};
  try {
    content = properties.parse(source, options);
  } catch (e) {
    throw e;
  }
  const esModule =
    typeof options.esModule !== 'undefined' ? options.esModule : true;

  const exportPrefix = esModule ?
    ES_MODULE_EXPORT_PREFIX :
    MODULE_EXPORTS_PREFIX;

  return `${exportPrefix}${JSON.stringify(content)}`;
}



