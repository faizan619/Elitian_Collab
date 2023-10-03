import React, { useState } from 'react';
// import App1 from './practise/App1';
// import App2 from './practise/App2';
// import App3 from './practise/App3';
import { Route, Routes } from 'react-router-dom';
import App4 from './bgChanger/App'
// import App3_1 from './practise/App3_1';

function App() {
  return (
    <>
      <div className="container">
      <Routes>
        {/* <Route path='/' element={<App3/>}/>
        <Route path='/app3_1' element={<App3_1/>}/> */}
        {/* <App1/> */}
        {/* <App2/> */}
        {/* <App3/> */}
        <Route path='/' element={<App4/>}/>
      </Routes>
      </div>
    </>
  )
}

export default App