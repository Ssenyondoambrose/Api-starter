const express = require('express')
const app =express();

const itemRoutes =require('./Api/routes/items')

app.use ('items', itemRoutes);

module.exports =app;