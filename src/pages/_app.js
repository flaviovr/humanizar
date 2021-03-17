import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

import Head from "next/head";

import GlobalStyle from "../assets/global.style";
import { ThemeProvider } from "styled-components";

import Container from "../components/Layout/container.js";
import TopBar from "../components/TopBar";
import Rodape from "../components/Layout/rodape.js";
import config from "../assets/config.json";

// Calculate confignpm run
config.inscricoes.total =
    config.inscricoes.apa +
    config.inscricoes.apb +
    config.inscricoes.apc +
    config.inscricoes.quarto;

const dataInscricao = new Date(...config.inscricoes.dataInscricao);
const today = new Date();

config.inscricoes.isOpen = today >= dataInscricao;

const theme = config.theme;

function MyApp({ Component, pageProps }) {
    const {
        register: register2,
        formState: formState2,
        handleSubmit: handleSubmit2,
    } = useForm();

    const onSubmit = async (data) => {
        await salvaEmailNews(data);
    };
    const router = useRouter();
    const isHome = router.route == "/" ? true : false;

    return (
        <>
            <Head>
                <title>{config.title}</title>
                <link rel='icon' href='/favicon.ico' />
                <link rel='preconnect' href='https://fonts.gstatic.com' />
                <link
                    href='https://fonts.googleapis.com/css2?family=Amaranth:ital,wght@0,400;0,700;1,400;1,700&family=Roboto&display=swap'
                    rel='stylesheet'
                />
            </Head>

            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <Container>
                    <TopBar isHome={isHome} config={config} />
                    <Component {...pageProps} isHome={isHome} config={config} />

                    <Rodape>
                        <Rodape.Frase>
                            "Humanizar é resgatar em nós o abraço, a amizade, o
                            perdão."
                            <b>Bezerra de Menezes</b>
                        </Rodape.Frase>

                        <Rodape.Bloco>
                            <h5>Newsletter</h5>
                            <p>Receba as novidades no seu e-mail</p>
                            <form
                                name='formNews'
                                id='formNews'
                                onSubmit={handleSubmit2(onSubmit)}>
                                <input
                                    name='emailNews'
                                    ref={register2({
                                        required: "Preencha o email",
                                        pattern: {
                                            value: /^[a-z0-9.]+@[a-z0-9]+.[a-z]+.([a-z]+)?$/i,
                                            message: "Email inválido",
                                        },
                                    })}
                                    className={
                                        formState2.errors.emailNews && "erro"
                                    }
                                    placeholder='Digite seu email'
                                />
                                <input
                                    type='submit'
                                    className='enviar'
                                    value='OK'
                                />
                            </form>
                            <span className='error'>
                                <ErrorMessage
                                    errors={formState2.errors}
                                    name='emailNews'></ErrorMessage>
                            </span>
                        </Rodape.Bloco>

                        <Rodape.Bloco>
                            <h5>Facebook.com/HumanizarSF</h5>
                            <p>Curta nossa FanPage no Facebook</p>
                        </Rodape.Bloco>

                        <Rodape.Copyright>
                            © Humanizar Sul Fluminense. Todos os direitos
                            reservados.
                        </Rodape.Copyright>
                    </Rodape>
                </Container>
            </ThemeProvider>
        </>
    );
}
async function salvaEmailNews(data) {
    try {
        const res = await fetch("http://localhost:3000/api/newsletter", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });
        const { ok, msg } = await res.json();
        console.log(ok);
        if (ok) document.querySelector("#formNews").reset();
        alert(msg);
    } catch (error) {
        alert("Erro ao enviar, tente novamente");
        console.log(error);
    }
}
export default MyApp;
