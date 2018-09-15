import compiler from './compiler';

describe('properties-json-loader', () => {

  it('# should default options convert properties to flatten json', async () => {
    const stats = await compiler('fixtures/sample.properties');
    const output = stats.toJson().modules[0].source;

    const EXPECT_OUTPUT = `module.exports = {"test":{"key":"Test Key Label"}}`;

    expect(output).toBe(EXPECT_OUTPUT);
  });
});
