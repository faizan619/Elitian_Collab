import React, { useState } from 'react'

function App() {
    const [color,setcolor] = useState('');

    const randomColor = ()=>{
        let randomVal1 = Math.floor(Math.random()*256);
        let randomVal2 = Math.floor(Math.random()*256);
        let randomVal3 = Math.floor(Math.random()*256);
        setcolor(`rgb(${randomVal1},${randomVal2},${randomVal3})`)
    }
  return (
    <>
        <div className="bgcontainer" style={{backgroundColor:`${color}`}}>
            <div className="bglayout">
            {/* <input type="text" placeholder='Enter background Color Name...' autoFocus onChange={e => setcolor(e.target.value)} /> */}
            <button onClick={randomColor}>Generate RGB color</button>
            <p>color code : {color}</p>
            
            </div>
        </div>
    </>
  )
}

export default App