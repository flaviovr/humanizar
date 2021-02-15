import styled from 'styled-components';
import Link from 'next/link';


const Page = (props) => {
   
    const db = props.data;
   
    const random = Math.floor(Math.random() * (db.mural.length-1))
    const item = db.mural[random];
   
    return (
        <Main>
            <h2>Álbum de Recordações</h2>
            <div className="lista">
                <Link href="album/2019">
	    	    <a>
                    <img width="300" height="230" src="http://humanizarsulfluminense.com.br/_img/albuns/2019/thumb/1.jpg" border="0"/>
                    <b>2019</b>A Jornada de Volta
                </a>
                </Link>
                <a href="album.php?ano=2018" class="foto"><img width="300" height="230px" src="http://humanizarsulfluminense.com.br/_img/albuns/2018/thumb/1.jpg" border="0"/><b>2018</b>Aquarela de Emoções</a>
                <a href="album.php?ano=2017" class="foto"><img width="300" height="230px" src="http://humanizarsulfluminense.com.br/_img/albuns/2017/thumb/144.jpg" border="0"/><b>2017</b>O florescer da Esperança</a>
                
                <a href="album.php?ano=2016" class="foto"><img width="300" height="230px" src="http://humanizarsulfluminense.com.br/_img/albuns/2016/thumb/1.jpg" border="0"/><b>2016</b>O Infinito é Agora</a>
                
                <a href="album.php?ano=2015" class="foto"><img width="300" height="230px" src="http://humanizarsulfluminense.com.br/_img/albuns/2015/thumb/1.jpg" border="0"/><b>2015</b>Luz da Vida</a>
                <a href="album.php?ano=2014" class="foto"><img width="300" height="230px" src="http://humanizarsulfluminense.com.br/_img/albuns/2014/thumb/1.jpg" border="0"/><b>2014</b>Tempo de Amar</a>
                <a href="album.php?ano=2013" class="foto"><img width="300" height="230px" src="http://humanizarsulfluminense.com.br/_img/albuns/2013/thumb/1.jpg" border="0"/><b>2013</b>Na Arca da Alegria</a>
                <a href="album.php?ano=2012" class="foto"><img width="300" height="230px" src="http://humanizarsulfluminense.com.br/_img/albuns/2012/thumb/1.jpg" border="0"/><b>2012</b>Abrindo a Gaiola</a>
                <a href="album.php?ano=2011" class="foto"><img width="300" height="230px" src="http://humanizarsulfluminense.com.br/_img/albuns/2011/thumb/2.jpg" border="0"/><b>2011</b>Aprendendo a Voar</a>
                <a href="album.php?ano=2010" class="foto"><img width="300" height="230px" src="http://humanizarsulfluminense.com.br/_img/albuns/2010/thumb/32.jpg" border="0"/><b>2010</b>Vós Sois a Luz do Mundo</a>
                <a href="album.php?ano=2009" class="foto"><img width="300" height="230px" src="http://humanizarsulfluminense.com.br/_img/albuns/2009/thumb/11.jpg" border="0"/><b>2009</b>Atitudes de Amor</a>	    
            </div>
        </Main>
    );

}

const Main = styled.div`
    font-size: 50px;
    color: ${({ theme }) => theme.colors.mainText};  
    padding-bottom: 40px;
    margin-top:40px; 
    .lista {
        display: block;
        a {
            b {
                display: block;
                font-size: 18px;
                color: #003366;
            }
            display: inline-block;
            margin: 10px;
           
            width: 300px;
            height: 300px;
            text-align: center;
            font-size: 18px;
            color: #6185c2;
            img {
                display: block;
                width: 300px;
                height:235px;
                border-bottom: 5px solid #ff99cc;
                margin-bottom: 5px;
            }
        }
    }
`
export default Page;




