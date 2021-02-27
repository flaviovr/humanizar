import sqlite3 from "sqlite3";
import { open } from "sqlite";

export default async function handler(req, res) {
    const db = await open({
        filename: "./src/assets/data.db",
        driver: sqlite3.Database,
    });

    const limite = req.query.limite >= 0 ? `limit ${req.query.limite}` : "";
    const ordem = req.query.aleatorio === `true` ? " random()" : "id desc";

    const data = await db.all(
        `select id, nome, recado, data  from mural where ativo=1 order by ${ordem} ${limite}`
    );
    res.status(200).json(data);
}
