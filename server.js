var Hapi = require('hapi'),
    r = require('rethinkdb');

var server = new Hapi.Server(),
    connection = null;

server.connection({ port: 3000, routes: { cors: true } });
r.connect( {host: 'localhost', port: 28015, db: 'local_wisdom'}, function (err, conn) {
    if (err) throw err;
    connection = conn;
})

server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
        reply('Hello and welcome to the local wisdom API, documention will follow');
    }
});

server.route({
    method: 'GET',
    path: '/authors',
    handler: function (request, reply) {
        r.table('authors').run(connection, function (err, cursor) {
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
    handler: function (request, reply) {
        r.table('authors').get( request.params.id ).run(connection, function (err, result) {
            if (err) throw err;
            reply(result);
        });
    }
});

server.route({
    method: 'POST',
    path: '/authors',
    handler: function (request, reply) {
        r.table('authors').insert( request.payload ).run(connection, function (err, result) {
            if (err) throw err;
            reply(result);
        });
    }
});

server.route({
    method: 'PUT',
    path: '/authors/{id}',
    handler: function (request, reply) {
        console.log( request.payload );
        r.table('authors').get( request.params.id ).update( request.payload ).run(connection, function (err, result) {
            if (err) throw err;
            console.log(result)
            reply( result );
        });
    }
});

server.start(function () {
    console.log('Server running at:', server.info.uri);
});
