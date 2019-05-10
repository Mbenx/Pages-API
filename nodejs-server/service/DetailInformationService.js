'use strict';


/**
 * Get user by id
 *
 * id String 
 * returns User
 **/
exports.userIdGET = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "code" : "200",
  "data" : {
    "birthdate" : "birthdate",
    "gender" : "gender",
    "created_at" : "2018-01-25T02:12:06.611Z",
    "source_type" : "Platform::User",
    "avatar" : "avatar",
    "deleted_at" : "deleted_at",
    "updated_at" : "2019-05-08T09:00:18.882Z",
    "role_id" : "1",
    "phone" : "080989999",
    "name" : "Pearly Adi Negoro",
    "integration" : {
      "id" : 26955,
      "type" : "Platform::User"
    },
    "id" : "141",
    "source_id" : "26955",
    "email" : "pearly@printerous.com"
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


/**
 * Update user by id
 *
 * id String 
 * returns User
 **/
exports.userIdPUT = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "code" : "200",
  "data" : {
    "birthdate" : "birthdate",
    "gender" : "gender",
    "created_at" : "2018-01-25T02:12:06.611Z",
    "source_type" : "Platform::User",
    "avatar" : "avatar",
    "deleted_at" : "deleted_at",
    "updated_at" : "2019-05-08T09:00:18.882Z",
    "role_id" : "1",
    "phone" : "080989999",
    "name" : "Pearly Adi Negoro",
    "integration" : {
      "id" : 26955,
      "type" : "Platform::User"
    },
    "id" : "141",
    "source_id" : "26955",
    "email" : "pearly@printerous.com"
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

