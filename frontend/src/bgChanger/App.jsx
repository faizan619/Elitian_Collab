import React, { useState } from 'react'

function App() {
    const [color,setcolor] = useState('');
    const [design,setdesign] = useState('');
  return (
    <>
        <div className="bgcontainer" style={{backgroundColor:`${color}`}}>
            <div className="bglayout">
            <input type="text" placeholder='Enter background Color Name...' autoFocus onChange={e => setcolor(e.target.value)} />
            </div>
        </div>
    </>
  )
}

export default App