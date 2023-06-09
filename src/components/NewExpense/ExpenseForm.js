import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEntredTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  //    const [userInput,setUserInput]= useState({
  //         enteredTitle: '',
  //         enteredAmount:'',
  //         enteredDate:''
  //     })

  const titleChangeHandler = (event) => {
    // setUserInput({
    //     ...userInput,
    //     enteredTitle:event.target.value,
    // })
    setEntredTitle(event.target.value);
    // setUserInput((prevState)=>{
    //     return {...prevState,enteredTitle:event.target.value};
    // })
  };
  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     enteredAmount:event.target.value
    // })
    // setUserInput((prevState)=>{
    //     return {...prevState,enteredAmount:event.Target.value};
    // })
  };
  const dateChangeHandler = (event) => {
    // setUserInput({
    //     ...userInput,
    //     enteredDate:event.target.value
    // })
    setDate(event.target.value);
    // setUserInput((prevState)=>{
    //     return {...prevState,enteredDate:event.Target.value};
    // })
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: +amount,
      date: new Date(date),
    };
   props.onSaveExpenseData(expenseData);
    setEntredTitle("");
    setAmount("");
    setDate("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={amount}
            onChange={amountChangeHandler}
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-expense__control">
          <label>date</label>
          <input
            type="date"
            value={date}
            min="2022-01-01"
            max="2024-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type='button' onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
