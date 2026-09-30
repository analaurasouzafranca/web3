const { DataTypes } = require('sequelize');
const sequelize = require('../config/bd');

const FichaTecnica = sequelize.define(
  'FichaTecnica',
  {
    duracao: {
      type: DataTypes.INTEGER,
    },
    pais: {
      type: DataTypes.STRING,
    },
    idioma: {
      type: DataTypes.STRING,
    },
    orcamento: {
      type: DataTypes.STRING,
    }
  },
  {
    tableName: 'FichasTecnicas',
    timestamps: true
  }
);

module.exports = FichaTecnica;
