const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const router = require('./routes');
const app = express();
const { MORGAN_FORMAT } = require('../config/application');

app.use(cors());
app.use(morgan(MORGAN_FORMAT));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);

module.exports = app;
