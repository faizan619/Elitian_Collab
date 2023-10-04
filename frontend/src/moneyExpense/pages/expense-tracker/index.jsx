import React from 'react'
import {useAddTransaction} from '../../hooks/useAddTransaction'

function ExpenseTracker() {

    const {addTransaction} = useAddTransaction();

    const submitnow = (e) =>{
        e.preventDefault()
        addTransaction({
            description:"Going to college",
            transactionAmount: 50,
            transactionType:'expense',
        })
    }

  return (
    <>
        <div className="expense-tracker">
            <div className="container">
                <h1>Expense Tracker</h1>
                <div className='balance'>
                    <h3>Your Balance:</h3>
                    <h2>$0.00</h2>
                </div>
                <div className="summary">
                    <div className="income">
                        <h4>Income</h4>
                        <p>$0.00</p>
                    </div>
                    <div className="expenses">
                        <h4>Expenses</h4>
                        <p>$0.00</p>
                    </div>
                </div>
                <form className="add-transaction" onSubmit={submitnow}>
                    <input type="text" placeholder="Add Transaction" required/>
                    <input type="number" placeholder="Add Amount" required/>
                    <input type="radio" id='expense' value='expense' />
                    <label htmlFor="expense">Expenses</label>
                    <input type="radio" id='income' value='income' />
                    <label htmlFor="income">Income</label>

                    <button type='submit'>Add</button>
                </form>
            </div>
        </div>
        <div className="transaction">

        </div>
    </>
  )
}

export default ExpenseTracker