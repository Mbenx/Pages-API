'use strict';


/**
 * Facebook Login & Register
 *
 * body Sosialparams 
 * returns successfacebook
 **/
exports.facebook = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "code" : 200,
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
  "messages" : [ "Login Facebook Success", "Login Facebook Success" ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Forget Password
 *
 * body Paramsforget 
 * returns forgetsuccess
 **/
exports.forgetPassword = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "code" : 200,
  "data" : "{}",
  "messages" : [ "Email Has sent", "Email Has sent" ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Google Login & Register
 *
 * body Sosialparams 
 * returns successgoogle
 **/
exports.google = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "code" : 200,
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
  "messages" : [ "Login Google Success", "Login Google Success" ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Manual Login
 *
 * body Loginparams 
 * returns successlogin
 **/
exports.login = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "code" : 200,
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
  "messages" : [ "Login Success", "Login Success" ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Manual Register
 *
 * body Registerparams 
 * returns successlogin
 **/
exports.register = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "code" : 200,
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
  "messages" : [ "Login Success", "Login Success" ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Reset Password
 *
 * body Paramsreset 
 * returns resetsuccess
 **/
exports.resetPassword = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "code" : 200,
  "data" : "{}",
  "messages" : [ "Reset password success", "Reset password success" ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

