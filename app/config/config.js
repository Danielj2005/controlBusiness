import mysql from "mysql";

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "control_business"
});

db.connect(function(err) {
    if (err) throw new Error('No found connection to database');
    console.log("Connected!");
});

module.exports = { db };