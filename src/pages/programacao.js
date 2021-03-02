import styled from "styled-components";
import Sidebar from "../components/Sidebar";

import db from "../assets/db";

const Page = (props) => {
    const { config, itemMural } = props;

    return (
        <Main>
            <h2>Programa</h2>

            <h3>Sexta feira - 15/05/20</h3>
            <div className='texto'>
                <p>
                    <b>10h às 12h -&nbsp;</b>Acolhimento
                </p>
                <p>
                    <b>12h às 13h30 -&nbsp;</b>Almoço
                </p>
                <p>
                    <b>13h45 às 14h30 -&nbsp;</b>Abertura - Abrindo o baú das
                    histórias
                </p>
                <p>
                    <b>14h30 às 14h35 -&nbsp;</b>Prece - Pedido de Criança
                </p>
                <p>
                    <b>14h35 às 14h40 -&nbsp;</b>Apresentação do palestrante
                </p>
                <p>
                    <b>14h40 às 15h30 -&nbsp;</b>Espelho, espelho meu
                    (descobrindo quem sou eu) | Marilane Leite
                </p>
                <p>
                    <b>15h30 às 15h35&nbsp;-&nbsp;</b>Apresentação do
                    palestrante
                </p>
                <p>
                    <b>15h35 às 16h25&nbsp;-&nbsp;</b>A síndrome de Peter Pan
                    (Não querer crescer – comodismo) | Eduardo Gibelli
                </p>
                <p>
                    <b>16h25 às 16h45 -&nbsp;</b>Um lanchinho vou comer
                </p>
                <p>
                    <b>16h50 às 16h55 -&nbsp;</b>Apresentação do palestrante
                </p>
                <p>
                    <b>16h55 às 17h45 -&nbsp;</b>A síndrome da Cinderela
                    (Vitimização) | André Luiz Rosa
                </p>
                <p>
                    <b>18h às 18h15 -&nbsp;</b>Ave Maria - Acalanto
                </p>
                <p>
                    <b>20h às 22h -&nbsp;</b>Jantar
                </p>
                <p>
                    <b>21h30 às 22h30 -&nbsp;</b>Nana Nenén - Viola do Adilson
                </p>
            </div>

            <h3>Sábado - 16/05/20</h3>
            <div className='texto'>
                <p>
                    <b>7h30 às 8h20 -&nbsp;</b>Café da manhã
                </p>
                <p>
                    <b>8h30 às 9h -&nbsp;</b>Brincando com os Eres (Jardim dos
                    Cristais)
                </p>
                <p>
                    <b>9h05 às 9h10 -&nbsp;</b>Prece - Pedido de Criança
                </p>
                <p>
                    <b>9h10 às 10h -&nbsp;</b>A roupa nova do Imperador (Só vejo
                    o que quero ver) | Eduardo Gibelli
                </p>
                <p>
                    <b>10h às 10h15 -&nbsp;</b>Esticando as pernas (intervalo)
                </p>
                <p>
                    <b>10h20 às 11h10 -&nbsp;</b>O patinho feio (Aceitando-me
                    como sou) | André Luiz
                </p>
                <p>
                    <b>11h10 às 12h -&nbsp;</b>A Bela e a Fera (Empatia,
                    colocando-me no lugar do outro) | Marilane Leite
                </p>
                <p>
                    <b>12h às 13h30 -&nbsp;</b>Almoço
                </p>
                <p>
                    <b>13h45 às 14h30 -&nbsp;</b>Era uma vez
                </p>
                <p>
                    <b>14h30 às 14h40&nbsp;-&nbsp;</b>Prece - Pedido de Criança
                </p>
                <p>
                    <b>14h40 às 15h35 -&nbsp;</b>A fábula do porco espinho
                    (Convivendo com as diferenças) | André Luiz
                </p>
                <p>
                    <b>15h35 às 16h30 -&nbsp;</b>Os três Porquinhos (A tão
                    necessária reforma íntima, que casa quero construir dentro
                    de mim) | Marilane Leite
                </p>
                <p>
                    <b>16h30 às 16h50 - </b>Um lanchinho para comer
                </p>
                <p>
                    <b>16h55 às 17h50 -&nbsp;</b>Eu também perdoo: Jesus, o
                    maior contador de histórias (Parábola da mulher adultera) |
                    Eduardo Gibelli
                </p>
                <p>
                    <b>18h às 18h15 -&nbsp;</b>Ave Maria - Acalanto
                </p>
                <p>
                    <b>20h às 22h - </b>Jantar (refeitório)
                </p>
                <p>
                    <b>21:30h - “Deu a louca no conto de fadas” (Jambeiro)</b>
                </p>
            </div>
            <h3>Domingo - 17/05/20</h3>
            <div className='texto'>
                <p>
                    <b>7h30 às 8h20 -&nbsp;</b>Café da manhã
                </p>
                <p>
                    <b>8h30 às 9h -&nbsp;</b>Brincando com os Eres (Jardim dos
                    Cristais)
                </p>
                <p>
                    <b>9h05 às 9h10 - </b>Prece - Pedido de Criança
                </p>
                <p>
                    <b>9h15 às 11h55 - </b>A primeira história | Humanizar é
                    resgatar em nós o abraço, a amizade e o perdão
                </p>
                <p>
                    <b>9h15 às 10h05 -&nbsp;</b>1º - Eduardo Gibelli
                </p>
                <p>
                    <b>10h05 às 10h55 -&nbsp;</b>2º - Marilane Leite
                </p>
                <p>
                    <b>10h55 às 11h45 -&nbsp;</b>3º - André Luiz Rosa
                </p>
                <p>
                    <b>11h45 às 12h10 -&nbsp;</b>SUPRESA!
                </p>
                <p>
                    <b>11h55 -&nbsp;</b>Encerramento – E todos viveram felizes
                    para sempre...até maio de 2021
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
    .texto p {
        margin-bottom: 8px;
        font-family: "Roboto";
        b {
            font-family: "Roboto";
            font-weight: bold;
        }
    }
`;

export default Page;
