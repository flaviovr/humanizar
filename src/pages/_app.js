import { createGlobalStyle, ThemeProvider } from 'styled-components'
import Head from 'next/head';

import Background from '../components/Background';
import TopBar from '../components/TopBar';
import Rodape from '../components/Rodape';
import config from '../../config.json';
import db from '../../db.json';
import {useRouter} from 'next/router';



const GlobalStyle = createGlobalStyle`
 
    * {
        box-sizing: border-box;
        font-family: 'Amaranth', sans-serif;
        font-size: ${({theme})=> theme.fontSize};
        color: ${({ theme }) => theme.colors.mainText};
        padding:0; 
      margin:0;
    }

    body {
      padding:0; 
      margin:0;
      background:  url(${({ theme }) => theme.bg}) top center repeat-y; 
      background-color:${({ theme }) => theme.colors.mainBg} ;
      display: flex;
      flex-direction: column;
      
      font-family: 'Amaranth', sans-serif;
      
      -webkit-backface-visibility:hidden;
      backface-visibility:hidden;
      -webkit-font-smoothing:antialiased;
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
    a, a:hover {text-decoration:none;color: ${({ theme }) => theme.colors.primary}}
    a:hover { color: ${({ theme }) => theme.colors.primaryDark} ;}
    hr { background: url(images/page/hr.png) 0px -1px no-repeat; border: none; margin: 10px; height: 5px; display: block; clear: both; }
    h2 { font-size: 28px; color: ${({ theme }) => theme.colors.secondary} ; margin-bottom: 30px;/* height: 40px; */ line-height: 40px; padding: 0 10px;}
    h3 { font-size: 21px; color: ${({ theme }) => theme.colors.secondaryLight}; margin-bottom: 20px;padding: 0 10px;}
    h4 { font-size: 18px; color: ${({ theme }) => theme.colors.primary}; margin-bottom: 15px; padding: 0 10px;}
    h5 { font-size: 16px; margin-bottom: 3px;}
    .btn {
        display: block;
        height: 32px;
        background-color: #003366;
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
    .rnd {border-radius:${({ theme }) => theme.borderRadius}}
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

`

const theme = config.theme;

export default function App({ Component, pageProps }) {
  
  const router = useRouter();
  const {route} = router;
  const isHome = route == '/' ? true : false;

  return (
    <>

      <Head>
        <title>{config.title}</title>
        <link rel="icon" href="http://humanizarsulfluminense.com.br/favicon.ico"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Amaranth:ital,wght@0,400;0,700;1,400;1,700&family=Roboto&display=swap" rel="stylesheet"/>
      </Head>

      

      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Background>
          <TopBar isHome={isHome} />
          <Component {...pageProps} data={db} isHome={isHome} />
          <Rodape/>
        </Background>
        
      </ThemeProvider>

    </>
  )
}
