'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Receiver extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Receiver.belongsTo(models.User)
    }
  }
  Receiver.init({
    NomorExcel: DataTypes.INTEGER,
    NomorKasbon: DataTypes.INTEGER,
    Penerima: DataTypes.STRING,
    UserId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Receiver',
  });
  return Receiver;
};