import styled from "styled-components";
import Sidebar from "../components/Sidebar";

const Page = (props) => {
    const db = props.data;

    const random = Math.floor(Math.random() * (db.mural.length - 1));
    const item = db.mural[random];

    return (
        <Main>
            <h2>Inscrições</h2>
            <h2 className='data'>
                Vagas Esgotadas | Esperamos você na próxima edição.
            </h2>
            <h3>Como se Inscrever</h3>
            <div className='texto'>
                <p>As inscrições são individuais.</p>
                <p>
                    Preencha as fichas de inscrição e clique em{" "}
                    <b>
                        <span>Enviar</span>
                    </b>
                </p>
                <p>
                    Apenas para efeito de acomodações informe, na ficha de
                    inscrição, o(s) nome(s) de seu(s) acompanhante(s). Esta
                    informação não garante a vaga. É necessário que sejam
                    enviadas as fichas de inscrição individuais.
                </p>
                <p>
                    Caso haja disponibilidade de vaga para a opção de acomodação
                    escolhida, retornaremos confirmando sua reserva, por e-mail,
                    informando os dados bancários.
                </p>
                <p>
                    Não deixe de informar, na ficha de inscrição, o seu e-mail
                    ou telefone para contato.
                </p>
                <p>
                    Após receber a nossa confirmação, faça o depósito da 1ª
                    parcela ou parcela única e envie o comprovante de depósito,
                    para o e-mail{" "}
                    <a href='mailto:humanizarsulfluminense@gmail.com'>
                        <b>humanizarsulfluminense@gmail.com</b>
                    </a>{" "}
                    ou para o fax (24) 3342-3730,{" "}
                    <b>
                        no prazo máximo de 24h, após o envio de nossa
                        confirmação
                    </b>
                    . Caso não seja cumprido este prazo, sua reserva será
                    cancelada e a vaga liberada.
                </p>
                <p>
                    <b>
                        No comprovante de depósito enviado deverá constar o(s)
                        nome(s) da(s) pessoa(s) a que se refere o depósito.
                    </b>
                </p>
                <p>
                    <b>
                        No caso de pagamento parcelado, os comprovantes de
                        depósito deverão ser enviados após o pagamento de cada
                        parcela, que deverão ser pagas até o dia 10 de cada mês
                        subsequente.
                    </b>
                </p>
                <p>
                    <b>
                        <span>
                            No caso de desistência, não será feita a devolução
                            dos valores pagos (total ou parcial).
                        </span>
                    </b>
                </p>
                <p>
                    <b>
                        <span>No caso de substituição de participantes</span>
                    </b>
                    informamos que a mesma só será aceita mediante informação,
                    por e-mail, do nome do desistente e da ficha de inscrição do
                    substituto,
                    <b>
                        <span>até o dia 5 de maio de 2020.</span>
                    </b>
                </p>
            </div>
            <h3>Valores Por Pessoa</h3>
            <div className='valores'>
                <div className='item rnd'>
                    <p className='tipo'>Quarto</p>
                    <p className='valor'>R$ 525,00</p>
                    <a
                        title='Quarto'
                        href='_img/site/quarto01g.jpg'
                        rel='q'
                        className='ver btn rnd fb'>
                        Veja a Foto
                    </a>
                    <a
                        title='Quarto'
                        href='_img/site/quarto02g.jpg'
                        rel='q'
                        className='fb'></a>
                    <span>Vagas Esgotadas</span>
                </div>

                <div className='item rnd'>
                    <p className='tipo'>Apartamento C</p>
                    <p className='valor'>R$ 678,00</p>
                    <a
                        title='Apartamento C'
                        href='_img/site/ap3g.jpg'
                        className='ver btn rnd fb'>
                        Veja a Foto
                    </a>
                    <span>Vagas Esgotadas</span>
                </div>

                <div className='item rnd'>
                    <p className='tipo'>Apartamento B</p>
                    <p className='valor'>R$ 760,00</p>
                    <a
                        title='Apartamento B'
                        href='_img/site/ap2g.jpg'
                        className='ver btn rnd fb'>
                        Veja a Foto
                    </a>
                    <span>Vagas Esgotadas</span>
                </div>

                <div className='item rnd'>
                    <p className='tipo'>Apartamento A</p>
                    <p className='valor'>R$ 885,00</p>
                    <a
                        title='Apartamento A'
                        href='_img/site/ap1g.jpg'
                        className='ver btn rnd fb'>
                        Veja a Foto
                    </a>
                    <span>Vagas Esgotadas</span>
                </div>
            </div>

            <h3>Formas de Pagamento</h3>
            <div className='formas'>
                <div className='cabecalho rnd'>
                    <p className='tipo'>Parcelas</p>
                    <p className='valor'>1x</p>
                    <p className='valor'>2x</p>
                    <p className='valor'>3x</p>
                    <p className='valor'>4x</p>
                    <p className='valor'>5x</p>
                </div>
                <div className='item rnd'>
                    <p className='tipo'>Quarto</p>
                    <p className='valor'>R$ 525,00</p>
                    <p className='valor'>R$ 262,00</p>
                    <p className='valor'>R$ 175,00</p>
                    <p className='valor'>R$ 130,00</p>
                    <p className='valor'>R$ 105,00</p>
                </div>
                <div className='item rnd'>
                    <p className='tipo'>Apto. C</p>
                    <p className='valor'>R$ 678,00</p>
                    <p className='valor'>R$ 340,00</p>
                    <p className='valor'>R$ 226,00</p>
                    <p className='valor'>R$ 170,00</p>
                    <p className='valor'>R$ 135,00</p>
                </div>
                <div className='item rnd'>
                    <p className='tipo'>Apto. B</p>
                    <p className='valor'>R$ 760,00</p>
                    <p className='valor'>R$ 380,00</p>
                    <p className='valor'>R$ 254,00</p>
                    <p className='valor'>R$ 190,00</p>
                    <p className='valor'>R$ 152,00</p>
                </div>
                <div className='item rnd'>
                    <p className='tipo'>Apto. A</p>
                    <p className='valor'>R$ 885,00</p>
                    <p className='valor'>R$ 449,00</p>
                    <p className='valor'>R$ 295,00</p>
                    <p className='valor'>R$ 220,00</p>
                    <p className='valor'>R$ 177,00</p>
                </div>
            </div>

            <div className='texto'>
                <p>
                    Para inscrição com pagamento único, este deverá ser efetuado
                    no ato da inscrição.
                </p>
                <p>
                    O pagamento da inscrição poderá ser parcelado em até cinco
                    (5) vezes, sendo que a 1ª parcela deverá ser paga no ato da
                    inscrição e as demais até o dia <span>10</span> de cada mês
                    subsequente.
                </p>
                <p>
                    As informações bancárias para depósito serão informadas, por
                    e-mail, na confirmação da inscrição.
                </p>
            </div>
            <a href='#splash' className='btnTopo rnd fb'>
                Inscreva-se Já!
            </a>

            <Sidebar item={item} />
        </Main>
    );
};

const Main = styled.div`
    position: relative;
    color: ${({ theme }) => theme.colors.mainText};
    padding-bottom: 40px;
    min-height: 740px;
    margin-top: 40px;
    width: 640px;
    .texto {
        p b,
        p span {
            font-family: "Roboto";
        }
        p span {
            color: ${({ theme }) => theme.colors.error};
        }
    }
    .valores {
        margin-bottom: 30px;
        padding: 0 10px;
        .item {
            height: 32px;
            padding-left: 10px;
            background: #fff;
            width: 390px;
            margin-bottom: 4px;
            position: relative;
            .tipo {
                color: #41352f;
                font-size: 18px;
                font-weight: bold;
                line-height: 32px;
                width: 160px;
                float: left;
            }
            .valor {
                color: #41352f;
                font-size: 18px;
                line-height: 32px;
                width: 80px;
                float: left;
                text-align: center;
                letter-spacing: -1px;
            }
            .ver {
                color: #fff;
                font-size: 16px;
                width: 140px;
                float: right;
            }
            span {
                position: absolute;
                right: -130px;
                color: #003366;
                font-size: 16px;
                line-height: 32px;
                font-weight: bold;
            }
        }
    }
    .formas {
        margin-bottom: 30px;
        padding: 0 10px;
        .cabecalho {
            height: 32px;
            padding-left: 10px;
            background: #003366;
            width: 610px;
            margin-bottom: 9px;
            .tipo {
                color: #fff;
                font-size: 18px;
                font-weight: bold;
                line-height: 32px;
                width: 80px;
                float: left;
                margin-left: 15px;
            }
            .valor {
                color: #fff;
                font-size: 18px;
                font-weight: bold;
                line-height: 32px;
                width: 80px;
                float: left;
                text-align: center;
                letter-spacing: -1px;
                margin-left: 20px;
            }
        }
        .item {
            height: 32px;
            padding-left: 10px;
            background: #fff;
            width: 610px;
            margin-bottom: 4px;
            .tipo {
                color: #41352f;
                font-size: 18px;
                font-weight: bold;
                line-height: 32px;
                width: 80px;
                margin-left: 10px;
                float: left;
            }
            .valor {
                color: #41352f;
                font-size: 18px;
                line-height: 32px;
                width: 80px;
                float: left;
                text-align: center;
                letter-spacing: -1px;
                margin-left: 20px;
            }
        }
    }
    .btnTopo {
        display: block;
        width: 260px;
        height: 48px;
        background-color: #003366;
        font-size: 26px;
        line-height: 46px;
        color: #fff;
        margin: 13px auto;
        font-weight: bold;
        text-align: center;
        cursor: pointer;
    }
`;
export default Page;
