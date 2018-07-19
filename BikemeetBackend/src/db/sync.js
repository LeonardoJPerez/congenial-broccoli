//create the sequelize instance, omitting the database-name arg
import db from './index';

const conn = db('');

conn
    .query('CREATE DATABASE IF NOT EXISTS `bikemeet`;')
    .then(data => {
        console.log('`bikemeet` schema successfully created.');

        // Sync all models that aren't already in the database
        conn.sync();
        return process.exit(0);
    })
    .catch(err => {
        console.error('Unable to create `bikemeet` schema:', err);
        return process.abort();
    });