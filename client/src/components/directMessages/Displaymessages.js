import React, { useState } from "react";
import { ParDisplayStyled } from "../../components.styled/styledComponents.js";
import TableMsg from "./TableMsg.js";

function Displaymessages() {
  const [activeClicked, setActiveClicked] = useState({
    all: true,
    new: false,
    sent: false,
  });
  return (
    <>
        <ParDisplayStyled
          active={activeClicked.all}
          onClick={() => setActiveClicked({ all: true, new: false, sent: false })}
        >
          All
        </ParDisplayStyled>
        <ParDisplayStyled
          active={activeClicked.new}
          onClick={() => setActiveClicked({ all: false, new: true, sent: false })}
        >
          New
        </ParDisplayStyled>
        <ParDisplayStyled
          active={activeClicked.sent}
          onClick={() => setActiveClicked({ all: false, new: false, sent: true })}
        >
          Sent
        </ParDisplayStyled>
      <TableMsg activeClicked={activeClicked}/>
    </>
  );
}

export default Displaymessages;
