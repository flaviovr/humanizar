import styled from "styled-components";
import React, { useState } from "react";
// import { FacebookProvider, Like } from "react-facebook";
import DB from "../../../db.json";

const Rodape = (props) => {
    const [email, setEmail] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;

        if (!validateEmail(email)) {
            alert("email Invalido");
        } else {
            if (!DB.newsletter.find((el) => el == email)) {
                //DB.newsletter.push(email);
            } else {
                alert("email existe");
            }
        }
    };

    return (
        <RodapeContainer>
            <Frase>
                "Humanizar é resgatar em nós o abraço, a amizade, o perdão."
                <b>Bezerra de Menezes</b>
            </Frase>

            <Bloco>
                <h5>Newsletter</h5>
                <p>Receba as novidades no seu e-mail</p>
                <form name='formNews' id='formNews' onSubmit={handleSubmit}>
                    <input
                        type='text'
                        name='email'
                        value={email}
                        className='campo placeholder'
                        placeholder='Digite seu email'
                    />
                    <input type='submit' defaultValue='OK' className='enviar' />
                </form>
            </Bloco>

            <Bloco>
                <h5>Facebook.com/HumanizarSF</h5>
                <p>Curta nossa FanPage no Facebook</p>
                {/* <FacebookProvider appId='123456789'>
                    <Like
                        href='http://facebook.com/HumanizarSulFluminense'
                        colorScheme='dark'
                        showFaces
                        share
                    />
                </FacebookProvider> */}

                {/* <div
                    className='fb-like fb_iframe_widget'
                    data-href='http://facebook.com/HumanizarSulFluminense'
                    data-width='220'
                    data-show-faces='false'
                    data-send='false'
                    fb-xfbml-state='rendered'
                    fb-iframe-plugin-query='app_id=&amp;container_width=230&amp;href=http%3A%2F%2Ffacebook.com%2FHumanizarSulFluminense&amp;locale=pt_BR&amp;sdk=joey&amp;send=false&amp;show_faces=false&amp;width=220'></div> */}
            </Bloco>

            <Copyright>
                © Humanizar Sul Fluminense. Todos os direitos reservados.
            </Copyright>
        </RodapeContainer>
    );
};

const RodapeContainer = styled.div`
    font-size: 50px;
    color: ${({ theme }) => theme.colors.mainText};
    background: url("/images/page/hr.png") top center no-repeat;
    margin-top: 20px;
    padding-top: 20px;
    height: 170px;

    .campo {
        width: 177px;
        height: 24px;
        padding: 0 5px;
        line-height: 20px;
        border: 1px solid #c5c1ba;
        margin-top: 9px;
        -webkit-border-radius: 4px;
        -moz-border-radius: 4px;
        -o-border-radius: 4px;
        border-radius: 4px;
        margin-right: 3px;
    }
    .enviar {
        border: none;
        background: #302a36;
        width: 40px;
        height: 24px;
        padding: 0 5px;
        line-height: 20px;
        margin-top: 10px;
        text-align: center;
        color: #fff;
        cursor: pointer;
        -webkit-border-radius: 4px;
        -moz-border-radius: 4px;
        -o-border-radius: 4px;
        border-radius: 4px;
    }
`;
const Frase = styled.p`
    font-size: 15px;
    width: 460px;
    display: block;
    padding: 10px;
    float: left;
    font-family: "Amaranth";
    b {
        font-size: 14px;
        display: block;
    }
`;

const Bloco = styled.div`
    font-size: 14px;
    width: 250px;
    display: block;
    padding: 10px;
    float: left;
    h5 {
        font-size: 16px;
        margin: 0 0 3px 0;
    }
    p {
        font-weight: 300;
        font-family: "Roboto";
    }
`;

const Copyright = styled.p`
    width: 460px;
    display: block;
    padding: 0 10px;
    font-size: 12px;
    font-family: "Amaranth";
`;

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

export default Rodape;
