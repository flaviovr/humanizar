import styled from "styled-components";
import Masonry from "react-masonry-css";
import React, { useState } from "react";
import FsLightbox from "fslightbox-react";

const Mural = (props) => {
    const { data, paginate, paginatePerPage } = props;
    if (paginate) {
        const [page, setPage] = useState(1);
    }

    function handleClick() {
        setPage(2);
    }

    const MuralItemList = data.map((item) => {
        return (
            <MuralItem key={item.id} href='' className='fbMural' rel='recado'>
                <p className='data'>{item.data}</p>
                <p className='desc'>{item.desc}</p>
                <p className='autor'>{item.autor}</p>
            </MuralItem>
        );
    });

    return (
        <MuralContainer>
            <Masonry
                breakpointCols={3}
                className='grid'
                columnClassName='grid_column'>
                {MuralItemList}
            </Masonry>
            {paginate && <p>paginacao</p>}
        </MuralContainer>
    );
};

const MuralContainer = styled.div`
    position: relative;
    height: 920px;
    .grid {
        display: flex;
        width: auto;
    }
    .grid_column {
        background-clip: padding-box;
    }

    /* Style your items */
    .grid_column > div {
        /* change div to reference your elements you put in <Masonry> */
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
    overflow: hidden;

    border-radius: ${({ theme }) => theme.borderRadius};
    .data {
        font-size: 12px;
    }
    .desc {
        color: ${({ theme }) => theme.colors.primary};
        font-size: 15px;
        margin: 10px 0px;
        max-height: 270px;
        overflow: hidden;
    }
    .autor {
        font-size: 14px;
        font-weight: bold;
    }
`;

export default Mural;
