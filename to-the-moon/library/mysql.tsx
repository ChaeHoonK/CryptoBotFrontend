export async function connect() {
  var mysql = require("mysql");

  var con = mysql.createConnection({
    host: "130.126.143.119",
    port : 3306,
    user: "illinoiskorea_admin",
    password: "tothemoon!!",
    database: "illinoiskorea_coin_data",
  });
  await con.connect(function (err: Error) {
    if (err) throw err;
    console.log("Connected!");
  });

  await con.query(
    `INSERT INTO CUSTOMERS (test) VALUES (1);`,
    function (error: Error, results: any, fields: any) {
      if (error) throw error;
      console.log("The solution is: ", results[0].solution);
    }
  );

  con.end();
}
