import {Server} from 'hapi';
import {green} from 'chalk';

// Plugins
import Bell from 'bell';
import EchoRoutes from 'hapi-echo-routes';
import AuthCookies from 'hapi-auth-cookie'

import routes from './src/routes';
import connection from './src/connection';
import * as config from './config';

const internals = {};

internals.start = async function () {
    const server = new Server(connection);

    await server.register([AuthCookies, Bell, EchoRoutes]);

    server
        .auth
        .strategy('session', 'cookie', {
            password: 'secret_cookie_encryption_password',  // TODO: Use something more secure in production
            redirectTo: '/auth/twitter',                    //If there is no session, redirect here
            isSecure: false                                 //Should be set to true (which is the default) in production
        });

    server
        .auth
        .strategy('facebook', 'bell', config.facebook);
    server
        .auth
        .strategy('google', 'bell', config.google);
    server.route(routes);

    await server.start();

    const url = `${server.info.protocol}://${server.info.address}:${server.info.port}`
    console.log(`${server.settings.app.name} Server started at: ${url}`);

    for (let i = 0; i < routes.length; i++) {
        const route = routes[i];
        route.method = route.method === '*'
            ? ' * '
            : route.method;
        console.log(` [${green(route.method)}]     ${route.path}`);
    }
}

if (!module.parent) {
    internals.start();
}

export default internals.start;