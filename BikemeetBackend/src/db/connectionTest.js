import db from '.';

const conn = db();

conn
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
        return process.exit(0);
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
        return process.abort();
    });