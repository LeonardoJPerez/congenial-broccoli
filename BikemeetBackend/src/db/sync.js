import Sequelize from 'sequelize';

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

database.sequelize
    .query('CREATE DATABASE IF NOT EXISTS `bikemeet`;')
    .then(data => {
        database.sequelize.sync()
            .then(() => {
                console.log('`bikemeet` schema successfully created/updated.');
                return process.exit(0);
            });
    })
    .catch(err => {
        console.error('Unable to create `bikemeet` schema:', err);
        return process.abort();
    });