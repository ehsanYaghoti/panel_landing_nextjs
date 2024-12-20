const express = require('express');
const next = require('next');
const cors = require('cors');

const port = 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server = express();

    // Applying CORS middleware
    server.use(cors({ } ));

    server.all('*', (req : any , res : any) => {
        return handle(req, res);
    });

    server.listen(port, (err : any) => {
        if (err) throw err;
        console.log(`> Ready on http://localhost:${port}`);
    });
});