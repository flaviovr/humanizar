import styled from "styled-components";
import Link from "next/link";

const ModalContainer = styled.div`
    width: 100vw !important;
    height: 100vh !important;
    overflow: auto;
    .texto {
        margin-top: 15px;
        p {
            font-family: "Amaranth";
            font-size: 16px;
            line-height: 23px;
            b {
            }
        }
    }
    .preHome {
        width: 1000px !important;
        padding: 20px 10px 40px 440px;
        margin: 0 auto;
        background: url(images/page/logo-prehome.png) 30px 20px no-repeat;
        position: relative;
    }
`;

const PreHome = (
    <ModalContainer>
        <div className='preHome'>
            <div className='texto'>
                <p>
                    Era uma vez... abrindo o baú das histórias Todos temos em
                    nós uma criança interior, que precisa ser amada,
                    compreendida, valorizada e acolhida emocionalmente. Trazemos
                    conosco na vida adulta as características do estado
                    psicológico em que esta criança interior se encontra. E isso
                    pode ajudar ou atrapalhar as nossas relações e nosso modo de
                    viver. Como espíritos imortais – vivenciando uma nova
                    experiência encarnatória num mundo de provas e expiações que
                    transita para uma era de regeneração planetária –, sabemos
                    que somos ainda “crianças espirituais” dentro da escalada
                    evolutiva rumo à angelitude para a qual fomos criados. Fato
                    este que nos caracteriza diante das adversidades e na falta
                    de compreensão da vida em seus múltiplos aspectos.{" "}
                </p>
                <p>
                    Uns anseiam que suas vidas sejam como num conto de fadas,
                    onde tudo sempre dá certo. E diante das frustações, se
                    abatem ou se revoltam contra Deus. Outros, alimentam em seu
                    íntimo o desejo de controlar e resolver tudo como se fossem
                    um superherói dos quadrinhos. E diante da sensação de
                    impotência ou fracasso, se angustiam ou se culpam. Mas, tudo
                    isso pode ser amenizado – ou até mesmo curado -, quando nos
                    conscientizamos da nossa condição espiritual e buscamos
                    cuidar da nossa criança interior... com todo carinho,
                    respeito e acolhimento que ela merece. Compreendendo e
                    trabalhando emocionalmente os nossos medos, anseios e
                    inseguranças infantis, conseguiremos nos libertar das
                    amarras que nos impedem crescer espiritualmente e enxergar a
                    vida como abençoada oportunidade evolutiva.{" "}
                </p>
                <p>
                    Quando nossa criança interior se sente amada e protegida,
                    temos mais motivação e alegria de viver. Somos capazes de
                    nos amar, nos perdoar e também de amar aqueles que caminham
                    conosco, aceitando-os como são. Consequentemente, somos
                    também mais amados. Aprendemos a vivenciar o amor e a
                    enfrentar as situações – experiências naturais de um mundo
                    de expiações e provas – com muito mais leveza, força e fé.
                    Com a certeza de que não estamos sós e nem desamparados.
                    Afinal, somos “crianças espirituais” que contam com o amparo
                    e a proteção do nosso Pai Maior, que nos criou por amor e
                    para amar! Vamos abrir o baú de nossas histórias, para
                    cuidar da nossa criança interior e nos deixar acolher pela
                    amorosidade de nossos ancestrais e amigos espirituais!{" "}
                </p>
                <p>
                    Aguardamos vocês, com a alegria de sempre!
                    <br />
                    <b>Equipe Humanizar Sul Fluminense </b>
                </p>
                <p>Texto: Ana Paula Raposo </p>
            </div>
            <a className='btn rnd'>Ir para o Site</a>
        </div>
    </ModalContainer>
);
export default PreHome;
