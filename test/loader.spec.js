import compiler from './compiler';

describe('properties-json-loader', () => {

  it('# should default options convert properties to flatten json.', async () => {
    const stats = await compiler('fixtures/sample.properties');
    const output = stats.toJson().modules[0].source;

    const EXPECT_OUTPUT = `module.exports = {"test":{"key":"Test key label"}}`;

    expect(output).toBe(EXPECT_OUTPUT);
  });

  it('# should log error when parse non-well formatted properties file.', async () => {
    const stats = await compiler('fixtures/sample-error.properties');
    const output = stats.toJson().modules[0].source;

    const EXPECT_OUTPUT = `module.exports = undefined`;

    expect(output).toBe(EXPECT_OUTPUT);
  });
});
