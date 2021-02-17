import styled from 'styled-components';
import Link from 'next/link';
import {useRouter} from 'next/router';


const Page = (props) => {
   
    const db = props.data.albuns;
    const id = db.findIndex((item)=>item.ano==props.ano);
    const album = db[id];
    const fotos = parseInt(album.fotos) +1;
  
    const rows = [];
    for (let i=1; i<fotos; i++)  rows.push(i);

    return (
        <Main>
            <h2>Álbum de Recordações</h2>
            <h3>{album.ano} - {album.nome}</h3>
            <div className="lista">
            {rows.map(rows=>{
                return <Link key={rows} href={"/images/albuns/"+album.ano+"/"+rows+".jpg"}><a><img src={"/images/albuns/"+album.ano+"/thumb/"+rows+".jpg"} /></a></Link>
                
            })}    
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




export async function getServerSideProps(context) {
    const ano = context.query.ano ;
    return {
        props: { ano: ano }, // will be passed to the page component as props
    }
}
// export async function getStaticPaths() {

  
//     return {
//       paths: [
//         '/album/2009',
//         '/album/2010',
//         '/album/2011',
//         '/album/2012',
//         '/album/2013',
//         '/album/2014',
//         '/album/2015',
//         '/album/2016',
//         '/album/2017',
//         '/album/2018',
//         '/album/2019'
//       ],
//       fallback: false,
//     }
//   }