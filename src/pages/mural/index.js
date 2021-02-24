import styled from "styled-components";
import Mural from "../../components/Mural";

const Page = (props) => {
    const db = props.data;

    return (
        <Main>
            <h2>Mural de Recados</h2>
            <div class='texto'>
                <p>
                    Este espaço foi criado para você compartilhar a importância
                    do Humanizar em sua vida. Conte sobre seu aprendizado, suas
                    emoções, suas experiências vividas, ou seja, de que forma o
                    evento acrescenta no seu dia a dia. Escreva uma mensagem de
                    carinho e deixe todo mundo saber o quanto o Humanizar é
                    importante pra você!
                </p>
            </div>
            <a href='_enviarRecado.php' class='btn fbMural'>
                Deixe seu Recado
            </a>
            <hr />
            <Mural data={db.mural} paginatePerPage='9' />
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
export default Page;
