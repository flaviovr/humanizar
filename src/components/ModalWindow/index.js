import styled from "styled-components";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const ModalWindow = (props) => {
    //const [modal, setModal] = useState("open");

    useEffect(() => {
        // Atualiza o titulo do documento usando a API do browser

        document.querySelector("body").classList.add("modal");
        document.body.scrollTo(0, 0);
    }, []);
    const hidePre = (e) => {
        document.body.classList.remove("modal");
        document.body.scrollTo(0, 0);
        const modal = document.getElementById("ModalContainer");

        modal.classList.add("close");
        // document.ModalWindow.classList.add("close");
    };

    return (
        <ModalContainer id='ModalContainer'>
            <div className='preHome'>
                <a
                    onClick={hidePre}
                    src='ModalContainer'
                    className='fechar'></a>
                <div className='texto'>
                    <p>
                        Era uma vez... abrindo o baú das histórias Todos temos
                        em nós uma criança interior, que precisa ser amada,
                        compreendida, valorizada e acolhida emocionalmente.
                        Trazemos conosco na vida adulta as características do
                        estado psicológico em que esta criança interior se
                        encontra. E isso pode ajudar ou atrapalhar as nossas
                        relações e nosso modo de viver. Como espíritos imortais
                        – vivenciando uma nova experiência encarnatória num
                        mundo de provas e expiações que transita para uma era de
                        regeneração planetária –, sabemos que somos ainda
                        “crianças espirituais” dentro da escalada evolutiva rumo
                        à angelitude para a qual fomos criados. Fato este que
                        nos caracteriza diante das adversidades e na falta de
                        compreensão da vida em seus múltiplos aspectos.{" "}
                    </p>
                    <p>
                        Uns anseiam que suas vidas sejam como num conto de
                        fadas, onde tudo sempre dá certo. E diante das
                        frustações, se abatem ou se revoltam contra Deus.
                        Outros, alimentam em seu íntimo o desejo de controlar e
                        resolver tudo como se fossem um superherói dos
                        quadrinhos. E diante da sensação de impotência ou
                        fracasso, se angustiam ou se culpam. Mas, tudo isso pode
                        ser amenizado – ou até mesmo curado -, quando nos
                        conscientizamos da nossa condição espiritual e buscamos
                        cuidar da nossa criança interior... com todo carinho,
                        respeito e acolhimento que ela merece. Compreendendo e
                        trabalhando emocionalmente os nossos medos, anseios e
                        inseguranças infantis, conseguiremos nos libertar das
                        amarras que nos impedem crescer espiritualmente e
                        enxergar a vida como abençoada oportunidade evolutiva.{" "}
                    </p>
                    <p>
                        Quando nossa criança interior se sente amada e
                        protegida, temos mais motivação e alegria de viver.
                        Somos capazes de nos amar, nos perdoar e também de amar
                        aqueles que caminham conosco, aceitando-os como são.
                        Consequentemente, somos também mais amados. Aprendemos a
                        vivenciar o amor e a enfrentar as situações –
                        experiências naturais de um mundo de expiações e provas
                        – com muito mais leveza, força e fé. Com a certeza de
                        que não estamos sós e nem desamparados. Afinal, somos
                        “crianças espirituais” que contam com o amparo e a
                        proteção do nosso Pai Maior, que nos criou por amor e
                        para amar! Vamos abrir o baú de nossas histórias, para
                        cuidar da nossa criança interior e nos deixar acolher
                        pela amorosidade de nossos ancestrais e amigos
                        espirituais!{" "}
                    </p>
                    <p>
                        Aguardamos vocês, com a alegria de sempre!
                        <br />
                        <b>Equipe Humanizar Sul Fluminense </b>
                    </p>
                    <p>Texto: Ana Paula Raposo </p>
                </div>
                <a onClick={hidePre} className=' btn rnd'>
                    Ir para o Site
                </a>
            </div>
        </ModalContainer>
    );
};

const ModalContainer = styled.div`
    &.close {
        opacity: 0;
        transition: all 0.5s ease-in-out;
        display: none;
    }

    transition: all 0.2s ease-in-out;
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: auto;
    top: 0px;
    left: 0px;
    background: rgba(255, 255, 255, 0.9);
    display: block;
    z-index: 999999;
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
        width: 990px;
        padding: 20px 10px 10px 440px;
        margin: 0 auto;
        background: url(images/page/logo-prehome.png) 30px 20px no-repeat;
        position: relative;
    }
    .fechar {
        display: block;
        position: absolute;
        top: 10px;
        right: -10px;
        opacity: 0.5;
        width: 32px;
        height: 32px;
        cursor: pointer;
        z-index: 8040;
        background-image: url(images/page/close.png);
        &:hover {
            opacity: 1;
        }
    }
`;

export default ModalWindow;
