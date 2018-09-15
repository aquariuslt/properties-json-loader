import compiler from './compiler';

test('# Expect default options will use namespaces ', async () => {
  const stats = await compiler('test.properties');
  const output = stats.toJson().modules[0].source;

  const EXPECT_OUTPUT = `module.exports = {"test":{"key":"Test Key Label"}}`;

  expect(output).toBe(EXPECT_OUTPUT);
});
