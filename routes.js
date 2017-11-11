const path = require("path");

const bundles = ["inline", "main", "polyfills", "styles", "vendor"];

exports.routes = [
    ...bundles.map(file => {
        return {
            method: "GET",
            path: `/${file}.{hash}.bundle.js`,
            handler: (request, reply) => {
                reply.file(path.join(__dirname, `/dist/${file}.${request.params.hash}.bundle.js`));
            }
        }
    }),
    {
        method: "GET",
        path: "/favicon.ico",
        handler: (request, reply) => {
            reply.file(path.join(__dirname, `/dist/favicon.ico`));
        }
    },
    {
        method: "GET",
        path: "/{other*}",
        handler: (request, reply) => {
            reply.file(path.join(__dirname, "/dist/index.html"));
        }
    }
];