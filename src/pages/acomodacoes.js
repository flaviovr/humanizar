import styled from 'styled-components';
import Sidebar from '../components/Sidebar';



const Page = (props) => {
   
    const db = props.data;
   
    const random = Math.floor(Math.random() * (db.mural.length-1))
    const item = db.mural[random];
   
    return (
        <Main>
            <h2>Acomodações</h2>

            <div className="texto">
                <p>Situado na região do Vale do Café, município de Mendes, interior do estado do Rio de Janeiro, em meio à Mata Atlântica secundária com 250 hectares de extensão e uma altitude média de 431 m acima do nível do mar, o Centro Marista está localizado, aproximadamente, a 100km da cidade do Rio de Janeiro, 380 km de Belo Horizonte e 390 km de São Paulo.</p>
            </div>

            <h3>Apartamentos</h3>

            <div className="texto">
                <p>Os apartamentos são classificados em 3 categorias: A, B e C.</p>
                <p><span>(Esgotado) </span>Os apartamentos de categoria C <span>(Cenáculo)</span> têm telefone, ventilador de teto e banheiro privativo. Dispõem de uma sala de TV e um frigobar de uso comunitário. Eles têm a vantagem de serem silenciosos e ainda mais perto da Natureza, por estarem localizados na parte mais alta.</p>
                <p><span>(Esgotado) </span>Os apartamentos da categoria B <span>(Bloco A)</span> têm TV, ventilador de teto, telefone, frigobar e banheiro privativo.</p>
                <p><span>(Esgotado) </span>Os apartamentos da categoria A <span>(Bloco B)</span> são reformados e equipados com TV, telefone, frigobar, ventilador de teto e banheiro privativo.</p>

                <a href="images/local/ap3g.jpg" class="fb fotoap"><img src="images/local/ap3.jpg" alt="Foto Apto.  C"/>Foto Apto. C</a>
                <a href="images/local/ap2g.jpg" class="fb fotoap"><img src="images/local/ap2.jpg" alt="Foto Apto.  B"/>Foto Apto.  B</a>
                <a href="images/local/ap1g.jpg" class="fb fotoap fim"><img src="images/local/ap1.jpg" alt="Foto Apto.  A"/>Foto Apto.  A</a>

            </div>

            <h3>Quartos <span > (Esgotado) </span></h3>

            <div className="texto cf">
                <p>Acomodações em quartos com 2, 3, 4, 6 ou 8 camas.</p>
                <p>Para maior conforto, todos possuem uma pia, são ensolarados, claros e bem equipados. Os banheiros são em vestiários coletivos, em cada andar (separados para homens e mulheres) com, pelo menos, 5 banheiros em cada um, com toda privacidade.</p>
                <p>Os quartos para 2 pessoas estão localizados no Bloco A e os demais no Bloco C.</p>
                <p>Não existem quartos no andar térreo. Os acessos aos quartos têm, pelo menos, um lance de escadas.</p>
                <a href="images/local/quarto01g.jpg" rel="quarto" class="fb fotoqt"><img src="images/local/quarto01.jpg" alt="" border="0"/></a>
                <a href="images/local/quarto02g.jpg" rel="quarto" class="fb fotoqt fim"><img src="images/local/quarto02.jpg" alt="" border="0"/></a>
                <a href="images/local/quarto01g.jpg" rel="quarto" class="fb fotoqt" >Fotos dos quartos</a>
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
    h3 span { color: #5A3698;}
    .fotoap {
        display: inline-block; margin: 0 25px 0 0;width: 190px; text-align: center; font-size: 18px; color: #ff99cc; 
        &.fim { margin-right: 0px;}
        img { width: 190px; height: auto;border-bottom: 5px solid #ff99cc;}
        &:hover img {border-bottom: 5px solid #ad3e75;}
    }
    .fotoqt {
        display: inline-block;margin: 0 25px 0 0;  width: 190px; text-align: center; font-size: 18px; color: #ff99cc;  margin-left: 90px;
        img { width: 190px; height: auto;border-bottom: 5px solid #ff99cc;}
        &.fim { margin-right: 0px; margin-left: 20px;}
        &:hover img {border-bottom: 5px solid #ad3e75;}

    }

`
export default Page;






