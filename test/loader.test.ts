import compiler from './compiler';

describe('properties-json-loader', () => {

  it('# should default options convert properties to flatten json.', async (done) => {
    const stats = await compiler('__fixtures__/sample.properties');
    const output = stats.toJson().modules[0].source;

    const EXPECT_OUTPUT = `module.exports = {"test":{"key":"Test key label"}}`;

    expect(output).toBe(EXPECT_OUTPUT);
    expect(output).toMatchSnapshot();
    done()
  });

  it('# should log error when parse non-well formatted properties file.', async (done) => {

    try {
      await compiler('__fixtures__/sample-error.properties');
    }catch (e) {
      expect(e).toMatchSnapshot();
    }

    done();
  });
});
