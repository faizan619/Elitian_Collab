import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'

function App3() {
    const [name,setname] = useState("");
    const [email,setemail] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e)=>{
        e.preventDefault();
        navigate(`/app3_1?name=${name}&email=${email}`)
    }
  return (
    <>
        <h2>Welcome to the Page</h2>
        <br />
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Name...' onChange={e => setname(e.target.value)} /><br /><br />
            <input type="email" placeholder='Email...' onChange={e => setemail(e.target.value)} />
        <button type='submit'>Let's Go</button>
        </form><br />
        <div className="info">
        </div>
    </>
  )
}

export default App3