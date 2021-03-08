import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import styled from "styled-components";
import Link from "next/link";

import db from "../../assets/db";

const Page = (galeria) => {
    //console.log(galeria);
    const fotos = parseInt(galeria.fotos) + 1;
    const [openFotos, setOpenFotos] = useState({
        toggler: false,
        slide: 1,
    });
    const fotoList = [];
    const fotoSource = [];

    for (let i = 1; i < fotos; i++) {
        fotoSource.push(`/images/albuns/${galeria.ano}/${i}.jpg`);
        fotoList.push(
            <a
                key={i}
                onClick={() =>
                    setOpenFotos({
                        toggler: !openFotos.toggler,
                        slide: i,
                    })
                }>
                <img src={`/images/albuns/${galeria.ano}/thumb/${i}.jpg`} />
            </a>
        );
    }

    return (
        <Main>
            <h2>Álbum de Recordações</h2>
            <h3>
                {galeria.ano} - {galeria.nome}
            </h3>
            <div className='lista'>{fotoList}</div>
            <FsLightbox
                toggler={openFotos.toggler}
                sources={fotoSource}
                slide={openFotos.slide}
            />
        </Main>
    );
};

const Main = styled.div`
    font-size: 50px;
    color: ${({ theme }) => theme.colors.mainText};
    padding-bottom: 40px;
    margin-top: 40px;
    .lista {
        display: block;
        a {
            cursor: pointer;
            b {
                display: block;
                font-size: 18px;
                color: #003366;
            }
            display: inline-block;
            margin: 10px;
            width: 300px;

            text-align: center;
            font-size: 18px;
            color: #6185c2;
            img {
                display: block;
                width: 300px;
                height: 235px;
                border-bottom: 5px solid #ff99cc;
                margin-bottom: 5px;
            }
        }
    }
`;

// export async function getServerSideProps(context) {
//     const ano = context.query.ano;
//     return {
//         props: { ano: ano }, // will be passed to the page component as props
//         // revalidate: 10
//     };
// }

export async function getStaticProps(context) {
    const { ano } = context.params;

    let query = await db.query(
        `select * from galerias where ano=${db.escape(ano)}`
    );
    const galeria = JSON.parse(JSON.stringify(query)).pop();
    await db.end();

    return {
        props: { ...galeria }, // will be passed to the page component as props
    };
}
export async function getStaticPaths() {
    return {
        paths: [
            "/album/2009",
            "/album/2010",
            "/album/2011",
            "/album/2012",
            "/album/2013",
            "/album/2014",
            "/album/2015",
            "/album/2016",
            "/album/2017",
            "/album/2018",
            "/album/2019",
        ],
        fallback: false,
    };
}

export default Page;
