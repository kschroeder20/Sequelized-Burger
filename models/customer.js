'use strict';
module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define('Customer', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});
  Customer.associate = function(models) {
    // Customer has many burgers
    Customer.hasMany(models.Burger);
  };
  return Customer;
};