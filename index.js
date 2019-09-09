(function(root, factory) {
  // Support CommonJS
  if (typeof exports === 'object') {
    var randomColor = factory();

    // Support NodeJS & Component, which allow module.exports to be a function
    if (typeof module === 'object' && module && module.exports) {
      exports = module.exports = randomColor;
    }

    // Support CommonJS 1.1.1 spec
    exports.randomColor = randomColor;

    // Support AMD
  } else if (typeof define === 'function' && define.amd) {
    define([], factory);

    // Support vanilla script loading
  } else {
    root.randomColor = factory();
  }
})(this, function() {
  var randomColor = function(options) {
    return `mission controller v1, options:${JSON.stringify(options)}`;
  };

  return randomColor;
});
