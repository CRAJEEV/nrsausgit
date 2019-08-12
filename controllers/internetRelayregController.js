const express = require('express');

const bodyParser = require('body-parser');
// var app = express();
// var router = express.Router();

// router.use(bodyParser.json());
var router = express.Router();
var mysqlConnection = require('../db.js');

// Query for patient registraion GET POST PUT DELETE
const SELECT_ALL_IR_USER = 'SELECT * FROM internetrelay_register';
const SELECT_ALL_IR_USER_BY_ID = 'SELECT * FROM internetrelay_register WHERE user_id = ?';
const DELETE_IR_USER_BY_ID ='DELETE FROM internetrelay_register WHERE user_id = ?';
// End Query

//Get all patient
router.get('/', (req, res) => {
    mysqlConnection.query(SELECT_ALL_IR_USER, (err, rows, fields) => {
        if (!err) { res.send(rows); }
        else  
          console.log(err);
    })
});

//Get an patient
router.get('/:id', (req, res) => {
    mysqlConnection.query(SELECT_ALL_IR_USER_BY_ID, [req.params.id], (err, rows, fields) => {

        if (!rows.length == 0)
            res.send(rows);
        else
        res.send("Sorry No Data Found With This :" + req.params.id);
    
    })
});

//Delete an patient
router.delete('/:id', (req, res) => {
    mysqlConnection.query(DELETE_IR_USER_BY_ID, [req.params.id], (err, rows, fields) => {
        if (!err)
            res.send('Deleted successfully.');
        else
            console.log(err);
    })
});

//Insert an patient
router.post('/add', (req, res) => {
    let addIruserData = req.body;

    var ADD_IRUSER_DATA = "SET @user_id = ?;SET @first_name = ?;SET @last_name = ?;SET @email = ?;SET @login_phone = ?;SET @password = ?;SET @secrete_question = ?;SET @secrete_question_answer = ?;SET @terms_agree = ?;SET @receive_update_agree = ?;SET @Created_by = ?;SET @Updated_by = ?;SET @Created_date = ?;SET @Updated_date = ?;SET @Is_active = ?; \
    CALL internetRelayRegisterAddEdit(@user_id,@first_name,@last_name,@email,@login_phone,@password,@secrete_question,@secrete_question_answer,@terms_agree,@receive_update_agree,@Created_by,@Updated_by,@Created_date,@Updated_date,@Is_active);";
 
    mysqlConnection.query(ADD_IRUSER_DATA, [addIruserData.user_id, addIruserData.first_name, addIruserData.last_name,addIruserData.email,addIruserData.login_phone,addIruserData.password,addIruserData.secrete_question,addIruserData.secrete_question_answer,addIruserData.terms_agree,addIruserData.receive_update_agree,addIruserData.Created_by,addIruserData.Updated_by,addIruserData.Created_date,addIruserData.Updated_date,addIruserData.Is_active], (err, rows, fields) => {
        if (!err)
            rows.forEach(element => {
                if(element.constructor == Array)
                res.send('Inserted Internet Relay User id : '+element[0].user_id);
            });
        else
            console.log(err);
    })
});

//Update an Patient
router.put('/update', (req, res) => {
    let updateIruserData = req.body;
    var ADD_IRUSER_DATA = "SET @user_id = ?;SET @first_name = ?;SET @last_name = ?;SET @email = ?;SET @login_phone = ?;SET @password = ?;SET @secrete_question = ?;SET @secrete_question_answer = ?;SET @terms_agree = ?;SET @receive_update_agree = ?;SET @Created_by = ?;SET @Updated_by = ?;SET @Created_date = ?;SET @Updated_date = ?;SET @Is_active = ?; \
    CALL internetRelayRegisterAddEdit(@user_id,@first_name,@last_name,@email,@login_phone,@password,@secrete_question,@secrete_question_answer,@terms_agree,@receive_update_agree,@Created_by,@Updated_by,@Created_date,@Updated_date,@Is_active);";
 
    mysqlConnection.query(ADD_IRUSER_DATA, [updateIruserData.user_id, updateIruserData.first_name, updateIruserData.last_name,updateIruserData.email,updateIruserData.login_phone,updateIruserData.password,updateIruserData.secrete_question,updateIruserData.secrete_question_answer,updateIruserData.terms_agree,updateIruserData.receive_update_agree,updateIruserData.Created_by,updateIruserData.Updated_by,updateIruserData.Created_date,updateIruserData.Updated_date,updateIruserData.Is_active], (err, rows, fields) => {
       if (!err)
            res.send('Internet Relay User Data Updated successfully!!');
        else
            console.log(err);
    })
});


module.exports = router;