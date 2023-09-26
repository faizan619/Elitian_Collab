import React, { useState } from 'react'

function App() {
  const [dateval,setdateval] = useState("");
  return (
    <>
        <form>
          <input type="date" onChange={e => setdateval(e.target.value)}/>
        </form>
        <div className="output">
          <p>{dateval}</p>
        </div>
    </>
  )
}

export default App