import {Server} from 'hapi';
import {green} from 'chalk';

// Plugins
import Bell from 'bell';
import EchoRoutes from 'hapi-echo-routes';

import routes from './src/routes';
import connection from './src/connection';
import * as config from './config';

require('es6-promise').polyfill();
require('isomorphic-fetch');

const internals = {};

internals.start = async function () {
    const server = new Server(connection);
    
    await server.register([Bell, EchoRoutes]);    

    server.auth.strategy('facebook', 'bell', config.facebook);
    server.auth.strategy('google', 'bell', config.google);
    server.route(routes);
    
    await server.start();   

    const url = `${server.info.protocol}://${server.info.address}:${server.info.port}`
    console.log(`${server.settings.app.name} Server started at: ${url}`);    

    for (let i = 0; i < routes.length; i++) {
        const route = routes[i];      
        route.method = route.method === '*' ? ' * ' : route.method;       
        console.log(` [${green(route.method)}]     ${route.path}`);
    } 
}

if (!module.parent) {
    internals.start();         
}

export default internals.start;