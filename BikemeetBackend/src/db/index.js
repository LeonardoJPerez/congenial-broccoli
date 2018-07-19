import Sequelize from 'sequelize';

require('dotenv').config();

export default function init(dbname, dbconfig = {}) {
    const n = dbname || process.env.DB_NAME;

    console.log(n)

    const u = dbconfig.user || process.env.DB_USER;
    const p = dbconfig.pass || process.env.DB_PASS;

    const envHost = process.env.DB_HOST || 'localhost';
    const envPort = process.env.DB_PORT || 3306;

    return new Sequelize(n, u, p, {
        host: dbconfig.host || envHost,
        port: dbconfig.port || envPort,

        dialect: 'mysql',
        operatorsAliases: false,

        pool: {
            max: 10,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    });
}