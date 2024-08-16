const express = require('express');
const dotEnv  = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const dbConnection = require('./dbConnection');
const router = require('./route');

const server = express();
server.use(morgan('dev'));
dotEnv.config();
dbConnection();

server.use(cors());
server.use(bodyParser.json());

server.use('/api',router);

// 8081
const PORT = process.env.PORT || 8080;

server.listen(PORT, () => {
     console.log("server started...");
});



