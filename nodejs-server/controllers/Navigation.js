'use strict';

var utils = require('../utils/writer.js');
var Navigation = require('../service/NavigationService');

module.exports.getListNavigation = function getListNavigation (req, res, next) {
  var code = req.swagger.params['code'].value;
  Navigation.getListNavigation(code)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
