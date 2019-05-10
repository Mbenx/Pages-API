'use strict';

var utils = require('../utils/writer.js');
var PageContent = require('../service/PageContentService');

module.exports.findPageBlog = function findPageBlog (req, res, next) {
  var id = req.swagger.params['id'].value;
  PageContent.findPageBlog(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.findPageFAQ = function findPageFAQ (req, res, next) {
  var id = req.swagger.params['id'].value;
  PageContent.findPageFAQ(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.findPageTestimonies = function findPageTestimonies (req, res, next) {
  var id = req.swagger.params['id'].value;
  PageContent.findPageTestimonies(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getGalleries = function getGalleries (req, res, next) {
  var id = req.swagger.params['id'].value;
  PageContent.getGalleries(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getGuidelines = function getGuidelines (req, res, next) {
  var id = req.swagger.params['id'].value;
  PageContent.getGuidelines(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getListPageBanner = function getListPageBanner (req, res, next) {
  var id = req.swagger.params['id'].value;
  PageContent.getListPageBanner(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getListPageLink = function getListPageLink (req, res, next) {
  var id = req.swagger.params['id'].value;
  PageContent.getListPageLink(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getListPageVariant = function getListPageVariant (req, res, next) {
  var id = req.swagger.params['id'].value;
  PageContent.getListPageVariant(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getProducts = function getProducts (req, res, next) {
  var id = req.swagger.params['id'].value;
  PageContent.getProducts(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.pagesIdSeoGET = function pagesIdSeoGET (req, res, next) {
  var id = req.swagger.params['id'].value;
  PageContent.pagesIdSeoGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
