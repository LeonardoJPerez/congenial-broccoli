import {readdirSync} from 'fs';

let routes = [];

readdirSync(__dirname)
    .filter(file => file != 'index.js')
    .forEach(file => {
        const route = require(`./${file}`).default;
        routes = routes.concat(route)
    });

export default routes;
