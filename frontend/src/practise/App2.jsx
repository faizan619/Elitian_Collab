import React from 'react'

function App2() {

    const handleSubmit = (e)=>{
        e.preventDefault();

    }
  return (
    <>
        <form className='practiseApp2' onSubmit={handleSubmit}>
            <input type="text" placeholder='Name' autoFocus autoComplete='off' />
            <input type="email" placeholder='Email' autoComplete='off' />
            <button className='btn' type='submit'>Submit</button>
        </form>
    </>
  )
}

export default App2