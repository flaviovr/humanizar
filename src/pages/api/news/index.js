import sqlite3 from "sqlite3";
import { open } from "sqlite";

export default async function handler(req, res) {
    const db = await open({
        filename: "./src/assets/data.db",
        driver: sqlite3.Database,
    });

    const email = req.query.email ? req.query.email : "";

    try {
        const check = await db.get(
            `select email from news where email='${email}'`
        );
        if (check)
            return res
                .status(403)
                .json({ status: 403, msg: "Email já foi cadastrado" });
        const data = await db.run(`insert into news(email) values('${email}')`);
        return res
            .status(200)
            .json({ status: 200, msg: "Email cadastrado com Sucesso" });
    } catch (e) {
        console.log(e);
        return res.status(500).json({ status: 500, msg: e });
    }
}
