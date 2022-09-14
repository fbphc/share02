import React from "react";
import CommentForm from "./CommentForm.js";
import DisplayComments from "./DisplayComments.js";
import useAuth from "../../../context/authContext/useAuth.js";
import NotAuthorized from "../error/NotAuthorized.js";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

function MessageBoard() {
  const { isAuthenticated } = useAuth();
  return (
    <>
    <p className="h2 text-center m-5 darkText">Message Board</p>
      {isAuthenticated ? (
        <>
          <CommentForm />
          <DisplayComments />
        </>
      ) : (
        <NotAuthorized />
      )}

      {/* .................................... */}
      <Pagination aria-label="Page navigation example">
  <PaginationItem disabled>
    <PaginationLink
      first
      href="#"
    />
  </PaginationItem>
  <PaginationItem disabled>
    <PaginationLink
      href="#"
      previous
    />
  </PaginationItem>
  <PaginationItem active>
    <PaginationLink href="#">
      1
    </PaginationLink>
  </PaginationItem>
  <PaginationItem>
    <PaginationLink href="#">
      2
    </PaginationLink>
  </PaginationItem>
  <PaginationItem disabled>
    <PaginationLink href="#">
      3
    </PaginationLink>
  </PaginationItem>
  <PaginationItem>
    <PaginationLink href="#">
      4
    </PaginationLink>
  </PaginationItem>
  <PaginationItem>
    <PaginationLink href="#">
      5
    </PaginationLink>
  </PaginationItem>
  <PaginationItem>
    <PaginationLink
      href="#"
      next
    />
  </PaginationItem>
  <PaginationItem>
    <PaginationLink
      href="#"
      last
    />
  </PaginationItem>
</Pagination>
{/* ....................... */}
    </>
  );
}

export default MessageBoard;
