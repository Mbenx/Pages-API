'use strict';


/**
 * Get List of Navigation
 * Get list Navigation for
 *
 * code String Code of Navigation Type
 * returns List
 **/
exports.getListNavigation = function(code) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "page_url" : "/business-card",
  "custom_link" : "",
  "thumbnail" : "https://www.printerous.com/id/business/images/HD/business_page/product/business-card_01.jpg",
  "sub_menu" : [ {
    "page_url" : "/business-card-standard",
    "custom_link" : "",
    "thumbnail" : "https://www.printerous.com/id/business/images/HD/business_page/product/business-card_01.jpg",
    "name" : "Business Card Standard",
    "description" : "Cetak kartu nama online di Printerous dengan harga murah, cepat, praktis untuk kebutuhan Anda"
  }, {
    "page_url" : "/business-card-standard",
    "custom_link" : "",
    "thumbnail" : "https://www.printerous.com/id/business/images/HD/business_page/product/business-card_01.jpg",
    "name" : "Business Card Standard",
    "description" : "Cetak kartu nama online di Printerous dengan harga murah, cepat, praktis untuk kebutuhan Anda"
  } ],
  "name" : "Business Card",
  "description" : "Cetak kartu nama online di Printerous dengan harga murah, cepat, praktis untuk kebutuhan Anda"
}, {
  "page_url" : "/business-card",
  "custom_link" : "",
  "thumbnail" : "https://www.printerous.com/id/business/images/HD/business_page/product/business-card_01.jpg",
  "sub_menu" : [ {
    "page_url" : "/business-card-standard",
    "custom_link" : "",
    "thumbnail" : "https://www.printerous.com/id/business/images/HD/business_page/product/business-card_01.jpg",
    "name" : "Business Card Standard",
    "description" : "Cetak kartu nama online di Printerous dengan harga murah, cepat, praktis untuk kebutuhan Anda"
  }, {
    "page_url" : "/business-card-standard",
    "custom_link" : "",
    "thumbnail" : "https://www.printerous.com/id/business/images/HD/business_page/product/business-card_01.jpg",
    "name" : "Business Card Standard",
    "description" : "Cetak kartu nama online di Printerous dengan harga murah, cepat, praktis untuk kebutuhan Anda"
  } ],
  "name" : "Business Card",
  "description" : "Cetak kartu nama online di Printerous dengan harga murah, cepat, praktis untuk kebutuhan Anda"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

