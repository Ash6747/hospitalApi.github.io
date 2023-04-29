const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://ashishsatpute6747:9JzABYhHZUhHbgoD@cluster0.adxag6g.mongodb.net/patientdata?retryWrites=true&w=majority',{useNewUrlParser: true});  //mongodb://localhost/HospitalAPI

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));

db.once('open', function(){
    console.log('Connected to Database :: MongoDB');
});


module.exports = db;