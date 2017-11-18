import * as hapi from "hapi";
import Routes from "./routes";

const localPort = 4321;
const server = new hapi.Server();

server.connection({ 
    port : (process.env.PORT || localPort),
    routes: { cors: true }
});

server.route(Routes.routes);

server.start( (err) => {
    if (err) {
        console.log('error', err.message, err.name, err.stack);
    } else {
        console.log('Server running at: '+ server.info.uri);
    }
});



