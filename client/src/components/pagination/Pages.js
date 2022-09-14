import { useState } from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

export default function Pages({commentsPerPage, totalComments, paginate}) {
  const pageNumbers = [];
  const numberOfPages = Math.ceil(totalComments / commentsPerPage);
  
  for (let i = 1; i <= numberOfPages; i++) {
  pageNumbers.push(i)  
  }
  
  return (
    <div className="d-flex justify-content-center">
<Pagination>
  <PaginationItem>
    <PaginationLink first onClick={() => paginate(1)} href=""></PaginationLink>
  </PaginationItem>
      <PaginationItem className="d-flex">
        {pageNumbers.map(page => (<PaginationLink key={page} onClick={() => paginate(page)} href=''>
          {page}
        </PaginationLink>) 
        )}
      </PaginationItem>
      <PaginationItem>
    <PaginationLink last onClick={() => paginate(Math.ceil(totalComments / commentsPerPage))}></PaginationLink>
  </PaginationItem>
      </Pagination>
    </div>
  )
}
