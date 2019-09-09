(function(root, factory) {
  root.missionBuildStepAlias = factory();
})(this, function() {
  var missionBuildStep = function({
    elementId,
    name,
    description = '',
    position,
    stageId,
    defaultThumbUrl
  }) {
    return {
      id: uuid.v4(),
      element_id: elementId,
      element_type: 'io.skore.events.content',
      name,
      description,
      position,
      stage_id: stageId,
      controllers: [],
      retry: {
        enabled: false,
        max_attempt: 0,
        interval: 0
      },
      thumb_url: defaultThumbUrl,
      success_criteria: {
        type: 'ACCESS',
        value: 100,
        operator: '='
      }
    };
  };
  return missionBuildStep;
});
