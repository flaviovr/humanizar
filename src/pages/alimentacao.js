import styled from "styled-components";
import Sidebar from "../components/Sidebar";

import db from "../assets/db";

const Page = (props) => {
    const { config, itemMural } = props;

    return (
        <Main>
            <h2>Alimentação</h2>
            <div className='texto'>
                <p>
                    A hospedagem no Centro Marista inclui um rico café da manhã,
                    almoço, jantar e coffee breaks (à tarde). Nas refeições
                    principais é oferecido um buffet com alimentos vegetarianos
                    e não vegetarianos.
                </p>
                <p>
                    <span>
                        Atenção: As bebidas não estão incluídas nas refeições.
                    </span>
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
    .texto p span {
        color: ${({ theme }) => theme.colors.error};
        font-family: "Roboto";
    }
`;
export default Page;
