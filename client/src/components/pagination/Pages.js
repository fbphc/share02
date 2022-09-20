import { useState } from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import {
  PagLinkFirstStyled,
  PagLinkStyledNum,
  PagLinkLastStyled,
} from "../../components.styled/styledComponents";
import useComments from "../../context/commentsContext/useComments";

export default function Pages({ numberOfPages, paginate, pages }) {
  const [test, setTest] = useState(1);
  // const { allComments } = useComments();
  const pageNumbers = [];

  pages.map((item, index) => {
    if (index >= 1 && index <= numberOfPages) {
      pageNumbers.push(index);
    }
    return item;
  });

  function pageHandler(e) {
    setTest(e);
    paginate(e);
    window.scroll(0, 0);
  }

  return (
    <div className="position-absolute start-50 translate-middle">
      <Pagination>
        <PaginationItem>
          <PagLinkFirstStyled
            first
            onClick={() => pageHandler(1)}
          ></PagLinkFirstStyled>
        </PaginationItem>
        <PaginationItem disabled={test <= 1}>
          <PagLinkFirstStyled
            previous
            onClick={() => pageHandler(test - 1)}
          ></PagLinkFirstStyled>
        </PaginationItem>
        <PaginationItem className="d-flex">
          {pageNumbers.map((page, index) => (
            <PagLinkStyledNum
              active={index === page}
              key={page}
              onClick={() => pageHandler(page)}
            >
              {page}
            </PagLinkStyledNum>
          ))}
        </PaginationItem>
        <PaginationItem disabled={test >= numberOfPages}>
          <PagLinkLastStyled
            next
            onClick={() => pageHandler(test + 1)}
          ></PagLinkLastStyled>
        </PaginationItem>
        <PaginationItem>
          <PagLinkLastStyled
            last
            onClick={() => pageHandler(numberOfPages)}
          ></PagLinkLastStyled>
        </PaginationItem>
      </Pagination>
    </div>
  );
}
