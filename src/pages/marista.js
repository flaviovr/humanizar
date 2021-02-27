import styled from "styled-components";
import Sidebar from "../components/Sidebar";

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
