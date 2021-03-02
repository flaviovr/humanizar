import React, { useState } from "react";
import styled from "styled-components";
import Sidebar from "../components/Sidebar";
import FsLightbox from "fslightbox-react";

import db from "../assets/db";

import Link from "next/link";

const Page = (props) => {
    const { config, itemMural } = props;
    const [openModal, setOpenModal] = useState(false);

    const sourceFancybox = [];
    const sourceModal = config.inscricoes.isOpen ? (
        config.inscricoes.total == 4 ? (
            <div>
                <h3 class='data modal'>
                    Vagas Esgotadas
                    <br />
                    Esperamos você na próxima edição.
                </h3>
            </div>
        ) : (
            <div>
                <h3 class='data modal'>
                    Inscrições Abertas
                    <br />
                    Vagas Limitadas.
                </h3>
            </div>
        )
    ) : (
        <div>
            <h3 class='data modal'>
                Inscrições a partir de <br />8 de Dezembro de 2019 às 8h.
            </h3>
        </div>
    );

    const texto = config.inscricoes.isOpen
        ? config.inscricoes.total == 4
            ? "Vagas Esgotadas | Esperamos você na próxima edição "
            : "Inscrições Abertas | Vagas Limitadas."
        : "A partir de 8 de Dezembro de 2019 às 8h.";
    return (
        <Main>
            <h2>Inscrições</h2>
            <h2 className='data'>{texto}</h2>
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
                        href='/acomodacoes'
                        rel='q'
                        className='ver btn rnd fb'>
                        Veja a Foto
                    </a>
                    <a
                        title='Quarto'
                        href='/acomodacoes'
                        rel='q'
                        className='fb'></a>
                    {config.inscricoes.quarto == 1 && (
                        <span>Vagas Esgotadas</span>
                    )}
                </div>

                <div className='item rnd'>
                    <p className='tipo'>Apartamento C</p>
                    <p className='valor'>R$ 678,00</p>
                    <a
                        title='Apartamento C'
                        href='/acomodacoes'
                        className='ver btn rnd fb'>
                        Veja a Foto
                    </a>
                    {config.inscricoes.apc == 1 && <span>Vagas Esgotadas</span>}
                </div>

                <div className='item rnd'>
                    <p className='tipo'>Apartamento B</p>
                    <p className='valor'>R$ 760,00</p>
                    <a
                        title='Apartamento B'
                        href='/acomodacoes'
                        className='ver btn rnd fb'>
                        Veja a Foto
                    </a>
                    {config.inscricoes.apb == 1 && <span>Vagas Esgotadas</span>}
                </div>

                <div className='item rnd'>
                    <p className='tipo'>Apartamento A</p>
                    <p className='valor'>R$ 885,00</p>
                    <a
                        title='Apartamento A'
                        href='/acomodacoes'
                        className='ver btn rnd fb'>
                        Veja a Foto
                    </a>
                    {config.inscricoes.apa == 1 && <span>Vagas Esgotadas</span>}
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
            <FsLightbox toggler={openModal} sources={[sourceModal]} slide={1} />
            {config.inscricoes.isOpen && config.inscricoes.total < 4 ? (
                <Link href='/ficha-inscricao'>
                    <a className='btnTopo rnd'>Inscreva-se Já!</a>
                </Link>
            ) : (
                <a
                    onClick={(e) => {
                        e.preventDefault();
                        setOpenModal(!openModal);
                    }}
                    className='btnTopo rnd fb'>
                    Inscreva-se Já!
                </a>
            )}

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
    .modal {
        font-size: 40px;
        text-align: center;
        margin: 20px;
    }
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
