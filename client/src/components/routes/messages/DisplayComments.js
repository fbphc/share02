import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useComments from "../../../context/commentsContext/useComments.js";
import { Image } from "cloudinary-react";
import noPhoto from "../../../img/noPhoto.png";
import Pages from "../../pagination/Pages.js";

import { ImageStyled, MsgImgDivStyled, ImgStyled, DisplayMainDivStyled } from "../../../components.styled/styledComponents"

function DisplayComments() {
  const { state, getAllComments, allComments } = useComments();

  /** */
  const [currentPage, setCurrentPage] = useState(1)
  const [commentsPerPage] = useState(5)

  const indexOfLastComment = currentPage * commentsPerPage;
  const indexOfFirstComment = indexOfLastComment - commentsPerPage;
  const currentComments = allComments.slice(
    indexOfFirstComment,
    indexOfLastComment
  );
  const numberOfPages = Math.ceil(allComments.length / commentsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    getAllComments();
  }, [state.comment]);

  return (
    <DisplayMainDivStyled>
      {currentComments.map((item, idx) => {
        return (
          <div className="d-flex mt-3 border border-top-0 border-start-0 border-end-0 pb-3" key={idx + "comment"}>
            <div className="my-2">
              {item.imgProfile === "no_photo" ? (
                <MsgImgDivStyled>
                  <ImgStyled src={noPhoto} alt="user" />
                </MsgImgDivStyled>
              ) : (
                <MsgImgDivStyled>
                  <ImageStyled
                    // className="rounded-circle img-thumbnail"
                    cloudName="schoolgroupfinal"
                    publicId={item.imgProfile}
                  />
                </MsgImgDivStyled>
              )}
              <Link
                to={`/userProfile/${item.userId}`}
                state={{ id: item.userId }}
              >
                {item.username}
              </Link>
            </div>

            <div className="mx-4">
              <p className="mb-3"><b>Date: </b> {item.dateNow[0]} {/* {item.dateNow[1]} */}</p>
              <p className="my-0"><b>Message: </b> </p>
              <p className="my-0">{item.comment}</p>
            </div>
          </div>
        );
      })}
      <Pages paginate={paginate} numberOfPages={numberOfPages} />
    </DisplayMainDivStyled>
  );
}

export default DisplayComments;
