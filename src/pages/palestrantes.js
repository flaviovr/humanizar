import styled from "styled-components";
import Sidebar from "../components/Sidebar";

import sqlite3 from "sqlite3";
import { open } from "sqlite";

const Page = (props) => {
    const { config, itemMural } = props;

    return (
        <Main>
            <h2>Palestrantes</h2>

            <div className='item cf' id='Andre_Luiz_Rosa'>
                <h3>Andre Luiz Rosa</h3>
                <img
                    src='images/palestrantes/g/1.jpg'
                    width='380'
                    alt='Andre_Luiz_Rosa'
                    title='Andre_Luiz_Rosa'
                />
                <div className='texto'>
                    <p>
                        André Luiz Rosa é natural de Rolândia - PR, e vive na
                        cidade de Valinhos desde 1981.
                        <br />
                        Espírita de berço, dedica-se ao estudo das obras de
                        Allan Kardec em consonância com as obras complementares
                        de diversos autores. Palestrante e escritor espírita,
                        colabora atualmente na Entidade Assistencial Espírita
                        “Casa do Caminho” de Valinhos onde atualmente está
                        presidente.
                    </p>
                    <p>
                        <b>Autor dos seguintes livros:</b>
                        <br />• Não espere mais, seja feliz agora
                        <br />• Páginas ao vento
                        <br />• Quando as crianças voltam mais cedo para casa
                        <br />• Quando o coração fala mais alto
                        <br />• Quando o amor fala mais alto
                        <br />• Enquanto nosso lar for aqui
                    </p>
                </div>
            </div>

            <hr />

            <div className='item cf' id='Eduardo_Gibelli'>
                <h3>Eduardo Gibelli</h3>
                <img
                    src='images/palestrantes/g/2.jpg'
                    width='380'
                    alt='Eduardo_Gibelli'
                    title='Eduardo_Gibelli'
                />
                <div className='texto'>
                    <p>
                        Músico, compositor, palestrante espírita, aprendiz e
                        semeador do evangelho de Jesus.{" "}
                    </p>
                    <p>
                        Nascido e residente na cidade de Franca/SP, trabalha há
                        15 anos com evangelização de crianças e adolescentes no
                        projeto “Casa de Nazaré” e na “Mocidade Primavera”.{" "}
                    </p>
                    <p>
                        Espírita, desde a infância, realiza estudos das Obras de
                        Kardec há mais de 10 anos no “Núcleo de Convivência
                        Espírita Maria Rosa”.
                    </p>
                    <p>
                        Lançou no ano de 2018 o CD e DVD “Se fosse por um dia”,
                        onde interpreta musicas autorais e regravações de
                        grandes nomes da música espírita.{" "}
                    </p>
                    <p>
                        Tem se dedicado a propagar as lições do evangelho
                        através de palestras musicas e de suas canções.
                    </p>
                </div>
            </div>

            <hr />

            <div className='item cf' id='Marilane_Leite'>
                <h3>Marilane Leite</h3>
                <img
                    src='images/palestrantes/g/3.jpg'
                    alt='Marilane_Leite'
                    title='Marilane_Leite'
                />
                <div className='texto'>
                    <p>
                        Psicóloga, Especialista em Educação, com formação em
                        Neurolinguistica, Body Mind Coaching pelo Institut for
                        Kompetenceudvikling , Ciências Holísticas e Psicologia
                        Transpessoal com certificação internacional pela Albert
                        Schweitzer International University . Formada em Coach
                        Integral pela International Association of Coaching
                        Institutes - ICI - Metaforum International. Pós graduada
                        em Formação de Base Transdisciplinar Holística pela
                        Universidade Internacional da Paz – Unipaz/RJ.
                    </p>
                    <p>
                        Possui 25 anos de trabalhos dedicados ao Desenvolvimento
                        Humano. É criadora do Método PLENA para o
                        autodesenvolvimento e do Projeto Social SOMOS MUITOS
                        SOMOS UM que existe há seis anos na cidade de Volta
                        Redonda. Hoje atua como Consultora Empresarial e
                        Educacional, Psicoterapeuta, Coach e Palestrante. Sua
                        trajetória na doutrina espírita conta também 25 anos.
                    </p>
                </div>
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
    .item {
        margin-top: 30px;
        img {
            margin: 10px;
            border-bottom: 5px solid #003366;
        }
    }
    .texto b {
        font-family: "Roboto";
        font-weight: bold;
    }
`;
export default Page;
