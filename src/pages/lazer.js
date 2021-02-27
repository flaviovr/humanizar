import styled from "styled-components";
import Sidebar from "../components/Sidebar";

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
export async function getServerSideProps(context) {
    const res = await fetch(
        "http://localhost:3000/api/mural?limite=1&aleatorio=sim"
    );
    const data = await res.json();

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
