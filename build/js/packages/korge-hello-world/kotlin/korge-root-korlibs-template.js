(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    root['korge-root-korlibs-template'] = factory(typeof this['korge-root-korlibs-template'] === 'undefined' ? {} : this['korge-root-korlibs-template']);
}(this, function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  return _;
}));
