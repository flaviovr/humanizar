import styled from "styled-components";
import emailjs from "emailjs-com";

const Page = (props) => {
    const db = props.data;

    return (
        <Main>
            <h2>Fale Conosco</h2>
            <form
                name='formContato'
                id='formContato'
                onSubmit={(e) => validaContato(e)}>
                <label htmlFor='nome'>Nome:</label>
                <input
                    type='text'
                    name='name'
                    id='name'
                    className='campo rnd placeholder'
                    placeholder='Digite seu nome...'
                />
                <label htmlFor='email'>E-mail:</label>
                <input
                    type='text'
                    name='email'
                    id='email'
                    className='campo rnd placeholder'
                    placeholder='Digite seu e-mail...'
                />
                <label htmlFor='recado'>Mensagem:</label>
                <textarea
                    name='message'
                    id='message'
                    className='campo rnd recado placeholder'
                    placeholder='Digite sua mensagem...'></textarea>

                <input
                    type='submit'
                    value='Enviar'
                    className='btn rnd enviar'
                />
                <input type='hidden' name='inserir' value='true' />
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
function enviaEmail(form) {
    emailjs.init("user_4GtVZ3aXk46211YL86vvw");
    document.querySelector(form).message.value = document
        .querySelector(form)
        .message.value.replace(/(?:\r\n|\r|\n)/g, "<br/>");

    emailjs.sendForm("service_zh3no8w", "template_3ljh249", form).then(
        (response) => {
            //console.log(response);
            alert("email enviado");
            document.querySelector(form).reset();
        },
        (err) => {
            alert("erro ao enviar email");
            document.querySelector(form).message.value = document
                .querySelector(form)
                .message.value.replace("<br/>", "\n");
            //console.log(err);
        }
    );
}
function validaEmail(email) {
    return email.match(
        "^([0-9,a-z,A-Z]+)([.,_,-]([0-9,a-z,A-Z]+))*[@]([0-9,a-z,A-Z]+)([.,_,-]([0-9,a-z,A-Z]+))*[.]([0-9,a-z,A-Z]){2}([0-9,a-z,A-Z])?$"
    )
        ? true
        : false;
}
function validaContato(e) {
    e.preventDefault();
    if (document.formContato.name.value == "") {
        alert("Digite seu nome.");
        document.formContato.name.focus();
    } else if (!validaEmail(document.formContato.email.value)) {
        alert("E-mail Inválido.");
        document.formContato.email.focus();
    } else if (document.formContato.message.value == "") {
        alert("Digite seu Recado.");
        document.formContato.message.focus();
    } else {
        enviaEmail("#formContato");
    }
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
        }
        .campo {
            border: 1px solid #d3d0cb;
            height: 35px;
            width: 560px;
            padding: 5px;
            margin-bottom: 15px;
        }
        .recado {
            height: 200px;
            margin-bottom: 30px;
        }
        .btn {
            width: 140px;
            border: none;
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
