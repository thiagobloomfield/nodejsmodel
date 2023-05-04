
import express from 'express';
import bodyParser from 'body-parser';
import indexRoutes from './routes/index';
 
const app = express();

app.use(indexRoutes);
app.use(bodyParser.json());

app.listen(3000);
