import styled from "styled-components";
import Sidebar from "../components/Sidebar";

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
    .texto p span {
        color: ${({ theme }) => theme.colors.error};
        font-family: "Roboto";
    }
`;
export default Page;
