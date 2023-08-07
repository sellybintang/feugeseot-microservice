'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Trucks extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Trucks.init({
    name: DataTypes.STRING,
    code: DataTypes.STRING,
    number_of_gears: DataTypes.INTEGER,
    number_of_tires: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Trucks',
  });
  return Trucks;
};