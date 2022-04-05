const fs = require("fs");
const db = require("./db");

const sql = fs.readFileSync(__dirname + "/migrateUser.sql").toString();
db.query(sql)
    .then(() => console.log("migrate ok"))
    .catch((e) => console.log(e));
