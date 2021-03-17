import { createGlobalStyle } from "styled-components";
import { theme } from "../assets/config.json";

const GlobalStyle = createGlobalStyle`
    
    * {
        box-sizing: border-box;
        font-family: 'Amaranth', sans-serif;
        font-size:  ${theme.fontSize};
        color: ${theme.colors.mainText};
        padding:0; 
        margin:0;
        
    }
    :root{
        --primary:orange;
       
    }
    html, body {
       min-height: 100vh;
    }
    body {
      padding:0; 
      margin:0;
      background:  url(${theme.bg}) top center repeat-y; 
      background-color: ${theme.colors.mainBg} ;
      display: flex;
      flex-direction: column;
     
      font-family: 'Amaranth', sans-serif;
      
      -webkit-backface-visibility:hidden;
      backface-visibility:hidden;
      -webkit-font-smoothing:antialiased;
      &.modal {
          overflow:hidden;
          max-height:100vh;
      }
    }

   

    #__next {
        flex: 1;
        display: flex;
        flex-direction: column;
    }

    p {
       margin:0;padding:0;
      
    }
     span.error {
        color: ${({ theme }) => theme.colors.error};
        font-size: 0.9em;
    }
    img{vertical-align:bottom;}
    a img {border:none; }
    a, a:hover {text-decoration:none;color: ${theme.colors.primary};}
    a:hover { color: ${theme.colors.primaryDark};}
    hr { background: url(/images/page/hr.png) 0px -1px no-repeat; border: none; margin: 10px; height: 5px; display: block; clear: both; }
    h2 { font-size: 28px; color: ${
        theme.colors.secondary
    } ; margin-bottom: 30px;/* height: 40px; */ line-height: 40px; padding: 0 10px;}
    h3 { font-size: 21px; color: ${
        theme.colors.secondaryLight
    } ; margin-bottom: 20px;padding: 0 10px;}
    h4 { font-size: 18px; color: ${
        theme.colors.primary
    }; margin-bottom: 15px; padding: 0 10px;}
    h5 { font-size: 16px; margin-bottom: 3px;}
    .btn {
        display: block;
        height: 32px;
        background-color: ${theme.colors.secondary};
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
        &:hover {
            color:${theme.colors.secondaryLight};
        }
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
        background: rgba(255, 255, 255, 0.9)!important;
    }
    .fslightbox-source-inner {
        box-shadow: 0px 0px 70px 20px rgba(0, 0, 0, 0.3);      
    }
 
    .fslightbox-flex-centered span{
        color:${theme.colors.secondaryLight}!important;
    }
    .fslightbox-flex-centered span.fslightbox-slash{
        background:${theme.colors.secondary}!important;
    }
    .fslightbox-toolbar{
        background:transparent!important;
        top:10px!important;
        right:10px!important;
    }
    .fslightbox-toolbar-button {
        background: ${theme.colors.secondary}!important;
        border-radius:50%;
      
    }
    .fslightbox-slide-btn-previous-container {
        left: 10px!important;
    }
     .fslightbox-slide-btn-next-container {
        right: 10px!important;
    }
    .fslightbox-toolbar-button:nth-child(1) {
     display: none;
    }
    .fslightbox-slide-btn{
        background: ${theme.colors.secondary}!important;
        border-radius:50%;
    }
    
    
`;

export default GlobalStyle;
