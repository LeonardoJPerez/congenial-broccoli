import db from '.';

db.sequelize
    .sync({force: true})    
    .then(() => {
        console.log('`bikemeet` schema tables successfully created/updated.');
        return process.exit(0);
    })
    .catch(err => {
        console.error('Unable to create `bikemeet` schema tables:', err);
        return process.abort();
    });