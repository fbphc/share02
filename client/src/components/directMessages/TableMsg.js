import React, { useEffect, useState } from "react";
import useComments from "../../context/commentsContext/useComments";

function TableMsg({ activeClicked }) {
  const { getDirectMsgs, allDirectMsgs } = useComments();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    let msgsObj = {};
    if (activeClicked.inbox) {
      msgsObj = { userId: user.id, selector: "inbox" };
    } else if (activeClicked.new) {
      msgsObj = { userId: user.id, selector: "new" };
    } else if (activeClicked.sent) {
      msgsObj = { userId: user.id, selector: "sent" };
    }
    getDirectMsgs(msgsObj);
  }, [activeClicked]);

  console.log("allDirectMsgs", allDirectMsgs);
  return (
    <>
      {allDirectMsgs.length === 0 ? (
        <p>Not inbox</p>
      ) : (
        allDirectMsgs.map((item, idx) => (
          <p className="text-light" key={idx + ""}>
            {item.directMsg}
          </p>
        ))
      )}
    </>
  );
}

export default TableMsg;
