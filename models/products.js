'use strict';
const {
  Model, DECIMAL
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      products.hasMany(models.categories,{
        foreignKey:"category_id"
      })
      products.hasMany(models.banners,{
        foreignKey:"category_id"
      })
    }
  }
  products.init({
    image: DataTypes.BLOB,
    description: DataTypes.STRING,
    title:DataTypes.STRING,
    category_id: DataTypes.INTEGER,
    price: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'products',
  });
  return products;
};