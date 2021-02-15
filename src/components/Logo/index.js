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
    }

`;

const Logo = (props)=>{
    return <LogoContainer><Link href="/"><a><b>12º Humanizar</b> Sul Fluminense</a></Link></LogoContainer>;
};

export default Logo;