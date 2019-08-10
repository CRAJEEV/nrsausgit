const mongoose = require('mongoose');

mongoose.connect('mongodb://pmpadmin:pmppass1234@ds161144.mlab.com:61144/pmp', (err) => {
    if (!err)
        console.log('Mlab MongoDB connection succeeded.');
    else
        console.log('Error in DB connection : ' + JSON.stringify(err, undefined, 2));
});

module.exports = mongoose;

// Mlab databas
// module.exports = {
// 	url : "mongodb://pmpadmin:pmppass1234@ds161144.mlab.com:61144/pmp"
	
// }