import Sequelize from 'sequelize';

require('dotenv').config();

const u = process.env.DB_USER;
const p = process.env.DB_PASS;
const n = process.env.DB_NAME;

const sequelize = new Sequelize(n, u, p, {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 3306,

    dialect: 'mysql',
    operatorsAliases: false,

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

export default sequelize;