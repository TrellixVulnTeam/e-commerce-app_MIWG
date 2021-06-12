const express = require('express');
const data = require('./data.ts');

const server = express();

server.get('/api/products/', (req: any, res: any) => {});

server.listen(5000, () => {
  console.log('server is running');
});
