const { missionBuildStepAlias } = require('./index');

test('build Step', () => {
  expect(missionBuildStepAlias({ element_id: 1 })).toEqual({
    element_id: 1
  });
});
