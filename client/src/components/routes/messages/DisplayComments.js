import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useComments from "../../../context/commentsContext/useComments.js";
import { Image } from "cloudinary-react";
import noPhoto from "../../../img/noPhoto.png";
import Pages from "../../pagination/Pages.js";

import { MessageImg } from "../../../components.styled/styledComponents"

function DisplayComments() {
  const { state, getAllComments, allComments } = useComments();

  /** */
  const [currentPage, setCurrentPage] = useState(1)
  const [commentsPerPage] = useState(2)

  const indexOfLastComment = currentPage * commentsPerPage;
  const indexOfFirstComment = indexOfLastComment - commentsPerPage;
  const currentComments = allComments.slice(indexOfFirstComment, indexOfLastComment)
  const numberOfPages = Math.ceil(allComments.length / commentsPerPage);

  const paginate = pageNumber => setCurrentPage(pageNumber)

  /** */

  useEffect(() => {
    getAllComments();

  }, [state.comment]);

  return (
    <div>
      {currentComments.map((item, idx) => {
        return (
          <div className="d-flex mt-3" key={idx + "comment"}>
            <div>
              {item.imgProfile === "no_photo" ? (
                <div>
                  <img src={noPhoto} alt="user" className="w-25" />
                </div>
              ) : (
                <div className="w-75" style={{
                  border: "2px solid red"
                }}>
                  <Image
                    className="rounded-circle w-25"
                    cloudName="schoolgroupfinal"
                    publicId={item.imgProfile}
                  />
                </div>
              )}
              <Link to={`/userProfile/${item.userId}`} state={{ id: item.userId }}>
                {item.username}
              </Link>
            </div>

            <div>
              <p>{item.comment}</p>
              <p>{item.dateNow[0]}</p>
              <p>{item.dateNow[1]}</p>
            </div>
          </div>
        );
      })}
      <Pages paginate={paginate} numberOfPages={numberOfPages} />
    </div>
  );
}

export default DisplayComments;
