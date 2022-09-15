import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import useComments from "../../context/commentsContext/useComments";

export default function Pages({numberOfPages, paginate}) {
  const {allComments} = useComments()
  const pageNumbers = [];
  

  allComments.map((item, index) => {
    if(index >= 1 && index <= numberOfPages){
      pageNumbers.push(index)
    }
  })

  function pageHandler(e){
    paginate(e)
    window.scroll(0, 0)
  } 
  
  return (
    <div className="d-flex justify-content-center">
<Pagination>
  <PaginationItem>
    <PaginationLink first onClick={() => pageHandler(1)} href=""></PaginationLink>
  </PaginationItem>
      <PaginationItem className="d-flex">
        {pageNumbers.map(page => (<PaginationLink key={page} onClick={() => pageHandler(page)} href=''>
          {page}
        </PaginationLink>) 
        )}
      </PaginationItem>
      <PaginationItem>
    <PaginationLink last onClick={() => pageHandler(numberOfPages)}></PaginationLink>
  </PaginationItem>
      </Pagination>
    </div>
  )
}
