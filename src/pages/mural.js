import styled from "styled-components";
import Mural from "../components/Mural";
import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

import db from "../assets/db";

const Page = (props) => {
    const { itensMural } = props;
    const [openSendForm, setOpenSendForm] = useState(false);
    const { register, handleSubmit, formState } = useForm();
    const onSubmit = async (data) => {
        await salvaRecado(data);
    };
    //console.log(formState.errors);
    const Modal = (
        <ModalForm>
            <form id='formRecado' onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor='name'>
                    Nome, Cidade - Estado:{" "}
                    <span>
                        <ErrorMessage
                            errors={formState.errors}
                            name='name'></ErrorMessage>
                    </span>
                </label>
                <input
                    name='name'
                    ref={register({ required: "Campo obrigatório" })}
                    className={formState.errors.name ? "erro rnd" : "rnd"}
                    placeholder='Digite seu nome...'
                />
                <label htmlFor='email'>
                    E-mail:{" "}
                    <span>
                        <ErrorMessage
                            errors={formState.errors}
                            name='email'></ErrorMessage>
                    </span>
                </label>
                <input
                    name='email'
                    ref={register({
                        required: "Campo obrigatório",
                        pattern: {
                            value: /^[a-z0-9.]+@[a-z0-9]+.[a-z]+.([a-z]+)?$/i,
                            message: "Email inválido",
                        },
                    })}
                    className='campo rnd placeholder'
                    placeholder='Digite seu e-mail...'
                />

                <label htmlFor='message'>
                    Recado:{" "}
                    <span>
                        <ErrorMessage
                            errors={formState.errors}
                            name='message'></ErrorMessage>
                    </span>
                </label>
                <textarea
                    name='message'
                    ref={register({ required: "Campo obrigatório" })}
                    className='campo rnd recado placeholder'
                    placeholder='Digite sua mensagem...'></textarea>

                <input type='submit' value='Enviar' className=' rnd enviar' />
            </form>
        </ModalForm>
    );
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
            <a
                className='btn fbMural'
                onClick={() => setOpenSendForm(!openSendForm)}>
                Deixe seu Recado
            </a>
            <hr />
            <Mural data={itensMural} perPage={9} paginate />
            <FsLightbox toggler={openSendForm} sources={[Modal]} slide={1} />
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
const ModalForm = styled.div`
    width: 590px;
    background-color: #fff;
    opacity: 1;
    padding: 15px;
    height: auto;
    form {
        label {
            display: block;
            font-size: 18px;
            color: #41352f;
            width: 550px;
            margin-bottom: 5px;
        }
        input,
        textarea {
            border: 1px solid #d3d0cb;
            height: 35px;
            width: 560px;
            padding: 5px;
            margin-bottom: 15px;
            &.recado {
                height: 200px;
                margin-bottom: 15px;
            }
        }
        input[type="submit"] {
            width: 140px;
            border: none;
            margin: 0px;
            display: block;
            height: 32px;
            background-color: #036;
            font-size: 18px;

            color: #fff;
            font-weight: bold;
            text-align: center;
            cursor: pointer;
        }
    }
`;

async function salvaRecado(data) {
    try {
        const res = await fetch("http://localhost:3000/api/recado", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });
        const { ok, msg } = await res.json();
        if (ok) document.querySelector("#formRecado").reset();
        alert(msg);
    } catch (error) {
        alert("Erro ao enviar, tente novamente");
    }
}
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
