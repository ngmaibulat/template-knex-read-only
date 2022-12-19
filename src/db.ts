import knexpkg from "knex";
import dotenv from "dotenv";

dotenv.config();

export const dbinfo = {
    driver: process.env.DB_DRIVER,
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || "3306"),
    name: process.env.DB_NAME,
    user: process.env.DB_USER,
    pass: process.env.DB_PASS,
};

export const db = knexpkg.knex({
    client: dbinfo.driver,
    connection: {
        host: dbinfo.host,
        port: dbinfo.port,
        user: dbinfo.user,
        password: dbinfo.pass,
        database: dbinfo.name,
    },
});
