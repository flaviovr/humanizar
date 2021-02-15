import styled from 'styled-components'

const Rodape = (props) => {
   
    return (
       
        <RodapeContainer>

            <Frase>"Humanizar é resgatar em nós o abraço, a amizade, o perdão."<b>Bezerra de Menezes</b></Frase>

            <Bloco>
                <h5>Newsletter</h5>
                <p>Receba as novidades no seu e-mail</p>
                <form name="formNews" id="formNews" action="http://humanizarsulfluminense.com.br/_cadastraNews.php" method="post">
                    <input type="text" name="emailNews" id="emailNews" className="campo placeholder" placeholder="Digite seu email"/>
                    <input type="submit" name="enviar" value="OK"  className="enviar"/>
                </form>
            </Bloco>
                
            <Bloco>
                <h5>Facebook.com/HumanizarSF</h5>
                    <p>Curta nossa FanPage no Facebook</p>
                    <div className="fb-like fb_iframe_widget" data-href="http://facebook.com/HumanizarSulFluminense"  data-width="220" data-show-faces="false" data-send="false" fb-xfbml-state="rendered" fb-iframe-plugin-query="app_id=&amp;container_width=230&amp;href=http%3A%2F%2Ffacebook.com%2FHumanizarSulFluminense&amp;locale=pt_BR&amp;sdk=joey&amp;send=false&amp;show_faces=false&amp;width=220">
                </div>
            </Bloco>

            <Copyright>© Humanizar Sul Fluminense. Todos os direitos reservados.</Copyright>

        </RodapeContainer>

            
        
    );
};



const RodapeContainer = styled.div`
    font-size: 50px;
    color: ${({ theme }) => theme.colors.mainText};
    background: url(images/page/hr.png) top center no-repeat;
    margin-top: 20px;
    padding-top: 20px;
    height: 150px;
    
    .campo { 
        width: 177px; height: 24px; padding: 0 5px; line-height: 20px; border: 1px solid #C5C1BA;  margin-top: 9px;-webkit-border-radius: 4px;-moz-border-radius: 4px;-o-border-radius: 4px;border-radius: 4px; margin-right:3px;
    }
    .enviar { 
        border:none; background: #302a36; width : 40px; height: 24px; padding: 0 5px; line-height: 20px;   margin-top: 10px;  text-align: center; color: #fff; cursor: pointer;
        -webkit-border-radius: 4px;-moz-border-radius: 4px;-o-border-radius: 4px;border-radius: 4px;
    }
`;
const Frase = styled.p`
    font-size: 15px; width: 460px;  display: block; padding: 10px; float: left;
    b {
        font-size: 14px; display: block;
    }
`;

const Bloco = styled.div`
    font-size: 14px; width: 250px;  display: block; padding: 10px; float: left;
    h5 {
        font-size: 16px;
        margin: 0 0 3px 0;
    }
    p { font-weight: 300; font-family: "Roboto";}
`;

const Copyright = styled.p`
    width: 460px;  display: block; padding: 0 10px; font-size: 12px;
`;
export default Rodape