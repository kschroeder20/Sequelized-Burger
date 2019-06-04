'use strict';
module.exports = (sequelize, DataTypes) => {
  const Burger = sequelize.define('Burger', {
    burger_name: DataTypes.STRING,
    devoured: {
      type: DataTypes.BOOLEAN,
      default: false
    }
  }, {});
  Burger.associate = function(models) {
    // Burger belongs to a customer
    Burger.belongsTo(models.Customer)
  };
  return Burger;
};