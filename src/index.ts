import express from 'express';
import { helloTypeScript } from './functions';

const server = express();

server.use(express.json());

const port = 3000;

server.get('/', helloTypeScript ); 

server.listen(port, () => {
  console.log('SERVER START! => http://localhost:3000 ');
});
