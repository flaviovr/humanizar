import styled from "styled-components";
import Palestrantes from "../components/Palestrantes";
import MuralHome from "../components/Mural";
import Modal from "../components/ModalWindow";
import Link from "next/link";

import db from "../assets/db";

function Page(props) {
    const { latestMural } = props;
    //console.log(props);

    return (
        <Main>
            <Modal />
            <Palestrantes /> <hr />
            <Frase>
                "Humanizar é resgatar em nós o abraço, a amizade, o perdão."
                <b>Bezerra de Menezes</b>
            </Frase>
            <hr />
            <Frase>
                Mural{" "}
                <Link href='/mural'>
                    <a>ver todos recados</a>
                </Link>
            </Frase>
            <MuralHome data={latestMural} perPage={9} />
        </Main>
    );
}
export async function getStaticProps(context) {
    let query = await db.query(
        "select id, nome, recado, data  from mural where ativo=1 order by id desc limit 9"
    );
    const data = JSON.parse(JSON.stringify(query));

    await db.end();

    return {
        props: { latestMural: data },
        revalidate: 60 * 5,
    };
}

const Main = styled.div`
    font-size: 50px;
    color: ${({ theme }) => theme.colors.mainText};
    padding-bottom: 40px;
`;

const Frase = styled.p`
    font-size: 21px;
    text-align: center;
    margin: 20px 0;
    position: relative;
    b {
        display: block;
        opacity: 0.5;
        font-weight: normal;
        text-align: center;
        font-size: 16px;
    }
    a {
        position: absolute;
        top: 5px;
        right: 10px;
        color: ${({ theme }) => theme.colors.primary};
        :hover {
            color: ${({ theme }) => theme.colors.primaryDark};
        }
    }
`;

export default Page;
