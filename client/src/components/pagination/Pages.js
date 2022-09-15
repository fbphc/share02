import { Pagination, PaginationItem } from "reactstrap";
import useComments from "../../context/commentsContext/useComments";
import { PagLinkFirstStyled, PagLinkStyledNum, PagLinkLastStyled } from "../../components.styled/styledComponents";
export default function Pages({ numberOfPages, paginate }) {
  const { allComments } = useComments();
  const pageNumbers = [];

  allComments.map((item, index) => {
    if (index >= 1 && index <= numberOfPages) {
      pageNumbers.push(index);
    }
  });

  function pageHandler(e) {
    paginate(e);
    window.scroll(0, 0);
  }

  return (
    <div className="d-flex justify-content-center">
      <Pagination >
        <PaginationItem >
          <PagLinkFirstStyled
            first
            onClick={() => pageHandler(1)}
            href=""
          ></PagLinkFirstStyled>
        </PaginationItem>
        <PaginationItem className="d-flex">
          {pageNumbers.map((page) => (
            <PagLinkStyledNum
              key={page}
              onClick={() => pageHandler(page)}
              href=""
            >
              {page}
            </PagLinkStyledNum>
          ))}
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
