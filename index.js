(function(root, factory) {
  console.log('init retool scritp');
  // Support CommonJS
  if (typeof exports === 'object') {
    console.log('retool scritp start exports object');
    var missionBuildStep = factory();

    // Support NodeJS & Component, which allow module.exports to be a function
    if (typeof module === 'object' && module && module.exports) {
      console.log('retool scritp start module object');
      exports = module.exports = missionBuildStep;
    }

    // Support CommonJS 1.1.1 spec
    exports.missionBuildStep = missionBuildStep;

    // Support AMD
  } else if (typeof define === 'function' && define.amd) {
    console.log('retool scritp start define function');
    define([], factory);

    // Support vanilla script loading
  } else {
    console.log('retool scritp start root');
    root.missionBuildStep = factory();
  }
  console.log('end retool scritp');
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
