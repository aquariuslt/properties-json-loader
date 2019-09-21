import * as _ from 'lodash';
import * as properties from 'properties';
import * as loaderUtils from 'loader-utils';


const DEFAULT_OPTIONS = {
  namespaces: true
};


const MODULE_EXPORTS_PREFIX = `module.exports = `;


function loader(source:string){
  const options = _.merge(DEFAULT_OPTIONS, loaderUtils.getOptions(this));

  let content = '';
  try {
    content = properties.parse(source, options);
  }catch (e) {
    throw e
  }
  return `${MODULE_EXPORTS_PREFIX}${JSON.stringify(content)}`;
}


export = loader;
