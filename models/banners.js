'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class banners extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      banners.hasOne(models.categories,{
        foreignKey:"category_id"
      })
      banners.hasOne(models.products,{
        foreignKey:"category_id"
      })

    }
  }
  banners.init({
    image: DataTypes.BLOB,
    description: DataTypes.TEXT,
    category_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'banners',
  });
  return banners;
};