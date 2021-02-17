import styled from 'styled-components'

const Palestrantes = (props) => {
   
    return (
       
        <PalestrantesContainer>

            <li> 
                <a href="palestrantes.php#Andre_Luiz_Rosa" className="item">
                    <img src="/images/palestrantes/1.jpg" alt="Carlos Pereira" width="300" height="180"/>
                    <span className="decor"></span>
                    <p className="descg">Espírita de berço, dedica-se ao estudo das obras de Allan Kardec em consonância com as obras complementares de diversos autores. Palestrante e escritor espírita, colabora atualmente na Entidade Assistencial Espírita “Casa do Caminho” de Valinhos onde atualmente está presidente. Também possui autoria de títulos de livros.</p>
                    <p className="nome">André Luiz Rosa</p>
                    <p className="desc">Espírita de berço, dedica-se ao estudo das obras de Allan Kardec em consonância com as obras complementares de diversos autores.</p>
                </a>
            </li>

            <li>
                <a href="palestrantes.php#Eduardo_Gibelli" className="item">
                    <img src="/images/palestrantes/2.jpg" alt="Eduardo Gibelli" width="300" height="180"/>
                    <span className="decor"></span>
                    <p className="descg">Músico, compositor, palestrante espírita, aprendiz e semeador do evangelho de Jesus.  Nascido e residente na cidade de Franca/SP, trabalha há 15 anos com evangelização de crianças e adolescentes. Espírita, desde a infância, realiza estudos das Obras de Kardec há mais de 10 anos. Lançou o CD/DVD “Se fosse por um dia”. </p>
                    <p className="nome">Eduardo Gibelli</p>
                    <p className="desc">Músico, compositor, palestrante espírita, aprendiz e semeador do evangelho de Jesus. Tem se dedicado a propagar o evangelho através de palestras musicais e de suas canções.</p>
                </a>
            </li>

            <li>
                <a href="palestrantes.php#Marilane_Leite" className="item">
                    <img src="/images/palestrantes/3.jpg" alt="Marilane Leite" width="300" height="180"/>
                    <span className="decor"></span>
                    <p className="descg">Psicóloga, especialista em Educação, com formação em Neurolinguistica, Ciências Holísticas e Psicologia Transpessoal com certificação internacional. Formada em Coach Integral. Pós graduada em Base Transdisciplinar Holística. Faz Formação na UNIFESP para instrutora de Mindfulness. Possui 25 anos de trabalhos dedicados ao Desenvolvimento Humano.</p>
                    <p className="nome">Marilane Leite</p>
                    <p className="desc">Psicóloga, especialista em Educação, com formação em Neurolinguistica, Ciências Holísticas e Psicologia Transpessoal com certificação internacional.</p>
                </a>
            </li>

        </PalestrantesContainer>

            
        
    );
};

const PalestrantesContainer = styled.ul`
    height: 115px;
    margin-bottom: 20px;
    list-style-type:none;  
    list-style:inside;

    li {
        position: relative; display: block; width: 320px; padding: 0 10px; height: 115px; float: left; 
        .item{ 
            display: block; position: relative; width: 300px; height: 115px; -webkit-border-radius: 4px;-moz-border-radius: 4px;-o-border-radius: 4px;border-radius: 4px;
            -webkit-transition: all .7s ;-moz-transition: all .7s ;-ms-transition: all .7s ;-o-transition: all .7s ;transition: all .7s ;
            img { opacity: 0; position: absolute; top:0px; left: 0px;-webkit-border-radius: 4px 4px 0 0 ;-moz-border-radius: 4px 4px 0 0 ;-o-border-radius: 4px 4px 0 0 ;border-radius: 4px 4px 0 0 ; }
            .decor { background: url('images/page/background-decor.png') no-repeat; height: 60px; width: 300px; display: block; position: absolute; top:-35px;}
            .nome { color:#003366; font-size: 21px; font-weight: bold; text-align: center; padding: 30px 10px 5px 10px;}
            .desc { font-family:"Roboto";  font-size: 12px;  text-align: center; padding: 0 10px;}
            .descg {display: block;  height: 0px; font-family:"Roboto";  font-size: 14px;  text-align: center; padding: 0 10px; line-height: 20px; overflow: hidden;}
            :hover { 
                background: #fff; height: 445px; margin-top: -330px; box-shadow: 0px 0px 5px #ccc; position: relative; bottom: 0px;overflow: hidden;

                img {  opacity: 1;  }
                .decor { top:145px;}
                .nome {  padding: 5px 10px ;}
                .desc { display:none; }
                .descg { height: 405px; padding: 215px 10px 5px 10px; transition-delay:.3s;}

            }
        }

    }

`;

export default Palestrantes