'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Alquiler extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Alquiler.belongsTo(models.Clientes, {
        foreignKey: 'clienteId',
        as: 'clientes'
      });

      Alquiler.belongsTo(models.Autos, {
        foreignKey: 'autoId',
        as: 'autos'
      });
    }
  }
  Alquiler.init({
    clienteId: DataTypes.INTEGER,
    autoId: DataTypes.INTEGER,
    fechaInicio: DataTypes.DATE,
    fechaFin: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Alquiler',
    tableName: 'alquilers'
  });
  return Alquiler;
};