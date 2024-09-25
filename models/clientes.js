'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Clientes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Clientes.init({
    nombre: DataTypes.STRING,
    correoElectronico: DataTypes.STRING,
    numeroLicencia: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Clientes',
    tableName: 'clientes'
  });
  return Clientes;
};