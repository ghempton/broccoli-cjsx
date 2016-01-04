'use strict';

var Filter = require('broccoli-filter');
var transform = require('coffee-react-transform');

module.exports = CjsxFilter;

CjsxFilter.prototype = Object.create(Filter.prototype);
CjsxFilter.prototype.constructor = CjsxFilter;

function CjsxFilter (inputTree, options) {
  if (!(this instanceof CjsxFilter)){
    return new CjsxFilter(inputTree, options);
  }

  var options = options || {};
  Filter.call(this, inputTree, {
    extensions: options.extensions
  });
}

CjsxFilter.prototype.extensions = ['cjsx'];
CjsxFilter.prototype.targetExtension = 'coffee';

CjsxFilter.prototype.processString = function (string) {
  var result = transform(string);

  return result;
};
