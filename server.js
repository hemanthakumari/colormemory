var hapi = require('hapi');
var Scores = require('./models/scores.js');

// Create hapi server instance
var server = new hapi.Server();

// add connection parameters
server.connection({  
    host: 'localhost',
    port: 5000
});
server.register(require('vision'), (err) => {

    if (err) {
        throw err;
    }
    server.views({  
        engines: {
            html: require('handlebars')
        },
        path: 'views',
        layoutPath: 'views/layout',
        layout: 'default',
        partialsPath: 'views/partials'
        //helpersPath: 'views/helpers',
    });
});

// create your routes, currently it's just one
var routes = [  
    {
        method: 'GET',
        path: '/',
        handler: function(request, reply) {
            // Render the view with the custom greeting
            Scores.find({}, function (err, recs) {
                if(err) throw err;
                console.log("records \n",recs);
                return reply.view('index', {data: recs});
            }); 
        }
    },
    {
        method: 'GET',
        path: '/save',
        handler: function(request, reply) {
            // Render the view with the custom greeting
            Scores.find({}, function (err, recs) {
                if(err) throw err;
                console.log("records \n",recs);
                return reply(recs);
            }); 
        }
    },
    {
        method: 'GET',
        path: '/{param*}',
        handler: {
            directory: {
                path: 'destro',
                listing: true
            }
        }
    }
];
server.register(require('inert'), (err) => {

    if (err) {
        throw err;
    }
    
    server.route(routes);
});
// tell your server about the defined routes


// Start the server
server.start(function() {  
    // Log to the console the host and port info
    console.log('Server started at: ' + server.info.uri);
});