'use strict';

var utils = require('../utils/writer.js');
var LoginRegister = require('../service/LoginRegisterService');

module.exports.facebook = function facebook (req, res, next) {
  var body = req.swagger.params['body'].value;
  LoginRegister.facebook(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.forgetPassword = function forgetPassword (req, res, next) {
  var body = req.swagger.params['body'].value;
  LoginRegister.forgetPassword(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.google = function google (req, res, next) {
  var body = req.swagger.params['body'].value;
  LoginRegister.google(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.login = function login (req, res, next) {
  var body = req.swagger.params['body'].value;
  LoginRegister.login(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.register = function register (req, res, next) {
  var body = req.swagger.params['body'].value;
  LoginRegister.register(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.resetPassword = function resetPassword (req, res, next) {
  var body = req.swagger.params['body'].value;
  LoginRegister.resetPassword(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
