const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Patient } = require('../models/patient');

// => localhost:3000/patient/
router.get('/', (req, res) => {
    Patient.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Patients :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Patient.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving Patient :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.post('/', (req, res) => {
    var patientInfo = new Patient({
      
   
        name: req.body.name,
        age: req.body.age,
        gender: req.body.gender,
        phone: req.body.phone,
        email: req.body.email,
        id_type: req.body.id_type,
        id_no: req.body.id_no,
        allergy_type: req.body.allergy_type,
        allergy_description: req.body.allergy_description,
    });
    patientInfo.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Patient Save :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var patientInfo = {
        name: req.body.name,
        age: req.body.age,
        gender: req.body.gender,
        phone: req.body.phone,
        email: req.body.email,
        id_type: req.body.id_type,
        id_no: req.body.id_no,
        allergy_type: req.body.allergy_type,
        allergy_description: req.body.allergy_description,
    };
    Patient.findByIdAndUpdate(req.params.id, { $set: patientInfo }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Patient Update :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Patient.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Patient Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;