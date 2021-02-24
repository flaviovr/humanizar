import styled from "styled-components";

const Page = (props) => {
    const db = props.data;

    const random = Math.floor(Math.random() * (db.mural.length - 1));
    const item = db.mural[random];

    return (
        <Recado>
            <p className='data'>09 de dezembro, 2019</p>
            <p className='desc'>
                Mais um ano se aproximando para a realização do 12º Humanizar
                Sul Fluminense.
                <br />
                Gratidão à Equipe, aos participantes, aos palestrantes. Juntos
                pelo ideal da reforma interior.
                <br />
                Um evento que nos reconecta conosco mesmo.
                <br />
                Até Maio 2020.
            </p>
            <p className='autor'>Cristina Monlevad, Barra Mansa - Rj</p>
        </Recado>
    );
};

const Recado = styled.div`
    background: #fff;
    position: relative;
    width: 700px;
    .data { font-size: 13px; }
    .desc { color: #ff99cc; font-size: 18px; margin: 10px 0px; overflow: hidden; }
    .autor { font-size: 15px; font-weight: bold; }
}
`;
export default Page;
