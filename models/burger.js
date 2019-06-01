// // This file uses the orm to make the changes to the db
// var orm = require("../config/orm");

// var burger = {
//     all: function (cb) {
//         orm.all("burgers", function (res) {
//             // Pass through to the controller
//             cb(res);
//         });
//     },
//     // The variables cols and vals are arrays.
//     create: function (cols, vals, cb) {
//         orm.create("burgers", cols, vals, function (res) {
//             // Pass through to the controller
//             cb(res);
//         });
//     },
//     update: function (objColVals, condtion, cb) {
//         orm.update("burgers", objColVals, condtion, function (res) {
//             // Pass through to the controller
//             cb(res);
//         });
//     }
// };

// // Export the database functions for the controller
// module.exports = burger;

module.exports = function (sequelize, DataTypes) {
    var Burger = sequelize.define("Burger", {
        burger_name: DataTypes.STRING,
        devoured: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    });
    return Burger;
};
