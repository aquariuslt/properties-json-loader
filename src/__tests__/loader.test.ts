import * as webpack from 'webpack';
import * as path from 'path';
import * as fs from 'fs';
import compile from './compile';
import execute from './execute';

const readOutputAsset = (stats: webpack.Stats, assetFilename = 'bundle.js') => {
  const outputPath = stats.compilation.outputOptions.path;

  let output = '';

  try {
    output = fs.readFileSync(path.join(outputPath, assetFilename)).toString();
  } catch (error) {
    output = error.toString();
  }

  return output;
};


describe('properties-json-loader', () => {

  it('# should compile options convert properties to flatten json.', async (done) => {
    const stats = await compile('__fixtures__/index.js', {
      esModule: true
    });

    const output = execute(readOutputAsset(stats));


    const EXPECT_OUTPUT = `{"test":{"key":"Test key label"}}`;

    expect(JSON.stringify(output)).toBe(EXPECT_OUTPUT);
    expect(output).toMatchSnapshot();
    done();
  });

  it('# should log error when parse non-well formatted properties file.', async (done) => {

    try {
      await compile('__fixtures__/sample-error.properties');
    } catch (e) {
      expect(e).toMatchSnapshot();
    }

    done();
  }, 20000);
});
