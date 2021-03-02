import styled from "styled-components";
import Link from "next/link";
import Sidebar from "../components/Sidebar";

import db from "../assets/db";

const Page = (props) => {
    const { config, itemMural } = props;

    return (
        <Main>
            <h2>Informações</h2>
            <div className='texto'>
                <p>
                    O encontro é programado para ser uma proposta de
                    desenvolvimento pessoal.
                </p>
                <p>
                    <span>
                        Como a proposta do encontro é de imersão, a condição
                        estabelecida é de que todos os participantes
                        permanecerão hospedados no Centro Marista. Por se tratar
                        de um local para eventos, a norma do Centro Marista é
                        que as inscrições sem hospedagem não serão aceitas.
                    </span>
                </p>
                <p>
                    Ao chegar à recepção do Humanizar Sul Fluminense, os
                    participantes serão acolhidos pela equipe e receberão as
                    informações quanto às acomodações onde ficarão hospedados.{" "}
                </p>

                <p>
                    Para quem ainda não conhece o Centro Marista, sua
                    localização está em uma região que, nessa época do ano, é
                    fria ao amanhecer e ao anoitecer, porém quente durante a
                    tarde. Por isso, é aconselhável trazer agasalhos e também
                    roupas leves. Para caminhadas, o tênis é o calçado mais
                    recomendado. É conveniente o uso de repelentes, já que
                    estaremos em contato direto com a Natureza.
                </p>

                <p>
                    Durante o encontro serão colocados à venda vários títulos de
                    livros de interesse geral. Quem quiser adquirí-los poderá
                    usar cartão de crédito Visa e Mastercard.
                </p>

                <p>
                    No valor das inscrições estão incluídos: hospedagem com
                    direito a 3 almoços, 2 jantares, 2 coffees breaks à tarde, 1
                    camisa e 1 bolsa contendo caneta e bloco de anotações.
                </p>

                <p>As bebidas não estão incluídas no valor da inscrição.</p>

                <p>
                    O Centro Marista oferece roupa de cama e banho, porém não
                    oferece serviços de quarto nem produtos de higiene pessoal
                    (sabonete, pasta dental, etc).
                </p>

                <p>
                    <span>
                        Não esqueça dos seus remédios e itens de uso pessoal.
                    </span>
                </p>

                <p>
                    <b>
                        As vagas nos quartos e apartamentos serão preenchidas de
                        acordo com a ordem de chegada das inscrições. (Ver itens{" "}
                        <Link href='/acomodacoes'>
                            <a>“Acomodações”</a>
                        </Link>{" "}
                        e{" "}
                        <Link href='/inscricoes'>
                            <a>“Inscreva-se”</a>
                        </Link>
                        ).
                    </b>
                </p>

                <p>
                    <b>As inscrições são individuais.</b>
                </p>

                <p>
                    Ao se inscrever, informe, na ficha de inscrição, o nome de
                    seu(s) acompanhante(s). Seu pedido será atendido, de acordo
                    com a disponibilidade de quartos e apartamentos. No mais, a
                    equipe organizadora acomodará os participantes em quartos e
                    apartamentos masculinos e femininos.
                </p>

                <p>
                    Alertamos para a importância do preenchimento, na ficha de
                    inscrição, do campo relativo a necessidades especiais.
                    Deverá ser informado qual o tipo de necessidade para que
                    possamos oferecer, dentro do possível, acomodações mais
                    adequadas.
                </p>

                <p>
                    As fotos do encontro serão divulgadas em nossa própria
                    página.
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
export default Page;

const Main = styled.div`
    position: relative;
    color: ${({ theme }) => theme.colors.mainText};
    padding-bottom: 40px;
    min-height: 740px;
    margin-top: 40px;
    width: 640px;

    .texto {
        p {
            span {
                color: ${({ theme }) => theme.colors.error};
                font-family: "Roboto";
                font-weight: bold;
            }
            b {
                font-family: "Roboto";
            }
            a {
                font-family: "Roboto";
            }
        }
    }
`;
