require('dotenv').config();

export default {
    port: process.env.PORT,
    host: 'localhost',
    app: {
        name: 'Bikemeet'
    },
    router : {
        isCaseSensitive: false,
        stripTrailingSlash: true
    }
};
