const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Evento = sequelize.define('Evento', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    data: {
        type: DataTypes.DATE,
        allowNull: false
    },
    local: {
        type: DataTypes.STRING,
        allowNull: false
    },
    preco: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    descricao: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    horario: {
        type: DataTypes.TIME,
        allowNull: false
    },
    quantidade: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

module.exports = Evento;