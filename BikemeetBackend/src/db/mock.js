import SequelizeMocked from 'sequelize-mock';
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
    const sequelize = new SequelizeMocked();

    const mocksRoot = `${process.cwd()}/src/models/mocks`;
    readdirSync(mocksRoot)
        .filter(file => {
            const basename = _basename(__filename);
            return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
        })
        .forEach(file => {
            const model = require(join(mocksRoot, file));
            internal[model.name] = model;
        });

    Object
        .keys(internal)
        .forEach(modelName => {
            if (internal[modelName].associate) {
                internal[modelName].associate(internal);
            }
        });

    internal.sequelizeMock = sequelize;
    internal.SequelizeMock = SequelizeMock;

    return internal;
}

let db;
if (!db) {
    db = init();
}

export default db;