const express = require('express');
const bodyParser = require('body-parser');
// const cors = require('cors');

const { mongoose } = require('./db.js');

var patientController = require('./controllers/patientController');

var app = express();
app.use(bodyParser.json());
// app.use(cors({ origin: 'http://localhost:4200' }));

// app.listen(3000, () => console.log('Server started at port : 3000'));
app.listen(process.env.PORT || 3000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });


app.use('/patient/info', patientController);