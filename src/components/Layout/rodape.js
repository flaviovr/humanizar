import styled from "styled-components";

const Rodape = styled.div`
    font-size: 50px;
    color: ${({ theme }) => theme.colors.mainText};
    background: url("/images/page/hr.png") top center no-repeat;
    margin-top: 20px;
    padding-top: 20px;
    height: 170px;

    form input {
        width: 177px;
        height: 24px;
        padding: 0 5px;
        line-height: 20px;
        border: 1px solid #c5c1ba;
        outline: none;
        margin-top: 9px;
        -webkit-border-radius: 4px;
        -moz-border-radius: 4px;
        -o-border-radius: 4px;
        border-radius: 4px;
        margin-right: 3px;
        &.erro {
            border-color: ${({ theme }) => theme.colors.error}!important;
        }
    }
    .enviar {
        border: none;
        background: #302a36;
        width: 40px;
        height: 24px;
        padding: 0 5px;
        line-height: 20px;
        margin-top: 10px;
        text-align: center;
        color: #fff;
        cursor: pointer;
        -webkit-border-radius: 4px;
        -moz-border-radius: 4px;
        -o-border-radius: 4px;
        border-radius: 4px;
    }
`;
Rodape.Frase = styled.p`
    font-size: 15px;
    width: 460px;
    display: block;
    padding: 10px;
    float: left;
    font-family: "Amaranth";
    b {
        font-size: 14px;
        display: block;
    }
`;

Rodape.Bloco = styled.div`
    font-size: 14px;
    width: 250px;
    display: block;
    padding: 10px;
    float: left;
    h5 {
        font-size: 16px;
        margin: 0 0 3px 0;
    }
    p {
        font-weight: 300;
        font-family: "Roboto";
    }
`;

Rodape.Copyright = styled.p`
    width: 460px;
    display: block;
    padding: 0 10px;
    font-size: 12px;
    font-family: "Amaranth";
`;

export function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
export default Rodape;
