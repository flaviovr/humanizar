import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import styled from "styled-components";
import Sidebar from "../components/Sidebar";

const Page = (props) => {
    const { config, itemMural } = props;

    const [fbQuarto, setFbQuarto] = useState({
        toggler: false,
        slide: 1,
    });
    const [fbAp, setFbAp] = useState({
        toggler: false,
        slide: 1,
    });

    return (
        <Main>
            <h2>Acomodações</h2>

            <div className='texto'>
                <p>
                    Situado na região do Vale do Café, município de Mendes,
                    interior do estado do Rio de Janeiro, em meio à Mata
                    Atlântica secundária com 250 hectares de extensão e uma
                    altitude média de 431 m acima do nível do mar, o Centro
                    Marista está localizado, aproximadamente, a 100km da cidade
                    do Rio de Janeiro, 380 km de Belo Horizonte e 390 km de São
                    Paulo.
                </p>
            </div>

            <h3>Apartamentos</h3>

            <div className='texto'>
                <p>
                    Os apartamentos são classificados em 3 categorias: A, B e C.
                </p>
                <p>
                    {config.inscricoes.apc == 1 && <span>(Esgotado) </span>}Os
                    apartamentos de categoria C <span>(Cenáculo)</span> têm
                    telefone, ventilador de teto e banheiro privativo. Dispõem
                    de uma sala de TV e um frigobar de uso comunitário. Eles têm
                    a vantagem de serem silenciosos e ainda mais perto da
                    Natureza, por estarem localizados na parte mais alta.
                </p>
                <p>
                    {config.inscricoes.apb == 1 && <span>(Esgotado) </span>}Os
                    apartamentos da categoria B <span>(Bloco A)</span> têm TV,
                    ventilador de teto, telefone, frigobar e banheiro privativo.
                </p>
                <p>
                    {config.inscricoes.apa == 1 && <span>(Esgotado) </span>}
                    Os apartamentos da categoria A <span>(Bloco B)</span> são
                    reformados e equipados com TV, telefone, frigobar,
                    ventilador de teto e banheiro privativo.
                </p>

                <a
                    className='fotoap'
                    onClick={() =>
                        setFbAp({
                            toggler: !fbAp.toggler,
                            slide: 1,
                        })
                    }>
                    <img src='/images/local/ap3.jpg' alt='Foto Apto.  C' />
                    Foto Apto. C
                </a>
                <a
                    className='fotoap'
                    onClick={() =>
                        setFbAp({
                            toggler: !fbAp.toggler,
                            slide: 2,
                        })
                    }>
                    <img src='/images/local/ap2.jpg' alt='Foto Apto.  B' />
                    Foto Apto. B
                </a>
                <a
                    className='fotoap fim'
                    onClick={() =>
                        setFbAp({
                            toggler: !fbAp.toggler,
                            slide: 3,
                        })
                    }>
                    <img src='/images/local/ap1.jpg' alt='Foto Apto.  A' />
                    Foto Apto. A
                </a>
            </div>

            <h3>
                Quartos{" "}
                {config.inscricoes.quarto == 1 && <span>(Esgotado) </span>}
            </h3>

            <div className='texto cf'>
                <p>Acomodações em quartos com 2, 3, 4, 6 ou 8 camas.</p>
                <p>
                    Para maior conforto, todos possuem uma pia, são ensolarados,
                    claros e bem equipados. Os banheiros são em vestiários
                    coletivos, em cada andar (separados para homens e mulheres)
                    com, pelo menos, 5 banheiros em cada um, com toda
                    privacidade.
                </p>
                <p>
                    Os quartos para 2 pessoas estão localizados no Bloco A e os
                    demais no Bloco C.
                </p>
                <p>
                    Não existem quartos no andar térreo. Os acessos aos quartos
                    têm, pelo menos, um lance de escadas.
                </p>
                <a
                    className='fotoqt'
                    onClick={() =>
                        setFbQuarto({
                            toggler: !fbQuarto.toggler,
                            slide: 1,
                        })
                    }>
                    <img src='/images/local/quarto01.jpg' />
                </a>
                <a
                    className='fotoqt fim'
                    onClick={() =>
                        setFbQuarto({
                            toggler: !fbQuarto.toggler,
                            slide: 2,
                        })
                    }>
                    <img src='/images/local/quarto02.jpg' />
                </a>
                <a
                    className='fotoqt'
                    onClick={() =>
                        setFbQuarto({
                            toggler: !fbQuarto.toggler,
                            slide: 1,
                        })
                    }>
                    Fotos dos quartos
                </a>

                <FsLightbox
                    toggler={fbAp.toggler}
                    sources={[
                        "/images/local/ap3g.jpg",
                        "/images/local/ap2g.jpg",
                        "/images/local/ap1g.jpg",
                    ]}
                    slide={fbAp.slide}
                />
                <FsLightbox
                    toggler={fbQuarto.toggler}
                    sources={[
                        "/images/local/quarto01g.jpg",
                        "/images/local/quarto02g.jpg",
                    ]}
                    slide={fbQuarto.slide}
                />
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

export default Page;
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
    h3 span {
        color: #5a3698;
    }
    .fotoap {
        cursor: pointer;
        display: inline-block;
        margin: 0 25px 0 0;
        width: 190px;
        text-align: center;
        font-size: 18px;
        color: #ff99cc;
        &.fim {
            margin-right: 0px;
        }
        img {
            width: 190px;
            height: auto;
            border-bottom: 5px solid #ff99cc;
        }
        &:hover img {
            border-bottom: 5px solid #ad3e75;
        }
    }
    .fotoqt {
        cursor: pointer;
        display: inline-block;
        margin: 0 25px 0 0;
        width: 190px;
        text-align: center;
        font-size: 18px;
        color: #ff99cc;
        margin-left: 90px;
        img {
            width: 190px;
            height: auto;
            border-bottom: 5px solid #ff99cc;
        }
        &.fim {
            margin-right: 0px;
            margin-left: 20px;
        }
        &:hover img {
            border-bottom: 5px solid #ad3e75;
        }
    }
`;
