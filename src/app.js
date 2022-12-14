require('dotenv').config();
const { join } = require('path');
const express = require('express');
const compression = require('compression');

const router = require('./router');

const app = express();

app.use(compression());
app.use(express.json());
app.use(express.urlencoded({extended: false }));
app.use(express.static(join(__dirname, '..', 'public')));

app.use(router);

module.exports = app;
