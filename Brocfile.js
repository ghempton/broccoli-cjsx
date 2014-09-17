'use strict';

function react() {
  var build = require('./index');

  var tree = build('./test/fixture/');

  return build(tree, {extensions: ['coffee']});
}

module.exports = react();
