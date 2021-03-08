import styled from "styled-components";

const ModalForm = styled.div`
    width: 590px;
    background-color: #fff;
    opacity: 1;
    padding: 15px;
    height: auto;
    form {
        label {
            display: block;
            font-size: 18px;
            color: #41352f;
            width: 550px;
            margin-bottom: 5px;
        }
        input,
        textarea {
            border: 1px solid #d3d0cb;
            height: 35px;
            width: 560px;
            padding: 5px;
            margin-bottom: 15px;
            &.recado {
                height: 200px;
                margin-bottom: 15px;
            }
        }
        input[type="submit"] {
            width: 140px;
            border: none;
            margin: 0px;
            display: block;
            height: 32px;
            background-color: #036;
            font-size: 18px;

            color: #fff;
            font-weight: bold;
            text-align: center;
            cursor: pointer;
        }
    }
`;

const Modal = (
    <ModalForm>
        <form>
            <label htmlFor='nome'>Nome, Cidade - Estado:</label>
            <input
                name='nome'
                className=' rnd'
                placeholder='Digite seu nome...'
            />
            <label htmlFor='email'>E-mail:</label>
            <input
                name='email'
                className=' rnd'
                placeholder='Digite seu e-mail...'
            />
            <label htmlFor='recado'>Recado:</label>
            <textarea
                name='recado'
                className=' rnd recado'
                placeholder='Digite sua mensagem...'></textarea>

            <input type='submit' value='Enviar' className=' rnd enviar' />
        </form>
    </ModalForm>
);

export default Modal;
