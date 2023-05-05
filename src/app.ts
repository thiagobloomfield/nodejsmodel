
import express from 'express';
import bodyParser from 'body-parser';

import indexRoutes from './routes/index';
 
const server = express();
const port = process.env.PORT || 3000;

server.use(express.json());
server.use(express.urlencoded({
    extended: true
}));
server.use(indexRoutes);
server.use(bodyParser.json());

server.listen(port);

console.log('Aplicação rodando na porta ' + port)
