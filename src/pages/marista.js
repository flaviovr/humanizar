import styled from "styled-components";
import Sidebar from "../components/Sidebar";

import sqlite3 from "sqlite3";
import { open } from "sqlite";

const Page = (props) => {
    const { config, itemMural } = props;

    return (
        <Main>
            <h2>Local</h2>
            <h3>Centro Marista São José das Paineiras – Espaço Champagnat</h3>
            <div className='texto'>
                <p>
                    {" "}
                    Situado na região do Vale do Café, município de Mendes,
                    interior do estado do Rio de Janeiro, em meio à Mata
                    Atlântica secundária com 250 hectares de extensão e uma
                    altitude média de 431m acima do nível do mar, o Centro
                    Marista está localizado, aproximadamente, a 100km da cidade
                    do Rio de Janeiro, 380km de Belo Horizonte e 390km de São
                    Paulo.{" "}
                </p>
            </div>
            <Sidebar item={itemMural} />
        </Main>
    );
};
export async function getStaticProps(context) {
    const db = await open({
        filename: "./src/assets/data.db",
        driver: sqlite3.Database,
    });
    const data = await db.get(
        `select id, nome, recado, data from mural where ativo=1 order by random()  limit 1`
    );
    return {
        props: { itemMural: data },
        revalidate: 60 * 5,
    };
}
const Main = styled.div`
    position: relative;
    color: ${({ theme }) => theme.colors.mainText};
    padding-bottom: 40px;
    min-height: 740px;
    margin-top: 40px;
    width: 640px;
`;
export default Page;
