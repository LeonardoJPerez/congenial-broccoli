import Sequelize from 'sequelize';
import {
    basename as _basename,
    join
} from 'path';
import {
    readdirSync
} from 'fs';

require('dotenv').config();

const init = () => {
    const internal = {};
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
            internal[model.name] = model;
        });

    Object.keys(internal).forEach(modelName => {
        if (internal[modelName].associate) {
            internal[modelName].associate(internal);
        }
    });

    internal.sequelize = sequelize;
    internal.Sequelize = Sequelize;

    return internal;
}

let db;
if (!db) {
    db = init();
}

export default db;