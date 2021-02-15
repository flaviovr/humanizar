import styled from 'styled-components';
import Sidebar from '../components/Sidebar';



const Page = (props) => {
   
    const db = props.data;
   
    const random = Math.floor(Math.random() * (db.mural.length-1))
    const item = db.mural[random];
   
    return (
        <Main>
            <h2>Organização</h2>

            <h3>Equipe Oganizadora</h3>
            <div className="texto">
                <p>
                    Adilson Soares de Carvalho
                    <br/>Airton José Gomes
                    <br/>Anna Beatriz de Melo Avelar 
                    <br/>Anderson Luis da Costa
                    <br/>Augusto da Costa Marques
                    <br/>Cristina de Lima Fernandes Carvalho
                    <br/>Cristina Requião Corrêa de Monlevad
                    <br/>Dorian Santos Felix
                    <br/>Eliana Itaborahy Ferreira
                    <br/>Elvira Maria Barbosa Marques
                    <br/>Gilson Felisberto de Assis Filho
                    <br/>Jacqueline de Souza Forster
                    <br/>Lucia Abrantes Jardim
                    <br/>Lucia São Thiago da Costa Pereira
                    <br/>Manoel Cesar da Silva Junior
                    <br/>Reinaldo Bruno Bastos
                    <br/>Stael Lima de Oliveira
                </p>
            </div>

            <h3>Colaboradores</h3>
            <div className="texto">
                <p>
                    Ana Paula Raposo
                    <br/>Flávio Mariano Motta
                    <br/>Lúcia Inês Gomes
                    <br/>Rafael Ielpo Bastos
                    
                </p>
            </div>
            <h3>Contato</h3>
            <div className="texto">
                <p>E-mail<a>humanizarsulfluminense@gmail.com</a></p><p>
                </p><p>Telefone <a>(24) 99812 6093 – Lucia Jardim | Reinaldo</a></p>
                <p>Fax <a>(24) 3342 3730</a></p>
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
    .texto p  { 
        margin-bottom: 4px; font-size: 15px; line-height: 22px;
        a  { color:${({ theme }) => theme.colors.primary};float: right; width: 550px; text-align: left; font-size: 18px;  margin-top: -2px; font-family: 'Amaranth';}
    }
`


export default Page;




