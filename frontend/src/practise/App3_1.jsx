import React from 'react'
import { useLocation } from 'react-router-dom'

function App3_1() {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search)
    const name = searchParams.get('name')
    const email = searchParams.get('email')
  return (
    <>
        <h2>Data from the App3 </h2>
        <div className="info">
        <center>
            <p>{name}</p>
            <p>{email}</p>
        </center>
        </div>
    </>
  )
}

export default App3_1