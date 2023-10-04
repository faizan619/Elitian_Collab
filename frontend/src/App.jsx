import React, { useState } from 'react';
// import App1 from './practise/App1';
// import App2 from './practise/App2';
// import App3 from './practise/App3';
// import App4 from './bgChanger/App'
// import App3_1 from './practise/App3_1';
import { Route, Routes } from 'react-router-dom';
import Auth from './moneyExpense/pages/auth/index';
import ExpenseTracker from './moneyExpense/pages/expense-tracker/index'

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
        {/* <Route path='/' element={<App4/>}/> */}


        {/* Money Expense App Routes */}
        <Route path='/' exact element={<Auth/>}/>
        <Route path='/expensetracker/' exact element={<ExpenseTracker/>}/>
      </Routes>
      </div>
    </>
  )
}

export default App