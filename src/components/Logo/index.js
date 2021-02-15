import styled from "styled-components";
import Link from "next/link";

const LogoContainer = styled.h1`
    display:block;
    margin:0px;
    color:${({ theme }) => theme.colors.logo};
    width:300px;
    padding: 10px; 
    float: left; 
    margin-top: 12px;
    a  { 
        display:block; 
        margin:0px;color: ${({ theme }) => theme.colors.logo}; 
        font-size: 21px; 
        font-weight: normal; 
        font-size: 21px; 
        b {
            color:${({ theme }) => theme.colors.logo};
            font-size: 21px; 
        }
        &:hover{color:${({ theme }) => theme.colors.logo};}
    }
    &.small {
        display: block;
        margin: 0px;
        float: left;
        padding:0px;
        a {
            display: block;
            margin: 0px;
            width: 315px;
            height: 70px;
            font-size: 0px;
            background: url(images/page/logo-pequena.png) center center no-repeat;
            b { font-size: 0px; }
        }
    }

`;

const Logo = (props)=>{
    
    const isHome = props.isHome;
    return <LogoContainer className={!isHome? 'small': null} ><Link href="/"><a><b>12º Humanizar</b> Sul Fluminense</a></Link></LogoContainer>;
};

export default Logo;