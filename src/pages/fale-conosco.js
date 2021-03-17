import styled from "styled-components";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

const Page = (props) => {
    const { register, handleSubmit, formState, errors } = useForm();

    const onSubmit = async (data) => {
        await salvaContato(data);
        enviaEmail(data);
    };

    // if (
    //     formState.errors.name ||
    //     formState.errors.email ||
    //     formState.errors.message
    // ) {
    //     alert("Preencha todos campos corretamente!");
    // }

    return (
        <Main>
            <h2>Fale Conosco</h2>

            <form
                name='formContato'
                id='formContato'
                onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor='name'>
                    Nome:{" "}
                    <span>
                        <ErrorMessage
                            errors={formState.errors}
                            name='message'></ErrorMessage>
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
                        required: "Campo Obrigatório",
                        pattern: {
                            value: /^[a-z0-9.]+@[a-z0-9]+.[a-z]+.([a-z]+)?$/i,
                            message: "Email inválido",
                        },
                    })}
                    className={formState.errors.email ? "erro rnd" : "rnd"}
                    placeholder='Digite seu e-mail...'
                />

                <label htmlFor='recado'>
                    Mensagem:{" "}
                    <span>
                        <ErrorMessage
                            errors={formState.errors}
                            name='name'></ErrorMessage>
                    </span>
                </label>
                <textarea
                    name='message'
                    ref={register({ required: "Campo obrigatório" })}
                    className={formState.errors.message ? "erro rnd" : "rnd"}
                    placeholder='Digite sua mensagem...'></textarea>

                <input
                    type='submit'
                    value='Enviar'
                    className='btn rnd enviar'
                />
            </form>

            <div id='box' className='rnd'>
                <h3>Contatos</h3>

                <h4>E-mail</h4>
                <p>humanizarsulfluminense@gmail.com</p>

                <h4>Telefone</h4>
                <p>
                    24 99812 6093 <br />
                    Lucia Jardim | Reinaldo
                </p>

                <h4>Fax</h4>
                <p>24 3342 3730</p>
            </div>
        </Main>
    );
};

async function salvaContato(data) {
    try {
        const res = await fetch("http://localhost:3000/api/contato", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });
    } catch (error) {
        console.log(error);
    }
}

function enviaEmail(data) {
    emailjs.init("user_4GtVZ3aXk46211YL86vvw");
    data.message = data.message.replace(/(?:\r\n|\r|\n)/g, "<br/>");

    emailjs.send("service_zh3no8w", "template_3ljh249", data).then(
        (response) => {
            console.log(response);

            alert("Recado enviado com sucesso");
            //document.querySelector("form").reset();
        },
        (error) => {
            alert("erro ao enviar email");
        }
    );
}

const Main = styled.div`
    position: relative;
    color: ${({ theme }) => theme.colors.mainText};
    padding-bottom: 40px;
    min-height: 740px;
    margin-top: 40px;

    form {
        display: block;
        float: left;
        margin: 20px 10px 10px 10px;
        width: 580px;
        label {
            display: block;
            font-size: 18px;
            color: #41352f;
            width: 550px;
            margin-bottom: 5px;
            span {
                color: ${({ theme }) => theme.colors.error};
                font-size: 0.7em;
            }
        }
        input {
            border: 1px solid #d3d0cb;
            height: 35px;
            width: 560px;
            padding: 5px;
            margin-bottom: 15px;
            outline: none;
            &.erro {
                border-color: ${({ theme }) => theme.colors.error};
            }
        }
        textarea {
            border: 1px solid #d3d0cb;
            height: 35px;
            width: 560px;
            padding: 5px;
            margin-bottom: 15px;
            height: 200px;
            margin-bottom: 15px;
            outline: none;
            &.erro {
                border-color: ${({ theme }) => theme.colors.error};
            }
        }
        input[type="submit"] {
            width: 140px;
            border: none;
            line-height: 1;
        }
    }
    #box {
        display: block;
        width: 330px;
        padding: 15px;
        padding-bottom: 20px;
        margin: 10px;
        float: right;
        background: #fff;
        h3 {
            color: #036;
            padding: 0px;
        }
        h4 {
            padding: 0px;
            color: #6185c2;
            margin-top: 15px;
            margin-bottom: 3px;
        }
        p {
            font-size: 16px;
            font-family: "Roboto";
            font-weight: bold;
        }
    }
`;
export default Page;
