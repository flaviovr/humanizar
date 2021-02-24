import { createGlobalStyle, ThemeProvider } from "styled-components";
import Head from "next/head";
import { useState } from "react";
import Background from "../components/Background";
import TopBar from "../components/TopBar";
import Rodape, { validateEmail } from "../components/Rodape";
import config from "../../config.json";
import db from "../../db.json";
import { useRouter } from "next/router";

const theme = config.theme;

export default function App({ Component, pageProps }) {
    const router = useRouter();
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
    const isHome = router.route == "/" ? true : false;

    return (
        <>
            <Head>
                <title>{config.title}</title>
                <link rel='icon' href='./favicon.ico' />
                <link rel='preconnect' href='https://fonts.gstatic.com' />
                <link
                    href='https://fonts.googleapis.com/css2?family=Amaranth:ital,wght@0,400;0,700;1,400;1,700&family=Roboto&display=swap'
                    rel='stylesheet'
                />
            </Head>

            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <div id='fb-root' />
                <Background>
                    <TopBar isHome={isHome} />
                    <Component {...pageProps} data={db} isHome={isHome} />

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
                </Background>
            </ThemeProvider>
        </>
    );
}
const GlobalStyle = createGlobalStyle`
 
    * {
        box-sizing: border-box;
        font-family: 'Amaranth', sans-serif;
        font-size:  ${theme.fontSize};
        color: ${theme.colors.mainText};
        padding:0; 
        margin:0;
    }

    body {
      padding:0; 
      margin:0;
      background:  url(${theme.bg}) top center repeat-y; 
      background-color: ${theme.colors.mainBg} ;
      display: flex;
      flex-direction: column;
      scroll-behavior: smooth;
      font-family: 'Amaranth', sans-serif;
      
      -webkit-backface-visibility:hidden;
      backface-visibility:hidden;
      -webkit-font-smoothing:antialiased;
      &.modal {
          overflow:hidden;
          max-height:100vh;
      }
    }

    html, body {
       min-height: 100vh;
    }

    #__next {
        flex: 1;
        display: flex;
        flex-direction: column;
    }

    p {
       margin:0;padding:0;
      
    }
    a img {border:none;}
    a, a:hover {text-decoration:none;color: ${theme.colors.primary};}
    a:hover { color: ${theme.colors.primaryDark};}
    hr { background: url(/images/page/hr.png) 0px -1px no-repeat; border: none; margin: 10px; height: 5px; display: block; clear: both; }
    h2 { font-size: 28px; color: ${theme.colors.secondary} ; margin-bottom: 30px;/* height: 40px; */ line-height: 40px; padding: 0 10px;}
    h3 { font-size: 21px; color: ${theme.colors.secondaryLight} ; margin-bottom: 20px;padding: 0 10px;}
    h4 { font-size: 18px; color: ${theme.colors.primary}; margin-bottom: 15px; padding: 0 10px;}
    h5 { font-size: 16px; margin-bottom: 3px;}
    .btn {
        display: block;
        height: 32px;
        background-color: ${theme};
        font-size: 18px;
        line-height: 30px;
        color: #fff;
        font-weight: bold;
        text-align: center;
        cursor: pointer;
        font-family: "Amaranth";
        -webkit-border-radius: 4px;
        -moz-border-radius: 4px;
        -o-border-radius: 4px;
        border-radius: 4px;
    }
    .rnd {border-radius:${theme.borderRadius};}
    .texto {
      padding: 0 10px;
      margin-bottom: 30px;
      font-family: "Roboto";
      p { 
        font-family: "Roboto";
       
        margin-bottom: 13px;
        line-height: 20px;
        font-size: 14px;
        &:last-child{
          margin-bottom: 0px;
        }
      }
    }
    .fslightbox-container {
        background: rgba(255, 255, 255, 0.9);
    }

`;
