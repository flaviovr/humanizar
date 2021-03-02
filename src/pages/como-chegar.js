import styled from "styled-components";
import Sidebar from "../components/Sidebar";

import db from "../assets/db";

const Page = (props) => {
    const { config, itemMural } = props;

    return (
        <Main>
            <h2>Como Chegar</h2>

            <h3>Rio de Janeiro - Mendes</h3>

            <h4>De Carro</h4>
            <div className='texto'>
                <p>
                    Siga pela Via Dutra e após o primeiro pedágio, na saída 212,
                    entre à direita para Paracambi / Eng. Paulo de Frontin /
                    Mendes. Chegando a Mendes, siga em direção a Vassouras por
                    aproximadamente 2 Km até o Centro Marista.
                </p>
                <a
                    href='http://maps.google.com.br/maps?f=d&amp;saddr=rio+de+janeiro&amp;daddr=mendes+rj&amp;hl=pt-BR&amp;geocode=FQ2Fov4djaxs_SkLtSRC_n6ZADHuWWyEPCWI-Q;FXpGqP4d28Rk_SntvniqhEuZADGfZamBRo52ZQ&amp;mra=ls&amp;sll=-22.496064,-43.727646&amp;sspn=0.264543,0.439453&amp;g=mendes+rj&amp;ie=UTF8&amp;ll=-22.703989,-43.486633&amp;spn=0.443406,0.63858&amp;z=10&amp;source=embed'
                    className='btn '
                    target='_blank'>
                    Veja o Mapa
                </a>
            </div>

            <h4>De Ônibus</h4>
            <div className='texto'>
                <p>
                    <b>Rio - Mendes</b> |{" "}
                    <a
                        href='http://www.clickbus.com.br/pt/normandy'
                        target='_blank'>
                        www.clickbus.com.br/pt/normandy
                    </a>
                    <br />
                    Clicar em: linhas &gt; linhas rodoviárias &gt; Rio de
                    Janeiro x Vassouras
                </p>
            </div>

            <h3>São Paulo - Mendes</h3>

            <h4>De Carro</h4>
            <div className='texto'>
                <p>
                    Siga pela Via Dutra até Volta Redonda e entre à direita na
                    saída 265, trafegando pela BR-393 por aproximadamente 58 Km.
                    Após este percurso, entre à direita no quilômetro 239 para
                    Mendes e siga pela RJ-127 por 12 Km até o Centro Marista.{" "}
                </p>
                <a
                    href='https://www.google.com.br/maps/dir/São+Paulo,+SP/Mendes,+RJ/@-22.7472395,-46.2744778,8z/data=!4m24!4m23!1m15!1m1!1s0x94ce448183a461d1:0x9ba94b08ff335bae!2m2!1d-46.6333094!2d-23.5505199!3m4!1m2!1d-44.0876831!2d-22.511521!3s0x9ea2af8c8649c3:0x8f7b60f3db146166!3m4!1m2!1d-43.742659!2d-22.4684745!3s0x994a781ce8580f:0xfe0d42f0b763c0da!1m5!1m1!1s0x994bd839d0d575:0x8499aae9201ca099!2m2!1d-43.73121!2d-22.5254727!3e0?hl=pt-BR'
                    classNme='btn'
                    target='_blank'>
                    Veja o Mapa
                </a>
            </div>

            <h4>De Ônibus</h4>
            <div className='texto'>
                <p>
                    <b>São Paulo - Vassouras</b> |{" "}
                    <a href='http://www.salutaris.com.br' target='_blank'>
                        www.salutaris.com.br
                    </a>
                    <br />
                    <b>Vassouras - Mendes</b> |{" "}
                    <a href='http://www.viacaoprogresso.com.br' target='_blank'>
                        www.viacaoprogresso.com.br
                    </a>
                    <br />
                    Consulte horários e selecione Vassouras como origem e
                    Paracambi como destino.
                    <br />
                    Esta linha passa por Mendes onde acontece o Encontro. Peça
                    ao motorista saltar no Centro Marista.
                </p>

                <p>
                    <b>São Paulo - Volta Redonda</b> |{" "}
                    <a href='http://www.viacaocometa.com.br' target='_blank'>
                        www.viacaocometa.com.br
                    </a>
                    <br />
                    <b>Volta Redonda - Barra do Piraí</b> | Viação Aparecida
                    <br />
                    <b>Barra do Piraí - Mendes</b> | Viação Barra do Piraí
                    <br />
                    Solicite ao motorista saltar no Centro Marista.
                </p>
            </div>
            <h3>Belo Horizonte - Mendes</h3>

            <h4>De Carro</h4>
            <div className='texto'>
                <p>
                    Siga pela BR-040 até Três Rios. Dali tome a BR-393 sentido
                    São Paulo e ande por cerca de 83 Km. Após este percurso
                    entre à esquerda no quilômetro 239 para Mendes e siga pela
                    RJ-127 por 12 Km até o Centro Marista.
                </p>
                <a
                    href='http://maps.google.com.br/maps?f=d&amp;saddr=belo+horizonte&amp;daddr=mendes+rj&amp;hl=pt-BR&amp;geocode=Fc2i0f4d0U9h_SmJQjJloZCmADF9_QW7yB0dcA;FXpGqP4d28Rk_SntvniqhEuZADGfZamBRo52ZQ&amp;mra=ls&amp;sll=-22.71494,-43.481285&amp;sspn=0.528244,0.878906&amp;ie=UTF8&amp;source=embed&amp;ll=-21.166484,-43.582764&amp;spn=3.585301,5.108643&amp;z=7'
                    className='btn'
                    target='_blank'>
                    Veja o Mapa
                </a>
            </div>

            <h4>De Ônibus</h4>
            <div className='texto'>
                <p>
                    <b>Belo Horizonte - Barra Mansa</b> |{" "}
                    <a href='http://www.util.com.br' target='_blank'>
                        www.util.com.br
                    </a>
                    . Esta Linha passa por Vassouras.
                    <br />
                    <b>Vassouras - Mendes</b> |{" "}
                    <a href='http://www.viacaoprogresso.com.br' target='_blank'>
                        www.viacaoprogresso.com.br
                    </a>
                    <br />
                    <b>Belo Horizonte - Juiz de Fora</b> |{" "}
                    <a href='http://www.ciaatual.com.br' target='_blank'>
                        www.ciaatual.com.br
                    </a>
                    <br />
                    <b>Juiz de Fora - Vassouras</b> |{" "}
                    <a href='http://www.viacaoprogresso.com.br' target='_blank'>
                        www.viacaoprogresso.com.br
                    </a>
                    <br />
                    <b>Vassouras - Mendes</b> |{" "}
                    <a href='http://www.viacaoprogresso.com.br' target='_blank'>
                        www.viacaoprogresso.com.br
                    </a>
                    <br />
                    Consulte horários e selecione Vassouras como origem e
                    Paracambi como destino.
                    <br />
                    Esta linha passa por Mendes onde acontece o Encontro. Peça
                    ao motorista saltar no Centro Marista.
                </p>
            </div>
            <Sidebar item={itemMural} />
        </Main>
    );
};

export async function getStaticProps(context) {
    let query = await db.query(
        "select id, nome, recado, data  from mural where ativo=1 order by rand() limit 1"
    );
    const data = JSON.parse(JSON.stringify(query));

    await db.end();
    return {
        props: { itemMural: data[0] },
        revalidate: 60 * 5,
    };
}
const Main = styled.div`
    position: relative;
    color: ${({ theme }) => theme.colors.mainText};
    padding-bottom: 40px;
    min-height: 740px;
    margin-top: 40px;
    width: 640px;
    .btn {
        width: 140px;
        color: #fff;
        font-family: "Amaranth";
        &:hover {
            color: ${({ theme }) => theme.colors.secondaryLight};
        }
    }
    .texto p {
        b,
        a {
            font-family: "Roboto";
        }
        a {
            color: ${({ theme }) => theme.colors.secondaryLight};
            font-weight: bold;
            &:hover {
                color: ${({ theme }) => theme.colors.secondary};
            }
        }
    }
    .texto p b {
        font-family: "Roboto";
    }
`;
export default Page;
