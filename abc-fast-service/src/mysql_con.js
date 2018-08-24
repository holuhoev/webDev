/* import mysql from 'mysql';

var con = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'clientele'
    }
);

con.connect();

function FetchData() {
    var result = con.query("SELECT * FROM data", function(err, result) {
        if (err) {
            console.error(err);
            return;
        }
    });

    return result;
}

export default FetchData */