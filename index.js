const server = require('json-server');

const Movieserver = server.create();

const router = server.router('db.json');

 
const middleware = server.defaults();

Movieserver.use(middleware);

Movieserver.use(router);

const port = process.env.PORT || 4000;

Movieserver.listen(port, () => {
    console.log(`Server running successfully on port ${port}`);
});

