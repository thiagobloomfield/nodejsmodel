
import express from 'express';
import bodyParser from 'body-parser';
import indexRoutes from './routes/index';
 
const server = express();

server.use(indexRoutes);
server.use(bodyParser.json());

server.listen(process.env.PORT || 3000);
