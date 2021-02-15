import styled from 'styled-components';
import Sidebar from '../components/Sidebar';



const Page = (props) => {
   
    const db = props.data;
   
    const random = Math.floor(Math.random() * (db.mural.length-1))
    const item = db.mural[random];
   
    return (
        <Main>
            <h2>Alimentação</h2>
            <div className="texto">
                <p>A hospedagem no Centro Marista inclui um rico café da manhã, almoço, jantar e coffee breaks (à tarde). Nas refeições principais é oferecido um buffet com alimentos vegetarianos e não vegetarianos.</p>
                <p><span>Atenção: As bebidas não estão incluídas nas refeições.</span></p>
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
    .texto p span { color:${({ theme }) => theme.colors.error};font-family:'Roboto'}
`
export default Page;




