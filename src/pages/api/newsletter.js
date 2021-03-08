import db from "../../assets/db";

export default async function handler(req, res) {
    if (req.method !== "POST") {
        res.status(405).json({ ok: false, msg: "Metodo POST Necessário" });
    } else {
        let { emailNews } = req.body;

        try {
            let exist = await db.query(
                "select count(*) as total from news where email=?",
                [emailNews]
            );
            let { total } = JSON.parse(JSON.stringify(exist)).pop();

            if (Number(total) >= 1) {
                await db.end();
                res.status(200).json({ ok: true, msg: "Email já cadastrado" });
            } else {
                let query = await db.query(
                    "INSERT INTO news( email) VALUES ( ?)",
                    [emailNews]
                );
                await db.end();
                res.status(200).json({
                    ok: true,
                    id: query.insertId,
                    msg: "Cadastrado com sucesso.",
                });
            }
        } catch (error) {
            console.log(error);
            res.status(500).json({
                ok: false,
                msg: "Erro ao salvar no banco de dados",
                ...error,
            });
        }
    }
}
