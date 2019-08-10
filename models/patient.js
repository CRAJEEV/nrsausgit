const mongoose = require('mongoose');

var Patient = mongoose.model('Patient', {
    name: { type: String },
    age: { type: Number },
    gender: { type: String },
    phone: { type: Number },
    email: { type: String },
    id_type: { type: String },
    id_no: { type: String },
    allergy_type: { type: String },
    allergy_description: { type: String }
    
});

module.exports = { Patient };    