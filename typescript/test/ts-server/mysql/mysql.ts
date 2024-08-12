const mysql = require("mysql")

const pool = mysql.createPool({
	host: "http://localhost",
	port: 4236,
	user: 'root',
	password: "admin123",
	database: "userManage"
})

module.exports = pool