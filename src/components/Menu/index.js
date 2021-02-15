import styled from "styled-components";
import Link from "next/link";


const Menu = (props)=>{
    const {route} = props;
    
    return (
        <MenuContainer>

            <li className="item">
                <Link href="/#" ><a>Humanizar</a></Link>
                <ul className="submenu">
                    <span></span>
                    <li><Link href="/albuns"><a>Álbum de Recordações</a></Link></li>
                    <li><Link href="/organizacao"><a>Organização</a></Link></li>
                    <li><Link href="/informacoes"><a>Informações</a></Link></li>
                </ul>
            </li>

            <li className="item">
                <Link href="/marista"><a>Local</a></Link>
                <ul className="submenu">
                    <span></span>
                    <li><Link href="/acomodacoes"><a>Acomodações</a></Link></li>
                    <li><Link href="/alimentacao"><a>Alimentação</a></Link></li>
                    <li><Link href="/lazer"><a>Lazer</a></Link></li>
                    <li><Link href="/como-chegar"><a>Como Chegar</a></Link></li>
                    <li><Link href="/fotos"><a>Fotos</a></Link></li>
                </ul>
            </li>

            <li className="item">
                <Link href="/#"><a>Programação</a></Link>
                <ul className="submenu">
                    <span></span>
                    <li><Link href="/programacao"><a>Programa</a></Link></li>
                    <li><Link href="/palestrantes"><a>Palestrantes</a></Link></li>
                </ul>
            </li>
            <li className="item"><Link href="/mural"><a>Mural</a></Link></li>
            <li className="item"><Link href="/inscricoes"><a>Inscrições</a></Link></li>
            <li className='item last-child'><Link href="/fale-conosco"><a>Fale Conosco</a></Link></li>
        
        </MenuContainer>
    );
};

const MenuContainer = styled.ul`
    display: block;
    margin: 0px;
    margin-top: 12px;
    width: 560px;
    height: 45px;
    padding: 10px;
    float: right;
   
    .item { 
        list-style-type:none;  
        display: inline-table;  
        margin: 0px; 
        margin-right: 23px; 
        position: relative; 
        
        padding:0px;
        
        a { 
            display:block; color: #ffffff; opacity:.64; font-size: 16px; line-height: 28px; font-weight: bold;
            -webkit-transition: all .3s ;-moz-transition: all .3s ;-ms-transition: all .3s ;-o-transition: all .3s ; transition: all .3s ;
            :hover {
                opacity:1;
            }
            .ativo {opacity:1;}
        }
        :hover .submenu {
            display:block;
            height:auto;
            -webkit-transition: all .3s ;-moz-transition: all .3s ;-ms-transition: all .3s ;-o-transition: all .3s ; transition: all .3s ;
        }
        .submenu { 
            display:none; 
            position:absolute; 
            list-style-type:none;  
            list-style:inside;
            top:23px; right:50%; 
            height:0px;
            width:224px; 
            background: url('images/page/background-submenu.png') top center; 
            margin-right:-112px; 
            padding: 20px 0 0 0; 
            z-index: 999;
            -webkit-transition: all .3s ;-moz-transition: all .3s ;-ms-transition: all .3s ;-o-transition: all .3s ; transition: all .3s ; 
            span { 
                display: block; position: absolute; left:0px; bottom:-15px; width: 224px; height: 15px; background: url('images/page/background-submenu.png') bottom center; 
            }
            
            li { 
                display: block; margin: 0px; 
                a { 
                    display: block; color: ${({ theme }) => theme.colors.secondaryLight};text-align: center; padding: 0 0px; font-weight: normal;
                    :hover { color:${({ theme }) => theme.colors.secondary};}
                }
            }
            
        }
    }
    .item.last-child{ margin: 0px; }
`;



export default Menu;