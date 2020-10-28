const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const userRoutes = require('./routes/routes');
const app = express();
const MONGODB_URI = 'mongodb+srv://bhavesh_05:Bhavesh2017@cluster0-yuok1.mongodb.net/codeshare?retryWrites=true&w=majority';

app.use(bodyParser.json());
app.use(userRoutes);

mongoose.connect(MONGODB_URI)
    .then(res => {
        console.log("Connected");
        const server = app.listen(3005);
        const io = require('./socket').init(server);
        io.on('connection', socket =>{
            console.log('Client connected');
        });
    })
    .catch(err => {
        console.log(err);
    });