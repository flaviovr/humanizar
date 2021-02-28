import { useState } from "react";
import { useRouter } from "next/router";

import Head from "next/head";
import App from "next/app";

import GlobalStyle from "../assets/global.style";
import { ThemeProvider } from "styled-components";

import Container from "../components/Layout/container.js";
import TopBar from "../components/TopBar";
import Rodape, { validateEmail } from "../components/Layout/rodape.js";
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
    const router = useRouter();
    const isHome = router.route == "/" ? true : false;

    const [emailNews, setEmailNews] = useState("");

    const handleChange = (e) => {
        setEmailNews(e.target.value);
    };

    const handleSubmitNews = (e) => {
        e.preventDefault();
        const email = e.target.emailNews.value;

        if (!validateEmail(email)) {
            alert("email Invalido");
        } else {
            alert("Testar se estaá cadastrado, se nao estiver, cadastra");
            // if (DB.newsletter.find((el) => el == email)) {
            //     alert("email existe");
            // }
        }
    };

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
                                onSubmit={handleSubmitNews}>
                                <input
                                    type='text'
                                    name='emailNews'
                                    value={emailNews}
                                    className='campo placeholder'
                                    onChange={handleChange}
                                    placeholder='Digite seu email'
                                />
                                <input
                                    type='submit'
                                    defaultValue='OK'
                                    className='enviar'
                                />
                            </form>
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

export default MyApp;
