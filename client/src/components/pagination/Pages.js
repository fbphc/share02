import { useState } from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import useComments from "../../context/commentsContext/useComments";

export default function Pages({ numberOfPages, paginate }) {
  const [test, setTest] = useState(1);
  const { allComments } = useComments();
  const pageNumbers = [];

  allComments.map((item, index) => {
    if (index >= 1 && index <= numberOfPages) {
      pageNumbers.push(index);
    }
    return item
  });
  
  function pageHandler(e) {
    if (e === 0 || e === numberOfPages + 1) {
      return e;
    }
    setTest(e);
    paginate(e);
    window.scroll(0, 0);
  }

  return (
    <div className="position-absolute bottom-0 start-50 translate-middle">
      <Pagination>
        <PaginationItem>
          <PaginationLink
            first
            onClick={() => pageHandler(1)}
            href=""
          ></PaginationLink>
        </PaginationItem>
        <PaginationLink
          previous
          onClick={() => pageHandler(test - 1)}
        ></PaginationLink>
        <PaginationItem className="d-flex">
          {pageNumbers.map((page) => (
            <PaginationLink
              key={page}
              onClick={() => pageHandler(page)}
              href=""
            >
              {page}
            </PaginationLink>
          ))}
          <PaginationLink
            next
            onClick={() => pageHandler(test + 1)}
          ></PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            last
            onClick={() => pageHandler(numberOfPages)}
          ></PaginationLink>
        </PaginationItem>
      </Pagination>
    </div>
  );
}
