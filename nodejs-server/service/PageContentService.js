'use strict';


/**
 * Finds Page Blogs
 * Return list of blog posts
 *
 * id Long ID of page
 * returns List
 **/
exports.findPageBlog = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "code" : 0,
  "data" : {
    "thumbnail" : "thumbnail",
    "id" : 6,
    "position" : 1,
    "title" : "title",
    "content" : "content"
  },
  "message" : [ "message", "message" ]
}, {
  "code" : 0,
  "data" : {
    "thumbnail" : "thumbnail",
    "id" : 6,
    "position" : 1,
    "title" : "title",
    "content" : "content"
  },
  "message" : [ "message", "message" ]
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Find Page FAQs
 * Return list of page FAQ
 *
 * id Long ID of page
 * returns List
 **/
exports.findPageFAQ = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "code" : 0,
  "data" : {
    "question" : "question",
    "answer" : "answer",
    "id" : 6,
    "position" : 1
  },
  "message" : [ "message", "message" ]
}, {
  "code" : 0,
  "data" : {
    "question" : "question",
    "answer" : "answer",
    "id" : 6,
    "position" : 1
  },
  "message" : [ "message", "message" ]
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Find Page Testimonies
 * Return list of page FAQ
 *
 * id Long ID of page
 * returns List
 **/
exports.findPageTestimonies = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "code" : 0,
  "data" : {
    "image" : "image",
    "name" : "name",
    "id" : 6,
    "position" : 1,
    "avatar" : "avatar",
    "job_title" : "job_title",
    "content" : "content",
    "tags" : "tags"
  },
  "message" : [ "message", "message" ]
}, {
  "code" : 0,
  "data" : {
    "image" : "image",
    "name" : "name",
    "id" : 6,
    "position" : 1,
    "avatar" : "avatar",
    "job_title" : "job_title",
    "content" : "content",
    "tags" : "tags"
  },
  "message" : [ "message", "message" ]
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get List of Gallery
 * Get list Navigation for Category Bar
 *
 * id Long ID of page
 * returns SuccessGalle
 **/
exports.getGalleries = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "code" : 200,
  "data" : "",
  "message" : [ "Success", "Success" ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get List of Guidelines
 * Get list of Guidelines
 *
 * id Long ID of page
 * returns SuccessGuide
 **/
exports.getGuidelines = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "code" : 200,
  "data" : "",
  "message" : [ "Success", "Success" ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get List of Banner in Page
 * List of Banner in one page
 *
 * id Integer Page Id
 * returns List
 **/
exports.getListPageBanner = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "file" : "https://www.printerous.com/id/business/images/HD/business_page/product/business-card_01.jpg",
  "alt_text" : "Banner Business Card",
  "position" : 1,
  "title" : "business_card_banner",
  "headline" : "Kartu Nama",
  "subheadline" : "Yakinkan klienmu dengan satu set kartu nama yang memukau. Dengan sentuhan gaya personal, berikan calon klienmu sesuatu yang bisa selalu kamu banggakan",
  "tags" : ""
}, {
  "file" : "https://www.printerous.com/id/business/images/HD/business_page/product/business-card_01.jpg",
  "alt_text" : "Banner Business Card",
  "position" : 1,
  "title" : "business_card_banner",
  "headline" : "Kartu Nama",
  "subheadline" : "Yakinkan klienmu dengan satu set kartu nama yang memukau. Dengan sentuhan gaya personal, berikan calon klienmu sesuatu yang bisa selalu kamu banggakan",
  "tags" : ""
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get List of Variant in Page
 * List of Variant in one page
 *
 * id Integer Page Id
 * returns List
 **/
exports.getListPageLink = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "page_url" : "/business-card-standard",
  "unit" : "pcs",
  "thumbnail" : "https://www.printerous.com/id/business/images/HD/business_page/product/business-card_01.jpg",
  "starting_price" : 12500,
  "name" : "Standard",
  "position" : 1,
  "title" : "Business Card Standard"
}, {
  "page_url" : "/business-card-standard",
  "unit" : "pcs",
  "thumbnail" : "https://www.printerous.com/id/business/images/HD/business_page/product/business-card_01.jpg",
  "starting_price" : 12500,
  "name" : "Standard",
  "position" : 1,
  "title" : "Business Card Standard"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get List of Page Links / Description in Page
 * List of Page Links / Description in one page
 *
 * id Integer Page Id
 * returns List
 **/
exports.getListPageVariant = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "page_url" : "/business-card-standard",
  "image" : "https://www.printerous.com/id/business/images/HD/business_page/product/business-card_01.jpg",
  "alt_text" : "Business card Image",
  "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas sapien quis nulla venenatis, gravida vehicula risus imperdiet. Suspendisse ac tempus libero. Nam sit amet ex facilisis, sagittis dui ac, sodales lacus",
  "position" : 1,
  "title" : "We Are Different"
}, {
  "page_url" : "/business-card-standard",
  "image" : "https://www.printerous.com/id/business/images/HD/business_page/product/business-card_01.jpg",
  "alt_text" : "Business card Image",
  "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas sapien quis nulla venenatis, gravida vehicula risus imperdiet. Suspendisse ac tempus libero. Nam sit amet ex facilisis, sagittis dui ac, sodales lacus",
  "position" : 1,
  "title" : "We Are Different"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get List of Products
 * Get list of Products
 *
 * id Long ID of page
 * returns SuccessProd
 **/
exports.getProducts = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "code" : 200,
  "data" : "",
  "message" : [ "Success", "Success" ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get seo by id
 *
 * id String 
 * returns Seo
 **/
exports.pagesIdSeoGET = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "code" : "200",
  "data" : {
    "meta_description" : "meta_description",
    "title" : "title",
    "content" : "content"
  },
  "message" : ""
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

