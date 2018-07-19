import db from '.';

db.sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
        return process.exit(0);
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
        return process.abort();
    });