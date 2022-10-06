import React, { useEffect, useState } from "react";
import useComments from "../../../context/commentsContext/useComments.js";
import noPhoto from "../../../img/noPhoto.png";
import Pages from "../../pagination/Pages.js";
import { Row, Col } from "reactstrap";

import {
  ImageStyled,
  MsgImgDivStyled,
  ImgStyled,
  MainMsgDivStyled,
  LinkStyled,
  MessageQueryStyled
} from "../../../components.styled/styledComponents";

function DisplayComments() {
  const { state, getAllComments, allComments } = useComments();

  /** */
  const [currentPage, setCurrentPage] = useState(1);
  const [commentsPerPage] = useState(5);

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
    <>
      <MainMsgDivStyled>
        {currentComments.map((item, idx) => {
          return (
            <Row
              className="mt-3 mx-auto  pb-3"
              key={idx + "comment"}
              
            >
              <MessageQueryStyled>
              <Col className="my-2 text-center mx-auto col-md-3 ">
                {item.imgProfile === "no_photo" ? (
                  <MsgImgDivStyled>
                    <ImgStyled src={noPhoto} alt="user" />
                  </MsgImgDivStyled>
                ) : (
                  <MsgImgDivStyled>
                    <ImageStyled
                      cloudName="schoolgroupfinal"
                      publicId={item.imgProfile}
                    />
                  </MsgImgDivStyled>
                )}
                <LinkStyled
                  to={`/userProfile/${item.userId}`}
                  state={{ id: item.userId }}
                  className="text-center"
                >
                  {item.username}
                </LinkStyled>
              </Col>

              <Col className="mx-0  px-2 border border-top-0 border-start-0 border-end-0">
                <p className="mb-3">
                  <b>Date: </b> {item.dateNow[0]} {/* {item.dateNow[1]} */}
                </p>
                <p className="my-0">
                  <b>Message: </b>{" "}
                </p>
                <p className="mt-0 mb-1">{item.comment}</p>
              </Col>
              </MessageQueryStyled>
            </Row>
          );
        })}
      </MainMsgDivStyled>
      <div className="mt-5">

      <Pages paginate={paginate} numberOfPages={numberOfPages} pages={allComments} />
      </div>
    </>
  );
}

export default DisplayComments;
