import mysql from 'mysql';

var con = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'clientele'
    }
);

con.connect();

var result = con.query("SELEC * FROM data", function(err, result) {
    if (err) {
        console.error(err);
        return;
    }
})