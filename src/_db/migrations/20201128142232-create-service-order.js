'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Service_Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      serviceOrderDate: {
        allowNull: false,
        type: Sequelize.DATE
      },
      equipment: {
        allowNull: false,
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      requestedService: {
        allowNull: false,
        type: Sequelize.STRING
      },
      estimatedCost: {
        allowNull: false,
        type: Sequelize.DECIMAL(10, 2)
      },
      clientId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'Clients', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      technicianId: {
        type: Sequelize.INTEGER,
        references: {model: 'Users', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Service_Order');
  }
};
