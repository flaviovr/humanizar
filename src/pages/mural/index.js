import styled from "styled-components";
import Mural from "../../components/Mural";

import sqlite3 from "sqlite3";
import { open } from "sqlite";

const Page = (props) => {
    const { itensMural } = props;
    return (
        <Main>
            <h2>Mural de Recados</h2>
            <div className='texto'>
                <p>
                    Este espaço foi criado para você compartilhar a importância
                    do Humanizar em sua vida. Conte sobre seu aprendizado, suas
                    emoções, suas experiências vividas, ou seja, de que forma o
                    evento acrescenta no seu dia a dia. Escreva uma mensagem de
                    carinho e deixe todo mundo saber o quanto o Humanizar é
                    importante pra você!
                </p>
            </div>
            <a
                href='_enviarRecado.php'
                className='btn fbMural'
                onClick={(e) => e.preventDefault()}>
                Deixe seu Recado
            </a>
            <hr />
            <Mural data={itensMural} perPage={9} paginate />
        </Main>
    );
};

const Main = styled.div`
    font-size: 50px;
    color: ${({ theme }) => theme.colors.mainText};
    padding-bottom: 40px;
    margin-top: 40px;
    .btn {
        margin: 30px auto;
        width: 220px;
    }
`;

export async function getStaticProps(context) {
    const db = await open({
        filename: "./src/assets/data.db",
        driver: sqlite3.Database,
    });
    const data = await db.all(
        `select id, nome, recado, data from mural where ativo=1 order by id desc`
    );
    return {
        props: { itensMural: data },
        revalidate: 60 * 60,
    };
}
export default Page;
