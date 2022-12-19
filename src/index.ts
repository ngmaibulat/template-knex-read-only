import { db, dbping } from "./db.js";

const dbcheck = await dbping();

if (dbcheck[0]) {
    console.log("Database Connection OK!");
} else {
    console.log("Cannot connect to database");
}

//Write code here
//This is read-only app, don't use DML

const res = await db.raw("SELECT @@version as version");
console.log(res[0][0]);

//Disconnect from DB
await db.destroy();
