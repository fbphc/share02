import React, { useState } from "react";
import { ParDisplayStyled } from "../../components.styled/styledComponents.js";
import TableMsg from "./Conversations.js";
import {Fade} from "reactstrap"

function DirectMessages() {
  const [activeClicked, setActiveClicked] = useState({
    inbox: true,
    new: false,
    sent: false,
  });
  return (
    <Fade className="mx-auto w-75 mt-4 p-2">
      <p className="text-center h1">Your Messages</p>
      
        <ParDisplayStyled
          active={activeClicked.inbox}
          onClick={() => setActiveClicked({ inbox: true, new: false, sent: false })}
        >
          Inbox
        </ParDisplayStyled>
        <ParDisplayStyled
          active={activeClicked.new}
          onClick={() => setActiveClicked({ inbox: false, new: true, sent: false })}
        >
          New
        </ParDisplayStyled>
        <ParDisplayStyled
          active={activeClicked.sent}
          onClick={() => setActiveClicked({ inbox: false, new: false, sent: true })}
        >
          Sent
        </ParDisplayStyled>
      <TableMsg activeClicked={activeClicked} />
    
    </Fade>
  );
}

export default DirectMessages;
