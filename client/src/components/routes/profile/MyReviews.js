import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Image } from "cloudinary-react";
import useComments from "../../../context/commentsContext/useComments";
import useAuth from "../../../context/authContext/useAuth";

import noPhoto from "../../../img/noPhoto.png";

import { Row, Col } from "reactstrap";

import { MsgImgDivStyled, ImageStyled, ImgStyled, MainMsgDivStyled, LinkStyled } from "../../../components.styled/styledComponents";

function MyReviews({ userInfo }) {

  const { getReviews, allReviews } = useComments();
  const { getProfileInfo } = useAuth();
  useEffect(() => {
    if (localStorage.getItem("user")) {
      getReviews(userInfo.id);
    }
  }, []);


  return (
    <>
      {allReviews.map((item, idx) => {
        return (
          <MainMsgDivStyled className="my-3 w-75" key={idx + "comment"}>
            <Row
              className="d-flex mt-1 border border-top-0 border-start-0 border-end-0 pb-1"
            >
              <Col className="my-2 col-3 col-xs-6 me-3 text-center">
                {item.fromImgProfile === "no_photo" ? (
                  <MsgImgDivStyled>
                    <ImgStyled src={noPhoto} alt="user" />
                  </MsgImgDivStyled>
                ) : (
                  <MsgImgDivStyled>
                    <ImageStyled
                      cloudName="schoolgroupfinal"
                      publicId={item.fromImgProfile}
                    />
                  </MsgImgDivStyled>
                )}
                <LinkStyled
                  className="mx-auto"
                  to={`/userProfile/${item.fromUserId}`}
                  state={{ id: item.fromUserId }}
                  onClick={() => getProfileInfo(item.fromUserId)}
                >
                  {item.fromUsername}
                </LinkStyled>
              </Col>
              <Col className="mx-4">
                <p className="mb-3">
                  <b>Date: </b> {item.dateNow[0]}
                </p>
                <p className="my-0">
                  <b>Message: </b>{" "}
                </p>
                <p className="my-0">{item.review}</p>
              </Col>
            </Row>
          </MainMsgDivStyled>
        );
      })}
    </>
  );
}

export default MyReviews;
