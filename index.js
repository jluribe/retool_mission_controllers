(function(root, factory) {
  // Support CommonJS
  if (typeof exports === 'object') {
    var buildStep = factory();

    // Support NodeJS & Component, which allow module.exports to be a function
    if (typeof module === 'object' && module && module.exports) {
      exports = module.exports = buildStep;
    }

    // Support CommonJS 1.1.1 spec
    exports.buildStep = buildStep;

    // Support AMD
  } else if (typeof define === 'function' && define.amd) {
    define([], factory);

    // Support vanilla script loading
  } else {
    root.buildStep = factory();
  }
})(this, function() {
  var buildStep = function({
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

  return buildStep;
});
