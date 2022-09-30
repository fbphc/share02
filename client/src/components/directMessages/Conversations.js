import React, { useEffect, useState } from "react";
import useComments from "../../context/commentsContext/useComments";
import { Fade } from "reactstrap";
import { Link } from "react-router-dom";
function Conversations() {
  const { getAllConversations, allConversations } = useComments();
  const [user, setUser] = useState({});
  const [toggle, setToggle] = useState(false);
  /* console.log(activeClicked); */

  useEffect(() => {
    if (localStorage.getItem("user")) {
      const user = JSON.parse(localStorage.getItem("user"));
      setUser(user);
      getAllConversations({ userId: user.id });
    }
  }, []);

  console.log(allConversations);
  return (
    <Fade className="mx-auto w-75 mt-4 p-2">
      <p className="text-center h1">Your Conversations</p>

      {allConversations.map((item, idx) => {
        return (
          <div key={idx + ""}>
            <Link to="/">
              {item.senderId !== user.id ? item.senderName : item.receiverName}
            </Link>
          </div>
        );
      })}
    </Fade>
  );
}

export default Conversations;
