'use strict';

var utils = require('../utils/writer.js');
var DetailInformation = require('../service/DetailInformationService');

module.exports.userIdGET = function userIdGET (req, res, next) {
  var id = req.swagger.params['id'].value;
  DetailInformation.userIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.userIdPUT = function userIdPUT (req, res, next) {
  var id = req.swagger.params['id'].value;
  DetailInformation.userIdPUT(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
