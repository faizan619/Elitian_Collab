import React, { useState } from 'react'

function App() {
  const [dateval,setdateval] = useState("");
  const [search,setsearch] = useState("");
  const [name,setname] = useState("");
  const [submit,setsubmit] = useState(false);

  const handleSubmit = (e)=>{
    e.preventDefault();
    setsubmit(true);
  }
  return (
    <>
        <form className="practApp1" onSubmit={handleSubmit}>
          <input type="date" onChange={e => setdateval(e.target.value)}/>
          <input 
            type="search"  
            onChange={e => setsearch(e.target.value)} 
            placeholder='Search'
            />
          <input type="text" onChange={e => setname(e.target.value)} />
          <button type='submit'>Submit</button>
        </form>
        {
            submit&& <div className="output">
          <p>Date : {dateval}</p>
          <p>You Search : {search}</p>
          <p>Your name : {name}</p>
        </div>
        }
    </>
  )
}

export default App