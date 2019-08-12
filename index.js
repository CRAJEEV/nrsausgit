var express = require('express');
const cors =require('cors');
const bodyParser = require('body-parser');
var app = express();


var patientController = require('./controllers/patientController');
var internetRelayregController = require('./controllers/internetRelayregController');





app.use(bodyParser.json());
// app.use(cors({ origin:'http://localhost:4200'}));
app.use(cors());

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    req.header('Access-Control-Allow-Origin', "*");
    req.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    req.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
})





app.listen(process.env.PORT || 3000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});

app.use('/patient', patientController);
app.use('/internet-relay', internetRelayregController);


