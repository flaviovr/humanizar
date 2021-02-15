import styled from 'styled-components';
import Link from 'next/link';


const Page = (props) => {
   
    const db = props.data;
   
    const random = Math.floor(Math.random() * (db.mural.length-1))
    const item = db.mural[random];
   
    return (
        <Main>
            <h2>Álbum de Recordações</h2>
            <h3>2019 - A Jornada de Volta</h3>
            <div className="lista">
                <Link href="/images/albuns/2019/1.jpg">
                    <a><img src="/images/albuns/2019/thumb/1.jpg" /></a>
                </Link>

                <Link href="/images/albuns/2019/2.jpg">
                    <a><img src="/images/albuns/2019/thumb/2.jpg" /></a>
                </Link>

                <Link href="/images/albuns/2019/3.jpg">
                    <a><img src="/images/albuns/2019/thumb/3.jpg" /></a>
                </Link>
	    	    
                    
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




