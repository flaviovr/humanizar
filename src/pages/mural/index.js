import styled from "styled-components";
import Mural from "../../components/Mural";
import React, { useState } from "react";

import db from "../../assets/db";

const Page = (props) => {
    const { itensMural } = props;

    return (
        <Main>
            <h2>Mural de Recados</h2>
            <div className='texto'>
                <p>
                    Este espaço foi criado para você compartilhar a importância
                    do Humanizar em sua vida. Conte sobre seu aprendizado, suas
                    emoções, suas experiências vividas, ou seja, de que forma o
                    evento acrescenta no seu dia a dia. Escreva uma mensagem de
                    carinho e deixe todo mundo saber o quanto o Humanizar é
                    importante pra você!
                </p>
            </div>
            <a className='btn fbMural'>Deixe seu Recado</a>
            <hr />
            <Mural data={itensMural} perPage={9} paginate />
        </Main>
    );
};

const Main = styled.div`
    font-size: 50px;
    color: ${({ theme }) => theme.colors.mainText};
    padding-bottom: 40px;
    margin-top: 40px;
    .btn {
        margin: 30px auto;
        width: 220px;
    }
`;

export async function getStaticProps(context) {
    let query = await db.query(
        "select id, nome, recado, data  from mural where ativo=1 order by id desc"
    );
    const data = JSON.parse(JSON.stringify(query));

    await db.end();

    return {
        props: { itensMural: data },
        revalidate: 60 * 60,
    };
}
export default Page;
