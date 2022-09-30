import React, { useEffect, useState } from "react";
import useComments from "../../context/commentsContext/useComments";

function TableMsg({ activeClicked }) {
  const { /* getDirectMsgs, allDirectMsgs */getAllConversations, allConversations } = useComments();
  const [conversations, setConversations] = useState([]);

  const [toggle, setToggle] = useState(false);
/*   useEffect(() => {
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
  }, [activeClicked]); */
useEffect(()=>{
  if(localStorage.getItem("user")){
    const user = JSON.parse(localStorage.getItem("user"));

    getAllConversations({userId: user.id})
  }
  
},[])
console.log(allConversations) 
  return (
    <>
     
      <div>
        Conversations
      </div>
    </>
  );
}

export default TableMsg;
