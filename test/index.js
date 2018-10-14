'use strict';

var fs = require('fs');
var path = require('path');
var postcss = require('postcss');
var pxToViewport = require('..');
var css = fs.readFileSync(path.resolve(__dirname, './main.css'), 'utf8');

var options = {
    replace: false,
	selectorWhiteList: ['.__px_to_vw']
};
var processedCss = postcss(pxToViewport(options)).process(css).css;

fs.writeFile(path.resolve(__dirname, './main-viewport.css'), processedCss, function (err) {
  if (err) {
    throw err;
  }
  console.log('File with viewport units written.');
});
