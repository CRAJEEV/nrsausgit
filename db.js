const mysql = require('mysql');

var mysqlConnection  = mysql.createPool({
      connectionLimit:'10',
      host: 'sql169.main-hosting.eu.',
      user: 'u451285657_nrs',
      password: 'password',
      database: 'u451285657_nrs',
      multipleStatements: true
});
 
// pool.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
//   if (error) throw error;
//   console.log('The solution is: ', results[0].solution);
// });

// var mysqlConnection = mysql.createConnection({
//   connectionLimit:'50',
//   host:'localhost',
//   user:'root',
//   password:'password',
//   database:'pmpdb',
//   multipleStatements:true,
//   timeout: 60000
// }); 

// mysqlConnection.connect((err)=> {
//     if(!err)
//     console.log('HOSTINGER db connection Succesfull.');
//     else
//     console.log('DB connection error failed \n Error : '+ JSON.stringify(err, undefined,2));

// });

module.exports = mysqlConnection;