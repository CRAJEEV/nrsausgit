const express = require('express');

const bodyParser = require('body-parser');
// var app = express();
// var router = express.Router();

// router.use(bodyParser.json());
var router = express.Router();
var mysqlConnection = require('../db.js');

// Query for patient registraion GET POST PUT DELETE
const SELECT_ALL_PATIENT = 'SELECT * FROM patient_registration';
const SELECT_ALL_PATIENT_BY_ID = 'SELECT * FROM patient_registration WHERE pat_id = ?';
const DELETE_PATIENT_BY_ID ='DELETE FROM patient_registration WHERE pat_id = ?';
// End Query

//Get all patient
router.get('/', (req, res) => {
    mysqlConnection.query(SELECT_ALL_PATIENT, (err, rows, fields) => {
        if (!err) { res.send(rows); }
        else  
          console.log(err);
    })
});

//Get an patient
router.get('/:id', (req, res) => {
    mysqlConnection.query(SELECT_ALL_PATIENT_BY_ID, [req.params.id], (err, rows, fields) => {

        if (!rows.length == 0)
            res.send(rows);
        else
        res.send("Sorry No Data Found With This Id:" + req.params.id);
    
    })
});

//Delete an patient
router.delete('/:id', (req, res) => {
    mysqlConnection.query(DELETE_PATIENT_BY_ID, [req.params.id], (err, rows, fields) => {
        if (!err)
            res.send('Deleted successfully.');
        else
            console.log(err);
    })
});

//Insert an patient
router.post('/add', (req, res) => {
    let addPatientData = req.body;

    var ADD_PATIENT_DATA = "SET @pat_id = ?;SET @name = ?;SET @age = ?;SET @gender = ?;SET @phone = ?;SET @email = ? ;SET @id_type = ?;SET @id_number = ?;SET @allergy_type = ?;SET @allergy_description = ?;SET @Created_by = ?;SET @Updated_by = ?;SET @Created_date = ?;SET @Updated_date = ?;SET @Is_active = ?; \
    CALL addEditPatient(@pat_id,@name,@age,@gender,@phone,@email,@id_type,@id_number,@allergy_type,@allergy_description,@Created_by,@Updated_by,@Created_date,@Updated_date,@Is_active);";
 
    mysqlConnection.query(ADD_PATIENT_DATA, [addPatientData.pat_id, addPatientData.name, addPatientData.age,addPatientData.gender,addPatientData.phone,addPatientData.email,addPatientData.id_type,addPatientData.id_number,addPatientData.allergy_type,addPatientData.allergy_description,addPatientData.Created_by,addPatientData.Updated_by,addPatientData.Created_date,addPatientData.Updated_date,addPatientData.Is_active], (err, rows, fields) => {
        if (!err)
            rows.forEach(element => {
                if(element.constructor == Array)
                res.send('Inserted patient id : '+element[0].pat_id);
            });
        else
            console.log(err);
    })
});

//Update an Patient
router.put('/update', (req, res) => {
    let updatePatientData = req.body;
    var ADD_PATIENT_DATA = "SET @pat_id = ?;SET @name = ?;SET @age = ?;SET @gender = ?;SET @phone = ?;SET @email = ? ;SET @id_type = ?;SET @id_number = ?;SET @allergy_type = ?;SET @allergy_description = ?;SET @Created_by = ?;SET @Updated_by = ?;SET @Created_date = ?;SET @Updated_date = ?;SET @Is_active = ?; \
    CALL addEditPatient(@pat_id,@name,@age,@gender,@phone,@email,@id_type,@id_number,@allergy_type,@allergy_description,@Created_by,@Updated_by,@Created_date,@Updated_date,@Is_active);";
 
    mysqlConnection.query(ADD_PATIENT_DATA, [updatePatientData.pat_id, updatePatientData.name, updatePatientData.age,updatePatientData.gender,updatePatientData.phone,updatePatientData.email,updatePatientData.id_type,updatePatientData.id_number,updatePatientData.allergy_type,updatePatientData.allergy_description,updatePatientData.Created_by,updatePatientData.Updated_by,updatePatientData.Created_date,updatePatientData.Updated_date,updatePatientData.Is_active], (err, rows, fields) => {
       if (!err)
            res.send('Patient Data Updated successfully!!');
        else
            console.log(err);
    })
});


module.exports = router;