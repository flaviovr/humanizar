import styled from "styled-components";
import Logo from "../Logo";
import Menu from "../Menu";

const TopBar = (props) => {
    const {route} = props;
    const isHome = props.isHome;

    return (
       <TopoContainer className={!isHome? 'small': null} >
            <Logo {...props} />
            <Menu {...props}/>
            <TextoTopo className={!isHome? 'hide': null}>
                <p className="data"><span>15 a 17 de Maio de 2020</span>Centro Marista, Mendes-RJ</p>
		        <p className="enc rnd">Inscrições Encerradas<br/><span>Vagas Esgotadas.</span></p>
            </TextoTopo>
        </TopoContainer> 
    ) ;
};




const TopoContainer = styled.div`
    height: 490px; 
    margin: 0 -120px;
    padding: 0 120px;
    background: #ABABB5 url(images/page/background-topo.jpg) top center no-repeat;
    &.small {
        height: 71px; 
        border-bottom: 1px solid #f2e3f1;
        background: #fff ;
    }
`;


const TextoTopo = styled.div`
    &.hide { display:none;}
    padding: 10px; margin: 0px auto; clear: both;
    .data {
        display:block ;font-size: 21px; text-align: right; color: ${({ theme }) => theme.colors.secondary} ; font-weight:bold; line-height: 21px; float: left; margin: 355px 0px 0px 177px; 
        span { font-size: 25px;  display: block; color: ${({ theme }) => theme.colors.secondary} ;}
    }
    .enc {
        background-color:${({ theme }) => theme.colors.secondary}; float:left; text-align: center; width: 245px;  margin:347px 0px 0px 72px; padding:8px 5px;font-size: 21px; line-height: 21px; font-weight: normal; color: #fff; 
        span { font-size: 21px; font-weight: bold; color: #fff;}
    }
    .btnTopo { margin:347px 0px 0px 72px; float:left;}
`;


export default TopBar