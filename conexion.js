const mysql = require("mysql");
// Coloca aquí tus credenciales
module.exports = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "tienda"
});