const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const cors = require('cors');
const globalRoutes = require('./routes/publicRoutes');
const userRoutes = require('./routes/userRoutes');
const protestRoutes = require('./routes/protest');

const MONGODB_URI = "mongodb+srv://vora-manan:Lmbju2023@cluster0.a5jpd.mongodb.net/Hack-N-Chill?authSource=admin&replicaSet=atlas-hzbzze-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true";


const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/user', userRoutes);
app.use('/protest', protestRoutes);
app.use('/', globalRoutes);

mongoose.connect(MONGODB_URI)
    .then(result => {
        console.log("Connected");
        app.listen(5000);
    })
    .catch(err => {
        console.log(err);
    });