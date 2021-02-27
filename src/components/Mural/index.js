import styled from "styled-components";
import Masonry from "react-masonry-css";
import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import FsLightbox from "fslightbox-react";

const Mural = (props) => {
    const { data, paginate, perPage = 9 } = props;
    const [page, setPage] = useState(0);

    const itemSize = data.length;
    const totalPages = Math.ceil(itemSize / perPage);

    const offset = paginate ? page * perPage : 0;

    const items =
        perPage == 0 ? data.length : paginate ? offset + perPage : perPage;

    // console.log(offset, items);
    const muralItems = data.slice(offset, items);

    const itensFancybox = [];
    //const sourcesFancybox = [];

    const [openFancybox, setOpenFancybox] = useState({
        toggler: false,
        slide: 1,
    });

    const handlePaginateClick = (e) => setPage(e.selected);

    const MuralItemList = muralItems.map((item, index) => {
        return (
            <MuralItem
                key={item.id}
                onClick={() => {
                    setOpenFancybox({
                        toggler: !openFancybox.toggler,
                        slide: index + 1,
                    });
                }}>
                <p className='data'>{formataData(item.data)}</p>
                <p className='desc'>{item.recado}</p>
                <p className='autor'>{item.nome}</p>
            </MuralItem>
        );
    });
    const sourcesFancybox = muralItems.map((item) => {
        return (
            <MuralItem className='extended' rel='recado'>
                <p className='data'>{formataData(item.data)}</p>
                <p className='desc'>{item.recado}</p>
                <p className='autor'>{item.nome}</p>
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
            {paginate && (
                <ReactPaginate
                    pageCount={totalPages}
                    previousLabel={"Anterior"}
                    nextLabel={"Próxima"}
                    onPageChange={handlePaginateClick}
                    containerClassName='pagination'
                    activeClassName={"active"}
                    disabledClassName='disabled'
                    marginPagesDisplayed={1}
                    pageRangeDisplayed={99}
                    initialPage={0}
                />
            )}
            <FsLightbox
                toggler={openFancybox.toggler}
                sources={sourcesFancybox}
                slide={openFancybox.slide}
            />
        </MuralContainer>
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
    let dia = data.getDate() + 1;
    dia = dia < 10 ? "0" + data.getDate() : data.getDate();
    return dia + " de " + meses[data.getMonth()] + " de " + data.getFullYear();
};
const MuralContainer = styled.div`
    position: relative;

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
    ul.pagination {
        display: block;
        margin-top: 30px;
        list-style: none;
        padding: 0;
        text-align: center;

        li {
            display: inline-block;

            list-style: none;
            width: 35px;
            height: 35px;
            line-height: 35px;
            &:focus {
                outline: none;
            }
            &.previous,
            &.next {
                width: auto;
                padding: 0 10px;
                display: none;
            }
            a {
                &:focus {
                    outline: none;
                }
                display: inline-block;
                width: 35px;
                height: 35px;
                line-height: 35px;
                font-weight: bold;
                font-size: 18px;
                cursor: pointer;
                color: ${({ theme }) => theme.colors.secondaryLight};
                text-decoration: none;
            }
            &.active {
                background-color: ${({ theme }) => theme.colors.secondary};
                color: white;
                a {
                    color: white;
                }
            }
        }
        .disabled {
            display: none;
        }
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
    &.extended {
        overflow: auto;
        width: 500px !important;
        float: none;
        height: auto !important;
    }
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
