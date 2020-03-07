// Import the ORM to create functions that will interact with the database.
let orm = require("../config/orm.js");

let burgers = {
    all: function(cb) {
      orm.all("burgers", function(res) {
        cb(res);
      });
    },
    // The variables cols and vals are arrays.
    create: function(cols, vals, cb) {
      orm.create("burgers", cols, vals, function(res) {
        cb(res);
      });
    },
    devour: function(objColVals, condition, cb) {
      orm.devour("burgers", objColVals, condition, function(res) {
        cb(res);
      });
    },
    clear: function(condition, cb) {
        orm.clear("burgers", condition, function(res){
            cb(res);
        });
    }

  };
  
  // Export the database functions for the controller 
  module.exports = burgers;