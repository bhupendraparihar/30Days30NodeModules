/**
 * npm install hapi --save
 * Reference : https://hapijs.com/api/17.1.0
 */

const Hapi = require('hapi');

async function example() {
    const server = new Hapi.Server({ port: 3000, host: '127.0.0.1' });

    server.route({
        method: 'GET',
        path: '/',
        handler: function (request, h) {
            return 'Hello, world';
        }
    });

    server.route({
        method: 'GET',
        path: '/{name}',
        handler: function (request, h) {
            return 'Hello, ' + encodeURIComponent(request.params.name) + '!';
        }
    });

    await server.start();

}

example();