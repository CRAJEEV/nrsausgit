var mysql=require('mysql');
var connection=mysql.createPool({
    host: 'sql169.main-hosting.eu.',
    user: 'u451285657_nrs',
    password: 'password',
    database: 'u451285657_nrs',
    multipleStatements: true
});
module.exports=connection;