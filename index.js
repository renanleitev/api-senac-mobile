// https://www.freecodecamp.org/news/build-a-restful-api-using-node-express-and-mongodb/

const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/routes');

const app = express();

app.use('/api', routes);

require('dotenv').config();

const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error);
})

database.once('connected', () => {
    console.log('Database Connected');
})



app.use(express.json());

app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
});