//import mysql from "serverless-sql";

const db = require("serverless-mysql")({
    config: {
        host: process.env.DB_HOST,
        database: process.env.DB_DATABASE,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
    },
});

// const db = new Knex({
//     client: "mysql",
//     connection: {
//         host: process.env.DB_HOST,
//         user: process.env.DB_USER,
//         password: process.env.DB_PASSWORD,
//         database: process.env.DB_DATABASE,
//     },
// });

export default db;
