import styled from "styled-components";
import Link from "next/link";
import db from "../assets/db";

const Page = (props) => {
    const { galerias } = props;

    const itemList = galerias.map((item) => {
        return (
            <Link href={"/album/" + item.ano} key={item.ano} passref>
                <a>
                    <img
                        width='300'
                        height='230'
                        src={
                            "/images/albuns/" +
                            item.ano +
                            "/thumb/" +
                            item.miniatura
                        }
                    />
                    <b>{item.ano}</b>
                    {item.nome}
                </a>
            </Link>
        );
    });

    return (
        <Main>
            <h2>Álbum de Recordações</h2>
            <div className='lista'>{itemList}</div>
        </Main>
    );
};
export async function getStaticProps(context) {
    let query = await db.query("select * from galerias order by ano desc");
    const data = JSON.parse(JSON.stringify(query));

    await db.end();

    return {
        props: { galerias: data },
        revalidate: 60 * 60 * 24 * 365, // um ano
    };
}

const Main = styled.div`
    font-size: 50px;
    color: ${({ theme }) => theme.colors.mainText};
    padding-bottom: 40px;
    margin-top: 40px;
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
                height: 235px;
                border-bottom: 5px solid #ff99cc;
                margin-bottom: 5px;
            }
        }
    }
`;
export default Page;
