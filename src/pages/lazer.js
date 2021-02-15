import styled from 'styled-components';
import Sidebar from '../components/Sidebar';



const Page = (props) => {
   
    const db = props.data;
   
    const random = Math.floor(Math.random() * (db.mural.length-1))
    const item = db.mural[random];
   
    return (
        <Main>
            <h2>Opções de Lazer</h2>
            <div className="texto">
                <p>Os caminhos e trilhas ecológicas existentes na extensa área da fazenda são um convite para as atividades de lazer na Natureza (para quem acorda  muito cedo, antes do início das atividades).</p>
            </div>
            <Sidebar item={item}/>
        </Main>
    );

}

const Main = styled.div`
    position:relative; 
    color: ${({ theme }) => theme.colors.mainText}; 
    padding-bottom: 40px;  
    min-height:740px; 
    margin-top:40px; 
    width: 640px; 
`
export default Page;




