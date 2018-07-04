require('dotenv').config();

export default {
    port: process.env.PORT || 8888,
    host: 'localhost',
    app: {
        name: 'Bikemeet'
    },
    router : {
        isCaseSensitive: false,
        stripTrailingSlash: true
    }
};
