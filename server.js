import Hapi  from 'hapi';
import r from 'rethinkdb';

const server = new Hapi.Server();
let connection = null;

server.connection({ port: 3000, routes: { cors: true } });
r.connect( {host: 'localhost', port: 28015, db: 'local_wisdom'}, (err, conn) => {
    if (err) throw err;
    connection = conn;
})

server.route({
    method: 'GET',
    path: '/',
    handler: (request, reply) => {
        reply('Hello and welcome to the local wisdom API, documention will follow');
    }
});

server.route({
    method: 'GET',
    path: '/authors',
    handler: (request, reply) => {
        r.table('authors').run(connection, (err, cursor) => {
            if (err) throw err;
            cursor.toArray(function(err, result) {
                if (err) throw err;
                reply(result);
            });
        });
    }
});

server.route({
    method: 'GET',
    path: '/authors/{id}',
    handler: (request, reply) => {
        r.table('authors').get( request.params.id ).run(connection, (err, result) => {
            if (err) throw err;
            reply(result);
        });
    }
});

server.route({
    method: 'POST',
    path: '/authors',
    handler: (request, reply) => {
        r.table('authors').insert( request.payload ).run(connection, (err, result) => {
            if (err) throw err;
            reply(result);
        });
    }
});

server.route({
    method: 'PUT',
    path: '/authors/{id}',
    handler: (request, reply) => {
        console.log( request.payload );
        r.table('authors').get( request.params.id ).update( request.payload ).run(connection, (err, result) => {
            if (err) throw err;
            reply(result);
        });
    }
});

server.start(() => {
    console.log('Server running at:', server.info.uri);
});
