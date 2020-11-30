'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Service_Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Client, {foreignKey: 'clientId', as: 'so_client'});
      this.belongsTo(models.User, {foreignKey: 'technicianId', as: 'so_user'});
    }
  };
  Service_Order.init({
    serviceOrderDate: DataTypes.DATE,
    equipment: DataTypes.STRING,
    description: DataTypes.STRING,
    requestedService: DataTypes.STRING,
    estimatedCost: DataTypes.DECIMAL(10, 2)
  }, {
    sequelize,
    modelName: 'Service_Order',
  });
  return Service_Order;
};