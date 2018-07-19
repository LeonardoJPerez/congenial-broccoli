import Sequelize from 'sequelize';
import {
    basename as _basename,
    join
} from 'path';
import {
    readdirSync
} from 'fs';

require('dotenv').config();

export default function init() {
    const db = {};
    const connString = process.env.MAIN_DB;
    if (!connString) {
        console.log('Database connection string missing.')
    }

    const sequelize = new Sequelize(connString, {
        dialect: 'mysql',
        operatorsAliases: false,

        pool: {
            max: 10,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    });

    const modelsRoot = `${process.cwd()}/src/models`;
    readdirSync(modelsRoot)
        .filter(file => {
            const basename = _basename(__filename);
            return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
        })
        .forEach(file => {
            const model = sequelize['import'](join(modelsRoot, file));
            db[model.name] = model;
        });

    Object.keys(db).forEach(modelName => {
        if (db[modelName].associate) {
            db[modelName].associate(db);
        }
    });

    db.sequelize = sequelize;
    db.Sequelize = Sequelize;

    return db;
}