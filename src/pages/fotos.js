import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import styled from "styled-components";

const Page = (props) => {
    const db = props.data;
    const itensFancybox = [];
    const sourcesFancybox = [];

    const [openFancybox, setOpenFancybox] = useState({
        toggler: false,
        slide: 1,
    });

    for (let i = 1; i < 19; i++) {
        let ii = i < 10 ? "0" + i : i;
        sourcesFancybox.push("/images/local/Marista" + ii + ".jpg");
        itensFancybox.push(
            <a
                key={i}
                onClick={() => {
                    setOpenFancybox({
                        toggler: !openFancybox.toggler,
                        slide: i,
                    });
                }}>
                <img src={"/images/local/thumb/Marista" + ii + ".jpg"} />
            </a>
        );
    }

    return (
        <Main>
            <h2>Fotos</h2>
            <h3>Centro Marista</h3>
            <div className='fotos'>
                {itensFancybox}
                <FsLightbox
                    toggler={openFancybox.toggler}
                    sources={sourcesFancybox}
                    slide={openFancybox.slide}
                />
            </div>
        </Main>
    );
};

const Main = styled.div`
    font-size: 50px;
    color: ${({ theme }) => theme.colors.mainText};
    padding-bottom: 40px;
    margin-top: 40px;
    .fotos {
        display: block;
        a {
            display: inline-block;
            margin: 0px 10px 20px 10px;
            cursor: pointer;
            overflow: hidden;
            border-bottom: 5px solid #ff99cc;
            width: 300px;
            height: 230px;
            text-align: center;
            font-size: 18px;
            color: #003366;
            img {
                display: block;
                width: auto;
                height: 230px;
            }
        }
    }
`;
export default Page;
