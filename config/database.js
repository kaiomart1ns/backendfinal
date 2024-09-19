const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('martins_bilheteira', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    logging: console.log
});

module.exports = sequelize;