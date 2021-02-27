import styled from "styled-components";

const Sidebar = (props) => {
    const { item } = props;

    return (
        <SidebarContainer>
            <img
                src='/images/page/logo-prehome.png'
                alt='logo-humanizar-lateral'
                width='320'
            />

            <hr />
            <Frase>
                "Humanizar é resgatar em nós o abraço, a amizade, o perdão."
                <b>Bezerra de Menezes</b>
            </Frase>
            <hr />

            <MuralItem className='fbMural' rel='recado'>
                <p className='data'>{formataData(item.data)}</p>
                <p className='desc'>{item.recado}</p>
                <p className='autor'>{item.nome}</p>
            </MuralItem>
        </SidebarContainer>
    );
};
const formataData = (d) => {
    const data = new Date(d);
    const meses = [
        "Janeiro",
        "Fevereiro",
        "Março",
        "Abril",
        "Maio",
        "Junho",
        "Julh",
        "Agosto",
        "Setembro",
        "Outubro",
        "Novembro",
        "Dezembro",
    ];
    const dia =
        data.getDate() < 10 ? "0" + data.getDate() + 1 : data.getDate() + 1;
    return dia + " de " + meses[data.getMonth()] + " de " + data.getFullYear();
};
const SidebarContainer = styled.div`
    position: absolute;
    top: 0px;
    left: 640px;
    width: 320px;
    margin-top: 17px;
    img {
        margin-bottom: 31px;
    }
`;
const Frase = styled.p`
    font-size: 16px;
    text-align: center;
    margin: 15px 10px;
    b {
        display: block;
        opacity: 0.5;
        font-weight: normal;
        text-align: center;
        font-size: 13px;
    }
`;

const MuralItem = styled.a`
    position: absolute;
    left: 0px;
    top: 0px;

    display: block;
    background: #fff;
    position: relative;
    width: 300px;
    padding: 15px;
    margin: 10px;
    float: left;

    border-radius: ${({ theme }) => theme.borderRadius};
    margin-top: 20px;
    .data {
        font-size: 12px;
    }
    .desc {
        color: ${({ theme }) => theme.colors.primary};
        font-size: 15px;
        margin: 10px 0px;
    }
    .autor {
        font-size: 14px;
        font-weight: bold;
    }
`;

export default Sidebar;
