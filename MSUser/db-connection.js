var mysql = require('mysql');

const pool  = mysql.createPool({
  host            : 'localhost',
  user            : 'root',
  password        : '',
  database        : 'dbusergame'
})

pool.on('connection', function (connection) {
  console.log("Connected");
});

pool.getConnection((err, connection) => {
  if(err) throw err
  connection.query('SELECT * from users', (err, rows) => {
      connection.release() // return the connection to pool

      // if (!err) {
      //     res.send(rows)
      // } else {
      //     console.log(err)
      // }

      // if(err) throw err
      console.log(rows)
  })
})



