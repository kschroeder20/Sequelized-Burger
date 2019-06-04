'use strict';
module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define('Customer', {
    name: DataTypes.STRING
  }, {});
  Customer.associate = function(models) {
    // Customer has many burgers
    Customer.hasMany(models.Burger);
  };
  return Customer;
};