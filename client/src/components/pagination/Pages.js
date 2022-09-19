import { useState } from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import {
  PagLinkFirstStyled,
  PagLinkStyledNum,
  PagLinkLastStyled,
} from "../../components.styled/styledComponents";
import useComments from "../../context/commentsContext/useComments";

export default function Pages({ numberOfPages, paginate }) {
  const [prevNextPage, setPrevNextPage] = useState(1);
  const { allComments } = useComments();
  const pageNumbers = [];

  allComments.map((item, index) => {
    if (index >= 1 && index <= numberOfPages) {
      pageNumbers.push(index);
    }
    return item;
  });

  function pageHandler(e) {
    setPrevNextPage(e);
    paginate(e);
    window.scroll(0, 0);
  }

  return (
    <div className="position-absolute start-50 translate-middle">
      <Pagination>
        <PaginationItem disabled={prevNextPage <= 1}>
          <PagLinkFirstStyled
          className="bg-transparent text-light"
            first
            onClick={() => pageHandler(1)}
          ></PagLinkFirstStyled>
        </PaginationItem>
        <PaginationItem disabled={prevNextPage <= 1}>
          <PagLinkFirstStyled
            className="bg-transparent text-light"
            previous
            onClick={() => pageHandler(prevNextPage - 1)}
          ></PagLinkFirstStyled>
        </PaginationItem>
        <PaginationItem className="d-flex">
          {pageNumbers.map((page) => (
            <PagLinkStyledNum key={page} onClick={() => pageHandler(page)}>
              {page}
            </PagLinkStyledNum>
          ))}
        </PaginationItem>
        <PaginationItem disabled={prevNextPage >= numberOfPages}>
          <PagLinkLastStyled
            className="bg-transparent text-light"
            next
            onClick={() => pageHandler(prevNextPage + 1)}
          ></PagLinkLastStyled>
        </PaginationItem>
        <PaginationItem disabled={prevNextPage >= numberOfPages}>
          <PagLinkLastStyled
          className="bg-transparent text-light"
            last
            onClick={() => pageHandler(numberOfPages)}
          ></PagLinkLastStyled>
        </PaginationItem>
      </Pagination>
    </div>
  );
}
