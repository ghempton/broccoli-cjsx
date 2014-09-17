/*jslint indent: 2, node: true, nomen: true, browser: true*/
/*global it, after, describe */

'use strict';

var assert = require('assert');
var fs = require('fs');
var rimraf = require('rimraf');
var expectedOutput = fs.readFileSync('test/expected/test.coffee', 'utf8');

after(function () {
  rimraf.sync('test/temp/');
  rimraf.sync('tmp');
});

describe('File creation', function(){
  it('should compile .cjsx files', function () {
    assert.equal(
      expectedOutput,
      fs.readFileSync('test/temp/jsx/test.coffee', 'utf8')
    );
  });

  it('should compile .coffee files', function () {
    assert.equal(
      expectedOutput,
      fs.readFileSync('test/temp/js/test-options.coffee', 'utf8')
    );
  });
});
