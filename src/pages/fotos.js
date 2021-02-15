import styled from 'styled-components';
import Link from 'next/link';


const Page = (props) => {
   
    const db = props.data;
   
    const random = Math.floor(Math.random() * (db.mural.length-1))
    const item = db.mural[random];
   
    return (
        <Main>
            <h2>Fotos</h2>
            <h3>Centro Marista</h3>
            <div className="fotos">
                <Link  href="/images/local/Marista01.jpg" ><a className="fb foto" rel="lightbox"><img src="/images/local/thumb/Marista01.jpg" alt="" border="0"/></a></Link>
                <Link  href="/images/local/Marista02.jpg" ><a className="fb foto" rel="lightbox"><img src="/images/local/thumb/Marista02.jpg" alt="" border="0"/></a></Link>
                <Link  href="/images/local/Marista03.jpg" ><a className="fb foto" rel="lightbox"><img src="/images/local/thumb/Marista03.jpg" alt="" border="0"/></a></Link>
                <Link  href="/images/local/Marista04.jpg" ><a className="fb foto" rel="lightbox"><img src="/images/local/thumb/Marista04.jpg" alt="" border="0"/></a></Link>
                <Link  href="/images/local/Marista05.jpg" ><a className="fb foto" rel="lightbox"><img src="/images/local/thumb/Marista05.jpg" alt="" border="0"/></a></Link>
                <Link  href="/images/local/Marista06.jpg" ><a className="fb foto" rel="lightbox"><img src="/images/local/thumb/Marista06.jpg" alt="" border="0"/></a></Link>
                <Link  href="/images/local/Marista07.jpg" ><a className="fb foto" rel="lightbox"><img src="/images/local/thumb/Marista07.jpg" alt="" border="0"/></a></Link>
                <Link  href="/images/local/Marista08.jpg" ><a className="fb foto" rel="lightbox"><img src="/images/local/thumb/Marista08.jpg" alt="" border="0"/></a></Link>
                <Link  href="/images/local/Marista09.jpg" ><a className="fb foto" rel="lightbox"><img src="/images/local/thumb/Marista09.jpg" alt="" border="0"/></a></Link>
                <Link  href="/images/local/Marista10.jpg" ><a className="fb foto" rel="lightbox"><img src="/images/local/thumb/Marista10.jpg" alt="" border="0"/></a></Link>
                <Link  href="/images/local/Marista11.jpg" ><a className="fb foto" rel="lightbox"><img src="/images/local/thumb/Marista11.jpg" alt="" border="0"/></a></Link>
                <Link  href="/images/local/Marista12.jpg" ><a className="fb foto" rel="lightbox"><img src="/images/local/thumb/Marista12.jpg" alt="" border="0"/></a></Link>
                <Link  href="/images/local/Marista13.jpg" ><a className="fb foto" rel="lightbox"><img src="/images/local/thumb/Marista13.jpg" alt="" border="0"/></a></Link>
                <Link  href="/images/local/Marista14.jpg" ><a className="fb foto" rel="lightbox"><img src="/images/local/thumb/Marista14.jpg" alt="" border="0"/></a></Link>
                <Link  href="/images/local/Marista15.jpg" ><a className="fb foto" rel="lightbox"><img src="/images/local/thumb/Marista15.jpg" alt="" border="0"/></a></Link>
                <Link  href="/images/local/Marista16.jpg" ><a className="fb foto" rel="lightbox"><img src="/images/local/thumb/Marista16.jpg" alt="" border="0"/></a></Link>
                <Link  href="/images/local/Marista17.jpg" ><a className="fb foto" rel="lightbox"><img src="/images/local/thumb/Marista17.jpg" alt="" border="0"/></a></Link>
                <Link href="/images/local/Marista18.jpg" ><a className="fb foto" rel="lightbox"><img src="/images/local/thumb/Marista18.jpg" alt="" border="0"/></a></Link>
            </div>
            
        </Main>
    );

}

const Main = styled.div`
    font-size: 50px;
    color: ${({ theme }) => theme.colors.mainText};  
    padding-bottom: 40px;
    margin-top:40px; 
    .fotos {
        display:block;
        a {
            display: inline-block;
            margin: 0px 10px 20px 10px;
            
            overflow: hidden;
            border-bottom: 5px solid #ff99cc;
            width: 300px;
            height: 230px;
            text-align: center;
            font-size: 18px;
            color: #003366;
            img {
                display: block;
                width: auto;
                height: 230px;
            }
        }
    }
`
export default Page;




