import styled from "styled-components";
import Palestrantes from "../components/Palestrantes";
import MuralHome from "../components/Mural";
import Modal from "../components/ModalWindow";

const Page = (props) => {
    const db = props.data;

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
                Mural <a href='mural.php'>ver todos recados</a>
            </Frase>
            <MuralHome data={db.mural} />
        </Main>
    );
};

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
