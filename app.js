const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const cors = require('cors');
const globalRoutes = require('./routes/publicRoutes');
const userRoutes = require('./routes/userRoutes');
const protestRoutes = require('./routes/protest');
const twilioRoutes = require('./routes/twilio');
const updateRoutes = require('./routes/protestUpdates');

const MONGODB_URI = "mongodb+srv://vora-manan:@cluster0.a5jpd.mongodb.net/Hack-N-Chill?authSource=admin&replicaSet=atlas-hzbzze-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true";


const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/user', userRoutes);
app.use('/protest', protestRoutes);
app.use('/help', twilioRoutes);
app.use('/update', updateRoutes);
app.use('/', globalRoutes);

mongoose.connect(MONGODB_URI, { useNewUrlParser: true })
    .then(result => {
        console.log("Connected");
        app.listen(5000);
    })
    .catch(err => {
        console.log(err);
    });
