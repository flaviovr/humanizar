import styled from 'styled-components';
import Sidebar from '../components/Sidebar';
import {db as muralData} from '../../mural.json';


const Marista = (props) => {
    const {route} = props;
    const isHome = route=='/' ? true : false;
    const random =  Math.floor(Math.random() * (muralData.length-1));

    console.log(random);
    return (
        <Main className="interna">

            <h2>Local</h2>

            <h3>Centro Marista São José das Paineiras – Espaço Champagnat</h3>

            <div className="texto">
                <p> Situado na região do Vale do Café, município de Mendes, interior do estado do Rio de Janeiro, em meio à Mata Atlântica secundária com 250 hectares de extensão e uma altitude média de 431m acima do nível do mar, o Centro Marista está localizado, aproximadamente, a 100km da cidade do Rio de Janeiro, 380km de Belo Horizonte e 390km de São Paulo. </p>
            </div>
            <Sidebar item={muralData[0]}/>
        </Main>
    );
}



const Main = styled.div`
    position:relative;
    color: ${({ theme }) => theme.colors.mainText};  
    padding-bottom: 40px;
    &.interna{
        min-height:740px;
        margin-top:40px;
        width: 640px;
    }
`


export default Marista;