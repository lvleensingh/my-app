import React from 'react';
import "./style.css";

const Todo = () => {
  return (
      <>
    <div className='main_div'>
    <div className='main_child'>
      <figure>
      <img src="./images/todo.png" alt="todologo" />
        <figcaption>Add Your List Here✌</figcaption>
      </figure>
      <div calssName="add_item">
        <input type="text"
        placeholder='✍ Add Item'
        className="form-control"/>
        <i className="far fa-plus add-btn"></i>
      </div>
      <div className='showItems'>
        <button className='btn effect04'>
          CHECK LIST
          </button> 
      </div>
    </div>  
    </div>
    </>
  );       
  };       

export default Todo;  












































 




