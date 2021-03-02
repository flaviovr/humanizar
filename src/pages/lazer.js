import styled from "styled-components";
import Sidebar from "../components/Sidebar";

import db from "../assets/db";

const Page = (props) => {
    const { config, itemMural } = props;

    return (
        <Main>
            <h2>Opções de Lazer</h2>
            <div className='texto'>
                <p>
                    Os caminhos e trilhas ecológicas existentes na extensa área
                    da fazenda são um convite para as atividades de lazer na
                    Natureza (para quem acorda muito cedo, antes do início das
                    atividades).
                </p>
            </div>
            <Sidebar item={itemMural} />
        </Main>
    );
};
export async function getStaticProps(context) {
    let query = await db.query(
        "select id, nome, recado, data  from mural where ativo=1 order by rand() limit 1"
    );
    const data = JSON.parse(JSON.stringify(query));

    await db.end();
    return {
        props: { itemMural: data[0] },
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
