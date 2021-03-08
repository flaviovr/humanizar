import db from "../../assets/db";

export default async function handler(req, res) {
    if (req.method === "POST") {
        let { name, email, message } = req.body;

        try {
            let query = await db.query(
                "INSERT INTO mensagens( nome, email, recado, data) VALUES ( ?, ?, ?, CURRENT_DATE())",
                [name, email, message]
            );
            await db.end();
            res.status(200).json({ ok: true, id: query.insertId });
        } catch (error) {
            console.log(error);
            res.status(500).json({
                ok: false,
                msg: "Erro ao salvar no banco de dados",
                ...error,
            });
        }
    } else {
        res.status(405).json({ ok: false, msg: "Metodo POST Necessário" });
    }
}
