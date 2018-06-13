import {Server} from 'hapi';
import routes from './server/routes';
import {connection} from './server/connection';
import Bell from 'bell';
import Promise from "bluebird";

import * as config from './config';

function initServer() {
    return new Promise(function (resolve, reject) {
        const server = new Server(connection)         

        server.register(Bell, function (err) {
            if (err) {
                throw err;
            }

            server.auth.strategy('facebook', 'bell', config.facebook);
            server.auth.strategy('google', 'bell', config.google);
            server.route(routes);

            server.start(function (err) {
                    if (err) {
                        throw err;
                    }

                    resolve(server);
                });

        });
    });
}

if (!module.parent) {
    initServer()
        .then(() => {
            console.warn('initServer promise resolved.');
        });
}

export default initServer;