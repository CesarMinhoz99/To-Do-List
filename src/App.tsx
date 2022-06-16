import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { AiFillPlusSquare } from "react-icons/ai";

import './App.css';

let numbers = Array();

function App() {

  const [titleItem, setTitleItem] = useState("");


  const removeItemList = (event: any) => {
    let content: string = event.target.textContent;
    event.target.innerHTML = "<s>" + content + "</s>"
  };


  function createItem() {
    numbers.push(titleItem);

    const listItems = numbers.map(
      (titleItem, index) =>
        <div className='div-item' key={index}>
          <div onClick={removeItemList}>
            {titleItem}
          </div>
        </div>
    );

    ReactDOM.render(
      <ul>{listItems}</ul>,
      document.getElementById('items')
    );
  }

  return (
    <div className="App">
      <h1> To do List</h1>

      <div className='create-items'>
        <AiFillPlusSquare className='add-button' onClick={createItem}></AiFillPlusSquare>
        <input value={titleItem} placeholder='insert item' onChange={event => setTitleItem(event.target.value)} type='text' />
      </div>
      <div id='items'></div>

    </div>
  );
}

export default App;
