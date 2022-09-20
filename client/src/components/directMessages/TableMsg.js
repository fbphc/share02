import React from 'react'

function TableMsg({activeClicked}) {

  return (
    <>
    {activeClicked.all && <p>All</p>}
      {activeClicked.new && <p>New</p>}
      {activeClicked.sent && <p>Sent</p>}

    </>
  )
}

export default TableMsg